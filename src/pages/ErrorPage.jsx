import { Link } from "react-router-dom";
import img from "../assets/images/ErrorPage.gif";
const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 justify-center items-center w-screen h-screen bg-violet-400/90">
        <h1 className="text-2xl md:text-[40px] font-mono font-medium text-shadow-sm text-shadow-black text-white">Something Went Wrong</h1>
        <img className="rounded-[25px] w-[350px] md:w-[600px] border-2 border-red-800" src={img} alt="PageNotFound" />
        <Link to="/" className="bg-green-500 text-white px-3 py-2 rounded-[10px] font-light font-mono border-white border-2 text-2xl md:text-[35px] tracking-tight">GO HOME</Link>
    </div>
  )
}

export default ErrorPage