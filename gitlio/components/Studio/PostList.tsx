"use client";
import React, { useState } from "react";
import PostModal from "../../components/Studio/PostEditModal";

function PostList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", url: "" });

  const openModal = (title: string, url: string) => {
    setModalInfo({ title, url });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller bg-white border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
                />
              </th>
              <td
                onClick={() =>
                  openModal(
                    "프론트엔드 개발자 포트폴리오",
                    "https://www.gitlio.com/abcd-portfolio"
                  )
                }
              >
                <div className="text-xs">프론트엔드 개발자 포트폴리오</div>
                <div className="text-lg">
                  https://www.gitlio.com/abcd-portfolio
                </div>
              </td>
              <td>
                <button className="btn btn-outline btn-info mr-3">수정</button>
                <button className="btn btn-outline btn-error">삭제</button>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>
                {" "}
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller bg-white border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
                />
              </th>
              <td
                onClick={() =>
                  openModal(
                    "프론트엔드 개발자 포트폴리오",
                    "https://www.gitlio.com/abcd-portfolio"
                  )
                }
              >
                <div className="text-xs">엘리스 맞춤 포트폴리오</div>
                <div className="text-lg">
                  https://www.gitlio.com/efgh-portfolio
                </div>
              </td>
              <td>
                <button className="btn btn-outline btn-info mr-3">수정</button>
                <button className="btn btn-outline btn-error">삭제</button>
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>
                {" "}
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller bg-white border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
                />
              </th>
              <td
                onClick={() =>
                  openModal(
                    "프론트엔드 개발자 포트폴리오",
                    "https://www.gitlio.com/abcd-portfolio"
                  )
                }
              >
                <div className="text-xs">컴공 전공 포트폴리오</div>
                <div className="text-lg">
                  https://www.gitlio.com/ijklmn-portfolio
                </div>
              </td>
              <td>
                <button className="btn btn-outline btn-info mr-3">수정</button>
                <button className="btn btn-outline btn-error">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <PostModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalInfo.title}
          url={modalInfo.url}
        />
      )}
    </>
  );
}

export default PostList;
