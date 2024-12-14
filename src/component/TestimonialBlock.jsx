import PropTypes from 'prop-types';
import TestimonialCard from "./TestimonialCard";

const TestimonialBlock = ({TestimonialsData, direction}) => {

  TestimonialsData.map((cardData) => (
    <TestimonialCard
      key={cardData.id}
      id={cardData.id}
      name={cardData.name}
      designation={cardData.designation}
      feedback={cardData.feedback}
      image={cardData.image}
    />
  ));

  return (
    <div className={`testimonialCards h-full flex flex-col overflow-hidden relative `}>
      <div className={`testimonialCard-${direction} m-0`}>
        {
          TestimonialsData.map((cardData) => (
            <TestimonialCard
              key={cardData.id}  // It's better to use a unique id for the key rather than the index
              id={cardData.id}
              name={cardData.name}
              designation={cardData.designation}
              feedback={cardData.feedback}
              image={cardData.image}
            />
          ))
        }
      </div>
      <div className={`testimonialCard-${direction} m-0`}>
        {
          TestimonialsData.map((cardData) => (
            <TestimonialCard
              key={cardData.id}  // It's better to use a unique id for the key rather than the index
              id={cardData.id}
              name={cardData.name}
              designation={cardData.designation}
              feedback={cardData.feedback}
              image={cardData.image}
            />
          ))
        }
      </div>
    </div>
  )
}

TestimonialBlock.propTypes = {
  TestimonialsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      feedback: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  direction: PropTypes.string.isRequired,
};

export default TestimonialBlock





