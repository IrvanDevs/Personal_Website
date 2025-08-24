import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX  } from 'react-feather';
import Box from '@mui/material/Box';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// video src
import video1 from '../Video/video-production/video1.mp4';
import video2 from '../Video/video-production/video2.mp4';
import video3 from '../Video/video-production/video3.mp4';
import video4 from '../Video/video-production/video4.mp4';
import video5 from '../Video/video-production/video5.mp4';
import video6 from '../Video/video-production/video6.mp4';
import video7 from '../Video/video-production/video7.mp4';
import video8 from '../Video/video-production/video8.mp4';
import video9 from '../Video/video-production/video9.mp4';
import video10 from '../Video/video-production/video10.mp4';
import video11 from '../Video/video-production/video11.mp4';
import video12 from '../Video/video-production/video12.mp4';
import video13 from '../Video/video-production/video13.mp4';
import video14 from '../Video/video-production/video14.mp4';
import video15 from '../Video/video-production/video15.mp4';

// thumbail
import thumb1 from '../Video/video-production/thumb1.jpg';
import thumb2 from '../Video/video-production/thumb2.jpg';
import thumb3 from '../Video/video-production/thumb3.jpg';
import thumb4 from '../Video/video-production/thumb4.jpg';
import thumb5 from '../Video/video-production/thumb5.jpg';
import thumb6 from '../Video/video-production/thumb6.jpg';
import thumb7 from '../Video/video-production/thumb7.jpg';
import thumb8 from '../Video/video-production/thumb8.jpg';
import thumb9 from '../Video/video-production/thumb9.jpg';
import thumb10 from '../Video/video-production/thumb10.jpg';
import thumb11 from '../Video/video-production/thumb11.jpg';
import thumb12 from '../Video/video-production/thumb12.jpg';
import thumb13 from '../Video/video-production/thumb13.jpg';
import thumb14 from '../Video/video-production/thumb14.jpg';
import thumb15 from '../Video/video-production/thumb15.jpg';

const videos = [
  { src: video1, thumbnail: thumb1, title: 'Instagram Ad Video', description: '© Samudra Commerce' },
  { src: video2, thumbnail: thumb2, title: 'Instagram Ad Video', description: '© Samudra Commerce' },
  { src: video3, thumbnail: thumb3, title: 'Instagram Ad Video', description: '© Samudra Commerce' },
  { src: video4, thumbnail: thumb4, title: 'Instagram Ad Video', description: '© Samudra Commerce' },
  { src: video5, thumbnail: thumb5, title: 'Instagram Ad Video', description: '© Samudra Commerce' },
  { src: video6, thumbnail: thumb6, title: 'Instagram Ad Video', description: '© Samudra Commerce' },
  { src: video7, thumbnail: thumb7, title: 'Instagram Ad Video', description: '© Samudra Commerce' },
  { src: video8, thumbnail: thumb8, title: 'Ons Short Video', description: '© Samudra Commerce' },
  { src: video9, thumbnail: thumb9, title: 'Tiktok Short Video', description: '© Samudra Commerce' },
  { src: video10, thumbnail: thumb10, title: 'Tiktok Short Video', description: '© Samudra Commerce' },
  { src: video11, thumbnail: thumb11, title: 'Instagram Short Video', description: '© Blackmores Indonesia' },
  { src: video12, thumbnail: thumb12, title: 'Instagram Short Video', description: '© Blackmores Indonesia' },
  { src: video13, thumbnail: thumb13, title: 'Company Promotion', description: '© PT Samudra Retail Indonesia' },
  { src: video14, thumbnail: thumb14, title: 'YouTube Lyrics Video', description: '© IrvanDevs'},
  { src: video15, thumbnail: thumb15, title: 'YouTube Education Video', description: '© ToThePoint under IrvanDevs'},
];

gsap.registerPlugin(ScrollTrigger);


function VideoProduction() {
  const videoRefs = useRef([]);
  const [loading, setLoading] = useState(videos.map(() => true));
  const [playingStates, setPlayingStates] = useState(videos.map(() => false));
  const [ratios, setRatios] = useState(videos.map(() => 56.25));
  const [orientations, setOrientations] = useState(videos.map(() => 'landscape'));
  const [progress, setProgress] = useState(videos.map(() => 0));
  const [showControls, setShowControls] = useState(videos.map(() => true));
  const [fullscreenIndex, setFullscreenIndex] = useState(-1);
  const [showThumbnail, setShowThumbnail] = useState(videos.map(() => true));
  const [mutedAll, setMutedAll] = useState(true);
  const hideTimeouts = useRef([]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (fullscreenElement && fullscreenElement.tagName === 'VIDEO') {
        const index = videoRefs.current.indexOf(fullscreenElement);
        setFullscreenIndex(index);
      } else setFullscreenIndex(-1);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      hideTimeouts.current.forEach((t) => clearTimeout(t));
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const updateRatio = (i, vid) => {
    const ratio = (vid.videoHeight / vid.videoWidth) * 100;
    const orientation = vid.videoWidth > vid.videoHeight ? 'landscape' : 'portrait';
    setRatios((prev) => prev.map((r, idx) => (idx === i ? ratio : r)));
    setOrientations((prev) => prev.map((o, idx) => (idx === i ? orientation : o)));
  };

  const handleLoadedData = (i) => {
    const vid = videoRefs.current[i];
    if (!vid) return;
    setLoading((prev) => prev.map((l, idx) => (idx === i ? false : l)));
    updateRatio(i, vid);

    vid.ontimeupdate = () => {
      setProgress((prev) => prev.map((p, idx) => (idx === i ? vid.currentTime / vid.duration : p)));
    };
    vid.muted = mutedAll;
  };

  const togglePlay = (i) => {
    const vid = videoRefs.current[i];
    if (!vid) return;

    if (vid.paused) {
      videos.forEach((_, j) => {
        if (j !== i) {
          const otherVid = videoRefs.current[j];
          if (otherVid && !otherVid.paused) {
            otherVid.pause();
            otherVid.currentTime = 0;
            setPlayingStates((prev) => prev.map((p, idx) => (idx === j ? false : p)));
            setShowThumbnail((prev) => prev.map((s, idx) => (idx === j ? true : s)));
          }
        }
      });

      vid.play();
      setPlayingStates((prev) => prev.map((p, idx) => (idx === i ? true : p)));
      setShowThumbnail((prev) => prev.map((s, idx) => (idx === i ? false : s)));
      showControlsTemporarily(i);
    } else {
      vid.pause();
      setPlayingStates((prev) => prev.map((p, idx) => (idx === i ? false : p)));
      setShowThumbnail((prev) => prev.map((s, idx) => (idx === i ? true : s)));
      setShowControls((prev) => prev.map((s, idx) => (idx === i ? true : s)));
      clearTimeout(hideTimeouts.current[i]);
    }
  };

  const toggleMuteAll = () => {
    setMutedAll((prev) => {
      const newMuted = !prev;
      videoRefs.current.forEach((vid) => {
        if (vid) vid.muted = newMuted;
      });
      return newMuted;
    });
  };

  const showControlsTemporarily = (i) => {
    setShowControls((prev) => prev.map((s, idx) => (idx === i ? true : s)));
    clearTimeout(hideTimeouts.current[i]);
    hideTimeouts.current[i] = setTimeout(() => {
      setShowControls((prev) => prev.map((s, idx) => (idx === i ? false : s)));
    }, 1000);
  };

  const handleFullscreen = (i) => {
    const vid = videoRefs.current[i];
    if (!vid) return;
    if (vid.requestFullscreen) vid.requestFullscreen();
    else if (vid.webkitRequestFullscreen) vid.webkitRequestFullscreen();
    else if (vid.msRequestFullscreen) vid.msRequestFullscreen();
  };

  const handleTimelineChange = (i, e) => {
    const vid = videoRefs.current[i];
    if (!vid) return;
    vid.currentTime = vid.duration * e.target.value;
    showControlsTemporarily(i);
  };

  useEffect(() => {
    gsap.utils.toArray('.fade-in').forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0},
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

  return (
    <div className='grid gap-4 auto-rows-min grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 fade-in'>
      {videos.map((video, i) => (
        <div 
          key={i} 
          className={`bg-white rounded-xl px-1 py-1 group
            ${orientations[i] === 'landscape'
              ? 'col-span-3 max-md:col-span-2 max-sm:col-span-1'
              : 'col-span-1'}
          `}
        >
          <div
            className='relative bg-white rounded-xl overflow-hidden'
            style={{ paddingTop: `${ratios[i]}%` }}
            onMouseMove={() => playingStates[i] && showControlsTemporarily(i)}
          >
            {/* Skeleton putih */}
            {loading[i] && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(224,224,224,0.7)',
                borderRadius: '1rem',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            )}

            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={video.src}
              poster={video.thumbnail}
              loop
              playsInline
              onLoadedData={() => handleLoadedData(i)}
              onContextMenu={(e) => e.preventDefault()}
              controlsList='nodownload'
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: fullscreenIndex === i ? 'contain' : 'cover',
                backgroundColor: 'black',
                display: loading[i] ? 'none' : 'block',
              }}
            />

            {/* Tombol Mute */}
            {playingStates[i] && showControls[i] && !loading[i] && (
              <button
                onClick={toggleMuteAll}
                className='absolute top-2 right-2 z-10 p-2 bg-black/60 rounded-full text-white transition-opacity duration-300'
              >
                {mutedAll ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            )}

            {/* Thumbnail overlay */}
            {showThumbnail[i] && !loading[i] && (
              <div
                className='absolute inset-0 w-full h-full flex items-center justify-center bg-black'
                style={{
                  backgroundImage: `url(${video.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <button
                  onClick={() => togglePlay(i)}
                  className='flex items-center justify-center w-16 h-16 bg-custom-db opacity-80 rounded-full text-white'
                >
                  <Play size={35} className='ml-1.5' />
                </button>
              </div>
            )}

            {/* Center Pause */}
            {playingStates[i] && showControls[i] && !loading[i] && (
              <button
                onClick={() => togglePlay(i)}
                className='absolute inset-0 flex items-center justify-center w-full h-full text-custom-teal transition duration-300 text-6xl'
              >
                <span className='flex items-center justify-center w-16 h-16 bg-custom-db opacity-80 rounded-full text-white'>
                  <Pause size={35} />
                </span>
              </button>
            )}

            {/* Bottom timeline + fullscreen */}
            {playingStates[i] && showControls[i] && !loading[i] && (
              <div className='absolute bottom-0 left-0 right-0 px-2 py-1 bg-black/40 transition duration-300 flex items-center'>
                <input
                  type='range'
                  min={0}
                  max={1}
                  step={0.01}
                  value={progress[i]}
                  onChange={(e) => handleTimelineChange(i, e)}
                  className='w-full mx-2 hover:cursor-pointer'
                />
                <button onClick={() => handleFullscreen(i)} className='hidden md:block'>
                  <Maximize size={24} className='text-white' />
                </button>
              </div>
            )}
          </div>

          <div className=' text-center mt-2 mb-2'>
            <p className='font-bold text-custom-teal text-xl md:group-hover:tracking-wide transition-all duration-300 ease-in-out'>
              {video.title}
            </p>
            <p className='text-[0.7rem] text-custom-db opacity-80 leading-[1rem] -mt-0.5'>{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoProduction;