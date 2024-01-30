"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideBar() {
  const pathName = usePathname();
  const titleArray = pathName.split("/");
  const titleUrl = titleArray[titleArray.length - 1];

  return (
    <div className="flex flex-col items-center w-full h-full py-10 bg-[#DDE5FF] md:z-1 sm:z-1">
      <img src="/image81.png" alt="Profile Image" />
      <div className="text-center md:w-3/5 sm:w-3/5 sm:hidden">
        <div className="bg-[#e2e5f0] w-[250px] rounded-[12px] md:hidden sm:hidden">
          <span>no2jfamily@naver.com</span>
        </div>
      </div>
      <div className="flex flex-row mt-10 shrink-0 sm:hidden">
        <div className="mr-3">임시저장</div>
        <div>미리보기</div>
      </div>
      <div className="flex flex-col w-3/5 md:w-3/5 sm:w-3/5 mt-20">
        <Link href={"/introduction"}>
          {titleUrl === "introduction" ? (
            <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-[#B1C9FF] text-black py-2 px-4 my-3">
              <div className="bg-white w-6 h-[20] rounded-full text-black  mr-3 shrink-0">
                <span className="font-bold">1</span>
              </div>
              <div className="overflow-hidden font-bold">introduction</div>
            </button>
          ) : (
            <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-blue-500 text-white py-2 px-4 my-3">
              <div className="bg-white w-6 h-[20] rounded-full text-black  mr-3 shrink-0">
                <span>1</span>
              </div>
              <div className="overflow-hidden">introduction</div>
            </button>
          )}
        </Link>
        <Link href={"/skills"}>
          {titleUrl === "skills" ? (
            <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-[#B1C9FF] text-black py-2 px-4 my-3">
              <div className="bg-white w-6 h-[20] rounded-full text-black  mr-3 shrink-0">
                <span className="font-bold">2</span>
              </div>
              <div className="overflow-hidden font-bold">skills</div>
            </button>
          ) : (
            <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-blue-500 text-white py-2 px-4 my-3">
              <div className="bg-white w-6 h-[20] rounded-full text-black  mr-3 shrink-0">
                <span>2</span>
              </div>
              <div className="overflow-hidden">skills</div>
            </button>
          )}
        </Link>
        <Link href={"/experience"}>
          {titleUrl === "experience" ? (
            <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-[#B1C9FF] text-black py-2 px-4 my-3">
              <div className="bg-white w-6 h-[20] rounded-full text-black  mr-3 shrink-0">
                <span className="font-bold">3</span>
              </div>
              <div className="overflow-hidden font-bold">experience</div>
            </button>
          ) : (
            <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-blue-500 text-white py-2 px-4 my-3">
              <div className="bg-white w-6 h-[20] rounded-full text-black  mr-3 shrink-0">
                <span>3</span>
              </div>
              <div className="overflow-hidden">experience</div>
            </button>
          )}
        </Link>
        <Link href={"/works"}>
          {titleUrl === "works" ? (
            <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-[#B1C9FF] text-black py-2 px-4 my-3">
              <div className="bg-white w-6 h-[20] rounded-full text-black  mr-3 shrink-0">
                <span className="font-bold">4</span>
              </div>
              <div className="overflow-hidden font-bold">works</div>
            </button>
          ) : (
            <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-blue-500 text-white py-2 px-4 my-3">
              <div className="bg-white w-6 h-[20] rounded-full text-black  mr-3 shrink-0">
                <span>4</span>
              </div>
              <div className="overflow-hidden">works</div>
            </button>
          )}
        </Link>
        <Link href={"/outro"}>
          {titleUrl === "outro" ? (
            <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-[#B1C9FF] text-black py-2 px-4 my-3">
              <div className="bg-white w-6 h-[20] rounded-full text-black  mr-3 shrink-0">
                <span className="font-bold">5</span>
              </div>
              <div className="overflow-hidden font-bold">outro</div>
            </button>
          ) : (
            <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-blue-500 text-white py-2 px-4 my-3">
              <div className="bg-white w-6 h-[20] rounded-full text-black  mr-3 shrink-0">
                <span>5</span>
              </div>
              <div className="overflow-hidden">outro</div>
            </button>
          )}
        </Link>
      </div>
    </div>
  );
}
