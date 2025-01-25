import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PortfolioCard = ({imageURL, cardName, cardDescription, cardLink}) => {
  return (
    <div className='flex justify-center items-center relative overflow-hidden xxxs:rounded-2xl sm:rounded-2xl xl:rounded-3xl bg-border shadow-default lg:p-[1px]'>
      <div className="gradient-bg absolute inset-0 z-0 xxxs:hidden sm:hidden lg:flex lg:rounded-2xl xl:rounded-3xl"></div>
      <div className="flex flex-col z-10 w-full justify-between items-center border gap-5 p-5 rounded-3xl bg-cardBg shadow-default xxxs:border-border xxxs:rounded-2xl xxxs:p-3 xxxs:gap-3 xxs:p-4 xxs:gap-4 xs:gap-6 xs:p-5 sm:border-border sm:rounded-2xl sm:p-4 sm:gap-4 lg:border-none xl:gap-5 xl:p-5 xl:rounded-3xl 2xl:p-6" style={{ aspectRatio: '14/10' }}>
      <div className="w-full flex justify-center items-center">
        <img className="w-full h-full rounded-2xl object-cover xxxs:rounded-lg sm:rounded-lg xl:rounded-xl" style={{ aspectRatio: '18/10' }} src={imageURL} alt={imageURL} />
      </div>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-2 xxxs:gap-1 sm:gap-0 lg:gap-1">
            <p className="text-2xl font-semibold xxxs:text-lg xxs:text-xl xs:text-[22px] sm:text-lg lg:text-xl xl:text-[28px] 2xl:text-[28px]">{cardName}</p>
            <p className="text-lg font-bodyfont text-textDescription xxxs:text-sm xxs:text-[16px] xs:text-lg sm:text-base lg:text-[16px] xl:text-lg 2xl:text-xl">{cardDescription}</p>
        </div>
        <div className="flex justify-end items-end ">
            <Link className="border border-border rounded-lg xl:rounded-xl" to={cardLink}>
                <MdArrowOutward className="w-8 h-8 p-2 xxxs:p-1 xxxs:w-7 xxxs:h-7 xxs:p-2 xxs:w-8 xxs:h-8 xs:h-9 xs:w-9 sm:h-7 sm:w-7 sm:p-1 xl:w-9 xl:h-9 xl:p-2 2xl:w-10 2xl:h-10" />
            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

PortfolioCard.propTypes = {
    imageURL: PropTypes.string.isRequired,        // Ensures 'imageURL' is a required string
    cardName: PropTypes.string.isRequired,        // Ensures 'cardName' is a required string
    cardDescription: PropTypes.string.isRequired, // Ensures 'cardDescription' is a required string
    cardLink: PropTypes.string.isRequired,        // Ensures 'cardLink' is a required string
  };

export default PortfolioCard
