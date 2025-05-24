import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../main/index";
import {ScrollToTop} from "../components/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const RootLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  },[]);
  return (
    <div className="bg-gray-200/30">
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
