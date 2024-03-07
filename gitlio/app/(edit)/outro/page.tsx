import EditBuilder from "@/components/EditBuilder";
import Header from "@/components/EditHeader";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";

export default function OutroPage() {
  return (
    <>
      <div className="w-full h-full grid bg-primary grid-cols-5 grid-rows-9">
        <div className="flex justify-center row-span-9 col-span-1 relative h-full border border-primary">
          <SideBar />
        </div>
        <Header />
        <div className="col-span-3 row-span-8 h-full bg-primary border border-[#B1C9FF]">
          <div className="flex flex-col h-full items-center px-5 ">
            <Title />
            <EditBuilder>
              <div className=" w-full h-full flex-col grid grid-cols-2 items-center justify-center rounded-2xl  ">
                <div className="flex w-[90%] h-[95%] ml-[8%] px-1 py-1 items-center justify-center rounded-2xl bg-[#E6E6E6]">
                  Introduction View
                </div>
                <div className="flex w-[90%] h-[95%] ml-[2%] px-1 py-1 items-center justify-center rounded-2xl bg-[#E6E6E6]">
                  Skills View
                </div>
                <div className="flex w-[90%] h-[95%] ml-[8%] px-1 py-1 items-center justify-center rounded-2xl bg-[#E6E6E6]">
                  Experience View
                </div>
                <div className="flex w-[90%] h-[95%] ml-[2%] px-1 py-1 items-center justify-center rounded-2xl bg-[#E6E6E6]">
                  Works View
                </div>
              </div>
            </EditBuilder>
          </div>
        </div>

        <div className="flex justify-center items-center col-span-1 row-span-8 h-full bg-primary border border-primary">
          <div className="w-[90%] h-[90%] bg-[#BFCBF6] lg:rounded-[20px] rounded-[30px] flex items-center justify-center flex-col">
            <button className="w-[90%] h-[10%] bg-[#6385FD] md:rounded-[10px] lg:rounded-[15px] xl:rounded-[20px] flex items-center text-center justify-center ml-0 mt-5 text-white border-none outline-none cursor-pointer">
              전체 미리보기
            </button>
            <>
              <div className="h-full w-full overflow-y-auto">
                <div className="grid grid-cols-2 h-full w-full grid-rows-3">
                  <button className="w-[80%] h-[80%] bg-blue-200  rounded-[20px] flex items-center text-center justify-center ml-4 lg:mt-4 xl:mt-5">
                    테마1
                  </button>
                  <button className="w-[80%] h-[80%] bg-green-100 rounded-[20px] flex items-center text-center justify-center ml-4 lg:mt-4 xl:mt-5">
                    테마2
                  </button>
                  <button className="w-[80%] h-[80%] bg-pink-100 rounded-[20px] flex items-center text-center justify-center ml-4 lg:mt-2 xl:mt-5">
                    테마3
                  </button>
                  <button className="w-[80%] h-[80%] bg-violet-200 rounded-[20px] flex items-center text-center justify-center ml-4 lg:mt-2 xl:mt-5">
                    테마4
                  </button>
                  <button className="w-[80%] h-[80%] bg-yellow-100 rounded-[20px] flex items-center text-center justify-center ml-4 lg:mt-1 xl:mt-5">
                    테마5
                  </button>
                  <button className="w-[80%] h-[80%] bg-orange-100  rounded-[20px] flex items-center text-center justify-center ml-4 lg:mt-1 xl:mt-5">
                    테마6
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
