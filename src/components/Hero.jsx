// importing proptypes from prop-types library
import PropTypes from "prop-types"


// This is destructuring
// I have also added default props
const Hero = ({ title = 'Become a React Dev', subtitle = 'Find the React job that fits your skill set' }) => {
  return (
    <section className='py-20 mb-4 bg-indigo-700'>
      <div className='flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            {title}
          </h1>
          <p className='my-4 text-xl text-white'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

// specifying prop types for the Hero component
Hero.propTypes = {
  // title prop is required and must be a string
  title: PropTypes.string.isRequired,
  // Subtitle prop is required and must be a string
  subtitle: PropTypes.string.isRequired
};


export default Hero;
