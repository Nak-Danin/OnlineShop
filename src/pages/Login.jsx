import loginBG from "../assets/images/loginBG.webp";
import login from "../assets/images/login.avif";
import nike from "../assets/images/Nike-logo1.jpg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import google from "../assets/images/googleIcon.png";
import facebook from "../assets/images/facebookIcon.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  useEffect(()=>{
    const input1 = document.querySelector(".input1");
    const input2 = document.querySelector(".input2");
    const span1 = document.querySelector(".span1");
    const span2 = document.querySelector(".span2");
    const handleFocus = (span) => {
      span.style.top = "-15px";
      span.style.fontSize = "10px";
    };

    const handleBlur = (input, span) => {
      if (!input.value) {
        span.style.top = "8px";
        span.style.fontSize = "16px";
      }
    };
    input1.addEventListener("focus", () => handleFocus(span1));
    input2.addEventListener("focus", () => handleFocus(span2));
    input1.addEventListener("blur", () => handleBlur(input1, span1));
    input2.addEventListener("blur", () => handleBlur(input2, span2));
    return () => {
      input1.removeEventListener("focus", () => handleFocus(span1));
      input1.removeEventListener("blur", () => handleBlur(input1, span1));
      input2.removeEventListener("focus", () => handleFocus(span2));
      input2.removeEventListener("blur", () => handleBlur(input2, span2));
    };
  },[])
  return (
    <div className="w-screen h-[750px] flex justify-center items-center bg-center bg-cover" style={{backgroundImage: `url(${loginBG})`}}>
        <div className="flex items-center justify-between border-[3px] border-violet-500 md:border-none w-[90%] lg:w-[55%] px-6 h-[65%] lg:h-[70%] md:h-[70%] rounded-xl bg-white">
            <img className=" object-cover rounded-xl w-[45%] h-[90%] hidden md:block" src={login} alt="" />
            <div className="md:border-2 border-blue-500 rounded-xl md:w-[51%] w-full h-[90%] flex flex-col gap-2 justify-center items-center">
              <img className="w-[60px] h-[25px] border-[1px] rounded" src={nike} alt="" />   
              <span className="text-[35px] font-bold">Welcome Back</span>   
              <span className="text-[14px] tracking-tight">please login to your account</span> 
              <div className="bg-gray-300/50 px-2 py-[20px] rounded text-[16px] w-[90%] md:w-3/4 mt-3 relative">
                <input className="absolute input1 w-full focus:border-none focus:outline-none z-10 top-2" type="text"/> 
                <span className="span1 absolute top-2 left-2 text-gray-600/90 z-0 text-[16px]">Email address</span> 
              </div> 
              <div className="bg-gray-300/50 px-2 py-[20px] rounded text-[16px] w-[90%] md:w-3/4 mt-2 relative">
                <input className="absolute input2 w-full focus:border-none focus:outline-none z-10 top-2" type={showPassword? "text":"password"}/> 
                <span className="span2 absolute top-2 left-2 text-gray-600/90 z-0 text-[16px]">Password</span>
                <FontAwesomeIcon onClick={() => setShowPassword(!showPassword)} className="eye absolute right-2 top-3 z-20" icon={showPassword? faEye : faEyeSlash}/>
              </div> 
              <Link to='/' type="submit" className="bg-blue-500 active:bg-blue-500/80 rounded-md text-white md:w-3/4 py-2 text-[16px] mt-2 text-center w-[90%]">Login</Link>
              <div className="relative border-t-[1px] border-black w-3/5 mt-4">
                <span className="bg-white px-2 py-1 absolute top-[-14px] right-[30%] text-[12px]">Or Login With</span>
              </div>
              <div className="grid grid-cols-2 gap-2 w-[90%] md:w-3/4 mt-3">
                <button className=" flex items-center justify-center gap-2 border-[1.5px] rounded border-gray-400/80 py-[7px] hover:cursor-pointer">
                  <img className="w-[20px]" src={google} alt="google" />
                  <span className="font-semibold">Google</span>
                </button>
                <button className=" flex items-center justify-center gap-2 border-[1.5px] rounded border-gray-400/80 py-[7px] hover:cursor-pointer">
                  <img className="w-[20px]" src={facebook} alt="google" />
                  <span className="font-semibold">Facebook</span>
                </button>
              </div>
              <div className="flex justify-center gap-2 text-[12px]">
                <span className="text-gray-600">Don't have an account yet?</span>
                <span className="text-blue-600 font-medium">Register</span>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Login;