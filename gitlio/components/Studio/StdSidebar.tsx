"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NewFolioModal from "@/components/studio/GitInputModal";

export default function StdSidebar() {
  const pathname = usePathname();
  const isActive = (paths: any) => paths.includes(pathname);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

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
      <div className="mt-4 flex flex-col items-center ">
        <div className="border-b border-gray-200 w-full">
          <div className="flex justify-center ">
            <button
              className="btn btn-wide bg-[#3379FF] text-white mb-4"
              onClick={toggleModal}
            >
              새로운 포트폴리오 생성
            </button>
          </div>
        </div>
        {isModalOpen && <NewFolioModal onClose={toggleModal} />}

        <Link href="/studio/dashboard" legacyBehavior>
          <a
            className={`btn btn-wide my-2 flex items-center gap-2 justify-start ${
              isActive("/studio/dashboard")
                ? "bg-[#F5F5F7] text-black"
                : "btn-ghost"
            }`}
          >
            <img
              alt="dashboard icon"
              src="https://i.ibb.co/9pFZbXH/free-icon-dashboard-interface-5880909-2.png"
              className="w-5 h-5"
            />
            Dashboard
          </a>
        </Link>

        <Link href="/studio/statistics/insight" legacyBehavior>
          <a
            className={`btn btn-wide my-2 flex items-center gap-2 justify-start ${
              isActive([
                "/studio/statistics/insight",
                "/studio/statistics/daily",
                "/studio/statistics/monthly",
                "/studio/statistics/all",
              ])
                ? "bg-[#F5F5F7] text-black"
                : "btn-ghost"
            }`}
          >
            {" "}
            <img
              alt="statistics icon"
              src="https://i.ibb.co/rpXQrch/free-icon-statistics-8468307-1.png"
              className="w-5 h-5"
            />
            Statistics
          </a>
        </Link>

        <Link href="/studio/posts/published" legacyBehavior>
          <a
            className={`btn btn-wide my-2 flex items-center gap-2 justify-start ${
              isActive([
                "/studio/posts/published",
                "/studio/posts/drafts",
                "/studio/posts/trash",
              ])
                ? "bg-[#F5F5F7] text-black"
                : "btn-ghost"
            }`}
          >
            {" "}
            <img
              alt="post icon"
              src="https://i.ibb.co/PQXmH2r/free-icon-list-1629421-2.png"
              className="w-5 h-5"
            />
            Post
          </a>
        </Link>

        <Link href="/studio/settings" legacyBehavior>
          <a
            className={`btn btn-wide my-2 flex items-center gap-2 justify-start ${
              isActive("/studio/settings")
                ? "bg-[#F5F5F7] text-black"
                : "btn-ghost"
            }`}
          >
            {" "}
            <img
              alt="settings icon"
              src="https://i.ibb.co/qy7PsV5/Icon.png"
              className="w-5 h-5"
            />
            Settings
          </a>
        </Link>
      </div>
    </div>
  );
}
