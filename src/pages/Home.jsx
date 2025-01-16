import { Link } from 'react-router-dom';
import { useEffect } from 'react';

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

import PortfolioData from "../data/PortfolioData.js";
import TestimonialsData from "../data/TestimonialsData.js";


import { FaArrowRightLong, FaPeopleGroup, FaXTwitter, FaFacebook, FaInstagram,  FaLinkedin } from "react-icons/fa6";
import { RiBox3Fill } from "react-icons/ri";

import CTA_Bg from "../assets/CTA_Bg.svg";
import HeroBG1 from "../assets/HeroBG1.svg";
import HeroBG2 from "../assets/HeroBG2.svg";
import HeroLeftCornerBG from "../assets/HeroLeftCornerBG.svg";
import HeroRightCornerBG from "../assets/HeroRightCornerBG.svg";
import AgencyIcon1 from "../assets/AgencyIcon1.svg";
import AgencyIcon2 from "../assets/AgencyIcon2.svg";
import AgencyIcon3 from "../assets/AgencyIcon3.svg";
import AgencyIcon4 from "../assets/AgencyIcon4.svg";
import WorkImage from "../assets/WorkImage.png";

// import { useMouse } from '../component/use-mouse.jsx';

import fluidCursor from '../hooks/useFluidCursor.jsx';



const Home = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    fluidCursor();
  }, []);

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
    benefitstl.from(".sl-benefits-6", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");

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
    agencytl.from(".sl-agency-6", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },"-=0.6");

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
      <div className="fixed top-0 left-0 z-2">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
      <div className="flex flex-col items-center w-full relative z-10" >
        <div className="absolute w-full h-[300px] z-0 xxxs:h-[170px] sm:h-[280px] lg:h-[240px] xl:h-[300px]" id="home"><img className="absolute w-full h-[300px] z-0 object-cover xxxs:h-[170px] sm:h-[280px] lg:h-[240px] xl:h-[300px]"  src={HeroBG1} alt="HeroBG1" /></div>
        <img className="absolute w-full h-[300px] top-[500px] object-cover z-0 xxs:top-[580px] xxxs:h-[170px] xs:top-[680px] sm:h-[180px] sm:top-[620px] md:h-[220px] md:top-[580px] lg:top-[440px] xl:top-[480px] xl:h-[360px]" src={HeroBG2} alt="HeroBG2" />
        <img className="absolute left-0 z-0 xxxs:h-[170px] xxs:h-[190px] sm:h-[220px] lg:h-[320px]" src={HeroLeftCornerBG} alt="HeroLeftCornerBG" />
        <img className="absolute right-0 z-0 xxxs:h-[170px] xxs:h-[190px] sm:h-[220px] lg:h-[320px]" src={HeroRightCornerBG} alt="HeroRightCornerBG" />
        <NavBar/>
        <div className="flex flex-col w-10/12 mt-36 z-10 xxxs:w-11/12 xxxs:mt-20 xxs:mt-24 xs:w-10/12 xs:mt-28 sm:w-11/12 sm:mt-28 md:w-10/12 lg:mt-32 xl:mt-36 2xl:max-w-[1440px] 2xl:mt-40">
          <div className="w-full flex flex-col justify-between items-center gap-16 xxxs:items-start xs:gap-20 sm:gap-12 lg:gap-20 xl:gap-16  2xl:gap-20">
            <div className=" w-9/12 flex flex-col items-center gap-6 xxxs:w-full xxxs:gap-4 xs:gap-5 sm:w-10/12 sm:gap-4 lg:w-9/12 lg:max-w-[640px] lg:gap-5 xl:gap-6 xl:w-10/12 xl:max-w-full 2xl:gap-8 2xl:w-10/12 2xl:max-w-[1100px]">
              <h1 className="hero-h1-1 text-[64px] leading-tight text-textHeading text-center capitalize font-semibold xxxs:text-start xxxs:text-[28px] xxs:text-[32px] xs:text-[38px] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[64px] 2xl:text-[68px]">We transform your ideas for websites and apps into reality</h1>
              <p className="hero-p-2 w-6/12 text-lg text-textDescription text-center xxxs:text-start xxxs:w-full xxxs:text-sm xxs:text-[16px] xs:text-[20px] sm:w-10/12 sm:text-lg md:w-9/12 lg:w-6/12 xl:w-8/12 xl:max-w-[450px] 2xl:max-w-[600px] 2xl:w-7/12 2xl:text-xl">We specialize in crafting a unique digital presence that helps businesses grow and stand out in their industries</p>
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
          <HeadingBlock className={"sl-headBlock-1"} badgeheading={"OUR SERVICES"} mainheading={"Discover Our "} mainspan={"Expertise"} description={"With expertise and precision, we deliver quality solutions that set new benchmarks for success"} />
          <ServiceCards />
        </div>
        <div className="sl-benefits w-full h-full flex justify-center items-center mt-24 mb-4 xxxs:flex-col-reverse xxxs:gap-14 xxxs:mt-14 xxs:gap-16 xxs:mt-16 xs:mt-20 sm:flex-col-reverse sm:gap-16 sm:mb-14 lg:flex-row xl:mt-24 xl:mb-4 2xl:mt-28">
          <div className="w-10/12 h-full flex flex-row justify-between gap-10 xxxs:w-11/12 xxxs:flex-col-reverse xxxs:gap-5 xxs:gap-6 xs:gap-7 xs:w-10/12 sm:w-11/12 sm:flex-col-reverse sm:gap-4 md:w-10/12 lg:flex-row lg:gap-8 xl:gap-10 2xl:max-w-[1440px]">
            <div className="w-[50%] flex flex-col justify-between items-center gap-12 xxxs:w-full sm:w-full lg:gap-8 2xl:gap-14">
              <div className="w-full flex flex-col justify-between items-start gap-6 xxxs:hidden sm:hidden lg:flex lg:gap-5 2xl:gap-7">
                <div className="sl-benefits-2 flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-lg text-badgeText border border-badgeText text-sm lg:text-[12px] lg:py-1 lg:px-3 xl:px-4 2xl:text-[16px] 2xl:px-6">
                  <div><RiBox3Fill /></div>
                  <p>OUR WORK</p>
                </div>
                <div className="flex flex-col justify-between items-start gap-3 lg:gap-3 2xl:gap-4">
                  <p className="sl-benefits-3 text-4xl font-semibold lg:text-[32px] xl:text-4xl 2xl:text-[40px]">What Sets Techwara Apart?</p>
                  <p className="sl-benefits-4 font-bodyfont text-lg text-textDescription lg:text-sm xl:text-lg 2xl:text-xl">At Techwara, we don’t just deliver services—we craft tailored solutions designed to meet your unique needs. With a focus on measurable outcomes, we ensure your business achieves growth, engagement, and long-term success.</p>
                </div> 
              </div>
              <div className="w-full grid grid-cols-2 gap-4 xxxs:gap-3 xxs:gap-4 xs:gap-5 sm:grid-cols-4 lg:grid-cols-2 2xl:gap-5">
                <div className="sl-benefits-5 flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border xxxs:flex-col xxxs:items-start xxxs:gap-4 xxxs:p-3 xxs:p-4 xs:p-5 sm:flex-col sm:items-start sm:p-3 lg:p-3 lg:gap-3 lg:flex-row lg:items-center xl:p-4 2xl:gap-5">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText xxs:p-2 sm:p-3 lg:p-2 xl:p-3"><FaPeopleGroup className="w-6 h-6 lg:w-5 lg:h-5 xxxs:h-4 xxxs:w-4 xs:h-6 xs:w-6 sm:w-5 sm:h-5 xl:h-6 xl:w-6 2xl:w-7 2xl:h-7" /></div>
                  <div className="flex flex-wrap xxxs:text-[12px] xxs:text-sm xs:text-base sm:text-sm lg:text-[12px] lg:leading-4 xl:text-base">Strategic Approach: Aligning plans with your goals.</div>
                </div>
                <div className="sl-benefits-5 flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border xxxs:flex-col xxxs:items-start xxxs:gap-4 xxxs:p-3 xxs:p-4 xs:p-5 sm:flex-col sm:items-start sm:p-3 lg:p-3 lg:gap-3 lg:flex-row lg:items-center xl:p-4 2xl:gap-5">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText xxs:p-2 lg:p-2 xl:p-3"><FaPeopleGroup className="w-6 h-6 lg:w-5 lg:h-5 xxxs:h-4 xxxs:w-4 xs:h-6 xs:w-6 sm:w-5 sm:h-5 xl:h-6 xl:w-6 2xl:w-7 2xl:h-7" /></div>
                  <div className="flex flex-wrap xxxs:text-[12px] xxs:text-sm xs:text-base sm:text-sm lg:text-[12px] lg:leading-4 xl:text-base">Seamless Collaboration: Your vision, our priority</div>
                </div>
                <div className="sl-benefits-6 flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border xxxs:flex-col xxxs:items-start xxxs:gap-4 xxxs:p-3 xxs:p-4 xs:p-5 sm:flex-col sm:items-start sm:p-3 lg:p-3 lg:gap-3 lg:flex-row lg:items-center xl:p-4 2xl:gap-5">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText xxs:p-2 lg:p-2 xl:p-3"><FaPeopleGroup className="w-6 h-6 lg:w-5 lg:h-5 xxxs:h-4 xxxs:w-4 xs:h-6 xs:w-6 sm:w-5 sm:h-5 xl:h-6 xl:w-6 2xl:w-7 2xl:h-7" /></div>
                  <div className="flex flex-wrap xxxs:text-[12px] xxs:text-sm xs:text-base sm:text-sm lg:text-[12px] lg:leading-4 xl:text-base">Innovative Execution: Your vision, our priority</div>
                </div>
                <div className="sl-benefits-6 flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border xxxs:flex-col xxxs:items-start xxxs:gap-4 xxxs:p-3 xxs:p-4 xs:p-5 sm:flex-col sm:items-start sm:p-3 lg:p-3 lg:gap-3 lg:flex-row lg:items-center xl:p-4 2xl:gap-5">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText xxs:p-2 lg:p-2 xl:p-3"><FaPeopleGroup className="w-6 h-6 lg:w-5 lg:h-5 xxxs:h-4 xxxs:w-4 xs:h-6 xs:w-6 sm:w-5 sm:h-5 xl:h-6 xl:w-6 2xl:w-7 2xl:h-7" /></div>
                  <div className="flex flex-wrap xxxs:text-[12px] xxs:text-sm xs:text-base sm:text-sm lg:text-[12px] lg:leading-4 xl:text-base">Results-Driven: Delivering success that counts</div>
                </div>
              </div>
            </div>
            <div className="sl-benefits-1 w-[50%] flex justify-center items-center rounded-3xl overflow-hidden xxxs:w-full xxxs:rounded-2xl sm:w-full sm:rounded-2xl xl:rounded-3xl">
              <img className="w-full h-full object-cover" src={WorkImage} alt="" />
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:hidden"><HeadingBlock className="lg:hidden" badgeheading={"OUR SERVICES"} mainheading={"Explore Our Core"} mainspan={"Services"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."}/></div>
        </div>
        <div className="sl-portfolio w-full flex flex-col justify-between items-center gap-20 mb-24 pt-40 xxxs:pt-28 xxxs:gap-14 xxxs:mb-14 xxs:pt-32 xxs:gap-16 xxs:mb-16 xs:mb-20 xs:pt-36 sm:mb-14 sm:pt-32 sm:gap-16 lg:gap-16 lg:pt-28 xl:gap-20 xl:mb-24 xl:pt-36 2xl:gap-24" id="work">
          <HeadingBlock className={"sl-pf-headBlock-1"} badgeheading={"OUR WORK"} mainheading={"Explore Our "} mainspan={"Portfolio"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <div className="sl-pf-card-2 w-10/12 grid grid-cols-2 gap-5 xxxs:grid-cols-1 xxxs:w-11/12 xxxs:gap-4 xxs:gap-5 xs:w-10/12 sm:w-11/12 sm:grid-cols-2 sm:gap-4 md:w-10/12 xl:gap-5 xl:max-w-[1100px] 2xl:gap-8 2xl:max-w-[1440px]">
            {
              PortfolioData.map((cardData, index) => (
                <PortfolioCard imageURL={cardData.imageURL} cardName={cardData.name} cardDescription={cardData.description} cardLink={cardData.pageLink} key={index} />
              ))
            }        
          </div>
        </div>
        <div className="sl-agency w-full h-full flex justify-center items-center my-24 xxxs:flex-col xxxs:gap-14 xxxs:my-14 xxs:gap-16 xxs:my-16 xs:my-20 sm:flex-col sm:gap-16 sm:my-14 lg:flex-row xl:my-24 2xl:my-28">
          <div className="flex w-full items-center justify-center lg:hidden"><HeadingBlock badgeheading={"OUR SERVICES"} mainheading={"Explore Our Core"} mainspan={"Services"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."}/></div>
          <div className="w-10/12 h-full flex flex-row justify-between gap-10 xxxs:flex-col xxxs:w-11/12 xxxs:gap-5 xxs:gap-6 xs:w-10/12 sm:w-11/12 sm:flex-col sm:gap-6 md:w-10/12 lg:flex-row lg:gap-8 xl:gap-10 2xl:max-w-[1440px]">
            <div className="sl-agency-1 w-[50%] flex justify-center items-center rounded-3xl overflow-hidden xxxs:w-full xxxs:rounded-2xl sm:w-full">
              <img className="w-full h-full object-cover" src={WorkImage} alt="" />
            </div>
            <div className=" w-[50%] flex flex-col justify-between items-center gap-12 xxxs:w-full sm:w-full lg:gap-8 xl:gap-12 2xl:gap-14">
              <div className="w-full flex flex-col justify-between items-start gap-6 xxxs:hidden sm:hidden lg:flex lg:gap-5 xl:gap-6 2xl:gap-7">
                <div className="sl-agency-2 flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-lg text-badgeText border border-badgeText text-sm lg:text-[12px] lg:py-1 lg:px-3 2xl:text-[16px] 2xl:px-6">
                  <RiBox3Fill />
                  <p>OUR WORK</p>
                </div>
                <div className="flex flex-col justify-between items-start gap-3 lg:gap-3 2xl:gap-4">
                  <p className="sl-agency-3 text-4xl font-semibold lg:text-[32px] xl:text-4xl 2xl:text-[40px]">What’s Different In Our Agency</p>
                  <p className="sl-agency-4 font-bodyfont text-[18px] text-textDescription lg:text-sm xl:text-lg 2xl:text-xl">Delivering web, app, and design solutions that empower your brand and captivate your audience.</p>
                </div> 
              </div>
              <div className="w-full grid grid-cols-2 gap-4 2xl:gap-5 xxxs:grid-cols-1 sm:grid-cols-2 xl:gap-4">
                <div className="sl-agency-5 flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border xxxs:p-4 xxs:p-5 xs:p-6 lg:p-4 lg:gap-3 xl:gap-4 xl:p-5 2xl:gap-5">
                  <div className="flex justify-center items-center "><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon1} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg lg:text-[16px] xl:text-lg 2xl:text-xl">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="sl-agency-5 flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border xxxs:p-4 xxs:p-5 xs:p-6 lg:p-4 lg:gap-3 xl:gap-4 xl:p-5 2xl:gap-5">
                  <div className="flex justify-center items-center"><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon2} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg lg:text-[16px] xl:text-lg 2xl:text-xl">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="sl-agency-6 flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border xxxs:p-4 xxs:p-5 xs:p-6 lg:p-4 lg:gap-3 xl:gap-4 xl:p-5 2xl:gap-5">
                  <div className="flex justify-center items-center"><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon3} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg lg:text-[16px] xl:text-lg 2xl:text-xl">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="sl-agency-6 flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border xxxs:p-4 xxs:p-5 xs:p-6 lg:p-4 lg:gap-3 xl:gap-4 xl:p-5 2xl:gap-5">
                  <div className="flex justify-center items-center"><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon4} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg lg:text-[16px] xl:text-lg 2xl:text-xl">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sl-cta w-full h-full flex justify-center items-center xxxs:my-14 sm:my-16 lg:my-20">
            <div className="sl-cta-1 flex justify-start xxxs:w-11/12 xxxs:rounded-xl xxxs:px-7 xxxs:py-20 sm:w-11/12 sm:p-14 sm:rounded-3xl sm:justify-center md:w-10/12 lg:w-10/12 lg:rounded-3xl lg:py-14 xl:py-16 2xl:max-w-[1440px]" 
            style={{
                      backgroundImage: `url(${CTA_Bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                  }}>
              <div className="z-10 h-full flex flex-col justify-center xxxs:gap-6 sm:gap-12 lg:items-center lg:gap-10 2xl:max-w-[1100px]">
                <p className="sl-cta-2 text-white font-semibold capitalize xxxs:text-left xxxs:text-3xl xxs:text-[32px] xs:text-4xl sm:text-5xl sm:leading-tight sm:text-center lg:text-center lg:text-5xl lg:leading-snug xl:text-[52px] xl:leading-normal 2xl:leading-snug 2xl:text-6xl">Have a Vision for an App or Platform that can make a difference?</p>
                <div className="flex justify-center items-center xxxs:justify-start">
                  <a href="/">
                    <div className="sl-cta-3 text-lg bg-white text-black xxxs:text-base xxxs:rounded-md xxxs:px-10 xxxs:py-1 sm:text-xl sm:py-2 sm:px-12 sm:rounded-lg lg:px-12 lg:py-2 lg:rounded-lg">
                      Book a Call
                    </div>
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className="sl-testimonial w-full flex flex-col justify-between items-center gap-20 my-24 xxxs:my-14 xxs:my-16 xs:my-20 sm:my-14 xl:gap-20 xl:my-24 2xl:my-28 2xl:gap-24">
          <HeadingBlock className={"sl-testimonial-1"} badgeheading={"OUR WORK"} mainheading={"Explore Our "} mainspan={"Portfolio"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
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
        <div className="w-full flex flex-col justify-between items-center gap-20 my-24 xxxs:my-14 xxxs:gap-14 xxs:my-16 xxs:gap-16 xs:my-20 sm:my-16 xl:gap-20 xl:my-24">
          <HeadingBlock badgeheading={"CONTACT US"} mainheading={"Let’s Work Together"} />
          <div className="w-10/12 flex flex-col justify-between items-center gap-5 xxxs:w-11/12 xxxs:gap-7 xxs:gap-9 xs:w-10/12 sm:w-11/12 md:w-10/12 xl:gap-5 2xl:max-w-[1440px]">
            <ContactCards />
            <ContactForm />
            <footer className="w-full flex flex-row justify-between items-center px-10 py-4 gap-6 border border-border rounded-3xl bg-cardBg shadow-default xxxs:border-none xxxs:bg-background xxxs:flex-col-reverse xxxs:p-0 xxxs:shadow-none sm:px-5 sm:py-2 sm:rounded-2xl xl:px-10 xl:py-4 xl:gap-6 xl:rounded-3xl">
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
      </div>
    </div>
  )
}

export default Home
