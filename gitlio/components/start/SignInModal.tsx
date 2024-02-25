import React from "react";

interface SignInModalProps {
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ onClose }) => {
  return (
    <dialog open className="modal">
      <div className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div>여기 회원가입 모달 내용</div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default SignInModal;
