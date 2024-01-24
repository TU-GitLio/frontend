import Logo from "@/components/Logo";
import PublishBtn from "@/components/PublishBtn";
import Title from "@/components/Title";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex items-center border-b border-border h-[75px] px-4 py-2">
        <Logo />
        <Title />
        <PublishBtn />
      </nav>
      <main className="flex flex-grow w-full h-full ">{children}</main>
    </div>
  );
}

export default Layout;
