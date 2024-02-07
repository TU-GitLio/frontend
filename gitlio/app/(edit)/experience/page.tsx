import EditBuilder from "@/components/EditBuilder";
import EditHeader from "@/components/EditHeader";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";

export default function ExperiencePage() {
  return (
    <>
      <div className="w-full h-full grid bg-primary grid-cols-5 grid-rows-9">
        <div className="flex justify-center col-span-0 row-span-9 h-full border border-primary">
          <SideBar />
        </div>
        <EditHeader />
        <div className="col-span-4 row-span-8 h-full bg-primary border border-[#B1C9FF]">
          <div className="flex flex-col h-full items-center px-5 ">
            <Title />
            <EditBuilder>
              <div className="flex flex-row justify-around items-center h-full">
                <div className="relative flex flex-col justify-center basis-[400px] h-80 text-center box-border border-4 border-primary">
                  <div className="absolute left-0 top-0 ml-5 mt-5 text-xl font-bold md:hidden sm:hidden">
                    horizontal
                  </div>
                  <ul className="w-full timeline flex flex-rol justify-around flex-nowrap px-2">
                    <li className="shrink-0">
                      <div className="timeline-start timeline-box">
                        <input className="border-2 border-primary w-24 h-5 focus:outline-blue-400 focus:ring" />
                      </div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-0.214-.882l-3.483 4.79-0.88-0.88a.75.75 0 10-0.06 0.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <hr />
                    </li>
                    <li className="shrink-0">
                      <hr />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-0.214-.882l-3.483 4.79-0.88-0.88a.75.75 0 10-0.06 0.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input className="border-2 border-primary w-24 h-5 focus:outline-blue-400 focus:ring" />
                      <hr />
                    </li>
                    <li className="shrink-0">
                      <hr />
                      <input className="border-2 border-primary w-24 h-5 focus:outline-blue-400 focus:ring" />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-0.214-.882l-3.483 4.79-0.88-0.88a.75.75 0 10-0.06 0.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <hr />
                    </li>
                  </ul>
                </div>
                <div className="relative flex flex-col justify-center basis-[400px] h-80 text-center border-4 border-primary">
                  <div className="absolute left-0 top-0 ml-5 mt-5 text-xl font-bold md:hidden sm:hidden">
                    vertical
                  </div>
                  <ul className="h-full timeline timeline-vertical flex flex-col justify-between items-center py-6">
                    <li className="relative">
                      <input className="border-2 border-primary w-24 h-5 focus:outline-blue-400 focus:ring" />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 absolute right-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input className="border-2 border-primary w-24 h-5 focus:outline-blue-400 focus:ring" />
                      <hr />
                    </li>
                    <li className="relative">
                      <hr />
                      <input className="border-2 border-primary w-24 h-5 focus:outline-blue-400 focus:ring" />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 absolute right-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <hr />
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
