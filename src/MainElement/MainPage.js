import Home from '../HomePage/Home';
import Menu from '../MainElement/MenuHeader';

function MainPage() {
  return (
    <div className='Main overflow-x-hidden overflow-y-auto snap-mandatory snap-y scroll-smooth h-screen'>
      <Menu />
      <Home />
    </div>
  );
}

export default MainPage;
