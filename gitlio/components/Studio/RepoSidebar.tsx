"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface StdSidebarProps {
  onSelectUrl: (url: string) => void;
  savedUrls: { [url: string]: boolean };
}

const StdSidebar: React.FC<StdSidebarProps> = ({ onSelectUrl, savedUrls }) => {
  const [repositoryUrls, setRepositoryUrls] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadedUrls = JSON.parse(
      localStorage.getItem("repositoryUrls") || "[]"
    );
    setRepositoryUrls(loadedUrls);
  }, []);

  const handleSelectUrl = (url: string) => {
    onSelectUrl(url);
    setSelectedUrl(url); // 선택된 URL 상태 업데이트
  };

  return (
    <div className="h-full w-72 border border-gray-200">
      <div className="flex h-[4.15rem] items-center justify-center w-full border-b border-gray-200">
        <Link href="/studio/dashboard" legacyBehavior>
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-center cursor-pointer">
            <img
              alt="gitlio studio logo"
              src="https://i.ibb.co/W2f1nPj/Group-70.png"
              className="w-6 h-6"
            />
            GITLIO STUDIO
          </div>
        </Link>
      </div>
      <div className="mt-4 flex flex-col items-center">
        {repositoryUrls.map((url: string, index) => {
          const displayUrl = url.replace("https://github.com/", ""); // 화면에 표시할 URL
          return (
            <button
              key={index}
              className={`btn btn-wide my-2 mx-4 gap-2 justify-center ${
                selectedUrl === url ? "bg-selected text-black" : "btn-ghost"
              }`} // 조건부 스타일링 적용
              onClick={() => handleSelectUrl(url)}
            >
              {displayUrl}
              {savedUrls[url] && (
                <span className=" text-green-500 font-bold">✓</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StdSidebar;
