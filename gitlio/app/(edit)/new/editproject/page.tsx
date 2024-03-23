"use client";
import React, { useEffect, useState } from "react";
import ImageSelectionModal from "@/components/studio/ImgSelectModal";
import Link from "next/link";
import Navbar from "@/components/studio/StdNavbar";
import Sidebar from "@/components/studio/RepoSidebar";

interface Data {
  url: string;
  title: string;
  intro: string;
  images: string[];
  sentences: string[];
}

// 예시 데이터
const sampleData: Data[] = [
  {
    url: "www.naver.com",
    title: "",
    intro: "",
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
    title: "",
    intro: "",
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
    title: "",
    intro: "",
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
    title: "",
    intro: "",
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
    title: "",
    intro: "",
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
    title: "",
    intro: "",
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
  {
    url: "https://github.com/AI-ary",
    title: "AI-ary",
    intro: "어른들의 동심을 찾아라!",
    images: [
      "https://i.ibb.co/NsZHfhd/ai1.png",
      "https://i.ibb.co/VqQbDdH/ai2.gif",
      "https://i.ibb.co/4tbTPFD/ai3.gif",
      "https://i.ibb.co/mCQRd9x/ai4.gif",
      "https://i.ibb.co/cJ0jFT8/ai5.gif",
      "https://i.ibb.co/N3W1ZH7/ai6.gif",
    ],
    sentences: [
      "Spring Boot를 이용한 REST API구현",
      "Spring Boot JPA를 이용하여 반복 작업을 최소화하고 성능 최적화",
      "그림일기 이미지 파일 AWS S3업로드 및 이미지 URL반환 로직 구현",
      "Flask를 이용하여 Dall-E3와 KoNLPy컨트롤러 구현",
      "Nginx를 통해 정적 파일 서빙 및 프록시 설정을 통해 서버와 클라이언트 연결 관리",
    ],
  },
  {
    url: "https://github.com/2023-Summer-Bootcamp-Team-K",
    title: "Fit-A-Pet",
    intro: "반려 동물의 혈당 데이터를 통한 맞춤형 사료 추천 시스템",
    images: [
      "https://camo.githubusercontent.com/5b87fc3e1575b119fb5629fd3b3f19d89ffb77180c381f35f5d3928595b03145/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f76322f726573697a653a6669743a3534382f302a674251307755504379563830655f72362e676966",
      "https://camo.githubusercontent.com/1ef53a05c3ff26f60d5a9c84adf95c5a4dd16d89c13113bc9b673fb1713760bd/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f76322f726573697a653a6669743a3534382f312a5f6d5f72336236475a795a6f4e59635f534c654a6a672e676966",
      "https://camo.githubusercontent.com/d26fa8fddbfb6927166b403a7f05a9a086ddb1a125659ac25573a8b03bfd35c6/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f76322f726573697a653a6669743a3534382f312a4f6d70656b5041584767435252395f455853564132412e676966",
      "https://camo.githubusercontent.com/5d9f707e735e69f37e0752b2e48d1c8647c7f65e70ef9f856e89d68bad77aad3/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f76322f726573697a653a6669743a3534382f302a734a414d5437524c6c54424f543746542e676966",
    ],
    sentences: [
      "Spring Boot를 이용한 REST API구현",
      "Spring Boot JPA를 이용하여 반복 작업을 최소화하고 성능 최적화",
      "그림일기 이미지 파일 AWS S3업로드 및 이미지 URL반환 로직 구현",
      "Flask를 이용하여 Dall-E3와 KoNLPy컨트롤러 구현",
      "Nginx를 통해 정적 파일 서빙 및 프록시 설정을 통해 서버와 클라이언트 연결 관리",
    ],
  },
  {
    url: "https://github.com/2023-Winter-Bootcamp-TeamH",
    title: "BuySelf",
    intro: "무인 상품 인식 계산대",
    images: [
      "https://user-images.githubusercontent.com/77673029/215676052-3c6b8760-c5c6-4ce5-8553-5668a4953f12.png",
      "https://user-images.githubusercontent.com/77673029/215985324-8363c936-91e4-4b92-8342-9ac5d6850523.gif",
      "https://user-images.githubusercontent.com/77673029/215985726-26946a60-1cab-481d-95fd-e7f83e85f630.gif",
      "https://user-images.githubusercontent.com/77673029/215986341-cfe8f19c-25c2-419f-99a0-b78afaaa8d2e.gif",
    ],
    sentences: [
      "AI의 처리 시간 증가로인한 사용자 경험이 방해되지 않도록 RabbitMQ와 Celery를 통해 AI 결과를 비동기적으로 처리",
      "사용자가 많이 호출하는 API에 의해 서버 과부하가 발생했고, 서버 부하와 응답시간을 줄이기 위해 Redis를 이용하여 Caching",
      "사용자가 제공하는 이미지로 상품 인식 후 pandas를 사용하여 AI 분석 결과를 반환하는 API",
    ],
  },
];

const defaultImage = "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png";

function Page() {
  const [repositoryUrls, setRepositoryUrls] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [selectedData, setSelectedData] = useState<Data | null>(null);
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [displayedImage, setDisplayedImage] = useState<string>(defaultImage);
  const [savedUrls, setSavedUrls] = useState<{ [url: string]: boolean }>({});
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [editableSentences, setEditableSentences] = useState<string[]>([]);

  // 로컬 스토리지에서 URL 목록 불러오기
  useEffect(() => {
    const loadedUrls = JSON.parse(
      localStorage.getItem("repositoryUrls") || "[]"
    );
    setRepositoryUrls(loadedUrls);
  }, []);

  // 선택된 URL에 해당하는 데이터 찾기
  useEffect(() => {
    const data = sampleData.find((data) => data.url === selectedUrl);
    setSelectedData(data ?? null);
    if (data) {
      setEditableSentences(data.sentences);
    }

    const selectedImages = JSON.parse(
      localStorage.getItem("selectedImages") || "{}"
    );
    const imageUrl = selectedImages[selectedUrl] || defaultImage;
    // URL 변경 시 화면에 표시되는 이미지도 업데이트
    setDisplayedImage(imageUrl);

    const currentContents = JSON.parse(
      localStorage.getItem("selectedContents") || "{}"
    );
    const savedSentences = currentContents[selectedUrl]
      ? currentContents[selectedUrl].sentences
      : [];

    if (currentContents[selectedUrl]) {
      setTitle(currentContents[selectedUrl].title || "");
      setIntro(currentContents[selectedUrl].intro || "");
      setEditableSentences(
        currentContents[selectedUrl].sentences || data?.sentences || []
      );
    }
  }, [selectedUrl]);

  const handleImageSelect = (image: string) => {
    // 이미지 선택 시 즉시 화면에 반영
    setDisplayedImage(image);
    setModalIsOpen(false);
  };

  const handleSave = () => {
    // 선택된 이미지와 문장을 로컬 스토리지에 저장하는 로직
    const selectedImages = JSON.parse(
      localStorage.getItem("selectedImages") || "{}"
    );
    selectedImages[selectedUrl] = displayedImage;
    localStorage.setItem("selectedImages", JSON.stringify(selectedImages));
    setSavedUrls((prev) => ({ ...prev, [selectedUrl]: true }));

    const currentContents = JSON.parse(
      localStorage.getItem("selectedContents") || "{}"
    );
    currentContents[selectedUrl] = {
      ...currentContents[selectedUrl],
      title,
      intro,
      sentences: editableSentences,
      image: displayedImage, // Ensure the image is also updated
    };

    localStorage.setItem("selectedContents", JSON.stringify(currentContents));
  };

  const handleAddSentence = () => {
    setEditableSentences([...editableSentences, ""]);
  };

  const handleDeleteSentence = (index: number) => {
    const updatedSentences = editableSentences.filter((_, i) => i !== index);
    setEditableSentences(updatedSentences);
  };

  const handleChangeSentence = (index: number, newSentence: string) => {
    const updatedSentences = [...editableSentences];
    updatedSentences[index] = newSentence;
    setEditableSentences(updatedSentences);
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar onSelectUrl={setSelectedUrl} savedUrls={savedUrls} />
      <div className="flex-col items-center w-full px-4">
        <Navbar />
        {selectedData && (
          <div className="mt-4">
            <div>
              <input
                type="text"
                placeholder="타이틀"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full my-2"
              />
              <textarea
                placeholder="인트로"
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                className="textarea textarea-bordered w-full my-2"
              />
            </div>
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
              {editableSentences.map((sentence, index) => (
                <div key={index} className="flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    value={sentence}
                    className="input input-bordered w-full"
                    onChange={(e) =>
                      handleChangeSentence(index, e.target.value)
                    }
                  />
                  <button
                    onClick={() => handleDeleteSentence(index)}
                    className="btn btn-error btn-sm"
                  >
                    x
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddSentence}
                className="btn btn-outline btn-info mt-2 btn-sm"
              >
                +
              </button>
            </div>
          </div>
        )}
        <div className="space-x-4 mt-8 mb-4">
          <button className="btn btn-info" onClick={handleSave}>
            저장
          </button>
          <Link href="/new/showproject" legacyBehavior>
            <button
              className={`btn ${
                Object.keys(savedUrls).length === repositoryUrls.length
                  ? "btn-success"
                  : "btn-disabled"
              }`}
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
