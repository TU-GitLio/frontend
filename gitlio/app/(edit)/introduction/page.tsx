// import React from "react";
// import EditBuilder from "@/components/EditBuilder";
// import Header from "@/components/Header";
// import SideBar from "@/components/SideBar";
// import Title from "@/components/Title";

// export default function IntroductionPage() {
//   return (
//     <>
//       <div className="w-full h-full grid bg-[#DDE5FF] grid-cols-4">
//         <div className="flex justify-center col-span-1 relative row-span-3 w-[100] h-full border border-blue-400">
//           <SideBar />
//         </div>
//         <Header />
//         <div className="col-span-2 h-[4/5] bg-[#DCE6FF] border border-blue-400">
//           <div className="flex flex-col h-full items-center px-5 ">
//             <Title />
//             <EditBuilder>
//               <div className="flex w-full h-full flex-col items-center justify-center rounded-2xl">
//                 <div className="flex w-48 h-48 px-1 py-1 items-center bg-[#DCE6FF] justify-center rounded-2xl">
//                   <div className="flex items-center justify-center h-40 w-40 bg-[#ffffff] rounded-full">
//                     <img
//                       src="/seojin_profile.png"
//                       alt="Profile"
//                       className="h-full w-full object-cover rounded-full"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full px-28">
//                   <div className="w-full h-11 bg-[#D6E2FE] rounded-2xl mt-2 flex items-center justify-center font-bold">
//                     seojin Jeon
//                   </div>
//                 </div>
//                 <div className="w-full px-16">
//                   <div className="w-full h-16 bg-[#D6E2FE] rounded-2xl mt-2 flex items-center justify-center font-bold">
//                     Hi, I’m a Front-end developer!
//                   </div>
//                 </div>
//               </div>
//             </EditBuilder>
//           </div>
//         </div>
//         <div className="flex justify-center items-center col-span-1 h-screen bg-[#DCE6FF] border border-blue-400">
//           <div className="w-[90%] h-[85%] bg-[#BFCBF6] rounded-[30px] flex justify-center">
//             <div className="w-[40%] h-[24%] bg-[#6385FD] rounded-[20px] flex items-center text-center justify-center ml-0 mt-10 text-white">
//               레이아웃1
//             </div>
//             <div className="w-[40%] h-[24%] bg-[#E6E6E6] rounded-[20px] flex items-center text-center justify-center ml-4 mt-10 ">
//               레이아웃2
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

//---------------------------------------------------------------------------------------------------
// export default function DefaultPage() {
//   return (
//     <>
//       <div className="w-screen h-screen grid bg-[#c5f0c0] grid-cols-5 ">
//         <div className="h-screen">
//           <div className="col-span-1 row-span-10 w-[130] h-[1000px]  bg-gray-500 border border-red-400">
//             <p className="text-white">왼쪽 사이드 내용</p>
//           </div>
//         </div>

//         <div className="col-span-4 row-span-1 h-[100px] bg-purple-400 border border-purple-800">
//           <p>헤더 div 내용</p>
//         </div>

//         <div className="col-span-3 row-span-1 h-[900px] bg-gray-300 border border-green-400">
//           <p>중앙 사이드 내용</p>
//         </div>

//         <div className="col-span-1 h-[900px] bg-gray-200 border border-blue-400">
//           <p>오른쪽 사이드 내용</p>
//         </div>
//       </div>
//     </>
//   );
// }
//---------------------------------------------------------------------------------------------------

// export default function DefaultPage() {
//   return (
//     <>
//       <div className=" w-screen h-screen bg-[#c5f0c0] grid grid-cols-5 ">
//         <div className=" h-screen">
//           <div className="col-span-1 row-span-10 w-[130] h-full bg-gray-500 border border-red-400">
//             <p className="text-white">왼쪽 사이드 내용</p>
//           </div>
//         </div>
//         <div className="col-span-4 row-span-1 h-[100px] bg-purple-400 border border-purple-800">
//           <p>헤더 div 내용</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default function DefaultPage() {
//   return (
//     <>
//       <div className=" w-screen h-screen bg-[#c5f0c0] grid grid-cols-5 ">
//         <div className=" h-screen">
//           <div className="col-span-1 row-span-10 w-[130] h-full bg-gray-500 border border-red-400">
//             <p className="text-white">왼쪽 사이드 내용</p>
//           </div>
//         </div>
//         <div className="col-span-4 row-span-1 h-screen bg-purple-400 border border-purple-800 flex-col-reverse">
//           <div className="col-span-4 row-span-1 h-[100px] bg-purple-200 border border-purple-800">
//             <p>헤더 div 내용</p>
//           </div>
//           <div className="col-span-3 row-span-1 h-[81.9%] bg-gray-300 border border-green-400">
//             <p>전체 사이드 내용</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// sm:h-[80%] md:h-[81.9%] lg:h-[86.7%] xl:h-[89%]

import EditBuilder from "@/components/EditBuilder";
import EditHeader from "@/components/EditHeader";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";

export default function IntroductionPage() {
  return (
    <>
      <div className="w-screen h-screen bg-[#c5f0c0] grid grid-cols-5">
        <div className="h-screen relative">
          <div className="col-span-1 row-span-10 w-130 h-full bg-[#8d9ab8] border border-red-400">
            {/* <p className="text-white">왼쪽 사이드 내용</p> */}
            <SideBar />
          </div>
        </div>
        <div className="col-span-4 row-span-1 h-screen bg-purple-400 border border-purple-800 flex-col-reverse relative">
          <div className="col-span-4 row-span-1 h-[80px] bg-[#8dabed] border absolute top-0 left-0 right-0 bottom-0 border-purple-800 z-10">
            <Header />
          </div>
          <div className="flex h-screen bg-[#DCE6FF] border border-green-400 z-1">
            <div className="flex flex-col items-center bg-[#DCE6FF] justify-center rounded-[10px] col-span-3 w-[70%] lg:h-[85%] xl:h-[90%] lg:mt-[8%] xl:mt-[5.5%] ml-5 border border-black mr-auto">
              <Title />
              <EditBuilder>
                <div className="flex w-full h-full flex-col items-center justify-center rounded-2xl">
                  <div className="flex lg:w-48 lg:h-48 xl:w-[40%] xl:h-[48%] px-1 py-1 items-center bg-[#DCE6FF] justify-center rounded-2xl">
                    <div className="flex items-center justify-center sm:h-40 sm:w-40 md:h-40 md:w-40 lg:h-40 lg:w-40 xl:h-64 xl:w-64 bg-[#F6F7FF] rounded-full">
                      <img
                        src="/seojin_profile.png"
                        alt="Profile"
                        className="h-full w-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="w-full px-28">
                    <div className="w-full h-11 bg-[#D6E2FE] rounded-2xl mt-2 flex items-center justify-center font-bold">
                      seojin Jeon
                    </div>
                  </div>
                  <div className="w-full px-16">
                    <div className="w-full h-16 bg-[#D6E2FE] rounded-2xl mt-2 flex items-center justify-center font-bold">
                      Hi, I’m a Front-end developer!
                    </div>
                  </div>
                </div>
              </EditBuilder>
            </div>
            <div className="col-span-1 lg:h-[85%] w-[25%] xl:h-[90%] rounded-[10px] lg:mt-[8%] xl:mt-[5.5%] mr-5 items-center justify-center bg-[#DCE6FF] border border-black ml-auto">
              <div className="w-[90%] h-[90%] bg-[#BFCBF6] rounded-[30px] mt-[10%] flex justify-center ml-3">
                <div className="w-[40%] h-[23%] bg-[#6385FD] rounded-[20px] flex  items-center text-center justify-center ml-0 mt-10 text-white">
                  레이아웃1
                </div>
                <div className="w-[40%] h-[23%] bg-[#E6E6E6] rounded-[20px] flex items-center text-center justify-center ml-4 mt-10 ">
                  레이아웃2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//flex 가로
//felx(x) 세로

// export default function DefaultPage() {
//   return (
//     <>
//       <div className="w-screen h-screen grid bg-[#c5f0c0] grid-cols-5">
//         <div className="h-screen">
//           <div className="col-span-1 row-span-10 w-[130] h-[1000px]  bg-gray-500 border border-red-400">
//             <p className="text-white">왼쪽 사이드 내용</p>
//           </div>
//         </div>

//         <div className="w-screen h-screen flex-col">
//           <div className="col-span-4 row-span-1 h-[100px] bg-purple-400 border border-purple-800">
//             <p>헤더 div 내용</p>
//           </div>

//           <div className="col-span-3 h-[80%] bg-gray-300 border border-green-400">
//             <p>중앙 사이드 내용</p>
//           </div>
//         </div>

//         {/* <div className="col-span-1 row-span-10 h-[900px] bg-gray-200 border border-blue-400">
//           <p>오른쪽 사이드 내용</p>
//         </div> */}
//       </div>
//     </>
//   );
// }
