import { HashLink } from 'react-router-hash-link'; 
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";
import Logo from "../assets/AERIESYS.svg";
import Sun_Icon from "../assets/light_mode_sun.svg";
import Moon_Icon from "../assets/dark_mode_moon.svg";



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

  return (
    <div className='w-10/12 mx-auto flex flex-row justify-between sticky top-10 z-50 transition-all duration-200 2xl:max-w-[1440px] '>
      <div className="flex justify-center items-center ">
        <Link to={"/"}>
            <img className="text-logoBg w-36" src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex flex-row justify-around items-center border border-navBorder rounded-xl text-navText text-lg gap-1 p-2 bg-navBg/50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 lg:text-sm lg:p-1">
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
      <div className="flex flex-row justify-between items-center gap-3">
      <button
          className="border border-border rounded-lg p-3 hover:cursor-pointer bg-navBg/50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 lg:p-2"
          onClick={toggleTheme}
        >
          <img className="h-6 w-6 lg:h-5 lg:w-5" src={isDarkMode ? Sun_Icon : Moon_Icon} alt="Theme Toggle Icon" />
        </button>
        <CTAButton linkto={"/"}>Lets Talk</CTAButton>
      </div>
    </div>
  )
}

export default NavBar

