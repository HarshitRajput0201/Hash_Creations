import { Link } from "react-router-dom";

import CTAButton from "./CTAButton";

import Logo from "../assets/AERIESYS.png";

const NavBar = () => {
  return (
    <div className='w-10/12 mx-auto flex flex-row justify-between sticky top-10 z-50'>
      <div className="flex justify-center items-center">
        <Link to={"/"}>
            <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex flex-row justify-around items-center border border-border rounded-xl text-lg gap-1 p-2 bg-nav-bg">
        <div className="flex justify-center items-center px-6 py-2 rounded-lg hover:text-navhover hover:bg-background transition-all duration-300 hover:cursor-pointer">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="flex justify-center items-center px-6 py-2 rounded-lg hover:text-navhover hover:bg-background transition-all duration-300 hover:cursor-pointer">
          <Link to={"/"}>Services</Link>
        </div>
        <div className="flex justify-center items-center px-6 py-2 rounded-lg hover:text-navhover hover:bg-background transition-all duration-300 hover:cursor-pointer">
          <Link to={"/"}>Work</Link>
        </div>
      </div>
      <CTAButton linkto={"/"}>Lets Talk</CTAButton>
    </div>
  )
}

export default NavBar

