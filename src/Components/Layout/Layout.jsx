import HeaderComponent from "./Header/HeaderComponent";
import HomeComponent from "../Home/HomeComponent";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <div className="flex">
      <HeaderComponent />
      <ToastContainer />
      <Outlet />
    </div>
  );
}

export default Layout;
