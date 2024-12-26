import CTAButton from "../component/CTAButton";
import ImgSlider from "../component/ImgSlider";
import NavBar from "../component/NavBar";
import { FaArrowRightLong } from "react-icons/fa6";
import HeroBG1 from "../assets/HeroBG1.svg";
import HeroBG2 from "../assets/HeroBG2.svg";
import HeroLeftCornerBG from "../assets/HeroLeftCornerBG.svg";
import HeroRightCornerBG from "../assets/HeroRightCornerBG.svg";
import ServiceCards from "../component/ServiceCards.jsx";
import HeadingBlock from "../component/HeadingBlock.jsx";
import { RiBox3Fill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import WorkImage from "../assets/WorkImage.png";
import PortfolioCard from "../component/PortfolioCard.jsx";
import PortfolioData from "../data/PortfolioData.js";
import AgencyIcon1 from "../assets/AgencyIcon1.svg";
import AgencyIcon2 from "../assets/AgencyIcon2.svg";
import AgencyIcon3 from "../assets/AgencyIcon3.svg";
import AgencyIcon4 from "../assets/AgencyIcon4.svg";
import TestimonialBlock from "../component/TestimonialBlock.jsx";
import TestimonialsData from "../data/TestimonialsData.js";
import ContactCards from "../component/ContactCards.jsx";
import ContactForm from "../component/ContactForm.jsx";
import { FaFacebook, FaInstagram,  FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';





const Home = () => {
  return (
    <div className="flex flex-col items-center w-full font-headingfont bg-background text-textHeading relative transition-all duration-200">
      <div className="flex flex-col items-center w-full relative z-10" >
        <div className="absolute w-full h-[300px] z-0 xxs:h-[170px]" id="home"><img className="absolute w-full h-[300px] z-0 object-cover xxs:h-[170px]"  src={HeroBG1} alt="HeroBG1" /></div>
        <img className="absolute w-full h-[300px] top-[500px] z-0 lg:top-[380px] xl:top-[440px] xxs:top-[580px] xxs:h-[170px] object-cover" src={HeroBG2} alt="HeroBG2" />
        <img className="absolute left-0 z-0 xxs:h-[190px]" src={HeroLeftCornerBG} alt="HeroLeftCornerBG" />
        <img className="absolute right-0 z-0 xxs:h-[190px]" src={HeroRightCornerBG} alt="HeroRightCornerBG" />
        <NavBar/>
        <div className="flex flex-col w-10/12 mt-36 z-10 2xl:max-w-[1440px] 2xl:mt-40 lg:mt-32 xl:mt-36 xxs:w-11/12 xxs:mx-4 xxs:mt-24">
          <div className="w-full flex flex-col justify-between items-center gap-16 2xl:gap-20 lg:gap-12 xl:gap-16 xxs:items-start">
            <div className="w-9/12 flex flex-col items-center gap-6 2xl:gap-8 lg:gap-5 xl:gap-6 xxs:w-full xxs:gap-4">
              <h1 className="text-[64px] leading-tight text-textHeading text-center capitalize font-semibold 2xl:text-[68px] xl:text-[56px] lg:text-[48px] xxs:text-[32px] xxs:text-start">Transforming Business with Cutting-Edge Solution</h1>
              <p className="w-6/12 text-lg text-textDescription text-center 2xl:text-xl lg:w-8/12 xl:w-7/12 xxs:text-start xxs:w-full xxs:text-[16px]">We Create Custom Software, Mobile Apps, and Seamless UI/UX Designs</p>
            </div>
            <div className="flex justify-center items-start">
              <CTAButton linkto="/">
                <div className="flex justify-between items-center gap-2 text-lg 2xl:text-xl lg:text-[16px] xxs:text-[16px]">
                  <p>Book a Consultation Call</p>
                  <FaArrowRightLong />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-32 mb-24 overflow-x-hidden 2xl:mt-36 lg:mt-20 lg:mb-16 xxs:mt-20 xxs:mb-16">
          <ImgSlider/>
        </div>
        <div className="w-full flex flex-col justify-between items-center pt-40 gap-20 mb-24 2xl:gap-24 lg:gap-16 lg:pt-28 xxs:pt-32 xxs:gap-16 xxs:mb-16" id="services">
          <HeadingBlock badgeheading={"OUR SERVICES"} mainheading={"Explore Our Core"} mainspan={"Services"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <ServiceCards />
        </div>
        <div className="w-full flex justify-center items-center mt-24 mb-4 2xl:mt-28 xxs:flex-col-reverse xxs:gap-16 xxs:mt-16">
          <div className="w-10/12 flex flex-row justify-between items-center gap-10 2xl:max-w-[1440px] lg:gap-8 xxs:w-11/12 xxs:mx-4 xxs:flex-col-reverse xxs:gap-6">
            <div className="w-[50%] h-full flex flex-col justify-between items-center gap-12 2xl:gap-14 lg:gap-8 xxs:w-full">
              <div className="w-full flex flex-col justify-between items-start gap-6 2xl:gap-7 lg:gap-5 xxs:hidden">
                <div className="flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-lg text-badgeText border border-badgeText text-sm 2xl:text-[16px] 2xl:px-6 lg:text-[12px] lg:py-1 lg:px-3">
                  <div><RiBox3Fill /></div>
                  <p>OUR WORK</p>
                </div>
                <div className="flex flex-col justify-between items-start gap-3 2xl:gap-4 lg:gap-3">
                  <p className="text-4xl font-semibold 2xl:text-[40px] lg:text-[32px]">What Will You Get From Us</p>
                  <p className="font-bodyfont text-lg text-textDescription 2xl:text-xl lg:text-sm">Delivering web, app, and design solutions that empower your brand and captivate your audience.</p>
                </div> 
              </div>
              <div className="w-full grid grid-cols-2 gap-4 2xl:gap-5 xxs:gap-4">
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border 2xl:gap-5 lg:p-3 lg:gap-3 xxs:flex-col xxs:items-start xxs:gap-4">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText lg:p-2 xxs:p-2"><FaPeopleGroup className="w-6 h-6 2xl:w-7 2xl:h-7 lg:w-5 lg:h-5 xxs:h-4 xxs:w-4" /></div>
                  <div className="flex flex-wrap lg:text-[12px] xxs:text-sm">Responsive and Mobile-First Design</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border 2xl:gap-5 lg:p-3 lg:gap-3 xxs:flex-col xxs:items-start xxs:gap-4">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText lg:p-2  xxs:p-2"><FaPeopleGroup className="w-6 h-6 2xl:w-7 2xl:h-7 lg:w-5 lg:h-5 xxs:h-4 xxs:w-4" /></div>
                  <div className="flex flex-wrap lg:text-[12px] xxs:text-sm">Responsive and Mobile-First Design</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border 2xl:gap-5 lg:p-3 lg:gap-3 xxs:flex-col xxs:items-start xxs:gap-4">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText lg:p-2  xxs:p-2"><FaPeopleGroup className="w-6 h-6 2xl:w-7 2xl:h-7 lg:w-5 lg:h-5 xxs:h-4 xxs:w-4" /></div>
                  <div className="flex flex-wrap lg:text-[12px] xxs:text-sm">Responsive and Mobile-First Design</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border 2xl:gap-5 lg:p-3 lg:gap-3 xxs:flex-col xxs:items-start xxs:gap-4">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText lg:p-2  xxs:p-2"><FaPeopleGroup className="w-6 h-6 2xl:w-7 2xl:h-7 lg:w-5 lg:h-5 xxs:h-4 xxs:w-4" /></div>
                  <div className="flex flex-wrap lg:text-[12px] xxs:text-sm">Responsive and Mobile-First Design</div>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center rounded-3xl overflow-hidden xxs:w-full xxs:rounded-2xl">
              <img className="w-full h-full object-cover" src={WorkImage} alt="" />
            </div>
          </div>
          <HeadingBlock badgeheading={"OUR SERVICES"} mainheading={"Explore Our Core"} mainspan={"Services"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."}/>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-20 mb-24 pt-40 2xl:gap-24 lg:gap-16 lg:pt-28 xxs:pt-32 xxs:gap-16 xxs:mb-16" id="work">
          <HeadingBlock badgeheading={"OUR WORK"} mainheading={"Explore Our "} mainspan={"Portfolio"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <div className="w-10/12 grid grid-cols-2 gap-5 2xl:gap-8 2xl:max-w-[1440px] xxs:grid-cols-1 xxs:w-11/12 xxs:mx-4">
            {
              PortfolioData.map((cardData, index) => (
                <PortfolioCard imageURL={cardData.imageURL} cardName={cardData.name} cardDescription={cardData.description} cardLink={cardData.pageLink} key={index} />
              ))
            }        
          </div>
        </div>
        <div className="w-full flex justify-center items-center my-24 2xl:my-28 xxs:flex-col xxs:gap-16 xxs:my-16">
          <HeadingBlock badgeheading={"OUR SERVICES"} mainheading={"Explore Our Core"} mainspan={"Services"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."}/>
          <div className="w-10/12 flex flex-row justify-between items-center gap-10 2xl:max-w-[1440px] lg:gap-8 xxs:flex-col xxs:w-11/12 xxs:mx-4 xxs:gap-6">
            <div className="w-[50%] h-full flex justify-center items-center rounded-3xl overflow-hidden xxs:w-full xxs:rounded-2xl">
              <img className="w-full h-full object-cover" src={WorkImage} alt="" />
            </div>
            <div className="w-[50%] h-full flex flex-col justify-between items-center gap-12 2xl:gap-14 lg:gap-8 xxs:w-full">
              <div className="w-full flex flex-col justify-between items-start gap-6 2xl:gap-7 lg:gap-5 xxs:hidden">
                <div className="flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-lg text-badgeText border border-badgeText text-sm 2xl:text-[16px] 2xl:px-6 lg:text-[12px] lg:py-1 lg:px-3">
                  <RiBox3Fill />
                  <p>OUR WORK</p>
                </div>
                <div className="flex flex-col justify-between items-start gap-3 2xl:gap-4 lg:gap-3">
                  <p className="text-4xl font-semibold 2xl:text-[40px] lg:text-[32px]">What’s Different In Our Agency</p>
                  <p className="font-bodyfont text-[18px] text-textDescription 2xl:text-xl lg:text-sm">Delivering web, app, and design solutions that empower your brand and captivate your audience.</p>
                </div> 
              </div>
              <div className="w-full grid grid-cols-2 gap-4 2xl:gap-5 xxs:grid-cols-1">
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border 2xl:gap-5 lg:p-4 lg:gap-3">
                  <div className="flex justify-center items-center "><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon1} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg 2xl:text-xl lg:text-[16px]">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border 2xl:gap-5 lg:p-4 lg:gap-3">
                  <div className="flex justify-center items-center"><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon2} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg 2xl:text-xl lg:text-[16px]">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border 2xl:gap-5 lg:p-4 lg:gap-3">
                  <div className="flex justify-center items-center"><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon3} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg 2xl:text-xl lg:text-[16px]">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border 2xl:gap-5 lg:p-4 lg:gap-3">
                  <div className="flex justify-center items-center"><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon4} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg 2xl:text-xl lg:text-[16px]">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-20 my-24 2xl:my-28 2xl:gap-24 xxs:my-16">
          <HeadingBlock badgeheading={"OUR WORK"} mainheading={"Explore Our "} mainspan={"Portfolio"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <div className="TestimonialsDiv w-10/12 h-[600px] flex flex-row justify-between items-center gap-5 overflow-hidden 2xl:max-w-[1440px] lg:max-w-[900px] xxs:w-11/12 xxs:mx-4 xxs:flex-col xxs:h-fit xxs:gap-4">
            <div className="overflow-hidden h-full">
              <TestimonialBlock TestimonialsData={TestimonialsData} direction="down"/>
            </div>
            <div className="overflow-hidden h-full">
              <TestimonialBlock TestimonialsData={TestimonialsData} direction="up"/>
            </div>
            <div className="overflow-hidden h-full xxs:hidden">
              <TestimonialBlock TestimonialsData={TestimonialsData} direction="down"/>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-20 my-24 xxs:my-16 xxs:gap-16">
          <HeadingBlock badgeheading={"CONTACT US"} mainheading={"Let’s Work Together"} />
          <div className="w-10/12 flex flex-col justify-between items-center gap-5 2xl:max-w-[1440px] xxs:w-11/12 xxs:mx-4 xxs:gap-9">
            <ContactCards />
            <ContactForm />
            <footer className="w-full flex flex-row justify-between items-center px-10 py-4 border border-border rounded-3xl shadow-default bg-cardBG xxs:bg-background xxs:border-none  xxs:flex-col-reverse xxs:p-0 gap-6 xxs:shadow-none">
              <p className="text-textDescription xxs:text-center xxs:text-sm">All Copyrights Reserved By Aeriesys Tech 2024 </p>
              <div className="flex flex-row justify-between items-center gap-2">
                <Link to={"/"}> 
                  <div className="flex justify-center items-center p-2 border border-border rounded-2xl xxs:rounded-lg"><FaFacebook className="w-7 h-7 text-footerIconText" /></div>
                </Link>
                <Link to={"/"}>
                  <div className="flex justify-center items-center p-2 border border-border rounded-2xl xxs:rounded-lg"><FaLinkedin className="w-7 h-7 text-footerIconText" /></div>
                </Link>
                <Link to={"/"}>
                  <div className="flex justify-center items-center p-2 border border-border rounded-2xl xxs:rounded-lg"><FaInstagram className="w-7 h-7 text-footerIconText" /></div>
                </Link>
                <Link to={"/"}>
                  <div className="flex justify-center items-center p-2 border border-border rounded-2xl xxs:rounded-lg"><FaXTwitter className="w-7 h-7 text-footerIconText" /></div>
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
