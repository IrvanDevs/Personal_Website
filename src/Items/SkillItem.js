import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function SkillItem({ skillCate, logos, skillTitles, skillPercentages }) {
    const cateRef = useRef(null);
    const skillRefs = useRef([]);

    useEffect(() => {
        // Category Popin
        gsap.fromTo(cateRef.current, 
            { scale: 0 }, 
            {   
                scale: 1,
                x: 1, 
                duration: 1,
                ease: 'power4.out',
                delay: 0.5,
                scrollTrigger: {
                    trigger: cateRef.current,
                    start: 'top 100%',
                    end: 'top 0%',
                    scroller: '.Main',
                    toggleActions: 'restart reverse restart reverse',
                }
            }
        );

        // Skill Popin
        const skillTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.skill-item',
                start: 'top 100%',
                end: 'top 0%',
                scroller: '.Main',
                toggleActions: 'restart reverse restart reverse',
            },
            delay: 1,
        });

        skillRefs.current.forEach((skillItem, index) => {
            skillTl.fromTo(
                skillItem,
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
        <div className='text-custom-teal w-[800px] max-lg:w-[600px] max-md:max-w-[500px] max-sm:max-w-[250px]  font-semibold flex flex-col gap-4 max-lg:gap-3 max-sm:gap-2'>
            {/* Skill Title */}
            <div ref={cateRef} className='bg-white w-full text-[18px] max-lg:text-[15px] max-md:text-[13px] text-center py-2 max-md:py-1 rounded-[5px] mx-auto'>
                <p>{skillCate}</p>
            </div>

            {/* Skill List */}
            <div className='skill-item grid gap-4 text-[15px] max-lg:text-[12px] max-lg:gap-3 max-sm:gap-2'
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                    justifyContent: 'center'
                }}>
                {logos.map((logo, index) => (
                    <div ref={(el) => (skillRefs.current[index] = el)} key={index} className='cursor-pointer bg-white rounded-[10px] py-4 flex flex-col justify-center items-center relative group'>
                        {/* Hover Percentage */}
                        <div className='absolute inset-0 bg-custom-teal opacity-0 group-hover:opacity-90 transition duration:300 ease-in-out flex justify-center items-center text-white rounded-[10px] text-[20px] max-md:text-[15px] font-bold'>
                            {skillPercentages[index]}%
                        </div>

                        {/* Icon */}
                        <img className='size-[80px] max-lg:size-[70px] max-sm:size-[50px] maxpointer-events-none' src={logo} alt={`logo-${index}`} />
                        <p>{skillTitles[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillItem;
