import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const footerRef = useRef(null);
    
    useEffect(() => {
        gsap.fromTo(footerRef.current, 
          {opacity:0}, 
          {
            opacity: 1, 
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: footerRef.current,
                start: 'top 100%',
                end: 'top 0%',
                scroller: '.Main',
                toggleActions: 'restart reverse restart reverse',
            }
          }
        );
    }, []);    
    return (
        <div ref={footerRef} className='absolute bottom-0 h-10 bg-white text-black w-full flex justify-center items-center'>
            <p className='font-regular text-sm'>© {new Date().getFullYear()} IrvanDevs. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;