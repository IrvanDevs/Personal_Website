import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './MainElement/MainPage';
import Portfolio from './PortfolioPage/Portfolio';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
}


export default App;
