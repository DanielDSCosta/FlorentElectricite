import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Services, Installation, Repair, Contact, Devis } from './pages'; // Import the Devis page
import { Header, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={
            <>
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
            </>
          } />
          <Route path='/devis' element={<Devis />} /> {/* Add the route for the Devis page */}
          <Route path='*' element={<Navigate to='/' />} /> {/* Redirect any unknown routes to Home */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;