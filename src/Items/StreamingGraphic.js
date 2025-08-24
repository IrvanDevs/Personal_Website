import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// video src
import video1 from '../Video/streaming-graphic/video1.mp4';
import video2 from '../Video/streaming-graphic/video2.mp4';
import video4 from '../Video/streaming-graphic/video4.mp4';
import video5 from '../Video/streaming-graphic/video5.mp4';
import video6 from '../Video/streaming-graphic/video6.mp4';
import video7 from '../Video/streaming-graphic/video7.mp4';
import video8 from '../Video/streaming-graphic/video8.mp4';
import video9 from '../Video/streaming-graphic/video9.mp4';

const videos = [
  {
    video: video1,
    title: 'Blackmores Indonesia',
    description: '© Samudra Commerce'
  },
  {
    video: video2,
    title: 'Anessa Indonesia',
    description: '© Samudra Commerce'
  },
  {
    video: video4,
    title: 'VitaminDiskon 8.8',
    description: '© Samudra Commerce'
  },
  {
    video: video5,
    title: 'VitaminKita',
    description: '© Samudra Commerce'
  },
  {
    video: video6,
    title: 'VitaminDiskon',
    description: '© Samudra Commerce'
  },
  {
    video: video7,
    title: 'Beeru Official',
    description: '© Samudra Commerce'
  },
  {
    video: video8,
    title: 'Minsoo Official',
    description: '© Samudra Commerce'
  },
  {
    video: video9,
    title: 'VitaminDiskon 11.11',
    description: '© Samudra Commerce'
  },

];

gsap.registerPlugin(ScrollTrigger);

function StreamingGraphic() {
  const videoRefs = useRef([]);
  const [loading, setLoading] = useState(videos.map(() => true));

  useEffect(() => {
    gsap.utils.toArray('.fade-in').forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.2,
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

  const handleLoadedData = (i) => {
    setLoading((prev) => prev.map((l, idx) => (idx === i ? false : l)));
  };

  return (
    <div className='grid gap-4 auto-rows-min grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 fade-in'>
      {videos.map((video, i) => (
        <div
          key={i}
          className='group relative bg-white max-md:active:bg-white/90 transition-all duration-200 ease-in-out px-1 py-1 rounded-xl text-custom-teal text-center'
        >
          {/* Skeleton Loading */}
          <div className='rounded-xl overflow-hidden'>
            {loading[i] && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(240,240,240,0.7)',
                  borderRadius: '1rem',
                }}
              />
            )}
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={video.video}
              loop
              playsInline
              controlsList='nodownload'
              autoPlay
              muted
              disablePictureInPicture
              onLoadedData={() => handleLoadedData(i)}
              className='pointer-events-none'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: loading[i] ? 'none' : 'block',
              }}
            />
          </div>

          <div className='text-center mt-2 mb-2'>
            <p className='font-bold text-custom-teal text-lg md:group-hover:tracking-wide transition-all duration-300 ease-in-out'>
              {video.title}
            </p>
            <p className='text-[0.7rem] text-custom-db opacity-80 leading-[1rem] -mt-1'>{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StreamingGraphic;