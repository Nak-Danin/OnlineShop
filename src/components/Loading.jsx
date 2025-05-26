import loadingCircle from "../assets/images/Loading.gif"
import loadingDot from "../assets/images/LoadingDot.webp"

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-screen">
        <div className="flex justify-center items-center gap-1">
            <span className="font-mono text-[25px] md:text-[30px] tracking-tight">Loading Content</span>
            <img className="w-[25px] md:w-[30px] mt-3" src={loadingDot} alt="dot" />
        </div>
        <img className="w-[60px]" src={loadingCircle} alt="loadingCircle" />
        <span className="text-[17px] md:text-[20px] tracking-tight">Please Wait</span>
    </div>
  )
}

export default Loading