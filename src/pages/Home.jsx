import CTAButton from "../component/CTAButton";
import ImgSlider from "../component/ImgSlider";
import NavBar from "../component/NavBar";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen font-headingfont bg-background text-heading relative">
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
        <div className="w-full flex justify-center items-center">
          <ImgSlider/>
        </div>
    </div>
  )
}

export default Home
