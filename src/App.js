import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './global.css'; 
import { Header, Footer } from './components';
import { Home, Services, Installation, Repair, Contact } from './pages';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/#home' />} />
          <Route path='/services' element={<Navigate to='/#services' />} />
          <Route path='/installation' element={<Navigate to='/#installation' />} />
          <Route path='/repair' element={<Navigate to='/#repair' />} />
          <Route path='/contact' element={<Navigate to='/#contact' />} />
        </Routes>
        <div id='home'>
          <Home />
        </div>
        <div id='services'>
          <Services />
        </div>
        <div id='installation'>
          <Installation />
        </div>
        <div id='repair'>
          <Repair />
        </div>
        <div id='contact'>
          <Contact />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;