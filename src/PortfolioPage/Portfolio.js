import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import VideoProduction from '../Items/VideoProduction';
import StreamingGraphic from '../Items/StreamingGraphic';
import WebDevelopment from '../Items/WebDevelopment';
import BackHome from '../Items/BackHome';

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
    const [activeMenu, setActiveMenu] = useState('video');

    const menuList =[
        {label: 'Video Production', key:'video'},
        {label: 'Streaming Graphic', key:'stream'},
        {label: 'Web Development', key:'web'},
    ]

    const titleRef = useRef(null);
    const btnRefs = useRef([]);

    useEffect(() => {
    document.title = 'Portfolio | Irvan';

    // Title pop in
    gsap.fromTo(titleRef.current, 
      { scale: 0 }, 
      {   
        scale: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 100%',
            toggleActions: 'play none none none none',
          }
      }
    );

    gsap.fromTo(
        btnRefs.current,
        { scale: 0, opacity: 0, x: -1 },
        {
        scale: 1,
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: 'power4.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.btn-item',
            start: 'top 100%',
            toggleActions: 'play none none none none',
        },
        }
    );
  }, []);
    
    return (
        <div className='w-full text-white overflow-hidden pt-8 pb-[3.5rem]'>
            <BackHome />
            <div ref={titleRef} className='w-[80%] max-w-6xl mx-auto max-md:mt-10'>
                <p className='w-full text-[5rem] max-md:text-[4rem] max-sm:text-5xl font-extrabold text-center text-outline md:text-outline-hover pointer'>PORTFOLIO</p>
            </div>
            <div className='btn-item max-md:text-xs flex max-sm:flex-col items-center justify-center gap-20 max-md:gap-10 max-sm:gap-5 mt-2 max-sm:mt-5'>
                {menuList.map((menu, index)=> (
                    <button 
                        key={menu.key}
                        ref={(el) => (btnRefs.current[index] = el)}
                        className={`${
                            activeMenu === menu.key
                            ? 'button-active'
                            : 'button-custom md:button-hover'
                        }`}
                        onClick={()=> setActiveMenu(menu.key)}
                        >
                        {menu.label}
                    </button>
                ))}
            </div>

            <div className='w-[80%] max-w-4xl mx-auto mt-10'>
                {activeMenu === 'video' && <VideoProduction />}
                {activeMenu === 'stream' && <StreamingGraphic />}
                {activeMenu === 'web' && <WebDevelopment />}
            </div>
        </div>
    );
}


export default Portfolio;
