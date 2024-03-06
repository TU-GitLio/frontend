import Navbar from "../../../../../components/studio/StdNavbar";
import Sidebar from "../../../../../components/studio/StdSidebar";
import Menubar from "../../../../../components/studio/statistic/StatMenu";

export default function StatisticsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <Menubar />
        <main className="flex-1 p-4">메인 컨텐츠 영역</main>
      </div>
    </div>
  );
}
