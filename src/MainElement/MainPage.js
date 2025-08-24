import Home from '../HomePage/Home';
import Menu from '../MainElement/MenuHeader';

function MainPage() {
  return (
    <div className='Main overflow-x-hidden overflow-y-auto scroll-smooth h-screen snap-none md:snap-y md:snap-mandatory'>
      <Menu />
      <Home />
    </div>
  );
}

export default MainPage;
