"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/studio/StdNavbar";

// 저장된 URL 정보와 프로젝트 이름을 포함한 타입 정의
interface SavedContent {
  title: string;
  intro: string;
  image: string;
  sentences: string[];
}

function Page() {
  const [savedContents, setSavedContents] = useState<{
    [url: string]: SavedContent;
  }>({});
  const [repositoryUrls, setRepositoryUrls] = useState<string[]>([]);

  // 컴포넌트 마운트 시 로컬 스토리지에서 URL 목록과 저장된 내용 불러오기
  useEffect(() => {
    const loadedUrls = JSON.parse(
      localStorage.getItem("repositoryUrls") || "[]"
    );
    setRepositoryUrls(loadedUrls);

    const loadedContents = JSON.parse(
      localStorage.getItem("selectedContents") || "{}"
    );
    const filteredContents = Object.keys(loadedContents)
      .filter((key) => loadedUrls.includes(key))
      .reduce<{ [url: string]: SavedContent }>((obj, key) => {
        obj[key] = loadedContents[key];
        return obj;
      }, {});

    setSavedContents(filteredContents);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      {Object.entries(savedContents).map(([url, content], index) => (
        <div
          key={index}
          className="flex flex-col w-2/3 items-center mt-3 mb-3 border border-gray-400 p-4 rounded-md"
        >
          <h2 className="text-xl font-bold">{content.title}</h2>
          <p className="mb-4">{content.intro}</p>
          <img src={content.image} alt="Saved" className="max-w-xs mt-2" />
          <ul className="list-disc ml-8 mt-2">
            {content.sentences.map((sentence, sentenceIndex) => (
              <li key={sentenceIndex}>{sentence}</li>
            ))}
          </ul>
        </div>
      ))}
      <button className="btn btn-primary mb-4">저장 후 포트폴리오 편집</button>
      {repositoryUrls.length === 0 && <p>저장된 URL 정보가 없습니다.</p>}
    </div>
  );
}

export default Page;
