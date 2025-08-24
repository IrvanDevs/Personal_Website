import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function ExperienceItem({startYear, endYear, title, company, tasks}) {
    // GSAP Animation
    const dotRef = useRef(null);
    const periodRef = useRef(null);
    const titleRef = useRef(null);
    const taskRefs = useRef([]);

    useEffect(()=> {
        // Dot PopIn
        gsap.fromTo(dotRef.current, 
            { scale: 0 }, 
            { 
                scale: 1, 
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: dotRef.current,
                    start: 'top 100%',
                    end: 'top 0%',
                    scroller: '.Main',
                    toggleActions: 'play none none reverse',
                }
            }
        );

        // Period Slide
        gsap.fromTo(periodRef.current, 
            { opacity:0, x: -20 }, 
            { 
                opacity: 1,
                x: 0, 
                duration: 1,
                delay: 0.5,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: periodRef.current,
                    start: 'top 100%',
                    end: 'top 0%',
                    scroller: '.Main',
                    toggleActions: 'play none none reverse',
                }
            }
        );

        // Title Slide
        gsap.fromTo(titleRef.current, 
            { opacity:0, x: -20 }, 
            { 
                opacity: 1,
                x: 0, 
                duration: 1,
                delay: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 100%',
                    end: 'top 0%',
                    scroller: '.Main',
                    toggleActions: 'play none none reverse',
                }
            }
        );

        // Tasks Slide
        const taskTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.task-item',
                start: 'top 100%',
                end: 'top 0%',
                scroller: '.Main',
                toggleActions: 'play none none reverse',
            },
            delay: 1.5,
        });

        taskRefs.current.forEach((taskItem, index) => {
            taskTl.fromTo(
                taskItem,
                {opacity: 0, x: -20},
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                    delay: index * 0.1,
                    stagger: 0.1,
                }
            );
        });
    },[]);

    // Calculate Year
    const calculateDate = () => {
    const start = parseInt(startYear);
    const end = endYear.toString().toLowerCase() === 'present' ? new Date().getFullYear() : parseInt(endYear);

    if (isNaN(start) || isNaN(end)) return '—';

    const duration = end - start;
        return duration <= 0 ? '<1 year' : `${duration} year${duration > 1 ? 's' : ''}`;
    };

    return (
        <div className='flex flex-col gap-2 max-sm:gap-1.5'>
            {/* Period */}
            <div className='flex items-center'>
                <div ref={dotRef} className='bg-white size-4 max-md:size-3 rounded-xl'></div>
                <p ref={periodRef} className='text-[20px] max-md:text-[18px] max-sm:text-[15px] font-semibold ml-3'>{startYear} - {endYear} <span className='text-xs ml-1 font-medium text-gray-400 mt-1'>| {calculateDate()}</span></p>
            </div>

            {/* Title and Company */}
            <div ref={titleRef} className='bg-custom-teal rounded-[5px] w-full'>
                <p className='text-[18px] max-md:text-[13px] max-sm:text-[12px] font-semibold px-4 py-2 max-md:py-1'>{title} | {company}</p>
            </div>

            {/* tasks mapping */}
            <div className='ml-5'>
                <ul className='task-item list-disc text-[15px] max-md:text-[13px] max-sm:text-[12px] leading-5 max-sm:leading-4'>
                    {tasks.map((task, index) =>(
                        <li key={index} ref={(el) => (taskRefs.current[index] = el)}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ExperienceItem;