"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Title() {
  const pathName = usePathname();
  const titleArray = pathName.split("/");

  return (
    <>
      <div className="text-left mt-2 mb-2 mr-auto ml-[12%]">
        <span className="text-3xl xl:text-5xl font-bold">
          {titleArray[titleArray.length - 1]}
        </span>
      </div>
    </>
  );
}
