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
      <ToastContainer />
      <div className="flex">
        <HeaderComponent open={open} setOpen={setOpen} />
        <main
          className={"flex-1 transition-all duration-300 ease-in-out  pl-25"}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
