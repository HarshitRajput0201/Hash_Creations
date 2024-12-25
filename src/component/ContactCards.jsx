import ContactData from "../data/CantactData.js";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";



const ContactCards = () => {

  return (
    <div className="w-full h-full flex flex-row justify-between items-center gap-5 xxs:flex-col xxs:mb-16">
      {
         ContactData.map((cardData, index) => (
          <div className="w-1/3 h-full flex flex-col justify-between items-start gap-9 p-6 rounded-3xl border border-border shadow-default bg-cardBg xxs:w-full xxs:rounded-2xl" key={index}>
            <div className="w-9 h-9 flex justify-center items-center"><img className="w-full h-full" src={cardData.image} alt="" /></div>
            <div className="w-full flex flex-row justify-between items-end">
              <div className="flex flex-col justify-between items-start gap-1">
                <p className="text-2xl lg:text-xl">{cardData.name}</p>
                <p className="text-lg font-bodyfont text-textDescription lg:text-sm">{cardData.contact}</p>
              </div>
              <Link to={cardData.contactUrl}>
                <div className="flex justify-end items-end border border-badgeText px-3 py-1 rounded-full lg:text-sm">
                    <FaArrowRightLong className="text-badgeText" />
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
