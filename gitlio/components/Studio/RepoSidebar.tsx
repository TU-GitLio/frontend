"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface StdSidebarProps {
  onSelectUrl: (url: string) => void;
}

const StdSidebar: React.FC<StdSidebarProps> = ({ onSelectUrl }) => {
  const [repositoryUrls, setRepositoryUrls] = useState([]);

  useEffect(() => {
    const loadedUrls = JSON.parse(
      localStorage.getItem("repositoryUrls") || "[]"
    );
    setRepositoryUrls(loadedUrls);
  }, []);

  return (
    <div className="h-full w-72 border border-gray-200">
      <div className="flex h-[4.15rem] items-center justify-center w-full border-b border-gray-200">
        <Link href="/studio/dashboard" legacyBehavior>
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-center">
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
        {repositoryUrls.map((url, index) => (
          <button
            key={index}
            className="btn btn-wide my-2"
            onClick={() => onSelectUrl(url)}
          >
            {url}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StdSidebar;
