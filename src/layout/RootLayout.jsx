import { Outlet } from "react-router-dom"
import { Footer, NavBar } from "../main/index"

const RootLayout = () => {
  return (
    <div className="overflow-x-hidden relative w-screen h-screen">  
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout