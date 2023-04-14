import React, { useState } from 'react';

//Import Components
import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';

//Import Link
import { Link } from 'react-router-dom';







const Header = () => {
  const [color, setColor] = useState(false);
const changeColor = () =>{
  if(window.scrollY >= 80){
    setColor(true)
  }else{
    setColor(false)
  }
}

window.addEventListener('scroll', changeColor)



 
  return (
  <header className={color ? 'header header-bg' : 'header'} >
    <div className='header'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between uppercase'>
      {/* Logo Section */}
      <Link 
     
      to={'/'} className='max-w-[200px]'>
        <img src={Logo} alt='' />
      </Link>

      {/* Nav - Intially hidden - show on desktop mode */}
      <nav 
      
      className='hidden xl:flex gap-x-12 font-bold'>
        <Link to={'/'} className='text-[#696c6d] hover:text-primary transition text-xl'>Home</Link>
        <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition text-xl'>About Us</Link>
        <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition text-xl'>Portfolio</Link>
        {/* <Link to={'/services'} className='text-[#696c6d] hover:text-primary transition text-xl'>Services</Link> */}
        <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition text-xl'>Contact</Link>
       
      </nav>
    </div>
    {/* Socials */}
    <Socials />

    {/* MobileNav */}
    <MobileNav />
    </div>
  </header>
  );
};

export default Header;