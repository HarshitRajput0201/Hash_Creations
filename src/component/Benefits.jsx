import PropTypes from 'prop-types';
import WorkImage from "../assets/WorkImage.png";
import HeadingBlock from "./HeadingBlock";
import benefitsIcon1 from "../assets/BenefitsIcon1.svg";
import benefitsIcon2 from "../assets/BenefitsIcon2.svg";
import benefitsIcon3 from "../assets/BenefitsIcon3.svg";
import benefitsIcon4 from "../assets/BenefitsIcon4.svg";



const Benefits = ({badgeicon}) => {
  const benefitsData = [
    {
      title: "Strategic Approach",
      description: "Aligning plans with your goals",
      image: benefitsIcon1,
    },
    {
      title: "Seamless Collaboration",
      description: "Your vision, Our priority",
      image: benefitsIcon2,
    },
    {
      title: "Innovative Execution",
      description: "Turning ideas into solutions",
      image: benefitsIcon3,
    },
    {
      title: "Results-Driven",
      description: "Delivering success that counts",
      image: benefitsIcon4,
    },
  ];
      

  return (
    <div className="sl-benefits w-full h-full flex justify-center items-center mt-24 mb-4 xxxs:flex-col-reverse xxxs:gap-14 xxxs:mt-14 xxs:gap-16 xxs:mt-16 xs:mt-20 sm:flex-col-reverse sm:gap-16 sm:mb-14 lg:flex-row xl:mt-24 xl:mb-4 2xl:mt-28">
      <div className="w-10/12 h-full flex flex-row justify-between gap-10 xxxs:w-11/12 xxxs:flex-col-reverse xxxs:gap-5 xxs:gap-6 xs:gap-7 xs:w-10/12 sm:w-11/12 sm:flex-col-reverse sm:gap-4 md:w-10/12 lg:flex-row lg:gap-8 xl:gap-10 2xl:max-w-[1440px]">
        {/* Text Content */}
        <div className="w-[55%] flex flex-col justify-between items-center gap-12 xxxs:w-full sm:w-full lg:gap-8 2xl:gap-14">
          <div className="w-full flex flex-col justify-between items-start gap-6 xxxs:hidden sm:hidden lg:flex lg:gap-5 2xl:gap-7">
            <div className="sl-benefits-2 flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-badgeBG rounded-full text-badgeText border border-border text-sm lg:text-[12px] lg:py-1 lg:px-3 xl:px-4 2xl:text-[16px] 2xl:px-6 2xl:py-3">
              <div className="flex justify-center items-center"><img className="2xl:h-4 2xl:w-4" src={badgeicon} alt="" /></div>
              <p>ABOUT US</p>
            </div>
            <div className="flex flex-col justify-between items-start gap-3 lg:gap-3 2xl:gap-4">
              <p className="sl-benefits-3 text-4xl font-semibold lg:text-[32px] xl:text-4xl 2xl:text-[40px]">
                What Sets Techwara Apart?
              </p>
              <p className="sl-benefits-4 font-bodyfont text-lg text-textDescription lg:text-sm xl:text-lg 2xl:text-xl">
                At Techwara, we don’t just deliver services—we craft tailored
                solutions designed to meet your unique needs. With a focus on
                measurable outcomes, we ensure your business achieves growth,
                engagement, and long-term success.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="w-full grid grid-cols-2 gap-4 xxxs:gap-3 xxxs:grid-cols-1 xxs:gap-4 xs:gap-5 sm:grid-cols-2 lg:grid-cols-2 2xl:gap-5">
            {benefitsData.map((benefit, index) => (
              <div className='sl-benefits-5 flex justify-center items-center relative overflow-hidden shadow-default rounded-2xl bg-border lg:p-[1px]' key={index}>
                <div className="gradient-bg absolute inset-0 z-0 xxxs:hidden sm:hidden lg:flex lg:rounded-2xl xl:rounded-2xl bg-background"></div>
                <div
                className="w-full h-full z-10 flex flex-row justify-start items-center gap-4 border p-4 bg-cardBg rounded-2xl xxxs:items-start xxxs:border-border xxxs:justify-start xxxs:gap-4 xxxs:p-3 xxs:p-4 xs:p-5 sm:items-center sm:border-border sm:justify-start sm:p-3 lg:border-none lg:p-3 lg:gap-3 lg:flex-row lg:items-center xl:p-4 2xl:gap-5"
              >
                <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg border border-border xxxs:p-2 sm:p-3 lg:p-2 xl:p-3">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-6 h-6 xxxs:w-5 xxxs:h-5 lg:w-5 lg:h-5 xl:h-6 xl:w-6"
                  />
                </div>
                <div className="flex flex-col justify-center items-start font-bodyfont xxxs:text-[12px] xxs:text-sm xs:text-base sm:text-sm lg:text-[12px] lg:leading-4 xl:text-sm">
                  <div className="font-extrabold">{benefit.title}</div>
                  <div className="text-textDescription lg:text-[10px] xl:text-[12px] 2xl:text-sm">
                    {benefit.description}
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="sl-benefits-1 w-[45%] flex justify-center items-center rounded-3xl overflow-hidden xxxs:w-full xxxs:rounded-2xl sm:w-full sm:rounded-2xl xl:rounded-3xl">
          <img className="w-full h-full object-cover" src={WorkImage} alt="Work" />
        </div>
        <div className="flex w-full items-center justify-center lg:hidden">
            <HeadingBlock 
                className="lg:hidden"
                badgeicon={badgeicon}
                badgeheading={"ABOUT US"} 
                mainheading={"What Sets Techwara Apart?"} 
                mainspan={""} 
                description={"At Techwara, we don’t just deliver services — we craft tailored solutions designed to meet your unique needs."}/></div>
      </div>
    </div>
  );
};

export default Benefits;

Benefits.propTypes = {
  badgeicon: PropTypes.string.isRequired, // Assuming it's an image URL passed as a string
};