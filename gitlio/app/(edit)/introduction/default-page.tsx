export default function DefaultPage() {
  return (
    <>
      <div className="w-screen grid bg-[#DDE5FF] grid-cols-3 ">
        <div className="col-span-1 row-span-10 w-[130] h-[1000px] bg-custom-dark-blue border border-red-400">
          <p className="text-white">왼쪽 사이드 내용</p>
        </div>

        <div className="col-span-2 row-span-1 h-[100px] bg-purple-400 border border-purple-800">
          <p>헤더 div 내용</p>
        </div>

        <div className="col-span-1 h-[900px] bg-gray-300 border border-green-400">
          <p>중앙 사이드 내용</p>
        </div>

        <div className="col-span-1 h-[900px] bg-gray-200 border border-blue-400">
          <p>오른쪽 사이드 내용</p>
        </div>
      </div>
    </>
  );
}
