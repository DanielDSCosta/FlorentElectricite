import React from 'react';
import './Home.scss';
import logo from '../../assets/logo.png'; // Import the logo image

function Home() {
  return (
    <div className="home-container">
      <div className="description">
        <img src={logo} alt="Logo" className="logo" /> {/* Add the logo image */}
        <h2>Entreprise d'électricité générale</h2>
        <h1>Florent Belinha</h1>
        <p>électricien sur Bouillargues et alentours</p>
      </div>
    </div>
  );
}

export default Home;