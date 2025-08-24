import { useRef, useEffect } from 'react';
import { Code, Music, Film } from 'react-feather';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ScrollDown from '../MainElement/Scrolldown';
import Section from '../MainElement/Section';

gsap.registerPlugin(ScrollTrigger);

function About() {
  // GSAP Animation
  const textRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    // Text FadeIn
    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 20 }, 
      { 
          opacity: 1, 
          y: 0, 
          duration: 2,
          ease: 'power4.out',
          scrollTrigger: {
              trigger: textRef.current,
              start: 'top 100%',
              end: 'top 0%',
              scroller: '.Main',
              toggleActions: 'restart reverse restart reverse',
          }
      }
    );

    // Icon Popout
    const iconTl = gsap.timeline({
      scrollTrigger: {
          trigger: '.icon-item',
          start: 'top 100%',
          end: 'top 0%',
          scroller: '.Main',
          toggleActions: 'restart reverse restart reverse',
      },
        delay: 1,
    });
    

    iconRefs.current.forEach((iconItem, index) => {
      iconTl.fromTo(
            iconItem,
            {opacity: 0, scale: 0},
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: 'power4.out',
              delay: index * 0.01,
            },
        );
    });
  }, []);
  
  return (
    <div className='snap-start snap-always relative text-white h-screen flex justify-center items-center'>
        <Section section='About Me'/>
        <ScrollDown />
                
        <div className='text-center w-[80%] flex flex-col justify-center items-center
        gap-4'>
          <p ref={textRef} className='text-[20px] max-xl:text-[18px] max-md:text-[15px] mx-auto'>
            <span className='font-semibold italic'>I'm a Multimedia Specialist</span> with 3 years of experience in digital content creation,<br/>including web development, video editing, and music production.<br />With a background in multimedia and a Computer Science degree in progress,<br/>I enjoy building interactive and visually appealing web experiences<br />while continuously improving my skills in modern web technologies.
          </p>

          <div className='icon-item flex justify-center items-center gap-5'>
            <Code size={30} ref={(el) => (iconRefs.current[0] = el)}/>
            <Music size={30} ref={(el) => (iconRefs.current[1] = el)}/>
            <Film size={30} ref={(el) => (iconRefs.current[2] = el)}/>
          </div>
        </div>
    </div>
  );
}

export default About;
