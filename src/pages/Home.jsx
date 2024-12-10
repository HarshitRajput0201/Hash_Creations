import CTAButton from "../component/CTAButton";
import ImgSlider from "../component/ImgSlider";
import NavBar from "../component/NavBar";
import { FaArrowRightLong } from "react-icons/fa6";
import HeroBG1 from "../assets/HeroBG1.svg";
import HeroBG2 from "../assets/HeroBG2.svg";
import HeroLeftCornerBG from "../assets/HeroLeftCornerBG.svg";
import HeroRightCornerBG from "../assets/HeroRightCornerBG.svg";


const Home = () => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen font-headingfont bg-background text-heading relative">
      <div className="flex flex-col items-center w-full relative">
        <img className="absolute w-full h-[300px]" src={HeroBG1} alt="HeroBG1" />
        <img className="absolute w-full h-[300px] bottom-[240px]" src={HeroBG2} alt="HeroBG2" />
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
        <div className="w-full flex justify-center items-center my-32">
          <ImgSlider/>
        </div>
      </div>
    </div>
  )
}

export default Home
