import { Link } from "react-router-dom";
import logo1 from "../assets/images/Nike-Logo1.jpg";
import logo2 from "../assets/images/Nike-Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const messages = [
  "Welcome to Nike",
  "Check out the latest shoes",
  "Follow us on social media",
];
const Links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "About",
  },
  {
    label: "Visit Us",
    path: "Visit",
  },
  {
    label: "Contact",
    path: "Contact",
  },
  {
    label: "Service",
    path: "Service",
  },
  {
    label: "Store",
    path: "Store",
  },
];
const NavBar = () => {
  // const [index, setIndex] = useState(0);
  // const [animate, setAnimate] = useState(false);
  // useEffect(()=>{
  //   const interval = setInterval(() => {
  //     setAnimate(false);
  //     setTimeout(() => {
  //       setIndex((prev) => (prev+1) % messages.length);
  //       setAnimate(true);
  //     },300);
  //   },5000);
  //   return () => clearInterval(interval)
  // },[])
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
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
    <nav>
      <div className="bg-gray-100 text-black flex justify-between py-2 px-9 w-screen h-[38px]">
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
          <li className="hover:cursor-pointer">Login</li>
        </ul>
      </div>
      <div className="bg-white text-black flex justify-between py-2 px-9 items-center">
        <img className="w-fit h-[50px]" src={logo2} alt="logo2" />
        <ul className="flex gap-5 font-semibold font-mono">
          {Links.map(({ label, path }) => (
            <Link key={path} className="text-[15px]" to={path}>
              {label}
            </Link>
          ))}
        </ul>
        <aside className="relative flex gap-5">
          <FontAwesomeIcon
            className="absolute left-[1px] bg-gray-100 top-[1px] hover:bg-gray-300 p-[7px] rounded-full"
            icon={faSearch}
          />
          <input
            className="w-[80%] h-fit bg-gray-100 hover:bg-gray-300 rounded-[20px] p-1 text-center font-medium"
            type="text"
            placeholder="Look for"
          />
          <FontAwesomeIcon className="text-[1.3rem] mt-1" icon={faHeart} />
          <FontAwesomeIcon
            className="text-[1.3rem] mt-1"
            icon={faBagShopping}
          />
        </aside>
      </div>
      <div className="bg-gray-100 flex justify-center items-center w-screen h-[45px] overflow-hidden">
        <div
          className={`font-semibold text-[12px] duration-300 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          {messages[index]}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
