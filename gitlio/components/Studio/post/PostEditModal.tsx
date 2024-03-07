import React from "react";

interface PostEditModalProps {
  title: string;
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

function PostEditModal({ title, url, isOpen, onClose }: PostEditModalProps) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
      onClick={onClose}
    >
      <dialog
        className="modal"
        open={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-box relative bg-white">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          <h3 className="font-bold text-sm -mb-3 text-gray-700">{title}</h3>
          <p className="py-4 text-lg -mb-5">{url}</p>
          <div className="modal-action flex justify-center">
            <button className="btn mr-12">수정하기</button>
            <button className="btn" onClick={() => window.open(url, "_blank")}>
              URL 접속하기
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default PostEditModal;
