import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'react-feather';

function ScrollDown() {
    const scrollRef = useRef(null);

    // Scroll Loop Effects
    useEffect(() => {
        gsap.fromTo(
            '.scroll', 
            {
                y: 0, 
            }, 
            {
                y: -10,
                duration: 1,
                ease: 'power4.out',
                repeat: -1,
                yoyo: true,
            }
        );

        // Scroll Animation
        gsap.fromTo(scrollRef.current, 
            { opacity: 0}, 
            { 
                opacity: 0.7, 
                duration: 2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: 'top 100%',
                    end: 'top 0%',
                    scroller: '.Main',
                    toggleActions: 'restart reverse restart reverse',
                }
            }
        );
    }, []);

    return (
    // Scroll Indicator
        <div ref={scrollRef} className='scroll opacity-70 z-10 pointer-events-none absolute bottom-3 left-50 hidden md:flex items-center justify-center gap-1'>
            <ArrowDown className='mb-0.5' size={20}/> <p className='font-regular text-[15px]'>Scroll Down</p>
        </div>
    );
}

export default ScrollDown;
