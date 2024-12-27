import HeaderComponent from "./Header/HeaderComponent";
import HomeComponent from "../Home/HomeComponent";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex">
      <HeaderComponent />
      <Outlet />
    </div>
  );
}

export default Layout;
