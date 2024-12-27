import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceCardsData from "../data/ServiceCardData.js";
import ServiceCardBG from "../assets/ServiceCardBG.svg";

const ServiceCards = () => {
  return (
    <div className="w-10/12 grid grid-cols-3 gap-5 2xl:max-w-[1440px] 2xl:gap-8 xxs:grid-cols-1 xxs:w-11/12 xxs:mx-4 xxs:gap-4 xs:gap-5 xs:w-10/12">
        {
            ServiceCardsData.map((cardData, index) => (
                <div className="w-full flex justify-center items-center rounded-2xl relative overflow-hidden shadow-default " key={index}>
                    <img className="absolute right-0 top-0 z-0" src={ServiceCardBG} alt="" />
                    <div className="w-full h-full flex flex-col justify-between gap-6 rounded-2xl p-7 border border-border bg-cardBg 2xl:gap-10 2xl:p-8 lg:p-5 xxs:p-4 xs:p-6 xs:gap-8">
                        <div className="flex flex-col justify-between items-center gap-4 2xl:gap-5 lg:gap-4 xs:gap-6">
                            <div className="w-full flex flex-col justify-between items-start gap-2 2xl:gap-3">
                                <p className="text-[28px] font-semibold 2xl:text-[32px] lg:text-xl xs:text-[32px]">{cardData.name}</p>
                                <p className="text-textDescription font-bodyfont 2xl:text-lg lg:text-[12px] xs:text-lg">{cardData.description}</p>
                            </div>
                            <div className="w-full border-t border-border"></div>
                            <div className="w-full flex flex-wrap gap-1 2xl:gap-2 xs:gap-2">
                                {
                                    cardData.features.map((feature, index) => (
                                        <div className="border border-border rounded-lg text-[12px] font-bodyfont font-normal py-2 px-3 max-w-max 2xl:text-sm lg:py-1 lg:px-2 lg:text-[12px] xxs:py-1 xs:text-base xs:py-2 xs:px-4" key={index}>{feature}</div>   
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link className="w-full flex justify-center items-center" to={"/"}>
                                <div className="w-full flex flex-row justify-center gap-2 bg-serviceBtnBg items-center py-2 rounded-lg border border-border 2xl:gap-3 2xl:text-lg lg:text-sm lg:py-1 xs:text-lg">
                                    <p>Book a Service</p>
                                    <FaArrowRightLong />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>    
  );
};

export default ServiceCards;
