import PropTypes from 'prop-types';

const TestimonialCard = ({name, designation, feedback, image}) => {
  return (
    <div className={`w-full flex flex-col gap-9 justify-between items-center p-6 rounded-3xl border border-border bg-cardBg testimonial-card lg:mt-5 xxxs:mr-4 xxxs:gap-5 xxxs:h-full xxxs:p-4 xxxs:rounded-2xl xxxs:w-[300px] xxs:w-[330px]`}>
      <p className='w-full text-textDescription font-bodyfont xxxs:text-[12px] xxs:text-sm'>{feedback}</p>
      <div className="w-full flex flex-row gap-3 items-center">
        <div className="w-12 h-12 flex justify-center items-center rounded-full overflow-hidden xxxs:h-10 xxxs:w-10">
            <img className="w-full h-full" src={image} alt={`${name}'s testimonial`} />
        </div>
        <div className="flex flex-col justify-between items-start">
            <p className="text-xl text-textHeading xxxs:text-base xxs:text-lg ">{name}</p>
            <p className="text-[16px] font-bodyfont font-normal text-textDescription xxxs:text-[12px] xxs:text-sm ">{designation}</p>
        </div>
      </div>
    </div>
  )
}

TestimonialCard.propTypes = {
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, // Ensure 'image' is validated
    id: PropTypes.any.isRequired
  };  

export default TestimonialCard


