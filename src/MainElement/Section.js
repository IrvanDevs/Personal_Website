import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Section({section}) {
    const sectionRef = useRef(null);

    // Title Loop Effects
    useEffect(() => {
        gsap.fromTo(
            '.section', 
            {
                opacity: 0, 
            }, 
            {
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
                repeat: -1,
                yoyo: true,
                delay: 1,
            }
        );

        // Title Animation
        gsap.fromTo(sectionRef.current, 
            { opacity: 0, x: -50}, 
            { 
                opacity: 1,
                x: 0, 
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 100%',
                    end: 'top 0%',
                    scroller: '.Main',
                    toggleActions: 'restart reverse restart reverse',
                }
            }
        );
    }, []);
    return (
        <div ref={sectionRef} className='section absolute top-0 left-0 mt-11 ml-10 max-md:mt-12 flex items-center gap-3 max-md:gap-2'>
            <div className='bg-white size-2 rounded-xl mb-0.5 max-md:mb-0'></div>
            <p className='text-[18px] text-white max-md:text-[15px] font-regular rounded-[10px]'>{section}</p>
        </div>
    );
}

export default Section;