"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Title() {
  const pathName = usePathname();
  const titleArray = pathName.split("/");

  return (
    <>
      <div className="text-left mt-2 mb-2 mr-auto ml-[12%]">
        {titleArray[titleArray.length - 1] === "works" ? (
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col justify-center">
              <span className="text-3xl xl:text-5xl font-bold mr-[50px]">
                {titleArray[titleArray.length - 1]}
              </span>
            </div>
            <div className="flex flex-row h-full items-center">
              <div className="flex flex-col justify-center rounded-xl items-center w-24 h-12 border-4 bg-blue-500 text-white">
                Preview
              </div>
              <div className="flex flex-col justify-center rounded-xl items-center w-24 h-12 border-4 bg-blue-500 text-white">
                Save
              </div>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-3xl xl:text-5xl font-bold">
              {titleArray[titleArray.length - 1]}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
