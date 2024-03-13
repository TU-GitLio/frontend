"use client";

import useStore from "@/hooks/darkmode";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathName = usePathname();
  const titleArray = pathName.split("/");
  const titleUrl = titleArray[titleArray.length - 1];
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
          <div className="mr-3 font-medium">임시저장</div>
          <div className="mr-3 font-medium sm:hidden">|</div>
          <div className="mr-3 font-medium sm:mt-2">미리보기</div>
        </div>
        <div className="flex flex-col w-[75%] h-full justify-center sm:justify-center md:justify-center">
          <Link href={"/introduction"}>
            {titleUrl === "introduction" ? (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">1</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  <span className="">Introduction</span>
                </div>
              </button>
            ) : (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">1</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Introduction
                </div>
              </button>
            )}
          </Link>

          <Link href={"/skills"}>
            {titleUrl === "skills" ? (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">2</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Skills
                </div>
              </button>
            ) : (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">2</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Skills
                </div>
              </button>
            )}
          </Link>

          <Link href={"/experience"}>
            {titleUrl === "experience" ? (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">3</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Experience
                </div>
              </button>
            ) : (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">3</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Experience
                </div>
              </button>
            )}
          </Link>

          <Link href={"/works"}>
            {titleUrl === "works" ? (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
                <div className="bg-white w-6 rounded-full text-black shrink-0">
                  <span className="font-medium">4</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Works
                </div>
              </button>
            ) : (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
                <div className="bg-white w-6 rounded-full text-black shrink-0">
                  <span className="font-medium">4</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Works
                </div>
              </button>
            )}
          </Link>

          <Link href={"/outro"}>
            {titleUrl === "outro" ? (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
                <div className="bg-white w-6 rounded-full text-black shrink-0">
                  <span className="font-medium">5</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Outro
                </div>
              </button>
            ) : (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
                <div className="bg-white w-6 rounded-full text-black shrink-0">
                  <span className="font-medium">5</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Outro
                </div>
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
