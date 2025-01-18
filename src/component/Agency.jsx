import { RiBox3Fill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import WorkImage from '../assets/WorkImage.png';
import AgencyIcon1 from '../assets/AgencyIcon1.svg'; 
import AgencyIcon2 from '../assets/AgencyIcon2.svg'; 
import AgencyIcon3 from '../assets/AgencyIcon3.svg'; 
import AgencyIcon4 from '../assets/AgencyIcon4.svg'; 
import HeadingBlock from './HeadingBlock'; 

const agencyServices = [
    {
      icon: AgencyIcon1,
      title: 'Responsive',
      description: 'Understand client goals and project requirements',
    },
    {
      icon: AgencyIcon2,
      title: 'Responsive',
      description: 'Understand client goals and project requirements',
    },
    {
      icon: AgencyIcon3,
      title: 'Responsive',
      description: 'Understand client goals and project requirements',
    },
    {
      icon: AgencyIcon4,
      title: 'Responsive',
      description: 'Understand client goals and project requirements',
    },
  ];

  const ServiceCard = ({ icon, title, description }) => (
    <div className="sl-agency-5 flex flex-col justify-between items-start gap-4 p-5 bg-cardBg rounded-2xl border border-border xxxs:p-4 xxs:p-5 xs:p-6 lg:p-4 lg:gap-3 xl:gap-4 xl:p-5 2xl:gap-5">
      <div className="flex justify-center items-center">
        <img className="w-9 h-9 2xl:w-10 2xl:h-10" src={icon} alt={title} />
      </div>
      <div className="flex flex-col justify-between items-start gap-1">
        <p className="font-semibold text-lg lg:text-[16px] xl:text-lg 2xl:text-xl">{title}</p>
        <p className="font-bodyfont text-textDescription text-sm">{description}</p>
      </div>
    </div>
  );

  ServiceCard.propTypes = {
    icon: PropTypes.string.isRequired,    // Icon should be a string (URL or path)
    title: PropTypes.string.isRequired,   // Title should be a string
    description: PropTypes.string.isRequired, // Description should be a string
  };

  const Agency = () => (
    <div className="sl-agency w-full h-full flex justify-center items-center my-24 xxxs:flex-col xxxs:gap-14 xxxs:my-14 xxs:gap-16 xxs:my-16 xs:my-20 sm:flex-col sm:gap-16 sm:my-14 lg:flex-row xl:my-24 2xl:my-28">
      <div className="flex w-full items-center justify-center lg:hidden">
        <HeadingBlock
          badgeheading="OUR SERVICES"
          mainheading="Explore Our Core"
          mainspan="Services"
          description="Delivering web, app, and design solutions that empower your brand and captivate your audience."
        />
      </div>
      <div className="w-10/12 h-full flex flex-row justify-between gap-10 xxxs:flex-col xxxs:w-11/12 xxxs:gap-5 xxs:gap-6 xs:w-10/12 sm:w-11/12 sm:flex-col sm:gap-6 md:w-10/12 lg:flex-row lg:gap-8 xl:gap-10 2xl:max-w-[1440px]">
        <div className="sl-agency-1 w-[50%] flex justify-center items-center rounded-3xl overflow-hidden xxxs:w-full xxxs:rounded-2xl sm:w-full">
          <img className="w-full h-full object-cover" src={WorkImage} alt="Work" />
        </div>
        <div className="w-[50%] flex flex-col justify-between items-center gap-12 xxxs:w-full sm:w-full lg:gap-8 xl:gap-12 2xl:gap-14">
          <div className="w-full flex flex-col justify-between items-start gap-6 xxxs:hidden sm:hidden lg:flex lg:gap-5 xl:gap-6 2xl:gap-7">
            <div className="sl-agency-2 flex flex-row justify-center font-bodyfont gap-1 items-center py-2 px-4 bg-badgeBG/5 rounded-lg text-badgeText border border-badgeText text-sm lg:text-[12px] lg:py-1 lg:px-3 2xl:text-[16px] 2xl:px-6">
              <RiBox3Fill />
              <p>OUR WORK</p>
            </div>
            <div className="flex flex-col justify-between items-start gap-3 lg:gap-3 2xl:gap-4">
              <p className="sl-agency-3 text-4xl font-semibold lg:text-[32px] xl:text-4xl 2xl:text-[40px]">
                What’s Different In Our Agency
              </p>
              <p className="sl-agency-4 font-bodyfont text-[18px] text-textDescription lg:text-sm xl:text-lg 2xl:text-xl">
                Delivering web, app, and design solutions that empower your brand and captivate your audience.
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-4 2xl:gap-5 xxxs:grid-cols-1 sm:grid-cols-2 xl:gap-4">
            {agencyServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

export default Agency;
