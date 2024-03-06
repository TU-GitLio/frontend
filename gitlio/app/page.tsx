"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import LoginModal from "@/components/start/LoginModal";
import SignInModal from "@/components/start/SignInModal";

const StartPage: React.FC = () => {
  const [modalType, setModalType] = useState<string>("");

  const openModal = (type: string) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType("");
  };

  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2 absolute top-0 w-full">
        <Logo />
      </nav>
      <div className="bg-primary flex flex-col justify-center items-center h-screen">
        <div className="relative flex justify-center items-center">
          <img
            src="https://i.ibb.co/7WRLdst/Group-69.png"
            alt="deco icon"
            className="absolute w-auto h-auto max-w-xs lg:max-w-lg xl:max-w-xl"
          />
          <img
            src="/gitlio.png"
            alt="Profile Image"
            className="relative z-10 w-auto h-auto max-w-xs lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <button
          className="btn btn-ghost mt-8 text-xl text-[#8288a1] underline underline-offset-4"
          onClick={() => openModal("login")}
        >
          LOG IN
        </button>
        <button
          className="btn btn-ghost text-xl text-[#8288a1] underline underline-offset-4"
          onClick={() => openModal("signin")}
        >
          SIGN IN
        </button>
      </div>

      {modalType === "login" && <LoginModal onClose={closeModal} />}
      {modalType === "signin" && <SignInModal onClose={closeModal} />}
    </div>
  );
};

export default StartPage;
