import { RiBox3Fill } from "react-icons/ri";
import PropTypes from "prop-types";

const HeadingBlock = ({badgeheading, mainheading, mainspan, description}) => {
  return (
    <div className="w-6/12 flex flex-col justify-between items-center text-center gap-4 2xl:max-w-[780px]" >
            <div className="flex flex-row justify-center gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-full text-badgeText border border-badgeText text-sm 2xl:gap-2 2xl:text-lg 2xl:px-6">
              <div><RiBox3Fill /></div>
              <p>{badgeheading}</p>
            </div>
            <p className="text-5xl font-semibold 2xl:text-[52px]">
              {mainheading} <span className="italic text-textDescription font-normal">{mainspan}</span>
            </p>
            <p className="text-lg font-bodyfont capitalize text-textDescription 2xl:text-xl">{description}</p>
          </div>
  )
}

HeadingBlock.propTypes = {
    badgeheading: PropTypes.string.isRequired,
    mainheading: PropTypes.string.isRequired,
    mainspan: PropTypes.string,
    description: PropTypes.string,
  };

export default HeadingBlock
