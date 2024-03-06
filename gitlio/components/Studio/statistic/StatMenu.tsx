"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PostMenu() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (pathname.includes("insight")) {
      setActiveTab("insight");
    } else if (pathname.includes("daily")) {
      setActiveTab("daily");
    } else if (pathname.includes("monthly")) {
      setActiveTab("monthly");
    } else if (pathname.includes("all")) {
      setActiveTab("all");
    }
  }, [pathname]);

  return (
    <>
      <div role="tablist" className="tabs tabs-bordered w-72 m-6 mb-0 mt-4">
        <Link href="insight" legacyBehavior>
          <a
            role="tab"
            className={`tab ${activeTab === "insight" ? "tab-active" : ""}`}
          >
            <div className="text-base font-medium">인사이트</div>
          </a>
        </Link>
        <Link href="daily" legacyBehavior>
          <a
            role="tab"
            className={`tab ${activeTab === "daily" ? "tab-active" : ""}`}
          >
            <div className="text-base font-medium">일간</div>
          </a>
        </Link>
        <Link href="monthly" legacyBehavior>
          <a
            role="tab"
            className={`tab ${activeTab === "monthly" ? "tab-active" : ""}`}
          >
            <div className="text-base font-medium">월간</div>
          </a>
        </Link>
        <Link href="all" legacyBehavior>
          <a
            role="tab"
            className={`tab ${activeTab === "all" ? "tab-active" : ""}`}
          >
            <div className="text-base font-medium">누적</div>
          </a>
        </Link>
      </div>
      <div className="ml-7 mt-3">
        <select className="select select-bordered select-sm w-full max-w-xs">
          <option disabled selected>
            선택되지 않음
          </option>
          <option>https://www.gitlio.com/abcd-portfolio</option>
          <option>https://www.gitlio.com/efgh-portfolio</option>
          <option>https://www.gitlio.com/ijklmn-portfolio</option>
        </select>
      </div>
    </>
  );
}
