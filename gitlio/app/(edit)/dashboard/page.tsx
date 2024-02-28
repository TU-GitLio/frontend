import Navbar from "../../../components/dashboard/DashNavbar";
import Sidebar from "../../../components/dashboard/DashSidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-4">메인 컨텐츠 영역</main>
      </div>
    </div>
  );
}
