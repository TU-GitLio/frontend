import EditBuilder from "@/components/EditBuilder";
import EditHeader from "@/components/EditHeader";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";

export default function ExperiencePage() {
  return (
    <>
      <div className="w-full h-full grid bg-[#DDE5FF] grid-cols-5 grid-rows-9">
        <div className="flex justify-center col-span-1 row-span-9 h-full border border-blue-400">
          <SideBar />
        </div>
        <EditHeader />
        <div className="col-span-4 row-span-8 h-full bg-[#DCE6FF] border border-blue-400">
          <div className="flex flex-col h-full items-center px-5 ">
            <Title />
            <EditBuilder />
          </div>
        </div>
      </div>
    </>
  );
}
