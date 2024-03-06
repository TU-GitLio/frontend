import Navbar from "@/components/studio/StdNavbar";
import Sidebar from "@/components/studio/StdSidebar";
import Menubar from "@/components/studio/statistic/StatMenu";
import DailyChart from "@/components/studio/statistic/DailyChart";
import DailyStat from "@/components/studio/statistic/DailyStat";

export default function StatisticsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <Menubar />
        <main className="flex flex-col flex-1 p-4 items-center -ml-20">
          <div>
            <DailyChart />
          </div>
          <div>
            <DailyStat />
          </div>
        </main>
      </div>
    </div>
  );
}
