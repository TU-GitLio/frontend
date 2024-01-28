import PublishBtn from "@/components/PublishBtn";

export default function IntroductionPage() {
  return (
    <>
      <div className="w-full h-full grid bg-[#DDE5FF] grid-cols-4">
        <div className="flex justify-center col-span-1 relative row-span-3 w-[100] h-full bg-[#DDE5FF] border border-blue-400"></div>

        <div className="col-span-3 row-span-1 h-[70px] bg-[#DCE6FF] border border-blue-400 flex items-center justify-between px-4">
          <p>헤더 div 내용</p>
          <PublishBtn />
        </div>

        <div className="col-span-2 h-screen bg-[#DCE6FF] border border-blue-400">
          <p>중앙 사이드 내용</p>
        </div>

        <div className="flex justify-center items-center col-span-1 h-screen bg-[#DCE6FF] border border-blue-400">
          <div className="w-[90%] h-[85%] bg-[#BFCBF6] rounded-[30px] flex justify-center">
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
