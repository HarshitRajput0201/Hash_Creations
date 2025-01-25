import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CTAButton from "../component/CTAButton.jsx";
import ImgSlider from "../component/ImgSlider.jsx";
import NavBar from "../component/NavBar.jsx";
import ServiceCards from "../component/ServiceCards.jsx";
import HeadingBlock from "../component/HeadingBlock.jsx";
import TestimonialBlock from "../component/TestimonialBlock.jsx";
import ContactCards from "../component/ContactCards.jsx";
import ContactForm from "../component/ContactForm.jsx";
import PortfolioCard from "../component/PortfolioCard.jsx";
import Benefits from "../component/Benefits.jsx";
import Agency from "../component/Agency.jsx"

import PortfolioData from "../data/PortfolioData.js";
import TestimonialsData from "../data/TestimonialsData.js";

import { FaArrowRightLong, FaXTwitter, FaFacebook, FaInstagram,  FaLinkedin } from "react-icons/fa6";

import CTA_Bg from "../assets/CTA_Bg.svg";
import HeroBG1 from "../assets/HeroBG1.svg";
import HeroBG2 from "../assets/HeroBG2.svg";
import HeroLeftCornerBG from "../assets/HeroLeftCornerBG.svg";
import HeroRightCornerBG from "../assets/HeroRightCornerBG.svg";
import ServiceBadgeDark from '../assets/ServiceBadgeDark.svg';
import ServiceBadgeLight from '../assets/ServiceBadgeLight.svg';
import ContactBadgeDark from '../assets/contactBadgeDark.svg';
import ContactBadgeLight from '../assets/contactBadgeLight.svg';
import AboutUsBadgeDark from '../assets/aboutusbadgeDark.svg';
import AboutUsBadgeLight from '../assets/aboutusbadgeLight.svg';
import ProcessBadgeDark from '../assets/processBadgeDark.svg';
import ProcessBadgeLight from '../assets/processBadgeLight.svg';
import TestimonialBadgeDark from '../assets/testimonialBadgeDark.svg';
import TestimonialBadgeLight from '../assets/testimonialBadgeLight.svg';
import WorkBadgeDark from '../assets/workBadgeDark.svg';
import WorkBadgeLight from '../assets/workBadgeLight.svg';


const Home = () => {


  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize theme based on localStorage or system preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
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

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const herotl = gsap.timeline();
  
    // Animate Navbar
    herotl.from(".navbar", {
      y: 30,
      opacity: 0,
      duration: 0.8, // Animation duration
      ease: "power2.out",
    });
  
    // Animate Heading with overlap
    herotl.from(
      ".hero-h1-1",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.7" // Overlap with Navbar animation
    );
  
    // Animate Paragraph with overlap
    herotl.from(
      ".hero-p-2",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.7" // Overlap with Heading animation
    );
  
    // Animate Button with overlap
    herotl.from(
      ".hero-btn-3",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.7" // Overlap with Paragraph animation
    );
  
    // Animate Image Slider with overlap
    herotl.from(
      ".imgSlider-4",
      {
        y: 30,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      },
      "-=0.7" // Overlap with Button animation
    );

    herotl.from(
      ".hero-bg-img-5",
      {
        y: -30,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      },
      "-=1" // Overlap with Button animation
    );

    const servicetl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sl-service", // Trigger animations for section-2
        start: "top 50%", // Start animation when the section hits the center of the viewport
        end: "bottom 70%",
        // markers: true, // Enable markers to debug
      },
    });

    servicetl.from(".sl-headBlock-1-head-badge", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" });
    servicetl.from(".sl-headBlock-1-head-heading", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    servicetl.from(".sl-headBlock-1-head-description", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    servicetl.from(".sl-serviceCard", { y: 30, opacity: 0, duration: 1, ease: "power2.out" },"-=0.7");

    const benefitstl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sl-benefits", // Trigger animations for section-2
        start: "top 50%", // Start animation when the section hits the center of the viewport
        end: "bottom 70%",
        // markers: true, // Enable markers to debug
      },
    });

    benefitstl.from(".sl-benefits-1", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" });
    benefitstl.from(".sl-benefits-2", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    benefitstl.from(".sl-benefits-3", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    benefitstl.from(".sl-benefits-4", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    benefitstl.from(".sl-benefits-5", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");

    const portfoliotl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sl-portfolio", // Trigger animations for section-2
        start: "top 50%", // Start animation when the section hits the center of the viewport
        end: "bottom 70%",
        // markers: true, // Enable markers to debug
      },
    });

    portfoliotl.from(".sl-pf-headBlock-1-head-badge", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" });
    portfoliotl.from(".sl-pf-headBlock-1-head-heading", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    portfoliotl.from(".sl-pf-headBlock-1-head-description", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    portfoliotl.from(".sl-pf-card-2", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");

    const agencytl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sl-agency", // Trigger animations for section-2
        start: "top 50%", // Start animation when the section hits the center of the viewport
        end: "bottom 70%",
        // markers: true, // Enable markers to debug
      },
    });

    agencytl.from(".sl-agency-1", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" });
    agencytl.from(".sl-agency-2", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    agencytl.from(".sl-agency-3", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    agencytl.from(".sl-agency-4", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    agencytl.from(".sl-agency-5", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");

    const ctatl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sl-cta", // Trigger animations for section-2
        start: "top 50%", // Start animation when the section hits the center of the viewport
        end: "bottom 70%",
        // markers: true, // Enable markers to debug
      },
    });

    ctatl.from(".sl-cta-1", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" });
    ctatl.from(".sl-cta-2", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    ctatl.from(".sl-cta-3", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
  
    const testimonialtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sl-testimonial", // Trigger animations for section-2
        start: "top 50%", // Start animation when the section hits the center of the viewport
        end: "bottom 70%",
        // markers: true, // Enable markers to debug
      },
    });

    testimonialtl.from(".sl-testimonial-1-head-badge", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" });
    testimonialtl.from(".sl-testimonial-1-head-heading", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    testimonialtl.from(".sl-testimonial-1-head-description", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
    testimonialtl.from(".sl-testimonial-2", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");
  }, []);


  return (
    <div className="flex flex-col items-center w-full font-headingfont bg-background text-textHeading relative transition-all duration-200 ">
      <div className="flex flex-col items-center w-full relative z-10" >
        <div className="absolute w-full h-[300px] z-0 xxxs:h-[170px] sm:h-[280px] lg:h-[240px] xl:h-[300px]" id="home"><img className="absolute w-full h-[300px] z-0 object-cover xxxs:h-[170px] sm:h-[280px] lg:h-[240px] xl:h-[300px]"  src={HeroBG1} alt="HeroBG1" /></div>
        <img className="absolute w-full h-[300px] top-[500px] object-cover z-0 xxs:top-[580px] xxxs:h-[170px] xs:top-[680px] sm:h-[180px] sm:top-[620px] md:h-[220px] md:top-[580px] lg:top-[440px] xl:top-[480px] xl:h-[360px]" src={HeroBG2} alt="HeroBG2" />
        <img className="hero-bg-img-5 absolute left-0 z-0 xxxs:h-[170px] xxs:h-[190px] sm:h-[220px] lg:h-[320px]" src={HeroLeftCornerBG} alt="HeroLeftCornerBG" />
        <img className="hero-bg-img-5 absolute right-0 z-0 xxxs:h-[170px] xxs:h-[190px] sm:h-[220px] lg:h-[320px]" src={HeroRightCornerBG} alt="HeroRightCornerBG" />
        <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div className="flex flex-col w-10/12 mt-36 z-10 xxxs:w-11/12 xxxs:mt-20 xxs:mt-24 xs:w-10/12 xs:mt-28 sm:w-11/12 sm:mt-28 md:w-10/12 lg:mt-32 xl:mt-36 2xl:max-w-[1440px] 2xl:mt-40">
          <div className="w-full flex flex-col justify-between items-center gap-16 xxxs:items-start xs:gap-20 sm:gap-12 lg:gap-20 xl:gap-16  2xl:gap-20">
            <div className=" w-9/12 flex flex-col items-center gap-6 xxxs:w-full xxxs:gap-4 xs:gap-5 sm:w-10/12 sm:gap-4 lg:w-9/12 lg:max-w-[640px] lg:gap-5 xl:gap-6 xl:w-10/12 xl:max-w-full 2xl:gap-8 2xl:w-10/12 2xl:max-w-[1100px]">
              <h1 className="hero-h1-1 text-[64px] leading-tight text-textHeading text-center capitalize font-semibold xxxs:text-start xxxs:text-[28px] xxs:text-[32px] xs:text-[38px] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[64px] 2xl:text-[68px]">We transform your ideas for websites and apps into reality</h1>
              <p className="hero-p-2 w-6/12 text-lg font-bodyfont text-textDescription text-center xxxs:text-start xxxs:w-full xxxs:text-sm xxs:text-[16px] xs:text-[20px] sm:w-10/12 sm:text-lg md:w-9/12 lg:w-6/12 xl:w-8/12 xl:max-w-[450px] 2xl:max-w-[600px] 2xl:w-7/12 2xl:text-xl">We specialize in crafting a unique digital presence that helps businesses grow and stand out in their industries</p>
            </div>
            <div className="hero-btn-3 flex justify-center items-start">
              <CTAButton linkto="/">
                <div className=" flex justify-between items-center gap-2 text-lg xxxs:text-sm xxs:text-[16px] xs:text-lg sm:text-lg md:text-base lg:text-lg lg:px-2 2xl:text-xl">
                  <p>Book a Consultation Call</p>
                  <FaArrowRightLong />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="imgSlider-4 w-full flex justify-center items-center mt-32 mb-24 overflow-x-hidden xxxs:mt-16 xxxs:mb-14 xxs:mt-20 xxs:mb-16 xs:mt-24 xs:mb-20 sm:mt-24 sm:mb-16 lg:mt-20 lg:mb-16 xl:mt-32 xl:mb-24 2xl:mt-36 2xl:mb-28">
          <ImgSlider/>
        </div>
        <div className="sl-service w-full flex flex-col justify-between items-center pt-40 gap-20 mb-24 xxxs:pt-28 xxxs:gap-14 xxxs:mb-14 xxs:pt-32 xxs:gap-16 xxs:mb-16 xs:mb-20 xs:pt-36 sm:mb-14 sm:pt-32 lg:gap-16 lg:pt-28 xl:pt-36 xl:gap-20 xl:mb-24 2xl:gap-24" id="services">
          <HeadingBlock className={"sl-headBlock-1"} badgeicon={!isDarkMode ? ServiceBadgeDark : ServiceBadgeLight} badgeheading={"OUR SERVICES"} mainheading={"Discover Our "} mainspan={"Expertise"} description={"With expertise and precision, we deliver quality solutions that set new benchmarks for success"} />
          <ServiceCards />
        </div>
        <Benefits badgeicon={!isDarkMode ? AboutUsBadgeDark : AboutUsBadgeLight} />
        <div className="sl-portfolio w-full flex flex-col justify-between items-center gap-20 mb-24 pt-40 xxxs:pt-28 xxxs:gap-14 xxxs:mb-14 xxs:pt-32 xxs:gap-16 xxs:mb-16 xs:mb-20 xs:pt-36 sm:mb-14 sm:pt-32 sm:gap-16 lg:gap-16 lg:pt-28 xl:gap-20 xl:mb-24 xl:pt-36 2xl:gap-24" id="work">
          <HeadingBlock className={"sl-pf-headBlock-1"} badgeicon={!isDarkMode ? WorkBadgeDark : WorkBadgeLight} badgeheading={"OUR WORK"} mainheading={"Explore Our "} mainspan={"Portfolio"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <div className="sl-pf-card-2 w-10/12 grid grid-cols-2 gap-5 xxxs:grid-cols-1 xxxs:w-11/12 xxxs:gap-4 xxs:gap-5 xs:w-10/12 sm:w-11/12 sm:grid-cols-2 sm:gap-4 md:w-10/12 xl:gap-5 xl:max-w-[1100px] 2xl:gap-8 2xl:max-w-[1440px]">
            {
              PortfolioData.map((cardData, index) => (
                <PortfolioCard imageURL={cardData.imageURL} cardName={cardData.name} cardDescription={cardData.description} cardLink={cardData.pageLink} key={index} />
              ))
            }        
          </div>
        </div>
        <Agency badgeicon={!isDarkMode ? ProcessBadgeDark : ProcessBadgeLight} />
        <div className="sl-cta w-full h-full flex justify-center items-center xxxs:my-14 sm:my-16 lg:my-20">
            <div className="sl-cta-1 flex justify-start xxxs:w-11/12 xxxs:rounded-xl xxxs:px-7 xxxs:py-20 sm:w-11/12 sm:p-14 sm:rounded-3xl sm:justify-center md:w-10/12 lg:w-10/12 lg:rounded-3xl lg:py-14 xl:py-16 2xl:max-w-[1440px]" 
            style={{
                      backgroundImage: `url(${CTA_Bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                  }}>
              <div className="z-10 h-full flex flex-col justify-center xxxs:gap-6 sm:gap-12 lg:items-center lg:gap-10 2xl:max-w-[1100px]">
                <p className="sl-cta-2 text-white font-semibold capitalize xxxs:text-left xxxs:text-3xl xxs:text-[32px] xs:text-4xl sm:text-5xl sm:leading-tight sm:text-center lg:text-center lg:text-5xl lg:leading-snug xl:text-[52px] xl:leading-normal 2xl:leading-snug 2xl:text-6xl">Got an Idea? Let’s Make It Awesome Together — Click to Start!</p>
                <div className="flex justify-center items-center xxxs:justify-start">
                  <a href="/">
                    <div className="sl-cta-3 text-lg bg-white text-black xxxs:text-base xxxs:rounded-md xxxs:px-10 xxxs:py-1 sm:text-xl sm:py-2 sm:px-12 sm:rounded-lg lg:px-12 lg:py-2 lg:rounded-lg">
                    Build Now
                    </div>
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className="sl-testimonial w-full flex flex-col justify-between items-center gap-20 my-24 xxxs:my-14 xxs:my-16 xs:my-20 sm:my-14 xl:gap-20 xl:my-24 2xl:my-28 2xl:gap-24">
          <HeadingBlock className={"sl-testimonial-1"} badgeicon={!isDarkMode ? TestimonialBadgeDark : TestimonialBadgeLight} badgeheading={"TESTIMONIALS"} mainheading={"See What Our Clients Say"} mainspan={""} description={"Remarkable Stories That Showcase the Magic of Collaboration and Shared Success!"} />
          <div className="TestimonialsDiv sl-testimonial-2 w-10/12 h-[600px] flex flex-row justify-between items-center gap-5 overflow-hidden xxxs:w-11/12 xxxs:flex-col xxxs:h-fit xxxs:gap-4 xs:w-10/12 sm:w-11/12 sm:gap-4 md:w-10/12 md:max-w-[740px] lg:w-10/12 lg:max-w-full xl:gap-5 xl:max-w-[1100px] 2xl:max-w-[1200px]">
            <div className="overflow-hidden h-full">
              <TestimonialBlock TestimonialsData={TestimonialsData} direction="down"/>
            </div>
            <div className="overflow-hidden h-full">
              <TestimonialBlock TestimonialsData={TestimonialsData} direction="up"/>
            </div>
            <div className="overflow-hidden h-full xxxs:hidden sm:hidden lg:flex">
              <TestimonialBlock TestimonialsData={TestimonialsData} direction="down"/>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex flex-col justify-between items-center gap-20 my-24 xxxs:my-14 xxxs:gap-14 xxs:my-16 xxs:gap-16 xs:my-20 sm:my-16 xl:gap-20 xl:my-24">
          <HeadingBlock badgeheading={"CONTACT US"} badgeicon={!isDarkMode ? ContactBadgeDark : ContactBadgeLight} mainheading={"Hey! We are ready to consult you"} />
          <div className="w-10/12 flex flex-col justify-between items-center gap-5 xxxs:w-11/12 xxxs:gap-7 xxs:gap-9 xs:w-10/12 sm:w-11/12 md:w-10/12 xl:gap-5 2xl:max-w-[1440px]">
            <ContactCards />
            <ContactForm />
            <div className='w-full flex justify-center items-center relative overflow-hidden bg-border rounded-3xl shadow-default sm:rounded-2xl lg:p-[1px] xl:rounded-3xl'>
            <div className="gradient-bg absolute inset-0 z-0 xxxs:hidden sm:hidden lg:flex lg:rounded-2xl xl:rounded-3xl"></div>
            <footer className="w-full z-10 flex flex-row justify-between items-center px-10 py-4 gap-6 rounded-3xl bg-cardBg shadow-default xxxs:border-none xxxs:bg-background xxxs:flex-col-reverse xxxs:p-0 xxxs:shadow-none sm:px-5 sm:py-2 sm:rounded-2xl xl:px-10 xl:py-4 xl:gap-6 xl:rounded-3xl">
              <p className="text-textDescription xxxs:text-center xxxs:text-sm sm:text-sm xl:text-base">All Copyrights Reserved By Aeriesys Tech 2024 </p>
              <div className="flex flex-row justify-between items-center gap-2">
                <Link to={"/"}> 
                  <div className="flex justify-center items-center p-2 border border-border rounded-2xl xxxs:rounded-lg sm:rounded-xl"><FaFacebook className="w-7 h-7 text-footerIconText sm:w-5 sm:h-5" /></div>
                </Link>
                <Link to={"/"}>
                  <div className="flex justify-center items-center p-2 border border-border rounded-2xl xxxs:rounded-lg sm:rounded-xl"><FaLinkedin className="w-7 h-7 text-footerIconText sm:w-5 sm:h-5" /></div>
                </Link>
                <Link to={"/"}>
                  <div className="flex justify-center items-center p-2 border border-border rounded-2xl xxxs:rounded-lg sm:rounded-xl"><FaInstagram className="w-7 h-7 text-footerIconText sm:w-5 sm:h-5" /></div>
                </Link>
                <Link to={"/"}>
                  <div className="flex justify-center items-center p-2 border border-border rounded-2xl xxxs:rounded-lg sm:rounded-xl"><FaXTwitter className="w-7 h-7 text-footerIconText sm:w-5 sm:h-5" /></div>
                </Link>
              </div>
            </footer>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Home
