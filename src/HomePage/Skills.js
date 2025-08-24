import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SkillItem from '../Items/SkillItem';
import ScrollDown from '../MainElement/Scrolldown';
import Section from '../MainElement/Section';

import html from '../Images/webp/html.webp';
import css from '../Images/webp/css.webp';
import reactJs from '../Images/webp/reactjs.webp';
import tailwindCSS from '../Images/webp/tailwind.webp';
import photoshop from '../Images/webp/photoshop.webp';
import figma from '../Images/webp/figma.webp';
import afterEffects from '../Images/webp/aftereffects.webp';
import premierePro from '../Images/webp/premierepro.webp';
import obs from '../Images/webp/obs.webp';
import flStudio from '../Images/webp/flstudio.webp';

gsap.registerPlugin(ScrollTrigger);


function Skills() {
  const skills = [
    {
        skillCate: 'Web Development',
        logos: [html, css, reactJs, tailwindCSS],
        skillTitles: ['HTML 5', 'CSS', 'ReactJS', 'Tailwind CSS'],
        skillPercentages: ['90', '90', '80', '85']
    },
    {
        skillCate: 'Design',
        logos: [photoshop, figma],
        skillTitles: ['Photoshop', 'Figma'],
        skillPercentages: ['85', '85',]
    },
    {
        skillCate: 'Editing & Media',
        logos: [afterEffects, premierePro, obs, flStudio],
        skillTitles: ['After Effects', 'Premiere Pro', 'OBS', 'FL Studio'],
        skillPercentages: ['85', '85', '90', '80']
    },
  ];

  const instructionRef = useRef(null);
  // Instruction Animation
  useEffect(() => {
    gsap.fromTo(instructionRef.current, 
        { opacity: 0 }, 
        {   
            opacity: 0.5,
            x: 1, 
            duration: 1,
            ease: 'power4.out',
            delay: 0.5,
            scrollTrigger: {
                trigger: instructionRef.current,
                start: 'top 100%',
                end: 'top 0%',
                scroller: '.Main',
                toggleActions: 'play none none reverse',
            }
        }
    );
  }, []);
  return (
    <div className='snap-start snap-always relative text-white h-screen flex flex-col justify-center items-center'>
        <Section section='Skills'/>
        <ScrollDown />
        <p ref={instructionRef} className='text-[12px] max-md:text-[10px] opacity-50 mb-2 max-md:mb-1'>* Hover/Click to see Percentage</p>
      <div className='flex flex-col gap-7 max-lg:gap-4 max-sm:gap-3 text-center'>
        {skills.map((skill, index) => (
          <SkillItem 
            key={index}
            skillCate={skill.skillCate}
            logos={skill.logos}
            skillTitles={skill.skillTitles}
            skillPercentages={skill.skillPercentages}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
