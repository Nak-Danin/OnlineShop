import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../main/index";
import {Loading, ScrollToTop} from "../components/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);
    if(document.readyState === "complete"){
      setIsLoaded(true);
    }
    else{
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  },[]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  },[]);
  if(!isLoaded) return <Loading/>
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
