"use client";
import React, { useEffect, useState } from "react";

// 저장된 URL 정보의 타입 정의
interface SavedContent {
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
      <h2 className="text-xl font-bold my-4">저장된 URL 정보</h2>
      {Object.entries(savedContents).map(([url, content], index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold">{url}</h3>
          <img src={content.image} alt="Saved" className="max-w-xs mt-2" />
          <ul className="list-disc ml-8 mt-2">
            {content.sentences.map((sentence, sentenceIndex) => (
              <li key={sentenceIndex}>{sentence}</li>
            ))}
          </ul>
        </div>
      ))}
      {repositoryUrls.length === 0 && <p>저장된 URL 정보가 없습니다.</p>}
    </div>
  );
}

export default Page;
