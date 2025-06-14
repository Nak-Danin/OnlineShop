import register from "../assets/images/RegisterBG.jpg";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/images/googleIcon.png";
import facebook from "../assets/images/facebookIcon.png";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    const input1 = document.querySelector(".input1");
    const input2 = document.querySelector(".input2");
    const input3 = document.querySelector(".input3");
    const input4 = document.querySelector(".input4");
    const span1 = document.querySelector(".span1");
    const span2 = document.querySelector(".span2");
    const span3 = document.querySelector(".span3");
    const span4 = document.querySelector(".span4");
    const handleFocus = (span) => {
      span.style.top = "-18px";
      span.style.fontSize = "12px";
      span.classList.replace("text-gray-600/90","text-white");
      span.classList.add("font-medium");
    };
    const handleBlur = (span, input) => {
      if (!input.value) {
        span.style.top = "8px";
        span.style.fontSize = "16px";
        span.classList.replace("text-white","text-gray-600/90");
        span.classList.remove("font-medium");
      }
    };
    input1.addEventListener("focus", () => handleFocus(span1));
    input2.addEventListener("focus", () => handleFocus(span2));
    input3.addEventListener("focus", () => handleFocus(span3));
    input4.addEventListener("focus", () => handleFocus(span4));
    input1.addEventListener("blur", () => handleBlur(span1, input1));
    input2.addEventListener("blur", () => handleBlur(span2, input2));
    input3.addEventListener("blur", () => handleBlur(span3, input3));
    input4.addEventListener("blur", () => handleBlur(span4, input4));
    return () => {
      input1.removeEventListener("focus", () => handleFocus(span1));
      input2.removeEventListener("focus", () => handleFocus(span2));
      input3.removeEventListener("focus", () => handleFocus(span3));
      input4.removeEventListener("focus", () => handleFocus(span4));
      input1.removeEventListener("blur", () => handleBlur(span1, input1));
      input2.removeEventListener("blur", () => handleBlur(span2, input2));
      input3.removeEventListener("blur", () => handleBlur(span3, input3));
      input4.removeEventListener("blur", () => handleBlur(span4, input4));
    };
  }, []);
  return (
    <div
      className="relative w-screen h-[750px] flex items-center justify-center z-[1]"
      style={{ background: `url(${register}) center center/cover` }}
    >
      <form
        className="relative z-[3] flex flex-col items-center w-[90%] md:w-[70%] lg:w-[50%] h-[75%] lg:h-[75%] md:h-[85%] rounded-xl border-move
        bg-gradient-to-r animate-border shadow-[0_0_20px_rgba(255,0,255,0.4)] p-[6px]"
      >
        <div className="bg-gray-700 text-white w-full h-full rounded-xl z-[4] flex flex-col items-center justify-center gap-3">
          <span className="text-[35px] font-serif">Register</span>
          <div className="grid grid-cols-2 w-[90%] md:w-3/4 mt-3 gap-2">
            <div className="bg-white px-2 py-[20px] rounded text-[16px] relative">
            <input
              className="absolute ps-2 input1 w-full text-black focus:border-none focus:outline-none z-10 top-2"
              type="text"
            />
            <span className="transition-all span1 duration absolute top-2 left-4 text-gray-600/90 z-0 text-[16px]">
              First Name
            </span>
          </div>
          <div className="bg-white px-2 py-[20px] rounded text-[16px] relative">
            <input
              className="absolute ps-2 input2 w-full text-black focus:border-none focus:outline-none z-10 top-2"
              type="text"
            />
            <span className="span2 absolute top-2 left-4 text-gray-600/90 z-0 text-[16px]">
              Last Name
            </span>
          </div>
          </div>
          <div className="bg-white px-2 py-[20px] rounded text-[16px] w-[90%] md:w-3/4 mt-3 relative">
            <input
              className="absolute ps-2 input3 w-full text-black focus:border-none focus:outline-none z-10 top-2"
              type="text"
            />
            <span className="span3 absolute top-2 left-4 text-gray-600/90 z-0 text-[16px]">
              Email Address
            </span>
          </div>
          <div className="bg-white px-2 py-[20px] rounded text-[16px] w-[90%] md:w-3/4 mt-2 relative">
            <input
              className="absolute ps-2 input4 w-full text-black focus:border-none focus:outline-none z-10 top-2"
              type={showPassword ? "text" : "password"}
            />
            <span className="span4 absolute top-2 left-4 text-gray-600/90 z-0 text-[16px]">
              Password
            </span>
            <FontAwesomeIcon
              onClick={() => setShowPassword(!showPassword)}
              className="eye absolute right-4 top-3 z-20 text-black hover:cursor-pointer"
              icon={showPassword ? faEye : faEyeSlash}
            />
          </div>
          <Link
            to="/"
            type="submit"
            className="bg-blue-500/95 active:bg-blue-500/80 rounded-md text-white md:w-3/4 py-2 text-[16px] mt-2 text-center w-[90%]"
          >
            Sign Up
          </Link>
          <div className="relative border-t-[1px] border-white w-3/5 mt-5">
            <span className="bg-gray-700 px-1 py-1 absolute top-[-14px] right-[50%] translate-x-1/2 text-[12px]">
              Or Sign Up With
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 w-[90%] md:w-3/4 mt-5 text-black">
            <button className=" flex items-center justify-center gap-2 border-[1.5px] rounded bg-white/90 border-gray-400/90 py-[7px] hover:cursor-pointer">
              <img className="w-[20px]" src={google} alt="google" />
              <span className="font-semibold">Google</span>
            </button>
            <button className=" flex items-center justify-center gap-2 border-[1.5px] rounded bg-white/90 border-gray-400/90 py-[7px] hover:cursor-pointer">
              <img className="w-[20px]" src={facebook} alt="google" />
              <span className="font-semibold">Facebook</span>
            </button>
          </div>
          <div className="flex justify-center gap-2 text-[14px] mt-2">
            <span className="text-white">Already have an account?</span>
            <Link to="/login" className="text-blue-500 font-medium">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
