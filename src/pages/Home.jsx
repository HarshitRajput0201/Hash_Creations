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
        <div className="absolute w-full h-[300px] z-0 xxxs:h-[170px] sm:h-[280px] lg:h-[240px] xl:h-[300px]" id="home"><img className="absolute w-full h-[300px] z-0 object-cover xxxs:h-[170px] sm:h-[280px] lg:h-[240px] xl:h-[300px]"  src={HeroBG1} alt="HeroBG1" /></div>
        <img className="absolute w-full h-[300px] top-[500px] object-cover z-0 xxs:top-[580px] xxxs:h-[170px] xs:top-[680px] sm:h-[180px] sm:top-[620px] md:h-[220px] md:top-[580px] lg:top-[440px] xl:top-[480px] xl:h-[360px]" src={HeroBG2} alt="HeroBG2" />
        <img className="absolute left-0 z-0 xxxs:h-[170px] xxs:h-[190px] sm:h-[220px] lg:h-[320px]" src={HeroLeftCornerBG} alt="HeroLeftCornerBG" />
        <img className="absolute right-0 z-0 xxxs:h-[170px] xxs:h-[190px] sm:h-[220px] lg:h-[320px]" src={HeroRightCornerBG} alt="HeroRightCornerBG" />
        <NavBar/>
        <div className="flex flex-col w-10/12 mt-36 z-10 xxxs:w-11/12 xxxs:mt-20 xxs:mt-24 xs:w-10/12 xs:mt-28 sm:w-11/12 sm:mt-28 md:w-10/12 lg:mt-32 xl:mt-36 2xl:max-w-[1440px] 2xl:mt-40">
          <div className="w-full flex flex-col justify-between items-center gap-16 xxxs:items-start xs:gap-20 sm:gap-12 lg:gap-20 xl:gap-16  2xl:gap-20">
            <div className="w-9/12 flex flex-col items-center gap-6 xxxs:w-full xxxs:gap-4 xs:gap-5 sm:w-10/12 sm:gap-4 lg:w-9/12 lg:max-w-[640px] lg:gap-5 xl:gap-6 xl:w-10/12 xl:max-w-full 2xl:gap-8 2xl:w-10/12 2xl:max-w-[1100px]">
              <h1 className="text-[64px] leading-tight text-textHeading text-center capitalize font-semibold xxxs:text-start xxxs:text-[28px] xxs:text-[32px] xs:text-[38px] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[64px] 2xl:text-[68px]">Transforming Business with Cutting-Edge Solution</h1>
              <p className="w-6/12 text-lg text-textDescription text-center xxxs:text-start xxxs:w-full xxxs:text-sm xxs:text-[16px] xs:text-[20px] sm:w-10/12 sm:text-lg md:w-9/12 lg:w-8/12 xl:w-6/12 xl:max-w-[450px] 2xl:text-xl">We Create Custom Software, Mobile Apps, and Seamless UI/UX Designs</p>
            </div>
            <div className="flex justify-center items-start">
              <CTAButton linkto="/">
                <div className="flex justify-between items-center gap-2 text-lg xxxs:text-sm xxs:text-[16px] xs:text-lg sm:text-lg md:text-base lg:text-lg lg:px-2 2xl:text-xl">
                  <p>Book a Consultation Call</p>
                  <FaArrowRightLong />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-32 mb-24 overflow-x-hidden xxxs:mt-16 xxxs:mb-14 xxs:mt-20 xxs:mb-16 xs:mt-24 xs:mb-20 sm:mt-24 sm:mb-16 lg:mt-20 lg:mb-16 xl:mt-32 xl:mb-24 2xl:mt-36 2xl:mb-28">
          <ImgSlider/>
        </div>
        <div className="w-full flex flex-col justify-between items-center pt-40 gap-20 mb-24 xxxs:pt-28 xxxs:gap-14 xxxs:mb-14 xxs:pt-32 xxs:gap-16 xxs:mb-16 xs:mb-20 xs:pt-36 sm:mb-14 sm:pt-32 lg:gap-16 lg:pt-28 xl:pt-36 xl:gap-20 xl:mb-24 2xl:gap-24" id="services">
          <HeadingBlock badgeheading={"OUR SERVICES"} mainheading={"Explore Our Core"} mainspan={"Services"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <ServiceCards />
        </div>
        <div className="w-full h-full flex justify-center items-center mt-24 mb-4 xxxs:flex-col-reverse xxxs:gap-14 xxxs:mt-14 xxs:gap-16 xxs:mt-16 xs:mt-20 sm:flex-col-reverse sm:gap-16 sm:mb-14 lg:flex-row xl:mt-24 xl:mb-4 2xl:mt-28">
          <div className="w-10/12 h-full flex flex-row justify-between gap-10 xxxs:w-11/12 xxxs:flex-col-reverse xxxs:gap-5 xxs:gap-6 xs:gap-7 xs:w-10/12 sm:w-11/12 sm:flex-col-reverse sm:gap-4 md:w-10/12 lg:flex-row lg:gap-8 xl:gap-10 2xl:max-w-[1440px]">
            <div className="w-[50%] flex flex-col justify-between items-center gap-12 xxxs:w-full sm:w-full lg:gap-8 2xl:gap-14">
              <div className="w-full flex flex-col justify-between items-start gap-6 xxxs:hidden sm:hidden lg:flex lg:gap-5 2xl:gap-7">
                <div className="flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-lg text-badgeText border border-badgeText text-sm lg:text-[12px] lg:py-1 lg:px-3 xl:px-4 2xl:text-[16px] 2xl:px-6">
                  <div><RiBox3Fill /></div>
                  <p>OUR WORK</p>
                </div>
                <div className="flex flex-col justify-between items-start gap-3 lg:gap-3 2xl:gap-4">
                  <p className="text-4xl font-semibold lg:text-[32px] xl:text-4xl 2xl:text-[40px]">What Will You Get From Us</p>
                  <p className="font-bodyfont text-lg text-textDescription lg:text-sm xl:text-lg 2xl:text-xl">Delivering web, app, and design solutions that empower your brand and captivate your audience.</p>
                </div> 
              </div>
              <div className="w-full grid grid-cols-2 gap-4 xxxs:gap-3 xxs:gap-4 xs:gap-5 sm:grid-cols-4 lg:grid-cols-2 2xl:gap-5">
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border xxxs:flex-col xxxs:items-start xxxs:gap-4 xxxs:p-3 xxs:p-4 xs:p-5 sm:flex-col sm:items-start sm:p-3 lg:p-3 lg:gap-3 lg:flex-row lg:items-center xl:p-4 2xl:gap-5">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText xxs:p-2 sm:p-3 lg:p-2 xl:p-3"><FaPeopleGroup className="w-6 h-6 lg:w-5 lg:h-5 xxxs:h-4 xxxs:w-4 xs:h-6 xs:w-6 sm:w-5 sm:h-5 xl:h-6 xl:w-6 2xl:w-7 2xl:h-7" /></div>
                  <div className="flex flex-wrap xxxs:text-[12px] xxs:text-sm xs:text-base sm:text-sm lg:text-[12px] lg:leading-4 xl:text-base">Responsive and Mobile-First Design</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border xxxs:flex-col xxxs:items-start xxxs:gap-4 xxxs:p-3 xxs:p-4 xs:p-5 sm:flex-col sm:items-start sm:p-3 lg:p-3 lg:gap-3 lg:flex-row lg:items-center xl:p-4 2xl:gap-5">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText xxs:p-2 lg:p-2 xl:p-3"><FaPeopleGroup className="w-6 h-6 lg:w-5 lg:h-5 xxxs:h-4 xxxs:w-4 xs:h-6 xs:w-6 sm:w-5 sm:h-5 xl:h-6 xl:w-6 2xl:w-7 2xl:h-7" /></div>
                  <div className="flex flex-wrap xxxs:text-[12px] xxs:text-sm xs:text-base sm:text-sm lg:text-[12px] lg:leading-4 xl:text-base">Responsive and Mobile-First Design</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border xxxs:flex-col xxxs:items-start xxxs:gap-4 xxxs:p-3 xxs:p-4 xs:p-5 sm:flex-col sm:items-start sm:p-3 lg:p-3 lg:gap-3 lg:flex-row lg:items-center xl:p-4 2xl:gap-5">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText xxs:p-2 lg:p-2 xl:p-3"><FaPeopleGroup className="w-6 h-6 lg:w-5 lg:h-5 xxxs:h-4 xxxs:w-4 xs:h-6 xs:w-6 sm:w-5 sm:h-5 xl:h-6 xl:w-6 2xl:w-7 2xl:h-7" /></div>
                  <div className="flex flex-wrap xxxs:text-[12px] xxs:text-sm xs:text-base sm:text-sm lg:text-[12px] lg:leading-4 xl:text-base">Responsive and Mobile-First Design</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border xxxs:flex-col xxxs:items-start xxxs:gap-4 xxxs:p-3 xxs:p-4 xs:p-5 sm:flex-col sm:items-start sm:p-3 lg:p-3 lg:gap-3 lg:flex-row lg:items-center xl:p-4 2xl:gap-5">
                  <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText xxs:p-2 lg:p-2 xl:p-3"><FaPeopleGroup className="w-6 h-6 lg:w-5 lg:h-5 xxxs:h-4 xxxs:w-4 xs:h-6 xs:w-6 sm:w-5 sm:h-5 xl:h-6 xl:w-6 2xl:w-7 2xl:h-7" /></div>
                  <div className="flex flex-wrap xxxs:text-[12px] xxs:text-sm xs:text-base sm:text-sm lg:text-[12px] lg:leading-4 xl:text-base">Responsive and Mobile-First Design</div>
                </div>
              </div>
            </div>
            <div className="w-[50%] flex justify-center items-center rounded-3xl overflow-hidden xxxs:w-full xxxs:rounded-2xl sm:w-full sm:rounded-2xl xl:rounded-3xl">
              <img className="w-full h-full object-cover" src={WorkImage} alt="" />
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:hidden"><HeadingBlock className="lg:hidden" badgeheading={"OUR SERVICES"} mainheading={"Explore Our Core"} mainspan={"Services"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."}/></div>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-20 mb-24 pt-40 xxxs:pt-28 xxxs:gap-14 xxxs:mb-14 xxs:pt-32 xxs:gap-16 xxs:mb-16 xs:mb-20 xs:pt-36 sm:mb-14 sm:pt-32 sm:gap-16 lg:gap-16 lg:pt-28 xl:gap-20 xl:mb-24 xl:pt-36 2xl:gap-24" id="work">
          <HeadingBlock badgeheading={"OUR WORK"} mainheading={"Explore Our "} mainspan={"Portfolio"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <div className="w-10/12 grid grid-cols-2 gap-5 xxxs:grid-cols-1 xxxs:w-11/12 xxxs:gap-4 xxs:gap-5 xs:w-10/12 sm:w-11/12 sm:grid-cols-2 sm:gap-4 md:w-10/12 xl:gap-5 xl:max-w-[1100px] 2xl:gap-8 2xl:max-w-[1440px]">
            {
              PortfolioData.map((cardData, index) => (
                <PortfolioCard imageURL={cardData.imageURL} cardName={cardData.name} cardDescription={cardData.description} cardLink={cardData.pageLink} key={index} />
              ))
            }        
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center my-24 xxxs:flex-col xxxs:gap-14 xxxs:my-14 xxs:gap-16 xxs:my-16 xs:my-20 sm:flex-col sm:gap-16 sm:my-14 lg:flex-row xl:my-24 2xl:my-28">
          <div className="flex w-full items-center justify-center lg:hidden"><HeadingBlock badgeheading={"OUR SERVICES"} mainheading={"Explore Our Core"} mainspan={"Services"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."}/></div>
          <div className="w-10/12 h-full flex flex-row justify-between gap-10 xxxs:flex-col xxxs:w-11/12 xxxs:gap-5 xxs:gap-6 xs:w-10/12 sm:w-11/12 sm:flex-col sm:gap-6 md:w-10/12 lg:flex-row lg:gap-8 xl:gap-10 2xl:max-w-[1440px]">
            <div className="w-[50%] flex justify-center items-center rounded-3xl overflow-hidden xxxs:w-full xxxs:rounded-2xl sm:w-full">
              <img className="w-full h-full object-cover" src={WorkImage} alt="" />
            </div>
            <div className="w-[50%] flex flex-col justify-between items-center gap-12 xxxs:w-full sm:w-full lg:gap-8 xl:gap-12 2xl:gap-14">
              <div className="w-full flex flex-col justify-between items-start gap-6 xxxs:hidden sm:hidden lg:flex lg:gap-5 xl:gap-6 2xl:gap-7">
                <div className="flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-lg text-badgeText border border-badgeText text-sm lg:text-[12px] lg:py-1 lg:px-3 2xl:text-[16px] 2xl:px-6">
                  <RiBox3Fill />
                  <p>OUR WORK</p>
                </div>
                <div className="flex flex-col justify-between items-start gap-3 lg:gap-3 2xl:gap-4">
                  <p className="text-4xl font-semibold lg:text-[32px] xl:text-4xl 2xl:text-[40px]">What’s Different In Our Agency</p>
                  <p className="font-bodyfont text-[18px] text-textDescription lg:text-sm xl:text-lg 2xl:text-xl">Delivering web, app, and design solutions that empower your brand and captivate your audience.</p>
                </div> 
              </div>
              <div className="w-full grid grid-cols-2 gap-4 2xl:gap-5 xxxs:grid-cols-1 sm:grid-cols-2 xl:gap-4">
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border xxxs:p-4 xxs:p-5 xs:p-6 lg:p-4 lg:gap-3 xl:gap-4 xl:p-5 2xl:gap-5">
                  <div className="flex justify-center items-center "><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon1} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg lg:text-[16px] xl:text-lg 2xl:text-xl">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border xxxs:p-4 xxs:p-5 xs:p-6 lg:p-4 lg:gap-3 xl:gap-4 xl:p-5 2xl:gap-5">
                  <div className="flex justify-center items-center"><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon2} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg lg:text-[16px] xl:text-lg 2xl:text-xl">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border xxxs:p-4 xxs:p-5 xs:p-6 lg:p-4 lg:gap-3 xl:gap-4 xl:p-5 2xl:gap-5">
                  <div className="flex justify-center items-center"><img className="w-9 h-9 2xl:w-10 2xl:h-10" src={AgencyIcon3} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg lg:text-[16px] xl:text-lg 2xl:text-xl">Responsive</p>
                    <p className="font-bodyfont text-textDescription text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border xxxs:p-4 xxs:p-5 xs:p-6 lg:p-4 lg:gap-3 xl:gap-4 xl:p-5 2xl:gap-5">
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
        <div className="w-full flex flex-col justify-between items-center gap-20 my-24 xxxs:my-14 xxs:my-16 xs:my-20 sm:my-14 xl:gap-20 xl:my-24 2xl:my-28 2xl:gap-24">
          <HeadingBlock badgeheading={"OUR WORK"} mainheading={"Explore Our "} mainspan={"Portfolio"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <div className="TestimonialsDiv w-10/12 h-[600px] flex flex-row justify-between items-center gap-5 overflow-hidden xxxs:w-11/12 xxxs:flex-col xxxs:h-fit xxxs:gap-4 xs:w-10/12 sm:w-11/12 sm:gap-4 md:w-10/12 md:max-w-[740px] lg:w-10/12 lg:max-w-full xl:gap-5 xl:max-w-[1100px] 2xl:max-w-[1200px]">
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
