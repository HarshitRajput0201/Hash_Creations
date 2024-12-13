import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceCardsData from "../data/ServiceCardData.js";
import ServiceCardBG from "../assets/ServiceCardBG.svg";

const ServiceCards = () => {
  return (
    <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            ServiceCardsData.map((cardData, index) => (
                <div className="w-full flex justify-center items-center rounded-2xl relative overflow-hidden" style={{ aspectRatio: '11/10' }} key={index}>
                    <img className="absolute right-0 top-0" src={ServiceCardBG} alt="" />
                    <div className="w-full h-full flex flex-col justify-between gap-9 rounded-2xl p-7 border border-border bg-servicecard">
                        <div className="flex flex-col justify-between items-center gap-4">
                            <div className="flex flex-col justify-between items-start gap-2">
                                <p className="text-3xl font-semibold">{cardData.name}</p>
                                <p className="text-description font-bodyfont">{cardData.description}</p>
                            </div>
                            <div className="w-full border-t border-border"></div>
                            <div className="w-full flex flex-wrap gap-1">
                                {
                                    cardData.features.map((feature, index) => (
                                        <div className="border border-border rounded-lg text-[12px] font-bodyfont font-normal py-2 px-3 max-w-max" key={index}>{feature}</div>   
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link className="w-full flex justify-center items-center" to={"/"}>
                                <div className="w-full flex flex-row justify-center gap-2 bg-nav-bg items-center py-2 rounded-lg border border-border">
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
