import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PortfolioCard = ({imageURL, cardName, cardDescription, cardLink}) => {
  return (
    <div className="flex flex-col w-full justify-between items-center gap-5 p-5 rounded-3xl border border-border bg-servicecard " style={{ aspectRatio: '14/10' }}>
      <div className="w-full flex justify-center items-center">
        <img className="w-full h-full rounded-2xl object-cover" style={{ aspectRatio: '18/10' }} src={imageURL} alt={imageURL} />
      </div>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold 2xl:text-[28px]">{cardName}</p>
            <p className="text-lg font-bodyfont text-description 2xl:text-xl">{cardDescription}</p>
        </div>
        <div className="flex justify-end items-end ">
            <Link className="border border-border rounded-lg" to={cardLink}>
                <MdArrowOutward className="w-8 h-8 p-2 2xl:w-10 2xl:h-10 " />
            </Link>
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
