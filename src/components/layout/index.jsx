import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex h-dvh overflow-hidden">
      <Sidebar />

      <div className="overflow-y-auto w-full px-3 pb-5">
        <Outlet />{" "}
      </div>
    </div>
  );
};

export default Layout;
