import PropTypes from 'prop-types';

const TestimonialCard = ({name, designation, feedback, image}) => {
  return (
    <div className={`w-full flex flex-col gap-9 justify-between items-center p-6 rounded-3xl border border-border bg-cardBg testimonial-card lg:mt-5 xxs:mr-4 xxs:gap-5 xxs:h-full xxs:p-4 xxs:rounded-2xl xxs:w-[330px]`}>
      <p className='w-full text-textDescription font-bodyfont xxs:text-sm'>{feedback}</p>
      <div className="w-full flex flex-row gap-3 items-center">
        <div className="w-12 h-12 flex justify-center items-center rounded-full overflow-hidden xxs:h-10 xxs:w-10">
            <img className="w-full h-full" src={image} alt={`${name}'s testimonial`} />
        </div>
        <div className="flex flex-col justify-between items-start">
            <p className="text-xl text-textHeading xxs:text-lg">{name}</p>
            <p className="text-[16px] font-bodyfont font-normal text-textDescription xxs:text-sm">{designation}</p>
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


