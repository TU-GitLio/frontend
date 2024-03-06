"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PostMenu() {
  const pathname = usePathname();
  // 현재 활성화된 탭을 상태로 관리
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // 경로에 따라 활성 탭 상태를 설정
    if (pathname.includes("published")) {
      setActiveTab("published");
    } else if (pathname.includes("drafts")) {
      setActiveTab("drafts");
    } else if (pathname.includes("trash")) {
      setActiveTab("trash");
    }
  }, [pathname]);

  return (
    <>
      <div role="tablist" className="tabs tabs-bordered w-60 m-6 mb-0 mt-4">
        <Link href="published" legacyBehavior>
          <a
            role="tab"
            className={`tab ${activeTab === "published" ? "tab-active" : ""}`}
          >
            <div className="text-base font-medium">발행</div>
          </a>
        </Link>
        <Link href="drafts" legacyBehavior>
          <a
            role="tab"
            className={`tab ${activeTab === "drafts" ? "tab-active" : ""}`}
          >
            <div className="text-base font-medium">임시저장</div>
          </a>
        </Link>
        <Link href="trash" legacyBehavior>
          <a
            role="tab"
            className={`tab ${activeTab === "trash" ? "tab-active" : ""}`}
          >
            <div className="text-base font-medium">휴지통</div>
          </a>
        </Link>
      </div>
    </>
  );
}
