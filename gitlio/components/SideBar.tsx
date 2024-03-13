"use client";

import useStore from "@/hooks/darkmode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LeftSideBarBtn from "./LeftSideBarBtn";

export default function SideBar() {
  const { darkMode } = useStore();

  return (
    <div className="flex h-full w-full sm:h-full">
      <div
        className={`flex flex-col items-center ${
          darkMode ? "bg-sideDark" : "bg-primary"
        } w-full h-full border border-primary`}
      >
        <div className="text-center mt-[10%] ">
          <img
            src="/gitlio.png"
            alt="Profile Image"
            className="lg:w-[100%] lg:h-[75%]"
          />
        </div>
        <div className="flex w-[190px] items-center justify-center bg-[#C6D2FF] rounded-[12px] md:hidden sm:hidden">
          <div className="font-normal">GitHub repo url</div>
        </div>
        <div className="flex flex-row mt-[8%] mb-[3%] shrink-0 sm:mt-10 sm:flex-col sm:justify-center">
          <div className={`mr-3 font-medium ${darkMode ? "text-white" : ""}`}>
            임시저장
          </div>
          <div className={`mr-3 font-medium ${darkMode ? "text-white" : ""}`}>
            |
          </div>
          <div className={`mr-3 font-medium ${darkMode ? "text-white" : ""}`}>
            미리보기
          </div>
        </div>
        <LeftSideBarBtn />
      </div>
    </div>
  );
}
