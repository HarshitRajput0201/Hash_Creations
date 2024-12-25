import { RiBox3Fill } from "react-icons/ri";
import PropTypes from "prop-types";

const HeadingBlock = ({badgeheading, mainheading, mainspan, description}) => {
  return (
    <div className="w-6/12 flex flex-col justify-between items-center text-center gap-4 2xl:max-w-[780px] lg:w-7/12 xxs:w-11/12 xxs:mx-4" >
      <div className="flex flex-row justify-center gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-lg text-badgeText border border-badgeText text-sm 2xl:gap-2 2xl:text-[16px] 2xl:px-6 lg:text-[12px] lg:px-3 lg:py-1 xxs:text-[12px] xxs:py-1">
        <div><RiBox3Fill /></div>
        <p>{badgeheading}</p>
      </div>
      <p className="text-5xl font-semibold 2xl:text-[52px] lg:text-[48px] xxs:text-2xl">
        {mainheading} <span className=" bg-headingGradient text-transparent bg-clip-text font-normal">{mainspan}</span>
      </p>
      <p className="w-10/12 text-lg font-bodyfont capitalize text-textDescription 2xl:text-xl xxs:text-sm xxs:w-full">{description}</p>
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
