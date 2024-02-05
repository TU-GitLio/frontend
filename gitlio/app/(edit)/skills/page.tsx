import EditBuilder from "@/components/EditBuilder";
import Header from "@/components/EditHeader";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";

export default function SkillsPage() {
  return (
    <>
      <div className="w-full h-full grid bg-primary grid-cols-5 grid-rows-9">
        <div className="flex justify-center row-span-9 col-span-1 relative h-full border border-#B1C9FF]">
          <SideBar />
        </div>
        <Header />
        <div className="col-span-3 row-span-8 h-full bg-primary border border-[#B1C9FF]">
          <div className="flex flex-col h-full items-center px-5 ">
            <Title />
            <EditBuilder>
              <div className="flex flex-row justify-around items-center text-center mt-5 pb-5 border-b-4">
                <div className="flex flex-col justify-center items-center w-32 h-16 border-[#B1C9FF] border-4">
                  <div className="">Framework</div>
                </div>
                <div className="flex flex-col justify-center items-center  w-32 h-16 border-[#B1C9FF] border-4">
                  <div className="">Language</div>
                </div>
                <div className="flex flex-col justify-center items-center  w-32 h-16 border-[#B1C9FF] border-4">
                  <div className="">Skills</div>
                </div>
              </div>
              <div className="flex flex-row justify-evenly h-[calc(100%-108px)]">
                <div className="shrink-0 basis-38 border-r-4 text-center"></div>
                <div className="shrink-0 basis-38 border-r-4 text-center"></div>
              </div>
            </EditBuilder>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center col-span-1 row-span-8 h-full bg-[#DCE6FF] border border-#B1C9FF]">
          <div className="w-[90%] h-4/5 bg-[#BFCBF6] rounded-[30px] flex flex-col items-center justify-between">
            <div className="flex flex-row justify-evenly items-center mt-5">
              <input
                className="block w-4/5 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-#B1C9FF] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="languages.."
              />
            </div>

            <div className="flex flex-col justify-evenly items-center w-full h-full">
              <div className="w-full flex flex-row justify-around items-center">
                <div className="flex flex-col justify-center hover:font-bold hover:bg-gray-50 rounded-lg basis-28 h-[100px] border-black  border-4 text-center">
                  <div>Javascript</div>
                </div>
                <div className="flex flex-col justify-center hover:font-bold hover:bg-gray-50 rounded-lg basis-28 h-[100px] border-black  border-4 text-center">
                  <div>React</div>
                </div>
              </div>
              <div className="w-full flex flex-row justify-around items-center">
                <div className="flex flex-col justify-center hover:font-bold hover:bg-gray-50 rounded-lg basis-28 h-[100px] border-black border-4 text-center">
                  <div>Next.js</div>
                </div>
                <div className="flex flex-col justify-center hover:font-bold hover:bg-gray-50 rounded-lg basis-28 h-[100px] border-black  border-4 text-center">
                  <div>Css</div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center mb-3 w-32 h-10 rounded-xl cursor-pointer border-[#B1C9FF] bg-white text-black border-4">
              가로변환
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
