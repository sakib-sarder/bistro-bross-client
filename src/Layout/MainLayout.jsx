import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const MainLayout = () => {
  const location = useLocation();
  const hoHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {hoHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {hoHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
