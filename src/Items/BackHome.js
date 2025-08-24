import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import profile from '../Images/profile.png';

gsap.registerPlugin(ScrollTrigger);

function BackHome() {
    const navigate = useNavigate();
    const backRef = useRef(null);

    useEffect(() => {
      //  Loop Effects
      gsap.fromTo(
          '.back-text', 
          {
              x: -10, 
          }, 
          {
              x: 0,
              duration: 1,
              ease: 'power4.out',
              repeat: -1,
              yoyo: true,
          }
      );

      // popup
      gsap.fromTo(backRef.current, 
      { x: -100, opacity: 0}, 
      {   
        x: 1,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: backRef.current,
            start: 'top 100%',
            toggleActions: 'play none none none none',
          }
      }
    );

    }, []);

  return (
    <div ref={backRef} className='fixed top-10 left-10 z-[100]'>
        <button onClick={() => navigate('/')}  className='flex items-center gap-5'>
          <img src={profile} alt='Profile-Pic' className='pointer-events-none size-[50px]'/>
          <p className='back-text font-semibold text-sm bg-white text-custom-db py-1 px-3 rounded-[5px]'>Return to profile?</p>
        </button>
    </div>
  );
}

export default BackHome;
