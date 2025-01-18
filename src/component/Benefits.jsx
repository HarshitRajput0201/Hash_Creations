import { RiBox3Fill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import WorkImage from "../assets/WorkImage.png";
import HeadingBlock from "./HeadingBlock";


const Benefits = () => {
    const benefitsData = [
        {
          title: "Strategic Approach",
          description: "Aligning plans with your goals",
        },
        {
          title: "Seamless Collaboration",
          description: "Your vision, Our priority",
        },
        {
          title: "Innovative Execution",
          description: "Your vision, Our priority",
        },
        {
          title: "Results-Driven",
          description: "Delivering success that counts",
        },
      ];
      

  return (
    <div className="sl-benefits w-full h-full flex justify-center items-center mt-24 mb-4 xxxs:flex-col-reverse xxxs:gap-14 xxxs:mt-14 xxs:gap-16 xxs:mt-16 xs:mt-20 sm:flex-col-reverse sm:gap-16 sm:mb-14 lg:flex-row xl:mt-24 xl:mb-4 2xl:mt-28">
      <div className="w-10/12 h-full flex flex-row justify-between gap-10 xxxs:w-11/12 xxxs:flex-col-reverse xxxs:gap-5 xxs:gap-6 xs:gap-7 xs:w-10/12 sm:w-11/12 sm:flex-col-reverse sm:gap-4 md:w-10/12 lg:flex-row lg:gap-8 xl:gap-10 2xl:max-w-[1440px]">
        {/* Text Content */}
        <div className="w-[55%] flex flex-col justify-between items-center gap-12 xxxs:w-full sm:w-full lg:gap-8 2xl:gap-14">
          <div className="w-full flex flex-col justify-between items-start gap-6 xxxs:hidden sm:hidden lg:flex lg:gap-5 2xl:gap-7">
            <div className="sl-benefits-2 flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-lg text-badgeText border border-badgeText text-sm lg:text-[12px] lg:py-1 lg:px-3 xl:px-4 2xl:text-[16px] 2xl:px-6">
              <RiBox3Fill />
              <p>OUR WORK</p>
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
          <div className="w-full grid grid-cols-2 gap-4 xxxs:gap-3 xxs:gap-4 xs:gap-5 sm:grid-cols-4 lg:grid-cols-2 2xl:gap-5">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="sl-benefits-5 flex flex-row justify-between items-center gap-4 p-4 bg-cardBg rounded-2xl border border-border xxxs:flex-col xxxs:items-start xxxs:justify-start xxxs:gap-4 xxxs:p-3 xxs:p-4 xs:p-5 sm:flex-col sm:items-start sm:justify-start sm:p-3 lg:p-3 lg:gap-3 lg:flex-row lg:items-center xl:p-4 2xl:gap-5"
              >
                <div className="flex justify-center items-center p-3 bg-workIconBg rounded-lg text-workIconText xxs:p-2 sm:p-3 lg:p-2 xl:p-3">
                    <FaPeopleGroup className="w-6 h-6 lg:w-5 lg:h-5" />
                </div>
                <div className="flex flex-wrap font-bodyfont xxxs:text-[12px] xxs:text-sm xs:text-base sm:text-sm lg:text-[12px] lg:leading-4 xl:text-sm">
                  <div className="font-extrabold">{benefit.title}</div>
                  <div className="lg:text-[10px] xl:text-[12px] 2xl:text-sm">
                    {benefit.description}
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
                badgeheading={"OUR SERVICES"} 
                mainheading={"What Sets Techwara Apart?"} 
                mainspan={""} 
                description={"At Techwara, we don’t just deliver services — we craft tailored solutions designed to meet your unique needs."}/></div>
      </div>
    </div>
  );
};

export default Benefits;
