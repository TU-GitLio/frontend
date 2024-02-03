"use client";

import PublishBtn from "./PublishBtn";

export default function EditHeader() {
  return (
    <div className="flex items-center justify-end col-span-4 row-span-1 w-full h-full bg-[#DCE6FF] border border-[#B1C9FF] px-4">
      <PublishBtn />
      <div className="ml-5 w-16 h-16">
        <img className="w-full h-full rounded-full" src="/gdsc.jpg"></img>
      </div>
    </div>
  );
}
