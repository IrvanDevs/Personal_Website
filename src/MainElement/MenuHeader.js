import React, { useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'react-feather';

function MenuHeader() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // GSAP Animation
  const menuRef = useRef(null);
  const xRef = useRef(null);

  useEffect(() => {
    // MenuIcon popIn
    gsap.fromTo(menuRef.current, 
      { scale: 0 }, 
      { 
          scale: 1, 
          duration: 1,
          delay: 1,
          ease: 'power4.out',
      }
    );
  }, []);

  return (
    <div className='relative'>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          ref={menuRef}
          className='z-10 fixed right-0 mt-10 mr-10 max-sm:mr-9 text-white'
          onClick={() => setIsOpen(true)}
        >
          <Menu className='size-10 max-md:size-9 hover:scale-[1.1] active:scale-[1] transition duration-200 ease-in-out' />
        </button>
      )}

      {/* Sidebar Menu */}
      <div
        className={`z-20 fixed top-0 right-0 h-screen w-[400px] max-sm:w-screen bg-white shadow-lg max-sm:bg-opacity-90 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className='absolute right-0 mt-9 mr-10 max-sm:mr-8 text-black z-50'
          onClick={() => setIsOpen(false)}
        >
          <X className='size-12 max-md:size-11 hover:text-custom-teal hover:rotate-[90deg] active:text-black active:scale-[0.7] transition duration-300 ease-in-out'/>
        </button>

        {/* Menu Items */}
        <ul className='text-[20px] flex flex-col justify-center max-sm:items-center ml-20 max-sm:ml-0 gap-10 h-full'>
          <li><button className='hover:text-custom-teal hover:scale-[1.1] active:scale-[1] transition duration-300 ease-in-out' onClick={() => scrollToSection('intro')}>Hire me</button></li>
          <li><button className='hover:text-custom-teal hover:scale-[1.1] active:scale-[1] transition duration-300 ease-in-out' onClick={() => scrollToSection('about')}>About Me</button></li>
          <li><button className='hover:text-custom-teal hover:scale-[1.1] active:scale-[1] transition duration-300 ease-in-out' onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button className='hover:text-custom-teal hover:scale-[1.1] active:scale-[1] transition duration-300 ease-in-out' onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button className='hover:text-custom-teal hover:scale-[1.1] active:scale-[1] transition duration-300 ease-in-out' onClick={() => scrollToSection('education')}>Education</button></li>
          <li><button className='hover:text-custom-teal hover:scale-[1.1] active:scale-[1] transition duration-300 ease-in-out' onClick={() => navigate('/portfolio')}>Portfolio</button></li>
        </ul>
      </div>
    </div>
  );
}

export default MenuHeader;