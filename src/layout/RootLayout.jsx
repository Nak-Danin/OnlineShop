import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../main/index";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
