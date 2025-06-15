import {
  faArrowRight,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-[40px]">
      <div className="bg-black text-white w-screen h-fit flex flex-col items-center gap-3 py-7">
        <h1 className="w-[calc(100vw-15%)] lg:w-[40vw] text-center font-bold text-[20px] lg:text-[30px]">
          A LEADER IN ATHLETIC PERFORMANCE SINCE 1949
        </h1>
        <p className=" w-[calc(100vw-10%)] lg:w-[57vw] text-[15px] font-normal text-justify whitespace-normal">
          We're inspired by athletes. From the very first track spikes Adi
          Dassler made in his workshop, creating the best gear for the athlete
          is what drives us to pursue technological breakthroughs and design
          innovations. Our sneakers and apparel are worn by world-record holders
          and medal winners, but it's just as important that road runners,
          weekend hikers, recreational soccer players, and fitness enthusiasts.
          From adidas Boost, the game-changing cushioning technology, to the
          world-beating design of Adizero Adios Pro running shoes to Terrex
          outdoor gear to soccer cleats with unbeatable touch, we're always
          iterating, innovating and improving with athletes in mind. <br />{" "}
          <br />
          The 3-Stripes have appeared on medal stands all around the world, but
          they've also had an influence that extends far beyond the field of
          play. adidas sneakers have been worn by hip-hop performers, skaters,
          artists and all the other change-makers who move the culture forward
          with their vision and uncompromising style. We've made our mark with
          legendary lifestyle shoes like the adidas Superstar, the Stan Smith
          and the Samba, shoes that began as athletic footwear before hitting
          the streets and leaving an indelible impression on the culture.
          <br />
          <br />
          adidas Originals apparel is a stylish complement to our lifestyle
          shoes. Our streetwear collections pull from the archives to put a
          modern spin on classics like the Firebird tracksuit and the Tiro pant.
          Luxe materials, sophisticated silhouettes and unexpected details
          elevate our streetwear and transcend sport while at the same time
          never losing sight of our heritage. Because our mantra is, and has
          always been, that through sport we have the power to change lives.
        </p>
      </div>
      <div className="bg-yellow-400 text-black font-sans flex justify-center gap-3 items-center py-3">
        <h1 className="text-[12px] font-bold md:text-[20px]">
          JOIN OUR CLUB & GET 15% OFF
        </h1>
        <Link
          to="/register"
          className="bg-black hover:cursor-pointer active:bg-black/70 font-medium text-white text-[11px] md:text-[18px] px-3 py-2 rounded flex justify-center items-center gap-3 border-[1px] border-white"
        >
          <h1>SIGN UP FOR FREE</h1>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className="flex justify-evenly w-screen px-2 gap-2 py-3">
        <div className="w-[calc(100vw/3)] md:w-[calc(100vw/4)] ps-3 ">
          <h1 className=" font-semibold font-sans text-[15px] md:text-[20px]">
            PRODUCTS
          </h1>
          <ul className="text-[13px] font-sans md:text-[16px] space-y-2 py-2">
            <li>Shoes</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
            <li>New Arrival</li>
          </ul>
        </div>
        <div className="w-[calc(100vw/3)] md:w-[calc(100vw/4)] ps-3 ">
          <h1 className=" font-semibold font-sans text-[15px] md:text-[20px]">
            SUPPORT
          </h1>
          <ul className="text-[13px] font-sans md:text-[16px] space-y-2 py-2">
            <li>Help</li>
            <li>Return Policy</li>
            <li>Shipping</li>
            <li>Order Tracker</li>
            <li>Store Locator</li>
          </ul>
        </div>
        <div className="md:w-[calc(100vw/4)] ps-3 hidden md:block">
          <h1 className=" font-semibold font-sans text-[15px] md:text-[20px]">
            COMPANY INFO
          </h1>
          <ul className="text-[13px] font-sans md:text-[16px] space-y-2 py-2">
            <li>About Us</li>
            <li>Discount</li>
            <li>Careers</li>
            <li>Nike App</li>
            <li>Nike Stories</li>
          </ul>
        </div>
        <div className="w-[calc(100vw/3)] md:w-[calc(100vw/4)] ps-3 ">
          <h1 className=" font-semibold font-sans text-[15px] md:text-[20px]">
            FOLLOW US
          </h1>
          <ul className="text-[13px] font-sans md:text-[16px] space-y-2 py-2">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon
                className="text-[15px] md:text-[20px]"
                icon={faFacebook}
              />
              Nike Official
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon
                className="text-[15px] md:text-[20px]"
                icon={faInstagram}
              />
              Nike_us_official
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon
                className="text-[15px] md:text-[20px]"
                icon={faXTwitter}
              />
              Nike@us
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon
                className="text-[15px] md:text-[20px]"
                icon={faPinterest}
              />
              USA-Nike
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon
                className="text-[15px] md:text-[20px]"
                icon={faTiktok}
              />
              Nike USA
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black/80 text-white flex flex-col justify-center items-center gap-4 py-4">
        <span className="md:text-[20px]">
          <FontAwesomeIcon icon={faEarthAmerica} /> United States
        </span>
        <div className="flex justify-evenly text-[12px] w-screen md:text-[16px]">
          <span>Customer Service</span>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </div>
        <span className="text-[12px] md:text-[15px]">
          {" "}
          &copy; 2025 Nike. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
