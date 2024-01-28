import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex flex-col absolute items-center w-full py-10 bg-[#DDE5FF]">
      <div className="text-center">
        <img src="/image81.png"></img>
        <div className="w-[360] bg-[#C6D2FF] rounded-[12px]">
          no2jfamily@naver.com
        </div>
      </div>
      <div className="mt-10">
        <span>임시저장 | 미리보기</span>
      </div>
      <div className="flex flex-col w-3/5 h-[620] mt-20">
        <Link href={"/introduction"}>
          <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-blue-500 text-white py-2 px-4 my-3">
            <div className="bg-white w-6 h-[20] rounded-full text-black">1</div>
            <div>introduction</div>
          </button>
        </Link>
        <Link href={"/skills"}>
          <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-blue-500 text-white py-2 px-4 my-3">
            <div className="bg-white w-6 h-[20] rounded-full text-black">2</div>
            <div>skills</div>
          </button>
        </Link>
        <Link href={"/experience"}>
          <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-blue-500 text-white py-2 px-4 my-3">
            <div className="bg-white w-6 h-[20] rounded-full text-black">3</div>
            <div>experience</div>
          </button>
        </Link>
        <Link href={"/works"}>
          <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-blue-500 text-white py-2 px-4 my-3">
            <div className="bg-white w-6 h-[20] rounded-full text-black">4</div>
            <div>works</div>
          </button>
        </Link>
        <Link href={"/outro"}>
          <button className="flex flex-row flex-grow justify-between w-full rounded-xl bg-blue-500 text-white py-2 px-4 my-3">
            <div className="bg-white w-6 h-[20] rounded-full text-black">5</div>
            <div>outro</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
