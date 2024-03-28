import React from "react";

export default async function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="bg-backGray">
        <div className="w-full h-16 bg-slate-600 text-white">상단바</div>
        {children}
      </main>
    </div>
  );
}
