import cx from "classnames"
import TopBar from "@/app/editor/_components/TopBar";

type Props = {
    children: React.ReactNode;
}
export default function EditorLayout({ children } : Props) {
    const layoutSelected = true
    return (
        <div className="flex-row">
            <TopBar />
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-center bg-amber-300 w-1/5 h-dvh">
                    <div>=============</div>
                    <div>왼쪽 사이드바 2</div>
                    <div>왼쪽 사이드바 3</div>
                </div>
                {children}
                <div className="flex flex-col items-center w-1/5 h-dvh bg-blue-400">
                    <div role="tablist" className="tabs bg-neutral-300 tabs-boxed my-6 grid grid-flow-col auto-cols-fr">
                        <a role="tab" className={cx("tab", !layoutSelected && "bg-base-100")}>Content</a>
                        <a role="tab" className={cx("tab", layoutSelected && "bg-base-100")}>Layout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}