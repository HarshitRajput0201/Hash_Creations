import { Link } from "react-router-dom";

import CTAButton from "./CTAButton";

import Logo from "../assets/AERIESYS.svg";


const NavBar = () => {
  return (
    <div className='w-10/12 mx-auto flex flex-row justify-between sticky top-10 z-50 2xl:max-w-[1440px]'>
      <div className="flex justify-center items-center ">
        <Link to={"/"}>
            <img className="text-logoBg" src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex flex-row justify-around items-center border border-navBorder rounded-xl text-navText text-lg gap-1 p-2 bg-navBg/50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
        <div className="flex justify-center items-center px-6 py-2 rounded-lg text-heading hover:text-navTextHover  transition-all duration-200 hover:cursor-pointer">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="flex justify-center items-center px-6 py-2 rounded-lg text-heading hover:text-navTextHover  transition-all duration-200 hover:cursor-pointer">
          <Link to={"/"}>Services</Link>
        </div>
        <div className="flex justify-center items-center px-6 py-2 rounded-lg text-heading hover:text-navTextHover  transition-all duration-200 hover:cursor-pointer">
          <Link to={"/"}>Work</Link>
        </div>
      </div>
      <CTAButton linkto={"/"}>Lets Talk</CTAButton>
    </div>
  )
}

export default NavBar

