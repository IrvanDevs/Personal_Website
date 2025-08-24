import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

function Home() {
  return (
    <div className='Home-container'>
      <div id='intro'><Intro /></div>
      <div id='about'><About /></div>
      <div id='experience'><Experience /> </div>
      <div id='skills'><Skills /></div>
      <div id='education'><Education /></div>
    </div>
  );
}

export default Home;
