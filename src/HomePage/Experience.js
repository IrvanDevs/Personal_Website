import ExperienceItem from '../Items/ExperienceItem';
import ScrollDown from '../MainElement/Scrolldown';
import Section from '../MainElement/Section';

function Experience() {
    // Experiences List
    const experiences =[
        // SRI
        {
            startYear: 2022,
            endYear: 'present',
            title: 'Multimedia Specialist',
            company: 'PT Samudra Retail Indonesia',
            tasks: [
              'Develop engaging TikTok content from concept to final edit.',
              'Design banners, frames, and schedules for seamless broadcasts.',
              'Track and analyze live streaming performance monthly.',
              'Build and maintain company websites for better online presence.'
            ],
        },

        // Web Developer
        {
            startYear: 2025,
            endYear: 'Aug 2025',
            title: 'Web Developer',
            company: 'Self-Employed',
            tasks: [
                'Developed a web application for splitting online shopping bills.',
                'Implemented frontend logic for automatic subtotal and total calculations.',
                'Designed a clean and user-friendly interface for better usability.',
                'Performed testing and debugging to ensure stability and smooth performance.'
            ],
        },
        
        // YouTube
        {
            startYear: 2019,
            endYear: 'present',
            title: 'YouTube Content Creator',
            company: 'Self-Employed',
            tasks: [
                'Compose and produce original tracks, handling recording, mixing, and mastering.',
                'Create high-quality visuals to enhance music content.',
                'Perform and record unique renditions of popular tracks.'
            ],
        },

        // VOYU
        {
            startYear: 2022,
            endYear: 2023,
            title: 'Video Editor',
            company: 'VOYU by PT Sukses Pedia Inspira',
            tasks: [
                'Work as a Freelance',
                'Edit videos with seamless voiceover integration.',
                'Find and curate relevant clips to enhance content.',
                'Assemble high-quality visuals and sound to meet client needs.'
            ],
        },
    ];

    return (
        <div className='snap-start snap-always relative text-white h-screen flex justify-center items-center'>
            <Section section='Experience'/>
            <ScrollDown />
            <div className='w-[80%] flex justify-center'>
                <div className='flex flex-col gap-5 max-md:gap-4'>  
                    {experiences.map((experience,index)=>(
                        <ExperienceItem 
                            key={index}
                            startYear={experience.startYear}
                            endYear={experience.endYear}
                            title={experience.title}
                            company={experience.company}
                            tasks={experience.tasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;