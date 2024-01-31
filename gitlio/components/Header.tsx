"use client";

import PublishBtn from "./PublishBtn";

export default function Header() {
  return (
    <div className="flex items-center justify-end col-span-4 row-span-1 w-full h-full bg-[#DCE6FF] border border-blue-400  px-4">
      <PublishBtn />
    </div>
  );
}
