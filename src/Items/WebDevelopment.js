import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bayarrr from '../Images/website-development/bayarrr.png'
import personalPage from '../Images/website-development/personal-page.png'
gsap.registerPlugin(ScrollTrigger);

function WebDevelopment() {
  const Website = [
    {
      thumbnail: bayarrr,
      title: 'Bayarrr.com',
      description: 'Bill Splitting Web Application | Launched Aug 2025',
      link: 'https://bayarrr.com/'
    },
    {
      thumbnail: personalPage,
      title: 'IrvanDevs',
      description: 'Personal Artist Page | Posted on GitHub',
      link: 'https://irvandevs.github.io/dlfmqks-demo/'
    },
  ];

  const [loadedImages, setLoadedImages] = useState(
    Array(Website.length).fill(false)
  );

  useEffect(() => {
    gsap.utils.toArray('.fade-in').forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          delay: i * 0.3,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 10%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const newArr = [...prev];
      newArr[index] = true;
      return newArr;
    });
  };

  return (
    <div className='grid gap-4 auto-rows-min grid-cols-1 fade-in'>
      {Website.map((website, i) => (
        <a
          href={website.link}
          target='_blank'
          rel='noreferrer'
          key={i}
          className='group bg-white max-md:active:bg-white/90 transition-all duration-200 ease-in-out px-3 py-4 rounded-xl text-custom-teal text-center cursor-pointer'
        >
          <Box className='overflow-hidden rounded-xl drop-shadow-lg relative'>
            {/* Skeleton */}
            {!loadedImages[i] && (
              <Box className='absolute inset-0 bg-gray-300 animate-pulse'></Box>
            )}
            <img
              src={website.thumbnail}
              alt={website.thumbnail}
              className={`pointer-events-none shadow-lg md:group-hover:scale-110 transition-all duration-500 ease-in-out ${loadedImages[i] ? '' : 'opacity-0'}`}
              onLoad={() => handleImageLoad(i)}
            />
          </Box>
          <div className='mt-2'>
            <p className='font-bold text-xl max-sm:text-base md:group-hover:tracking-widest transition-all duration-300 ease-in-out'>
              {website.title}
            </p>
            <p className='text-xs opacity-80 leading-[1rem]'>{website.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default WebDevelopment;