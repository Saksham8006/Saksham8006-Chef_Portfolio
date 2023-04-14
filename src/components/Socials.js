import React from 'react';

//Import Icons
import {FaLinkedinIn, FaTwitter} from 'react-icons/fa';
import { BsWhatsapp} from 'react-icons/bs'




const Socials = () => {
 
  return (
  <div 
  
  className='hidden xl:flex ml-24 text-2xl'>
    <ul className='flex gap-x-4 '>
      <li>
        <a href="https://www.linkedin.com/" target='_blank'>
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="http://www.twitter.com" target='_blank'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.whatsapp.com/" target='_blank'>
          <BsWhatsapp />
        </a>
      </li>
      {/* <li>
        <a href="https://telegram.org/" target='_blank'>
          <ImTelegram />
        </a>
      </li>
      <li>
        <a href="https://www.skype.com/en/" target='_blank'>
          <ImSkype />
        </a>
      </li> */}
    </ul>
  </div>
  );
};

export default Socials;