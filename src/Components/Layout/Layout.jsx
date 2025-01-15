import Sidebar from "./SidebarComponent/Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <ToastContainer />
      <Outlet />
    </div>
  );
}

export default Layout;
