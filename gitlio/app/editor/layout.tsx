import cx from "classnames";
import TopBar from "@/app/editor/_components/TopBar";
import LeftSidebar from "@/app/editor/_components/LeftSidebar";
import BaseSideBar from "@/app/editor/_components/(rightSideBar)/BaseSideBar";

type Props = {
  children: React.ReactNode;
};
export default function EditorLayout({ children }: Props) {
  return (
    <div className="flex-row bg-backGray">
      <TopBar />
      <div className="flex justify-between w-full">
        <LeftSidebar />
        {children}
        <BaseSideBar />
      </div>
    </div>
  );
}
