import { RiBox3Fill } from "react-icons/ri";
import PropTypes from "prop-types";

const HeadingBlock = ({badgeheading, mainheading, mainspan, description}) => {
  return (
    <div className="w-6/12 flex flex-col justify-between items-center text-center gap-4 2xl:max-w-[780px] xxxs:w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12" >
      <div className="flex flex-row justify-center gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-lg text-badgeText border border-badgeText text-sm 2xl:gap-2 2xl:text-[16px] 2xl:px-6 xxxs:text-[12px] xxxs:py-1 xs:text-[12px] xs:py-1 sm:text-[12px] sm:py-1 lg:text-[12px] lg:px-3 lg:py-1 xl:py-1 xl:px-4">
        <div><RiBox3Fill /></div>
        <p>{badgeheading}</p>
      </div>
      <p className="text-5xl font-semibold 2xl:text-[52px] xxxs:text-2xl xs:text-[28px] sm:text-[28px] lg:text-[42px] xl:text-5xl">
        {mainheading} <span className=" bg-headingGradient text-transparent bg-clip-text font-normal">{mainspan}</span>
      </p>
      <p className="w-10/12 text-lg font-bodyfont capitalize text-textDescription 2xl:text-xl xxxs:text-[12px] xxxs:leading-4 xxs:text-sm xxs:w-full xs:text-base sm:w-full sm:text-base md:w-10/12 xl:text-lg xl:max-w-[630px]">{description}</p>
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
