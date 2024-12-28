import { HashLink } from 'react-router-hash-link'; 
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";
import Logo from "../assets/AERIESYS.svg";
import Sun_Icon from "../assets/light_mode_sun.svg";
import Moon_Icon from "../assets/dark_mode_moon.svg";
import NavBarIconLight from "../assets/navBarIconLight.svg";
import NavBarIconDark from "../assets/navBarIconDark.svg";
import NavCrossIconLight from "../assets/navCrossIconLight.svg";
import NavCrossIconDark from "../assets/navCrossIconDark.svg";





const NavBar = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize theme based on localStorage or system preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [activeSection, setActiveSection] = useState('home');

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const divs = document.querySelectorAll('div[id]'); // Select all divs with an id attribute
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the active section
          }
        });
      },
      { threshold: 0.25 } // Trigger when at least 50% of the div is visible
    );

    divs.forEach((div) => {
      observer.observe(div); // Observe each div
    });

    // Cleanup the observer
    return () => observer.disconnect();
  }, []);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar'); // Adjust the selector to match your navbar element
      if (navbar && !navbar.contains(event.target)) {
        setIsNavbarOpen(false);
      }
    };

    if (isNavbarOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isNavbarOpen]);

  const getNavIcon = (isDarkMode, isNavbarOpen) => {
    if (isDarkMode) {
      return isNavbarOpen ? NavCrossIconLight : NavBarIconLight ;
    }
    return isNavbarOpen ? NavCrossIconDark : NavBarIconDark ;
  };

  return (
    <div className='w-10/12 mx-auto flex flex-col justify-between items-center sticky top-10 z-50 transition-all duration-200 xxxs:w-11/12 xxxs:top-5 xxs:w-11/12 xxs:gap-3 xxs:top-6 xs:top-8 xs:w-10/12'>
      <div className='navbar w-full flex flex-row justify-between xxxs:bg-navBg/50 xxxs:bg-clip-padding xxxs:backdrop-filter xxxs:backdrop-blur-md xxxs:bg-opacity-0 xxxs:border xxxs:border-navBorder xxxs:rounded-xl xxxs:p-3 xxs:p-4'>
        <div className="flex justify-center items-center">
          <Link to={"/"}>
              <img className="text-logoBg xxxs:w-28 xxs:w-32 xs:w-36 lg:w-36 xl:w-44" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex flex-row justify-around items-center border border-navBorder rounded-xl text-navText text-lg gap-1 p-2 bg-navBg/50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 xxxs:hidden lg:text-sm lg:p-1 xl:text-lg xl:p-2">
          <div className={`flex justify-center items-center px-6 py-2 rounded-lg text-heading hover:text-navTextHover  transition-all duration-200 hover:cursor-pointer ${activeSection === 'home' ? 'text-navTextHover bg-navBtnsBG transition-all duration-200' : ''}`}>
            <HashLink to="#home">Home</HashLink>
          </div>
          <div className={`flex justify-center items-center px-6 py-2 rounded-lg text-heading hover:text-navTextHover  transition-all duration-200 hover:cursor-pointer ${activeSection === 'services' ? 'text-navTextHover bg-navBtnsBG transition-all duration-200' : ''}`}>
            <HashLink to="#services">Services</HashLink>
          </div>
          <div className={`flex justify-center items-center px-6 py-2 rounded-lg text-heading hover:text-navTextHover  transition-all duration-200 hover:cursor-pointer ${activeSection === 'work' ? 'text-navTextHover bg-navBtnsBG transition-all duration-200' : ''}`}>
            <HashLink to="#work">Work</HashLink>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-3 xxxs:gap-2 xxs:gap-2 xs:gap-3">
          <button
            className="border border-border rounded-lg p-3 hover:cursor-pointer bg-navBg/50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 lg:p-2 lg:h-9 lg:w-9 xl:h-12 xl:w-12 xl:p-3 xxxs:p-2 xxs:p-2 xs:p-3"
            onClick={toggleTheme}
          >
            <img className="h-6 w-6 lg:h-5 lg:w-5 xl:w-6 xl:h-6 xxxs:h-5 xxxs:w-5 xxs:h-5 xxs:w-5 xs:h-6 xs:w-6" src={isDarkMode ? Sun_Icon : Moon_Icon} alt="Nav Toggle Icon" />
          </button>
          <button
            className="border border-border rounded-lg p-3 hover:cursor-pointer bg-navBg/50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 lg:p-2 lg:h-9 lg:w-9 xl:h-12 xl:w-12 xl:p-3 xxxs:p-2 xxs:p-2 xs:p-3"
            onClick={toggleNavbar}
          >
            <img className="h-6 w-6 lg:h-5 lg:w-5 xl:w-6 xl:h-6 xxxs:h-5 xxxs:w-5 xxs:h-5 xxs:w-5 xs:h-6 xs:w-6" src={getNavIcon(isDarkMode, isNavbarOpen)} alt="Nav Toggle Icon" />
          </button>
          <div className='flex justify-center items-center xxxs:hidden'><CTAButton linkto={"/"}>Lets Talk</CTAButton></div>
        </div>
      </div>
      {isNavbarOpen && (
        <div className={`navbar absolute flex flex-col xxxs:w-full xxxs:bg-navBg/50 xxxs:bg-clip-padding xxxs:backdrop-filter xxxs:backdrop-blur-md xxxs:bg-opacity-0 xxxs:border xxxs:border-navBorder xxxs:rounded-xl xxxs:gap-2 xxxs:top-[72px] xxs:top-20 xxxs:p-3 xxs:p-4 xs:text-lg xs:top-24 transition-all duration-300  ${isNavbarOpen ? 'open' : 'closed'}`}>
          <div className={`h-full flex justify-center items-center px-6 py-2 rounded-lg text-heading hover:text-navTextHover transition-all duration-200 hover:cursor-pointer ${
              activeSection === "home" ? "text-navTextHover bg-navBtnsBG transition-all duration-200" : ""}`}>
            <HashLink className='w-full text-center' to="#home">Home</HashLink>
          </div>
          <div
            className={`h-full flex justify-center items-center px-6 py-2 rounded-lg text-heading hover:text-navTextHover transition-all duration-200 hover:cursor-pointer ${
              activeSection === "services" ? "text-navTextHover bg-navBtnsBG transition-all duration-200" : ""
            }`}
          >
            <HashLink className='w-full text-center' to="#services">Services</HashLink>
          </div>
          <div
            className={`h-full flex justify-center items-center px-6 py-2 rounded-lg text-heading hover:text-navTextHover transition-all duration-200 hover:cursor-pointer ${
              activeSection === "work" ? "text-navTextHover bg-navBtnsBG transition-all duration-200" : ""
            }`}
          >
            <HashLink className='w-full text-center' to="#work">Work</HashLink>
          </div>
          <div className="h-full flex justify-center items-center">
            <CTAButton linkto={"/"}>Lets Talk</CTAButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar;

