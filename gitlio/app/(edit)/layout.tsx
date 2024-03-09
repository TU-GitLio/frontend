"use client";

import Logo from "@/components/Logo";
import PublishBtn from "@/components/PublishBtn";
import Title from "@/components/Title";
import useStore from "@/hooks/darkmode";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  const { darkMode } = useStore();
  return (
    <div className="flex flex-col min-w-full min-h-screen bg-background">
      <main
        className={`flex flex-grow w-full ${
          darkMode ? "bg-black" : "bg-primary"
        } h-screen`}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
