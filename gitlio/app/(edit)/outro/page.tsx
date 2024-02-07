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
            <EditBuilder />
          </div>
        </div>

        <div className="flex justify-center items-center col-span-1 row-span-8 h-full bg-primary border border-primary">
          <div className="w-[90%] h-[80%] bg-[#BFCBF6] rounded-[30px] flex justify-center">
            <div className="w-[40%] h-[24%] bg-[#6385FD] rounded-[20px] flex items-center text-center justify-center ml-0 mt-10 text-white">
              레이아웃1
            </div>
            <div className="w-[40%] h-[24%] bg-[#E6E6E6] rounded-[20px] flex items-center text-center justify-center ml-4 mt-10 ">
              레이아웃2
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
