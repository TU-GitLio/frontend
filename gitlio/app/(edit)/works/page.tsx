import EditBuilder from "@/components/EditBuilder";
import Header from "@/components/EditHeader";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";

export default function WorksPage() {
  return (
    <>
      <div className="w-full h-full grid bg-[#DDE5FF] grid-cols-5 grid-rows-9">
        <div className="flex justify-center col-span-1 row-span-9 h-full border border-primary">
          <SideBar />
        </div>
        <Header />
        <div className="col-span-4 row-span-8 h-full bg-[#DCE6FF] border border-[#B1C9FF]">
          <div className="flex flex-col h-full items-center px-5 ">
            <Title />
            <EditBuilder>
              <div className="flex flex-col justify-around h-full">
                <div className="flex flex-row justify-around items-center">
                  <div className="flex flex-row justify-center items-center">
                    <div className="w-96 h-72 border-4 border-blue-300">
                      <div className="flex flex-row h-full justify-between items-center">
                        <div className="ml-2 cursor-pointer">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 7.5C1 7.66148 1.07798 7.81301 1.20938 7.90687L8.20938 12.9069C8.36179 13.0157 8.56226 13.0303 8.72879 12.9446C8.89533 12.8589 9 12.6873 9 12.5L9 10L11.5 10C11.7761 10 12 9.77614 12 9.5L12 5.5C12 5.22386 11.7761 5 11.5 5L9 5L9 2.5C9 2.31271 8.89533 2.14112 8.72879 2.05542C8.56226 1.96972 8.36179 1.98427 8.20938 2.09313L1.20938 7.09314C1.07798 7.18699 1 7.33853 1 7.5ZM8 3.4716L8 5.5C8 5.77614 8.22386 6 8.5 6L11 6L11 9L8.5 9C8.22386 9 8 9.22386 8 9.5L8 11.5284L2.36023 7.5L8 3.4716Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex flex-col justify-around items-center">
                          <div className="w-48 h-24 border-4 rounded-2xl border-primary"></div>
                          <div className="w-48 h-14 border-4 mt-4 rounded-2xl border-primary box-border">
                            <div className="flex flex-col h-full justify-between py-1 ml-2">
                              <div className="h-4 text-sm text-gray-400">
                                타이틀
                              </div>
                              <div className="h-4 text-sm text-gray-400">
                                프로젝트 설명
                              </div>
                            </div>
                          </div>
                          <div className="w-48 h-12 border-4 mt-2 rounded-2xl border-primary">
                            <div className="flex flex-col h-full justify-between py-1 ml-2">
                              <div className="h-4 text-sm text-gray-400">
                                사용기술 설명
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mr-2 cursor-pointer">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 7.5C14 7.66148 13.922 7.81301 13.7906 7.90687L6.79062 12.9069C6.63821 13.0157 6.43774 13.0303 6.27121 12.9446C6.10467 12.8589 6 12.6873 6 12.5L6 10L3.5 10C3.22386 10 3 9.77614 3 9.5L3 5.5C3 5.22386 3.22386 5 3.5 5L6 5L6 2.5C6 2.31271 6.10467 2.14112 6.27121 2.05542C6.43774 1.96972 6.63821 1.98427 6.79062 2.09313L13.7906 7.09314C13.922 7.18699 14 7.33853 14 7.5ZM7 3.4716L7 5.5C7 5.77614 6.77614 6 6.5 6L4 6L4 9L6.5 9C6.77614 9 7 9.22386 7 9.5L7 11.5284L12.6398 7.5L7 3.4716Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div className="w-96 h-72 border-4 border-blue-300"></div>
                  </div>
                </div>
                <div className="flex flex-row justify-around">
                  <div className="flex flex-row justify-center">
                    <div className="w-96 h-72 border-4 border-blue-300"></div>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div className="w-96 h-72 border-4 border-blue-300">
                      <div className="flex flex-row justify-center items-center h-full">
                        <div className="flex flex-col justify-around items-center">
                          <div className="flex flex-col justify-between">
                            <div className="h-4 text-sm text-gray-400">
                              타이틀 설명
                            </div>
                            <div className="h-4 text-sm text-gray-400 mt-1 mb-2">
                              프로젝트 설명
                            </div>
                          </div>
                          <div className="w-48 h-24 border-4 border-primary rounded-2xl"></div>
                          <hr className="w-[250px] border-2 border-gray-400 mt-3" />
                          <div className="flex flex-col justify-center rounded-2xl items-center border-4 border-primary w-48 h-24 mt-2">
                            <div className="h-4 text-sm text-gray-400">
                              사용기능 설명
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </EditBuilder>
          </div>
        </div>
      </div>
    </>
  );
}
