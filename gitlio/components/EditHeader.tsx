"use client";

import PublishBtn from "./PublishBtn";
import ThemeController from "./ThemeController";

export default function EditHeader() {
  return (
    <div className="flex items-center justify-end col-span-4 row-span-1 w-full h-full bg-primary border border-[#B1C9FF] px-4">
      <ThemeController />
      <PublishBtn />
      <div className="flex ml-5 w-16 h-16 justify-center items-center">
        <img
          className="xl:w-[100%] xl:h-[100%] lg:w-[75%] lg:h-[75%] md:w-[60%] md:h-[60%] rounded-full"
          src="/gdsc.jpg"
        ></img>
      </div>
    </div>
  );
}
