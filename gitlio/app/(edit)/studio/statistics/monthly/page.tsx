import Navbar from "@/components/studio/StdNavbar";
import Sidebar from "@/components/studio/StdSidebar";
import Menubar from "@/components/studio/statistic/StatMenu";
import MonthlyChart from "@/components/studio/statistic/MonthlyChart";
import MonthlyStat from "@/components/studio/statistic/MonthlyStat";

export default function StatisticsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <Menubar />
        <main className="flex flex-col flex-1 p-4 items-center -ml-20">
          <div>
            <MonthlyChart />
          </div>
          <div>
            <MonthlyStat />
          </div>
        </main>
      </div>
    </div>
  );
}
