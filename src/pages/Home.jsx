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
import WorkImage from "../assets/WorkImage.png";
import PortfolioCard from "../component/PortfolioCard.jsx";
import PortfolioData from "../data/PortfolioData.js";
import AgencyIcon1 from "../assets/AgencyIcon1.svg";
import AgencyIcon2 from "../assets/AgencyIcon2.svg";
import AgencyIcon3 from "../assets/AgencyIcon3.svg";
import AgencyIcon4 from "../assets/AgencyIcon4.svg";
import TestimonialBlock from "../component/TestimonialBlock.jsx";
import TestimonialsData from "../data/TestimonialsData.js";




const Home = () => {
  return (
    <div className="flex flex-col items-center w-full font-headingfont bg-background text-heading relative overflow-hidden">
      <div className="flex flex-col items-center w-full relative">
        <img className="absolute w-full h-[300px]" src={HeroBG1} alt="HeroBG1" />
        <img className="absolute w-full h-[300px] top-[500px]" src={HeroBG2} alt="HeroBG2" />
        <img className="absolute left-0" src={HeroLeftCornerBG} alt="HeroLeftCornerBG" />
        <img className="absolute right-0" src={HeroRightCornerBG} alt="HeroRightCornerBG" />
        <NavBar/>
        <div className="flex flex-col w-10/12 mt-36">
          <div className="flex flex-col justify-between items-center gap-16">
            <div className="w-9/12 flex flex-col items-center gap-6">
              <h1 className="text-[64px] leading-tight text-center capitalize font-semibold">Transforming Business with Cutting-Edge Solution</h1>
              <p className="w-6/12 text-lg text-description text-center capitalize">We create custom software, mobile apps, and seamless UI/UX designs</p>
            </div>
            <CTAButton linkto="/">
              <div className="flex justify-between items-center gap-2">
                <p>Book a Consultation Call</p>
                <FaArrowRightLong />
              </div>
            </CTAButton>
          </div>
        </div>
        <div className="w-full flex justify-center items-center my-32 overflow-x-hidden">
          <ImgSlider/>
        </div>
        <div className="w-full flex flex-col justify-between items-center my-24 gap-20">
          <HeadingBlock badgeheading={"OUR SERVICES"} mainheading={"Explore Our Core"} mainspan={"Services"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <ServiceCards />
        </div>
        <div className="w-full flex justify-center my-24">
          <div className="w-10/12 flex flex-row justify-between items-center gap-10 ">
            <div className="w-[50%] h-full flex flex-col justify-between items-center gap-12">
              <div className="w-full flex flex-col justify-between items-start gap-6">
                <div className="flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-accentpurple rounded-lg text-white text-sm">
                  <div><RiBox3Fill /></div>
                  <p>OUR WORK</p>
                </div>
                <div className="flex flex-col justify-between items-start gap-3">
                  <p className="text-4xl font-semibold">What Will You Get From Us</p>
                  <p className="font-bodyfont text-[18px] text-description">Delivering web, app, and design solutions that empower your brand and captivate your audience.</p>
                </div> 
              </div>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-servicecard rounded-2xl border border-border">
                  <div className="flex justify-center items-center p-3 bg-accentpurple rounded-lg"><FaPeopleGroup className="w-6 h-6" /></div>
                  <div>Responsive and Mobile-First Design</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-servicecard rounded-2xl border border-border">
                  <div className="flex justify-center items-center p-3 bg-accentpurple rounded-lg"><FaPeopleGroup className="w-6 h-6" /></div>
                  <div className="flex flex-wrap">Responsive and Mobile-First Design</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-servicecard rounded-2xl border border-border">
                  <div className="flex justify-center items-center p-3 bg-accentpurple rounded-lg"><FaPeopleGroup className="w-6 h-6" /></div>
                  <div>Responsive and Mobile-First Design</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 p-4 bg-servicecard rounded-2xl border border-border">
                  <div className="flex justify-center items-center p-3 bg-accentpurple rounded-lg"><FaPeopleGroup className="w-6 h-6" /></div>
                  <div>Responsive and Mobile-First Design</div>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center rounded-3xl overflow-hidden ">
              <img className="w-full" src={WorkImage} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-20 my-24">
          <HeadingBlock badgeheading={"OUR WORK"} mainheading={"Explore Our "} mainspan={"Portfolio"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <div className="w-10/12 grid grid-cols-2 gap-5">
            {
              PortfolioData.map((cardData, index) => (
                <PortfolioCard imageURL={cardData.imageURL} cardName={cardData.name} cardDescription={cardData.description} cardLink={cardData.pageLink} key={index} />
              ))
            }        
          </div>
        </div>
        <div className="w-full flex justify-center my-24">
          <div className="w-10/12 flex flex-row justify-between items-center gap-10 ">
            <div className="w-[50%] h-full flex justify-center items-center rounded-3xl overflow-hidden ">
              <img className="w-full h-full object-cover" src={WorkImage} alt="" />
            </div>
            <div className="w-[50%] h-full flex flex-col justify-between items-center gap-12">
              <div className="w-full flex flex-col justify-between items-start gap-6">
                <div className="flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-nav-bg rounded-lg text-accentgreen text-sm">
                  <RiBox3Fill />
                  <p>OUR WORK</p>
                </div>
                <div className="flex flex-col justify-between items-start gap-3">
                  <p className="text-4xl font-semibold">What’s Different In Our Agency</p>
                  <p className="font-bodyfont text-[18px] text-description">Delivering web, app, and design solutions that empower your brand and captivate your audience.</p>
                </div> 
              </div>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-servicecard rounded-2xl border border-border">
                  <div className="flex justify-center items-center"><img src={AgencyIcon1} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg">Responsive</p>
                    <p className="font-bodyfont text-description text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-servicecard rounded-2xl border border-border">
                  <div className="flex justify-center items-center"><img src={AgencyIcon2} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg">Responsive</p>
                    <p className="font-bodyfont text-description text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-servicecard rounded-2xl border border-border">
                  <div className="flex justify-center items-center"><img src={AgencyIcon3} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg">Responsive</p>
                    <p className="font-bodyfont text-description text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-4 p-5 bg-servicecard rounded-2xl border border-border">
                  <div className="flex justify-center items-center"><img src={AgencyIcon4} alt="" /></div>
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="font-semibold text-lg">Responsive</p>
                    <p className="font-bodyfont text-description text-sm">Understand client goals and project requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-20 my-24">
          <HeadingBlock badgeheading={"OUR WORK"} mainheading={"Explore Our "} mainspan={"Portfolio"} description={"Delivering web, app, and design solutions that empower your brand and captivate your audience."} />
          <div className="TestimonialsDiv w-10/12 h-[800px] flex flex-row justify-between items-center gap-5 overflow-hidden">
            <TestimonialBlock TestimonialsData={TestimonialsData} direction="down"/>
            <TestimonialBlock TestimonialsData={TestimonialsData} direction="up"/>
            <TestimonialBlock TestimonialsData={TestimonialsData} direction="down"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
