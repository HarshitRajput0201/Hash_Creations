import ContactData from "../data/CantactData.js";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";



const ContactCards = () => {

  return (
    <div className="w-full h-full flex flex-row justify-between items-center gap-5 xxxs:flex-col xxxs:gap-4 xxs:gap-5 xxxs:mb-16 sm:flex-row sm:gap-4">
      {
         ContactData.map((cardData, index) => (
          <div className="w-1/3 h-full flex flex-col justify-between items-start gap-9 p-6 rounded-3xl border border-border shadow-default bg-cardBg xxxs:w-full xxxs:rounded-2xl xxxs:p-4 xxxs:gap-6 xxs:gap-7 xxs:p-5 sm:w-1/3 sm:p-4 sm:rounded-2xl sm:gap-8" key={index}>
            <div className="w-9 h-9 flex justify-center items-center sm:h-7 sm:w-7"><img className="w-full h-full" src={cardData.image} alt="" /></div>
            <div className="w-full flex flex-row justify-between items-end">
              <div className="flex flex-col justify-between items-start gap-1">
                <p className="text-2xl lg:text-xl xxxs:text-lg xxs:text-xl sm:text-lg">{cardData.name}</p>
                <p className="text-lg font-bodyfont text-textDescription lg:text-sm xxxs:text-sm xxs:text-base sm:text-sm">{cardData.contact}</p>
              </div>
              <Link to={cardData.contactUrl}>
                <div className="flex justify-end items-end border border-badgeText px-3 py-1 rounded-full lg:text-sm sm:py-1 sm:px-3 sm:text-sm">
                    <FaArrowRightLong className="text-badgeText xxxs:w-3 xxxs:h-3 xxs:w-4 xxs:h-4 sm:h-3 sm:w-3" />
                </div>
              </Link>
            </div>
          </div>
         ))
      }
    </div>
  )
}

export default ContactCards
