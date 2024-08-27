import PendingAlert from '@/components/PendingAlert';

export default function StatisticsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-col flex-1 items-center justify-center">
        <main className="flex flex-col justify-center items-center w-[300px] h-[300px]">
          <PendingAlert />
        </main>
      </div>
    </div>
  );
}
