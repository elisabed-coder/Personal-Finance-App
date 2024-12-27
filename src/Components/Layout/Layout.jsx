import HeaderComponent from "../Header/HeaderComponent";
import HomeComponent from "../Home/HomeComponent";

function Layout() {
  return (
    <div className="flex">
      <HeaderComponent />
      <HomeComponent />
    </div>
  );
}

export default Layout;
