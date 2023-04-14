import React from 'react';

// Import Images
import ChefImg from '../img/about/Chefabout.jpeg';

// Import Link
import { Link } from 'react-router-dom';

//Import Motion
import { motion } from 'framer-motion';

//Import Transition
import { transition1 } from '../transitions';




const About = () => {

  return (
    <motion.section 
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section'>
      <div 
    
      className='container mx-auto h-full relative pt-36'>
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-1 lg:order-none '>
            <img src={ChefImg} alt='' />
          </div>
          {/* text */}
          <motion.div 
          initial={{ opacity: 0, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-80%' }}
          transition={transition1}
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
           " As a professional chef ", I am passionate about crafting delicious and
             visually stunning dishes that leave a lasting impression on
              your taste buds. With years of experience in the culinary industry.
              <br />
              <br />
              As chefs we know how to work hard, hustle and get stuff done. That why we enjoy the rush of service.
               The chaos of perfection, the symphony of pots & pans!
            </p>
            <Link to={'/portfolio'} className='btn'>
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
