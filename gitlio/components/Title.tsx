"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Title() {
  const pathName = usePathname();
  const titleArray = pathName.split("/");

  return (
    <>
      <div className="w-4/5 border-[#BFCBF6] border-b-4 text-center mt-10 mb-10 pb-5">
        <span className="text-6xl font-bold">
          {titleArray[titleArray.length - 1]}
        </span>
      </div>
    </>
  );
}
