// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function SideBar() {
//   const pathName = usePathname();
//   const titleArray = pathName.split("/");
//   const titleUrl = titleArray[titleArray.length - 1];

//   return (
//     <div className="flex h-full w-full">
//       <div className="flex flex-col items-center w-full bg-[#DDE5FF] border border-pink-500">
//         <div className="text-center mt-[10%] ">
//           <img
//             src="/gitlio.png"
//             alt="Profile Image"
//             className="lg:w-[100%] lg:h-[75%]"
//           />
//         </div>
//         <div className="flex w-[190px] items-center justify-center bg-[#C6D2FF] rounded-[12px]">
//           <div className="font-normal">no2jfamily@naver.com</div>
//         </div>
//         <div className="flex flex-row mt-[8%] mb-[3%] shrink-0 ">
//           <div className="mr-3 font-medium">임시저장</div>
//           <div className="mr-3 font-medium">|</div>
//           <div className="mr-3 font-medium">미리보기</div>
//         </div>
//         <div className="flex flex-col w-[75%] h-[620] ">
//           <Link href={"/introduction"}>
//             {titleUrl === "introduction" ? (
//               <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
//                 <div className="bg-white w-6 h-[20] rounded-full text-black shrink-0">
//                   <span className="font-medium">1</span>
//                 </div>
//                 <div className="mr-auto ml-2 font-medium">Introduction</div>
//               </button>
//             ) : (
//               <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
//                 <div className="bg-white w-6 h-[20] rounded-full text-black shrink-0">
//                   <span className="font-medium">1</span>
//                 </div>
//                 <div className="mr-auto ml-2 font-medium">Introduction</div>
//               </button>
//             )}
//           </Link>

//           <Link href={"/skills"}>
//             {titleUrl === "skills" ? (
//               <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
//                 <div className="bg-white w-6 h-[20] rounded-full text-black shrink-0">
//                   <span className="font-medium">2</span>
//                 </div>
//                 <div className="mr-auto ml-2 font-medium">Skills</div>
//               </button>
//             ) : (
//               <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
//                 <div className="bg-white w-6 h-[20] rounded-full text-black shrink-0">
//                   <span className="font-medium">2</span>
//                 </div>
//                 <div className="mr-auto ml-2 font-medium">Skills</div>
//               </button>
//             )}
//           </Link>

//           <Link href={"/experience"}>
//             {titleUrl === "experience" ? (
//               <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
//                 <div className="bg-white w-6 h-[20] rounded-full text-black shrink-0">
//                   <span className="font-medium">3</span>
//                 </div>
//                 <div className="mr-auto ml-2 font-medium">Experience</div>
//               </button>
//             ) : (
//               <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
//                 <div className="bg-white w-6 h-[20] rounded-full text-black shrink-0">
//                   <span className="font-medium">3</span>
//                 </div>
//                 <div className="mr-auto ml-2 font-medium">Experience</div>
//               </button>
//             )}
//           </Link>

//           <Link href={"/works"}>
//             {titleUrl === "works" ? (
//               <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
//                 <div className="bg-white w-6 h-[20] rounded-full text-black shrink-0">
//                   <span className="font-medium">4</span>
//                 </div>
//                 <div className="mr-auto ml-2 font-medium">Works</div>
//               </button>
//             ) : (
//               <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
//                 <div className="bg-white w-6 h-[20] rounded-full text-black shrink-0">
//                   <span className="font-medium">4</span>
//                 </div>
//                 <div className="mr-auto ml-2 font-medium">Works</div>
//               </button>
//             )}
//           </Link>

//           <Link href={"/outro"}>
//             {titleUrl === "outro" ? (
//               <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
//                 <div className="bg-white w-6 h-[20] rounded-full text-black shrink-0">
//                   <span className="font-medium">5</span>
//                 </div>
//                 <div className="mr-auto ml-2 font-medium">Outro</div>
//               </button>
//             ) : (
//               <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
//                 <div className="bg-white w-6 h-[20] rounded-full text-black shrink-0">
//                   <span className="font-medium">5</span>
//                 </div>
//                 <div className="mr-auto ml-2 font-medium">Outro</div>
//               </button>
//             )}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathName = usePathname();
  const titleArray = pathName.split("/");
  const titleUrl = titleArray[titleArray.length - 1];

  return (
    <div className="flex h-full w-full sm:h-full">
      <div className="flex flex-col items-center w-full bg-primary border border-primary">
        <div className="text-center mt-[10%] ">
          <img
            src="/gitlio.png"
            alt="Profile Image"
            className="lg:w-[100%] lg:h-[75%]"
          />
        </div>
        <div className="flex w-[190px] items-center justify-center bg-[#C6D2FF] rounded-[12px] md:hidden sm:hidden">
          <div className="font-normal">no2jfamily@naver.com</div>
        </div>
        <div className="flex flex-row mt-[8%] mb-[3%] shrink-0 sm:mt-10">
          <div className="mr-3 font-medium">임시저장</div>
          <div className="mr-3 font-medium">|</div>
          <div className="mr-3 font-medium">미리보기</div>
        </div>
        <div className="flex flex-col w-[75%] h-full xl:justify-center">
          <Link href={"/introduction"}>
            {titleUrl === "introduction" ? (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">1</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  <span className="">Introduction</span>
                </div>
              </button>
            ) : (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">1</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Introduction
                </div>
              </button>
            )}
          </Link>

          <Link href={"/skills"}>
            {titleUrl === "skills" ? (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">2</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Skills
                </div>
              </button>
            ) : (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">2</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Skills
                </div>
              </button>
            )}
          </Link>

          <Link href={"/experience"}>
            {titleUrl === "experience" ? (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">3</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Experience
                </div>
              </button>
            ) : (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
                <div className="bg-white w-6  rounded-full text-black shrink-0">
                  <span className="font-medium">3</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Experience
                </div>
              </button>
            )}
          </Link>

          <Link href={"/works"}>
            {titleUrl === "works" ? (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
                <div className="bg-white w-6 rounded-full text-black shrink-0">
                  <span className="font-medium">4</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Works
                </div>
              </button>
            ) : (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
                <div className="bg-white w-6 rounded-full text-black shrink-0">
                  <span className="font-medium">4</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Works
                </div>
              </button>
            )}
          </Link>

          <Link href={"/outro"}>
            {titleUrl === "outro" ? (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-[#B1C9FF] text-black py-2 px-4 my-[7%]">
                <div className="bg-white w-6 rounded-full text-black shrink-0">
                  <span className="font-medium">5</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncatemr-auto">
                  Outro
                </div>
              </button>
            ) : (
              <button className="flex flex-row flex-grow justify-between w-full rounded-full bg-blue-500 text-white py-2 px-4 my-[7%]">
                <div className="bg-white w-6 rounded-full text-black shrink-0">
                  <span className="font-medium">5</span>
                </div>
                <div className="mr-auto ml-2 font-medium md:truncate sm:truncate">
                  Outro
                </div>
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
