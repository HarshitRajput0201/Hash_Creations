import PropTypes from 'prop-types';
import TestimonialCard from "./TestimonialCard";

const TestimonialBlock = ({TestimonialsData, direction}) => {

  const shuffledData = shuffleArray(TestimonialsData);

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
    <div className={`w-full flex flex-col relative xxxs:flex-row xxxs:overflow-hidden`}>
      <div className={`testimonialCard-${direction} xxxs:flex xxxs:flex-row m-0`}>
        {
          shuffledData.map((cardData) => (
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
      <div className={`testimonialCard-${direction} xxxs:flex xxxs:flex-row m-0`}>
        {
          shuffledData.map((cardData) => (
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


const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

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





