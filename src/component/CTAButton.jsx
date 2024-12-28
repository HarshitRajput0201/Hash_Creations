import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CTAButton = ({children, linkto}) => {
  return (
    <div className='w-full flex justify-center items-center lg:text-sm xl:text-lg xl:h-12'>
      <Link className='h-full w-full' to={linkto}>
          <div className='h-full w-full flex justify-center items-center bg-navBtnBg text-white px-6 py-3 rounded-lg lg:px-4 lg:py-2 xl:px-6 xl:py-2 xxxs:py-2'>{children}</div>
      </Link>
    </div>
  )
}

CTAButton.propTypes = {
    children: PropTypes.node.isRequired, // children can be any renderable React node
    linkto: PropTypes.string.isRequired,  // linkto should be a string (URL)
  };

export default CTAButton
