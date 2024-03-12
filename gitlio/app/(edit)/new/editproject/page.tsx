"use client";
import React, { useEffect, useState } from "react";
import ImageSelectionModal from "@/components/studio/ImgSelectModal";
import Link from "next/link";
import Navbar from "@/components/studio/StdNavbar";
import Sidebar from "@/components/studio/RepoSidebar";

interface Data {
  url: string;
  images: string[];
  sentences: string[];
}

// 예시 데이터
const sampleData: Data[] = [
  {
    url: "www.naver.com",
    images: [
      "https://blog.kakaocdn.net/dn/CNxUY/btqw7dnElRU/HuVZgvpT6J8n4aEYFathEk/img.jpg",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
    ],
    sentences: ["네이버입니다 어쩌고", "두 번째 설명"],
  },
  {
    url: "www.daum.net",
    images: [
      "https://blog.kakaocdn.net/dn/yElzG/btqw7QZODLs/iA6TBn80hto4lndolDKB00/img.jpg",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
    ],
    sentences: ["다음입니다 어쩌고", "두 번째 설명"],
  },
  {
    url: "www.google.com",
    images: [
      "https://cdn-icons-png.flaticon.com/512/5968/5968863.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
    ],
    sentences: ["구글입니다 어쩌고", "celery beat로 스케쥴링 된 task 실행"],
  },

  {
    url: "https://github.com/2023-WinterBootcamp-Team-M",
    images: [
      "https://i.ibb.co/NTd8vTG/2024-03-12-1-23-06.png",
      "https://i.ibb.co/GWdLNnC/2024-03-12-2-05-32.png",
      "https://i.ibb.co/sybwTHR/2024-03-12-2-07-23.png",
    ],
    sentences: [
      "만약 자동 분류 북마크 생성을 선택했다면 카테고리도 gpt로 자동 분류되어 저장",
      "celery beat로 스케쥴링 된 task 실행",
      "이미지(url)를 클립보드에 저장하고 drag&drop, download 등으로 활용",
      "새로 url을 넣으면 정해진 갯수를 넘어가는 데이터는 Queue 형식으로 자동 삭제 ",
    ],
  },
  {
    url: "https://github.com/SV-Summer-BootCamp-Team-F",
    images: [
      "https://i.ibb.co/jV9W28Y/2024-03-12-1-46-15.png",
      "https://i.ibb.co/p0WvXfx/2024-03-12-1-45-12.png",
      "https://i.ibb.co/2cRgbZs/2024-03-12-1-44-33.png",
    ],
    sentences: [
      "한눈에 보기 편한 UI/UX",
      "차트를 통한 분석 ⇒ 나만의 관계 데이터 관리",
    ],
  },
  {
    url: "https://github.com/Fashion-Cloud",
    images: [
      "https://i.ibb.co/KKSKMnc/2024-03-12-2-11-35.png",
      "https://i.ibb.co/vd9Gr8Z/2024-03-12-2-11-52.png",
      "https://i.ibb.co/s64tzfn/2024-03-12-2-12-06.png",
      "https://i.ibb.co/X4MP1QY/2024-03-12-2-12-17.png",
      "https://i.ibb.co/TY0zY8R/2024-03-12-2-12-28.png",
      "https://i.ibb.co/8rYWrh8/2024-03-12-2-10-57.png",
    ],
    sentences: [
      "Spring Security를 이용한 로그인 기능 구현",
      "Next.js로의 마이그레이션, 상태관리 라이브러리 변경",
      "조회수 기능에 Look Aside + Write back 캐싱 적용",
      "key구성 변경, 단위 분리하기",
    ],
  },
];

const defaultImage = "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png";

function Page() {
  const [repositoryUrls, setRepositoryUrls] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [selectedData, setSelectedData] = useState<Data | null>(null);
  const [displayedImage, setDisplayedImage] = useState<string>(defaultImage);
  const [selectedSentences, setSelectedSentences] = useState<{
    [url: string]: Set<number>;
  }>({});
  const [savedUrls, setSavedUrls] = useState<{ [url: string]: boolean }>({});
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  // 로컬 스토리지에서 URL 목록 불러오기
  useEffect(() => {
    const loadedUrls = JSON.parse(
      localStorage.getItem("repositoryUrls") || "[]"
    );
    setRepositoryUrls(loadedUrls);
    const loadedSentences = JSON.parse(
      localStorage.getItem("selectedSentences") || "{}"
    );
    setSelectedSentences(loadedSentences);
  }, []);

  // 선택된 URL에 해당하는 데이터 찾기
  useEffect(() => {
    const data = sampleData.find((data) => data.url === selectedUrl);
    setSelectedData(data ?? null);

    const selectedImages = JSON.parse(
      localStorage.getItem("selectedImages") || "{}"
    );
    const imageUrl = selectedImages[selectedUrl] || defaultImage;
    // URL 변경 시 화면에 표시되는 이미지도 업데이트
    setDisplayedImage(imageUrl);
  }, [selectedUrl]);

  const handleImageSelect = (image: string) => {
    // 이미지 선택 시 즉시 화면에 반영
    setDisplayedImage(image);
    setModalIsOpen(false);
  };

  const toggleSentenceSelection = (index: number) => {
    setSelectedSentences((prev) => {
      const newSelection = new Set(prev[selectedUrl] || []);
      if (newSelection.has(index)) {
        newSelection.delete(index);
      } else {
        newSelection.add(index);
      }
      return { ...prev, [selectedUrl]: newSelection };
    });
  };

  const handleSave = () => {
    // 선택된 이미지와 문장을 로컬 스토리지에 저장하는 로직
    const selectedImages = JSON.parse(
      localStorage.getItem("selectedImages") || "{}"
    );
    selectedImages[selectedUrl] = displayedImage;
    localStorage.setItem("selectedImages", JSON.stringify(selectedImages));

    // 선택된 문장 저장 로직
    const savedSentences = selectedData?.sentences.filter((_, index) =>
      selectedSentences[selectedUrl]?.has(index)
    );
    const selectedContents = JSON.parse(
      localStorage.getItem("selectedContents") || "{}"
    );
    selectedContents[selectedUrl] = {
      image: displayedImage,
      sentences: savedSentences,
    };
    localStorage.setItem("selectedContents", JSON.stringify(selectedContents));
    setSavedUrls((prev) => ({ ...prev, [selectedUrl]: true }));
  };

  const allUrlsSaved = repositoryUrls.every((url) => savedUrls[url]);

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar onSelectUrl={setSelectedUrl} savedUrls={savedUrls} />
      <div className="flex-col items-center w-full px-4">
        <Navbar />
        {selectedData && (
          <div className="mt-4">
            <div>
              <img
                src={displayedImage}
                alt="Selected image"
                className="cursor-pointer mt-4"
                style={{
                  maxWidth: "300px",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
                onClick={() => setModalIsOpen(true)}
              />
              <ImageSelectionModal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                onSelect={handleImageSelect}
                images={selectedData ? selectedData.images : []}
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">문장:</h3>
            <div>
              {selectedData.sentences.map((sentence, index) => (
                <div key={index} className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={
                      selectedSentences[selectedUrl]?.has(index) || false
                    }
                    onChange={() => toggleSentenceSelection(index)}
                  />
                  <p>{sentence}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="space-x-4 mt-8 mb-4">
          <button className="btn btn-info" onClick={handleSave}>
            저장
          </button>
          <Link href="/new/showproject" legacyBehavior>
            <button
              className={`btn ${allUrlsSaved ? "btn-success" : "btn-disabled"}`}
            >
              생성
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
