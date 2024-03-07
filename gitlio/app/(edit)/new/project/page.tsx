"use client";
import React, { useEffect, useState } from "react";

function Page() {
  const [repositoryUrls, setRepositoryUrls] = useState([]);

  useEffect(() => {
    // Local Storage에서 repositoryUrls 읽기
    const loadedUrls = JSON.parse(
      localStorage.getItem("repositoryUrls") || "[]"
    );
    setRepositoryUrls(loadedUrls);
  }, []);

  return (
    <div className="flex w-full justify-center">
      <div className="btn btn-ghost text-2xl">Your Project</div>
      <div>
        <select className="select select-bordered select-sm w-full max-w-xs">
          <option disabled selected>
            선택되지 않음
          </option>
          {repositoryUrls.map((url) => (
            <option key={url}>{url}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Page;
