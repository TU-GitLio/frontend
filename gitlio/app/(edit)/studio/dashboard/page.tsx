import Navbar from "../../../../components/Studio/StdNavbar";
import Sidebar from "../../../../components/Studio/StdSidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-4">메인 컨텐츠 영역</div>
      </div>
    </div>
  );
}
