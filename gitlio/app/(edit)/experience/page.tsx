"use client";

import EditBuilder from "@/components/EditBuilder";
import EditHeader from "@/components/EditHeader";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";
import { useState } from "react";

export default function ExperiencePage() {
  return (
    <>
      <div className="w-full h-full grid grid-cols-5 grid-rows-9">
        <div className="flex justify-center col-span-0 row-span-9 h-full border border-primary">
          <SideBar />
        </div>
        <EditHeader />
        <div className="col-span-4 row-span-8 h-full border border-[#B1C9FF]">
          <div className="flex flex-col h-full items-center px-5">
            <Title />
            <EditBuilder>
              <div className="flex flex-row justify-around items-center h-full">
                <div className="flex flex-col justify-center basis-[480px] h-80 text-center box-border border-4 border-primary">
                  <ul className="timeline flex flex-row flex-nowrap justify-center xl:overflow-hidden">
                    <li>
                      <div className="w-[130px] h-[42px] timeline-start timeline-box">
                        <input className="w-full h-full text-xs text-center hover:border-2 hover:border-primary" />
                      </div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-[#6385FD]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <hr className="bg-[#6385FD]" />
                    </li>
                    <li>
                      <hr className="bg-[#6385FD]" />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-[#6385FD]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-end timeline-box w-[130px] h-[42px]">
                        <input className="w-full h-full text-xs text-center hover:border-2 hover:border-primary" />
                      </div>
                      <hr className="bg-[#6385FD]" />
                    </li>
                    <li>
                      <hr className="bg-[#6385FD]" />
                      <div className="timeline-start timeline-box w-[130px] h-[42px] ">
                        <input className="w-full h-full text-xs text-center hover:border-2 hover:border-primary" />
                      </div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-[#6385FD]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative flex flex-row justify-center basis-[480px] h-80 box-border text-center border-4 border-primary">
                  <ul className="flex flex-col md:overflow-hidden justify-center items-center timeline timeline-vertical absolute h-full">
                    <li>
                      <div className="timeline-start timeline-box w-[130px] h-[42px]">
                        <input className="w-full h-full text-xs text-center hover:border-2 hover:border-primary" />
                      </div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-[#6385FD]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <hr className="bg-[#6385FD]" />
                    </li>
                    <li>
                      <hr className="bg-[#6385FD]" />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-[#6385FD]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-end timeline-box w-[130px] h-[42px]">
                        <input className="w-full h-full text-xs text-center hover:border-2 hover:border-primary" />
                      </div>
                      <hr className="bg-[#6385FD]" />
                    </li>
                    <li>
                      <hr className="bg-[#6385FD]" />
                      <div className="timeline-start timeline-box w-[130px] h-[42px]">
                        <input className="w-full h-full text-xs text-center hover:border-2 hover:border-primary" />
                      </div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-[#6385FD]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </EditBuilder>
          </div>
        </div>
      </div>
    </>
  );
}
