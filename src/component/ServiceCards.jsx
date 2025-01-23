import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceCardsData from "../data/ServiceCardData.js";

const ServiceCards = () => {

    useEffect(() => {
        const handleMouseMove = (e) => {
          const gradients = document.querySelectorAll('.gradient-bg');
          gradients.forEach((gradient) => {
            const rect = gradient.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            gradient.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(131, 86, 251, 1) 1%, rgba(148, 108, 255, 1) 13%, rgba(121, 83, 223, 1) 25%, transparent 50%)`;
          });
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

  return (
    <div className="w-10/12 grid grid-cols-3 gap-5 xxxs:grid-cols-1 xxxs:w-11/12 xxxs:gap-4 xs:gap-5 xs:w-10/12 sm:w-11/12 sm:grid-cols-2 sm:gap-4 md:w-10/12 md:max-w-[740px] md:gap-5 lg:w-10/12 lg:max-w-full lg:grid-cols-3 xl:gap-5  2xl:max-w-[1440px] 2xl:gap-8">
        {
            ServiceCardsData.map((cardData, index) => (
                <div className="sl-serviceCard container bg-border w-full flex justify-center items-center rounded-2xl relative overflow-hidden shadow-default xxxs:rounded-2xl sm:rounded-2xl xl:rounded-[24px] xl:min-h-[300px] lg:p-[1px]" key={index}>
                    <div className="gradient-bg absolute inset-0 z-0 xxxs:hidden sm:hidden lg:flex lg:rounded-2xl xl:rounded-3xl"></div>
                    <div className="s-card w-full h-full flex flex-col justify-between gap-6 rounded-3xl p-7 border border-border bg-cardBg transition-all relative xxxs:p-4 xxxs:rounded-2xl xs:p-6 xs:gap-8 sm:rounded-2xl sm:p-5 lg:p-5 lg:border-transparent xl:rounded-3xl 2xl:gap-10 2xl:p-8">
                        <div className="flex flex-col justify-between items-center gap-4 xs:gap-6 sm:gap-4 lg:gap-4 2xl:gap-5">
                            <div className="w-full flex flex-col justify-between items-start gap-2 2xl:gap-3 sm:gap-1">
                                <p className="text-[28px] font-semibold xxxs:text-2xl xxs:text-[28px] xs:text-[32px] sm:text-2xl lg:text-[22px] xl:text-[28px] 2xl:text-[32px]">{cardData.name}</p>
                                <p className="text-textDescription font-bodyfont xxxs:text-sm xs:text-lg sm:text-sm lg:text-[12px] xl:text-base 2xl:text-lg">{cardData.description}</p>
                            </div>
                            <div className="w-full border-t border-border"></div>
                            <div className="w-full flex flex-wrap gap-1 xs:gap-2 sm:gap-2 2xl:gap-2">
                                {
                                    cardData.features.map((feature, index) => (
                                        <div className="border border-border rounded-lg text-[12px] font-bodyfont font-normal py-2 px-3 max-w-max xxxs:py-1 xs:text-base xs:py-2 xs:px-4 sm:py-1 sm:px-3 lg:py-1 lg:px-2 lg:text-[12px] xl:px-3 2xl:text-sm" key={index}>{feature}</div>   
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link className="w-full flex justify-center items-center" to={"/"}>
                                <div className="w-full flex flex-row justify-center gap-2 bg-serviceBtnBg items-center py-2 rounded-lg border border-border xxxs:text-sm xxs:text-base xs:text-lg sm:rounded-lg lg:text-sm lg:py-1 xl:text-base xl:py-2 xl:rounded-xl 2xl:gap-3 2xl:text-lg">
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
