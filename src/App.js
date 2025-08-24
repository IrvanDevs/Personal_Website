import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './MainElement/MainPage';
import Portfolio from './PortfolioPage/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  );
}


export default App;
