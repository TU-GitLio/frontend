export default function DashSidebar() {
  return (
    <div className="h-full w-72 border border-gray-200">
      <div className="flex h-[4.15rem] items-center justify-center w-full border border-gray-200">
        <div className="text-center text-xl font-bold">GITLIO STUDIO</div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
          <button className="btn btn-wide bg-[#3379FF] text-white">
            새로운 포트폴리오 생성
          </button>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
}
