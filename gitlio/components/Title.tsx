"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Title() {
  const pathName = usePathname();
  const titleArray = pathName.split("/");

  return (
    <div>
      <span className="text-lg font-bold">
        {titleArray[titleArray.length - 1]}
      </span>
    </div>
  );
}
