import Sidebar from "./SidebarComponent/Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HeaderComponent from "./SidebarComponent/Sidebar";
import { useState, useEffect } from "react";

function Layout() {
  const [open, setOpen] = useState(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(open));
  }, [open]);

  return (
    <div>
      <div className="flex flex-1">
        <HeaderComponent open={open} setOpen={setOpen} />
        <ToastContainer />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
