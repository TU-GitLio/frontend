import Navbar from "../../../../../components/Studio/StdNavbar";
import Sidebar from "../../../../../components/Studio/StdSidebar";
import PostList from "../../../../../components/Studio/PostList";
import PostMenu from "../../../../../components/Studio/PostMenu";

export default function PostPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <PostMenu />
        <div className="flex-1 p-4">
          <PostList />
        </div>
      </div>
    </div>
  );
}
