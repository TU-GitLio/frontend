"use client";

import EditBuilder from "@/components/EditBuilder";
import EditHeader from "@/components/EditHeader";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";
import useStore from "@/hooks/darkmode";

export default function IntrodutionPage() {
  const { darkMode } = useStore();
  return (
    <>
      <div className="w-full h-full grid grid-cols-5 grid-rows-9">
        <div className="flex justify-center row-span-9 col-span-1 relative h-full border border-primary">
          <SideBar />
        </div>
        <EditHeader />
        <div className="col-span-3 row-span-8 h-full border border-[#B1C9FF]">
          <div className="flex flex-col h-full items-center px-5 ">
            <Title />
            <EditBuilder>
              <div className="flex w-full h-full flex-col items-center justify-center rounded-2xl">
                <div className="flex lg:w-48 lg:h-48 xl:w-[40%] xl:h-[48%] px-1 py-1 items-center bg-[#DCE6FF] justify-center rounded-2xl">
                  <div className="flex items-center justify-center sm:h-40 sm:w-40 md:h-40 md:w-40 lg:h-40 lg:w-40 xl:h-64 xl:w-64 bg-[#F6F7FF] rounded-full">
                    <img
                      src="/seojin_profile.png"
                      alt="Profile"
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="w-full px-28">
                  <div className="w-full h-11 bg-[#D6E2FE] rounded-2xl mt-2 flex items-center justify-center font-bold">
                    seojin Jeon
                  </div>
                </div>
                <div className="w-full px-16">
                  <div className="w-full h-16 bg-[#D6E2FE] rounded-2xl mt-2 flex items-center justify-center font-bold">
                    Hi, I’m a Front-end developer!
                  </div>
                </div>
              </div>
            </EditBuilder>
          </div>
        </div>

        <div className="flex justify-center items-center col-span-1 row-span-8 h-full border border-primary">
          <div
            className={`w-[90%] h-[90%] ${
              darkMode ? "bg-[#1E293B]" : "bg-[#BFCBF6]"
            } lg:rounded-[20px] rounded-[30px] flex  justify-center`}
          >
            <div className="w-[40%] h-[23%] bg-[#6385FD] rounded-[20px] flex  items-center text-center justify-center ml-0 mt-10 text-white">
              레이아웃1
            </div>
            <div className="w-[40%] h-[23%] bg-[#E6E6E6] rounded-[20px] flex items-center text-center justify-center ml-4 mt-10 ">
              레이아웃2
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
