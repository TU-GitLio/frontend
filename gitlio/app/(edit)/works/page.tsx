import EditBuilder from "@/components/EditBuilder";
import Header from "@/components/EditHeader";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";
import { PiTrashThin } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function WorksPage() {
  return (
    <>
      <div className="w-full h-full grid bg-[#DDE5FF] grid-cols-5 grid-rows-9">
        <div className="flex justify-center col-span-1 relative row-span-9 h-full border border-primary">
          <SideBar />
        </div>
        <Header />
        <div className="col-span-3 row-span-8 h-full bg-[#DCE6FF] border border-[#B1C9FF]">
          <div className="flex flex-row h-full w-full justify-around items-center">
            <div className="flex flex-col justify-center items-center w-14 h-14 ml-10">
              <IoIosArrowBack className="w-full h-full cursor-pointer" />
            </div>
            <div className="flex flex-col w-full h-full items-center">
              <Title />
              <EditBuilder>
                <div className="flex w-full h-full flex-col items-center justify-center rounded-2xl">
                  <div className="flex h-[95%] w-[100%] flex-col justify-center items-center border-2 border-primary rounded-2xl">
                    <div className="flex flex-row justify-end w-full mb-3">
                      <div className="flex flex-row items-center cursor-pointer justify-center rounded-full mr-5">
                        <img
                          src="/Chatgpt_btn_img.png"
                          alt="Profile"
                          className="lg:h-[65%] lg:w-[90%] xl:h-[70%] xl:w-full"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-center rounded-full mr-[10%]">
                        <div className="w-8 h-8 flex flex-row justify-center items-center rounded-md border-2 border-gray-200">
                          <PiTrashThin className="border-gray-200 cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[80%] px-1 py-1 items-center justify-center bg-[#DCE6FF] lg:rounded-lg xl:rounded-2xl ">
                      <div className="flex items-center justify-center ">
                        <img
                          src="/Aiary_img.png"
                          alt="Profile"
                          className="lg:h-[45%] lg:w-[60%] xl:h-[80%] xl:w-[100%] object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex w-[100%] flex-row justify-around">
                      <div className="flex w-[80%] items-center flex-col justify-center">
                        <div
                          className="w-full lg:h-[25%] xl:h-11 bg-[#D6E2FE] lg:rounded-lg xl:rounded-2xl mt-2 flex items-center justify-center font-bold"
                          style={{ fontSize: "0.9rem" }}
                        >
                          AIARY
                        </div>
                        <div
                          className="w-full lg:h-[25%] xl:h-11 bg-[#D6E2FE] lg:rounded-lg xl:rounded-2xl mt-2 flex items-center justify-center font-bold"
                          style={{ fontSize: "0.9rem" }}
                        >
                          일기 내용 기반 AI 분석 그림일기 서비스
                        </div>
                        <div
                          className="w-full lg:h-[65%] bg-[#D6E2FE] py-1 px-2 lg:rounded-lg xl:rounded-2xl mt-2 flex items-center justify-center font-bold"
                          style={{ fontSize: "0.8rem" }}
                        >
                          · Spring Boot JPA를 이용하여 반복 작업을 최소화 <br />
                          · AWS S3 업로드 및 이미지 URL 반환 로직 구현 <br />·
                          Spring Security와 JWT를 이용하여 유저 인증, 인가 구현{" "}
                          <br />
                          · RabbitMQ를 통한 이벤트 기반 비동기 처리 및 Celery를
                          활용한 작업 관리 <br />
                          · AWS EC2 서버 배포 <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </EditBuilder>
            </div>
            <div className="flex flex-col justify-center items-center w-14 h-14 mr-10">
              <IoIosArrowForward className="w-full h-full cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center col-span-1 row-span-8 h-full bg-primary border border-primary">
          <div className="flex flex-col lg:w-[60%] lg:h-[90%] bg-[#BFCBF6]  lg:rounded-[25px] xl:rounded-[30px] items-center">
            <div className="w-[60%] h-[20%] bg-[#6385FD] lg:rounded-[15px] xl:rounded-[20px] flex items-center text-center justify-center lg:mt-[11.5%] text-white font-medium">
              프로젝트1
            </div>
            <div className="w-[60%] h-[20%] bg-[#D6E2FE] lg:rounded-[15px] xl:rounded-[20px] flex items-center text-center justify-center lg:mt-[11.5%] font-medium">
              프로젝트2
            </div>
            <div className="w-[60%] h-[20%] bg-[#D6E2FE] lg:rounded-[15px] xl:rounded-[20px] flex items-center text-center justify-center lg:mt-[11.5%] font-medium">
              프로젝트3
            </div>
            <div className="w-[60%] h-[20%] bg-[#D6E2FE] lg:rounded-[15px] xl:rounded-[20px] flex items-center text-center justify-center lg:mt-[11.5%] font-medium">
              프로젝트4
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
