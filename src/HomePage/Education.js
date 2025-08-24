import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Section from '../MainElement/Section';
import Footer from '../MainElement/Footer';
import EducationItem from '../Items/EducationItem';
import { ArrowRight } from 'react-feather';

import pskd from '../Images/webp/pskd.webp';
import binus from '../Images/webp/binus.webp';


gsap.registerPlugin(ScrollTrigger);

function Education() {
  const navigate = useNavigate();
  const btnRef = useRef(null);
  
  // Education list
  const educationData = [
    {
        educationLogo: pskd,
        educationTitle: 'SMK PSKD 3',
        educationMajor: 'Multimedia',
        period: '2019 - 2022'
    },
    {
        educationLogo: binus,
        educationTitle: 'Binus University | Online',
        educationMajor: 'Computer Science | Current GPA: 3.82',
        period: '2023 - Present'
    },
  ];

  useEffect(() => {
    // Button Popin
    gsap.fromTo(btnRef.current, 
      { scale: 0 }, 
      {   
        scale: 1,
        x: 1, 
        duration: 0.5,
        ease: 'power4.out',
        delay: 1.5,
        scrollTrigger: {
            trigger: btnRef.current,
            start: 'top 100%',
            end: 'top 0%',
            scroller: '.Main',
            toggleActions: 'play none none reverse',
          }
      }
    );
  }, []);

  return (
    <div className='snap-start snap-always relative text-custom-teal h-screen flex justify-center items-center'>
        <Section section='Education'/>
        <div className='w-[90%]'>
          <div className='flex flex-col justify-center items-center gap-5 '>
            {/* Education list */}
            <EducationItem items={educationData}/>

            {/* Portfolio button */}
            <div ref={btnRef}>
              <button onClick={() => navigate('/portfolio')} className='flex items-center gap-2 text-white border py-4 px-8 rounded-[5px] hover:text-lg hover:font-semibold hover:bg-white hover:text-black duration-500 ease-out active:bg-transparent active:text-white max-md:text-sm max-md:hover:text-sm max-md:hover:font-normal max-md:hover:bg-transparent max-md:hover:text-white max-sm:px-3 max-sm:py-3 max-sm:gap-1'>
                Let's take a look at my portfolio <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Education;