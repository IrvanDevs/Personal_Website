import { useRef, useEffect } from 'react';
import gsap from 'gsap';

function EducationItem({ items }) { 
    const eduRefs = useRef([]);

    useEffect(() => {
        // Education Popin
        const eduTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.edu-Item',
                start: 'top 100%',
                end: 'top 0%',
                scroller: '.Main',
                toggleActions: 'play none none reverse',
            },
            delay: 0.5,
        });

        eduRefs.current.forEach((eduItem, index) => {
            eduTl.fromTo(
                eduItem,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 0.5,
                    ease: 'power4.out',
                    delay: index * 0.1,
                    stagger: 0.1,
                }
            );
        });
    }, []);

    return (
    <div className='edu-Item flex flex-wrap justify-center items-center gap-4'>
        {/* Education List */}
        {items.map((item, index) =>(
            <div 
                key={index}
                ref={(el) => (eduRefs.current[index] = el)}
                className='bg-white flex items-center gap-4 rounded-[5px] pl-7 py-2 w-[480px] max-lg:w-[320px] max-lg:h-[220px] max-lg:flex-col max-lg:p-0 max-lg:justify-center max-lg:gap-0 max-sm:w-[250px]'>
                <img className='size-[120px] pointer-events-none rounded-[5px] max-sm:size-[100px]' src={item.educationLogo} />
                <div className='flex flex-col max-lg:text-center '>
                    <div className='flex flex-col leading-[19px] mt-[5px] max-sm:leading-[17px]'>
                        <p className='text-[20px] font-semibold max-lg:text-[18px]'>{item.educationTitle}</p>
                        <p className='text-[13px] font-semibold max-sm:text-[12px]'>{item.educationMajor}</p>
                    </div>
                    <p className='max-lg:text-[13px]'>{item.period}</p>
                </div>
            </div>
        ))}
    </div>
  );
}

export default EducationItem;
