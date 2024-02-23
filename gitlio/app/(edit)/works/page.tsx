import EditBuilder from "@/components/EditBuilder";
import Header from "@/components/EditHeader";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";

export default function WorksPage() {
  return (
    <>
      <div className="w-full h-full grid bg-[#DDE5FF] grid-cols-5 grid-rows-9">
        <div className="flex justify-center col-span-1 row-span-9 h-full border border-primary">
          <SideBar />
        </div>
        <Header />
        <div className="col-span-4 row-span-8 h-full bg-[#DCE6FF] border border-[#B1C9FF]">
          <div className="flex flex-col h-full items-center px-5 ">
            <Title />
            <EditBuilder>
              <div className="flex flex-col justify-around h-full">
                <div className="flex flex-row justify-around items-center">
                  <div className="flex flex-row justify-center items-center">
                    <div className="w-96 h-72 border-4 border-primary">
                      <div className="flex flex-row h-full justify-between items-center">
                        <div className="">1</div>
                        <div className="">2</div>
                        <div className="">3</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div className="w-96 h-72 border-4 border-primary"></div>
                  </div>
                </div>
                <div className="flex flex-row justify-around">
                  <div className="flex flex-row justify-center">
                    <div className="w-96 h-72 border-4 border-primary"></div>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div className="w-96 h-72 border-4 border-primary"></div>
                  </div>
                </div>
              </div>
            </EditBuilder>
          </div>
        </div>
      </div>
    </>
  );
}
