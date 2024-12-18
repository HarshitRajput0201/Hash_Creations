import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CTAButton = ({children, linkto}) => {
  return (
    <div className='flex justify-center items-center'>
      <Link to={linkto}>
          <div className='flex justify-center items-center bg-navBtnBg text-white px-6 py-3 rounded-lg'>{children}</div>
      </Link>
    </div>
  )
}

CTAButton.propTypes = {
    children: PropTypes.node.isRequired, // children can be any renderable React node
    linkto: PropTypes.string.isRequired,  // linkto should be a string (URL)
  };

export default CTAButton
