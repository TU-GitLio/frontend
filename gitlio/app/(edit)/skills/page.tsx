import EditBuilder from "@/components/EditBuilder";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";

export default function SkillsPage() {
  return (
    <>
      <div className="w-full h-full absolute grid bg-[#DDE5FF] grid-cols-5">
        <div className="flex justify-center col-span-1 relative row-span-3 w-[100] h-full border-blue-400">
          <SideBar />
        </div>
        <Header />
        <div className="col-span-3 h-full bg-[#DCE6FF] border border-blue-400">
          <div className="flex flex-col h-full items-center px-5 ">
            <Title />
            <EditBuilder>
              <div className="flex w-full h-full flex-col items-center justify-center rounded-2xl">
                <div className="flex w-72 h-72 px-1 py-1 items-center bg-[#DCE6FF] justify-center rounded-2xl">
                  <div className="flex items-center justify-center h-60 w-60 bg-[#ffffff] rounded-full">
                    <img
                      src="/vercel.svg"
                      alt="Profile"
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="w-full px-52">
                  <div className="w-full h-14 bg-[#D6E2FE] rounded-2xl mt-9 flex items-center justify-center font-bold">
                    seojin Jeon
                  </div>
                </div>
                <div className="w-full px-16">
                  <div className="w-full h-20 bg-[#D6E2FE] rounded-2xl mt-9 flex items-center justify-center font-bold">
                    Hi, I’m a Front-end developer!
                  </div>
                </div>
              </div>
            </EditBuilder>
          </div>
        </div>

        <div className="flex justify-center items-center col-span-1 h-screen bg-[#DCE6FF] border border-blue-400">
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
