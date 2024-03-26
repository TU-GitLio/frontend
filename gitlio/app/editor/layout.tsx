import { LuAlignJustify, LuBarChartBig } from "react-icons/lu";
import { FaGlobeAsia } from "react-icons/fa";

type Props = {
    children: React.ReactNode;
}
export default function EditorLayout({ children } : Props) {
    return (
        <div>
            <div className="navbar bg-neutral-800">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-white hover:bg-base-300/20">GITLIO</a>
                </div>
                <div className="flex-none gap-6">
                    <a className="btn btn-ghost text-lg text-white hover:bg-base-300/20">
                        <FaGlobeAsia className="text-white size-6"/>
                        공유
                    </a>
                    <button className="btn">
                        <div className="mx-2 text-lg text">저장</div>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        <LuBarChartBig className="text-white size-6"/>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        <LuAlignJustify className="text-white size-6"/>
                    </button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component"
                                     src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                            </div>
                        </div>
                        <ul tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            이게 맞나?
            {children}
        </div>
    )
}