import { NavLink, Link } from "react-router-dom";
import logo1 from "../assets/images/Nike-Logo1.jpg";
import logo2 from "../assets/images/Nike-Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "../hooks/useCartProvider";
import {
  faArrowRight,
  faBagShopping,
  faBars,
  faSearch,
  faUser,
  faX,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const messages = [
  "Welcome to Nike",
  "Check out the latest shoes",
  "Follow us on social media",
];
const Links = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "MEN",
    path: "men",
  },
  {
    label: "WOMEN",
    path: "women",
  },
  {
    label: "KID",
    path: "kid",
  },
  {
    label: "SALE",
    path: "sale",
  },
  {
    label: "NEW & TRENDING",
    path: "new&trending",
  },
];
const NavBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const { cart } = useCart();
  useEffect(() => {
    if (isClick) {
      document.querySelector("body").style.cssText = "overflow-y: hidden";
    } else {
      document.querySelector("body").style.cssText = "overflow-y: auto";
    }
  }, [isClick]);
  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setAnimate(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <nav className="sticky top-0 z-10">
        <div
          className={
            isSearch
              ? "lg:hidden flex justify-center bg-gray-200 py-2 items-center gap-3"
              : "hidden"
          }
        >
          <input
            autoComplete="true"
            className="border-2 text-center rounded-[5px] outline-0 w-[calc(100vw/3)] text-[14px] md:text-[20px]"
            type="search"
            placeholder="Search Here"
          />
          <FontAwesomeIcon
            onClick={() => setIsSearch(false)}
            className="text-[1.1rem] hover:bg-black/30 p-1 rounded-[2px]"
            icon={faX}
          />
        </div>
        <div className="bg-gray-100 text-black lg:flex justify-between py-2 px-9 w-screen h-[38px] hidden">
          <img
            className="w-fit rounded-[5px] h-[20px] border-2 border-black/40 object-cover"
            src={logo1}
            alt="logo1"
          />
          <ul className="flex gap-5 text-[12px] font-medium">
            <li className="border-e-2 border-black pe-3 hover:cursor-pointer">
              Find a store
            </li>
            <li className="border-e-2 border-black pe-3 hover:cursor-pointer">
              Aid
            </li>
            <li className="border-e-2 border-black pe-3 hover:cursor-pointer">
              Join
            </li>
            <Link to="login" className="hover:cursor-pointer">
              Login
            </Link>
          </ul>
        </div>
        <div className="bg-white text-black flex justify-between py-2 px-9 items-center w-screen">
          <img className="w-fit h-[50px]" src={logo2} alt="logo2" />
          <ul className="flex gap-5 font-semibold font-mono">
            {Links.map(({ label, path }) => (
              <NavLink
                key={path}
                className={`text-[15px] underline-offset-4 decoration-2 hidden lg:block`}
                to={path}
              >
                {label}
              </NavLink>
            ))}
          </ul>
          <aside className="relative flex items-center gap-5">
            <FontAwesomeIcon
              onClick={() => setIsSearch(true)}
              className="lg:absolute lg:left-[1px] lg:text-[1.2em] lg:top-0 left-[0px] bg-gray-100 top-[1px] md:text-[30px] hover:bg-gray-300 p-[7px] rounded-full  "
              icon={faSearch}
            />
            <input
              className="w-[60%] hidden lg:block h-fit bg-gray-100 hover:bg-gray-300 rounded-[20px] p-1 text-center font-medium"
              type="search"
              placeholder="Searching"
            />
            <Link to="/wishlist">
              <FontAwesomeIcon
                className="text-[1.3rem] lg:text-[1.3rem] mt-1 md:text-[30px]"
                icon={faHeart}
              />
            </Link>
            <Link to="/cart">
              <FontAwesomeIcon
                className="text-[1.3rem] lg:text-[1.3rem] mt-1 md:text-[30px]"
                icon={faBagShopping}
              />
              <span className="ms-1 font-medium text-red-500">
                {cart.length}
              </span>
            </Link>
            <Link to="login">
              <FontAwesomeIcon
                className="text-[1.1rem] lg:text-[1.1rem] mt-1 md:text-[26px]"
                icon={faUser}
              />
            </Link>
            <FontAwesomeIcon
              onClick={() => setIsClick(true)}
              className="text-[1.3rem] lg:text-[1.3rem] mt-1 lg:!hidden md:text-[30px]"
              icon={faBars}
            />
          </aside>
        </div>
      </nav>
      <div className="bg-gray-100 flex justify-center items-center w-screen h-[45px] overflow-hidden">
        <div
          className={`font-semibold text-[12px] md:text-[15px] duration-300 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          {messages[index]}
        </div>
      </div>
      <div
        className={
          isClick ? "w-screen h-screen bg-black/40 fixed top-0 z-20" : "hidden"
        }
      ></div>
      <div
        className={`w-[50%] md:w-[40%] fixed h-screen bg-white right-0 top-0 duration-500 z-30 transition-all ${
          isClick ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <main className=" flex justify-end">
          <FontAwesomeIcon
            className="text-[1rem] m-4 md:text-[20px]"
            onClick={() => setIsClick(false)}
            icon={faX}
          />
        </main>
        <ul className="flex flex-col px-5 gap-4 font-semibold">
          {Links.map(({ label, path }) => (
            <Link
              onClick={() => setIsClick(false)}
              key={path}
              className="text-[13px] md:text-[20px] flex justify-between items-center bg-black/20 px-2 py-1"
              to={path}
            >
              {label}
              <FontAwesomeIcon
                className="text-[8px] md:text-[15px] text-gray-600"
                icon={faArrowRight}
              />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
