import Logo from "@/components/Logo";
import PublishBtn from "@/components/PublishBtn";
import Title from "@/components/Title";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-w-full h-full bg-background ">
      <main className="flex flex-grow w-full h-full">{children}</main>
    </div>
  );
}

export default Layout;
