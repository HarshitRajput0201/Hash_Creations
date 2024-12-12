import { RiBox3Fill } from "react-icons/ri";
import PropTypes from "prop-types";

const HeadingBlock = ({badgeheading, mainheading, mainspan, description}) => {
  return (
    <div className="w-6/12 flex flex-col justify-between items-center text-center gap-4">
            <div className="flex flex-row justify-center gap-1 items-center py-2 px-4 bg-nav-bg rounded-full text-accentgreen text-sm">
              <div><RiBox3Fill /></div>
              <p>{badgeheading}</p>
            </div>
            <p className="text-5xl font-semibold">
              {mainheading} <span className="italic text-description font-normal">{mainspan}</span>
            </p>
            <p className="text-lg font-bodyfont capitalize text-description">{description}</p>
          </div>
  )
}

HeadingBlock.propTypes = {
    badgeheading: PropTypes.string.isRequired,
    mainheading: PropTypes.string.isRequired,
    mainspan: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default HeadingBlock
