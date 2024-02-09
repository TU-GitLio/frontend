import Logo from "@/components/Logo";
import PublishBtn from "@/components/PublishBtn";
import Title from "@/components/Title";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-w-full min-h-screen bg-background ">
      <main className="flex flex-grow w-full h-screen">{children}</main>
    </div>
  );
}

export default Layout;
