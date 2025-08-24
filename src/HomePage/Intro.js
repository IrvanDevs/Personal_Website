import { useRef, useEffect } from 'react';
import { Typewriter } from "react-simple-typewriter";
import bg from '../Video/background.mp4';
import profile from '../Images/profile.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Download, Linkedin, Instagram, Phone } from 'react-feather';
import SocialLink from '../Items/SocialLink';
import ScrollDown from '../MainElement/Scrolldown';
import cvPdf from '../pdf/Irvan_MultimediaSpecialist_CV.pdf'


gsap.registerPlugin(ScrollTrigger);

function Intro() {
    // SocialMedia Array
    const socialMedia = [
        {
            icon: Linkedin,
            link: "https://www.linkedin.com/in/irvandevs/",
            text: "@irvandevs"
        },
        {
            icon: Instagram,
            link: "https://www.instagram.com/irvandevs",
            text: "@irvandevs"
        },
        {
            icon: Phone,
            link: "tel:+6281360802626",
            text: "+6291360802626"
        }
    ];

    // GSAP Animation
    const introRef = useRef(null);
    const videoRef = useRef(null);
    const imageRef = useRef(null);
    const nameRefs = useRef([]);
    const btnRefs = useRef([]);
    const socialRefs = useRef([]);

    // Effects
    useEffect(() => {
        // infoDade
        gsap.fromTo(introRef.current, 
            {opacity: 0 }, 
            { 
                opacity: 1,
                duration: 1,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: introRef.current,
                    start: "top 100%",
                }
            }
        );
        // VideoScale
        gsap.fromTo(videoRef.current, 
            {opacity: 0 }, 
            { 
                opacity: 0.5,
                duration: 10,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: "top 100%",
                    end: "top 0%",
                }
            }
        );
        // Image Popin
        gsap.fromTo(imageRef.current, 
            { opacity: 0, scale: 0 }, 
            { 
                opacity: 1, 
                scale: 1, 
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 100%",
                    end: "top 0%",
                    scroller: ".Main",
                    toggleActions: "restart reverse restart reverse",
                }
            }
        );

        // Name Slider
        const nameTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.name-item',
                start: "top 100%",
                end: "top 0%",
                scroller: ".Main",
                toggleActions: "restart reverse restart reverse",
            }
        });

        nameRefs.current.forEach((nameItem, index) => {
            nameTl.fromTo(
                nameItem,
                {opacity: 0, x: -20},
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    delay: index * 0.1,
                    stagger: 0.1,
                }
            );
        });

        //btn SlideUp
        const btnTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.btn-item',
                start: "top 100%",
                end: "top 0%",
                scroller: ".Main",
                toggleActions: "restart reverse restart reverse",
            },
            delay: 1,
        });
        

        btnRefs.current.forEach((btnItem, index) => {
            btnTl.fromTo(
                btnItem,
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    delay: index * 0.01,
                }
            );
        });
        
        //Social SlideUp
        const socialTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.btn-item',
                start: "top 100%",
                end: "top 0%",
                scroller: ".Main",
                toggleActions: "restart reverse restart reverse",
            },
            delay: 2,
        });
        
        socialRefs.current.forEach((socialItem, index) => {
            socialTl.fromTo(
                socialItem,
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    delay: index * 0.1,
                    stagger: 0.1,
                }
            );
        });
    }, []);

    return (
        // IntroWrapper
        <div ref={introRef} className='snap-start snap-always relative text-white h-screen flex justify-center items-center'>
            <ScrollDown />
            {/* BgVideo */}
            <div className='absolute top-0 left-0 w-screen h-screen'>
            <video
                ref={videoRef} 
                className="pointer-events-none w-screen h-screen object-cover select-none" 
                autoPlay 
                loop 
                muted 
                playsInline 
                disablePictureInPicture 
                controlsList="nodownload nofullscreen noremoteplayback">
                <source src={bg} type='video/mp4' />
            </video>
            </div>

            {/* Intro Content */}
            <div className='text-center z-10 w-[80%] flex justify-center'>
                <div className='flex justify-center items-center gap-10 max-md:gap-5 max-md:flex-col mr-20 max-xl:mr-2 max-md:mr-0'>
                    {/* ProfilePicture */}
                    <img ref={imageRef} src={profile} alt='Profile-Pic' className='w-[450px] max-xl:w-[380px] max-lg:w-[300px] max-sm:w-[250px] pointer-events-none'/>

                    {/* ProfileText */}
                    <div className='w-full flex flex-col gap-5 max-lg:gap-3 max-md:items-center'>
                        {/* IntroGreetings */}
                        <div className='name-item flex flex-col leading-10 max-lg:leading-7 max-sm:leading-6 items-start max-md:items-center'>
                            <p className='text-[47px] max-lg:text-[32px] max-sm:text-[25px] font-semibold' ref={(el) => (nameRefs.current[0] = el)} >
                                H
                                <span>
                                    <Typewriter
                                        words={["ello There, I'm Irvan."]}
                                        loop={0}
                                        typeSpeed={100}
                                        deleteSpeed={40}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </p>
                            <p className='text-[31px] max-lg:text-[17px] max-sm:text-[15px]' ref={(el) => (nameRefs.current[1] = el)}>Multimedia Specialist</p>
                        </div>

                        {/* ButtonLink */}
                        <div className='btn-item flex max-sm:flex-col items-center gap-5 max-lg:gap-3 text-[20px] max-lg:text-[15px] max-sm:text-[17px]'>
                            {/* HireMe */}
                            <div ref={(el) => (btnRefs.current[0] = el)}>
                                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=irvandevs21@gmail.com' target='_Blank' rel='noopener noreferrer'className='block bg-white text-black border border-white w-[253px] max-lg:w-[180px] py-2 rounded-[10px] hover:bg-opacity-80 transition duration-400 ease-in-out' >Hire Me</a>
                            </div>

                            {/* DownloadCV */}
                            <div ref={(el) => (btnRefs.current[1] = el)}>
                                <a href={cvPdf} download='Irvan_MultimediaSpecialist_CV.pdf' target='_Blank' className='border border-white w-[253px] max-lg:w-[180px] py-2 flex justify-center items-center gap-2 rounded-[10px] hover:bg-white hover:text-black transition duration-500 ease-in-out'>
                                    <Download className='mb-0.5 size-6 max-lg:size-4'/>
                                    Download CV
                                </a>
                            </div>
                        </div>

                        {/* SocialMedia */}
                        <div className='social-item w-full flex items-center gap-10 mt-1 max-lg:flex-col max-lg:items-start max-lg:gap-2 max-sm:items-center'>
                            {socialMedia.map((item, index) =>(
                                <div key={index}
                                    ref={(el) => (socialRefs.current[index] = el)}>
                                    <SocialLink
                                        icon={item.icon}
                                        link={item.link}
                                        text={item.text}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;