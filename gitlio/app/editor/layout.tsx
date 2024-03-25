import React from "react";

export default async function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>홈 레이아웃{children}</div>;
}
