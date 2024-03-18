"use client";
import { usePathname } from "next/navigation";

export default function StdNavbar() {
  const pathname = usePathname();

  const getNavbarText = () => {
    if (pathname.includes("studio/statistics")) {
      return "Statistics";
    } else if (pathname.includes("studio/posts")) {
      return "Posts";
    } else if (pathname.includes("studio/settings")) {
      return "Settings";
    } else if (pathname.includes("studio/dashboard")) {
      return "Dashboard";
    } else if (pathname.includes("new/editproject")) {
      return "New Project";
    } else if (pathname.includes("new/showproject")) {
      return "Your Project";
    } else return "Unknown Page";
  };

  return (
    <div className="navbar border-b border-gray-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{getNavbarText()}</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
