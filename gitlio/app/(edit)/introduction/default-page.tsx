export default function DefaultPage() {
  return (
    <>
      <div className=" w-screen h-screen bg-[#c5f0c0] grid grid-cols-5 ">
        <div className=" h-screen">
          <div className="col-span-1 row-span-10 w-[130] h-full bg-gray-500 border border-red-400">
            <p className="text-white">왼쪽 사이드 내용</p>
          </div>
        </div>
        <div className="col-span-4 row-span-1 h-screen bg-purple-400 border border-purple-800">
          <div className="col-span-4 row-span-1 h-[100px] bg-purple-200 border border-purple-800">
            <p>헤더 div 내용</p>
          </div>
          <div className="col-span-3 row-span-1 h-[300px] bg-gray-300 border border-green-400">
            <p>중앙 사이드 내용</p>
          </div>
        </div>
      </div>
    </>
  );
}
