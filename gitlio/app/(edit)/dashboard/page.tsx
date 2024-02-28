import Navbar from "../../../components/dashboard/DashNavbar";

export default function DashboardPage() {
  return (
    <>
      <div className="w-full h-full grid grid-rows-10">
        <div className="grid row-span-1">
          <Navbar />
        </div>
      </div>
    </>
  );
}
