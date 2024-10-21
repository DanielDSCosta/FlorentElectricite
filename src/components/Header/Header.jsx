import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import './Header.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import logo from '../../assets/logo.png'; // Import the logo image

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top if already on the home page
    }
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <RouterLink to="/" className="header__link" activeClassName="header__link--active" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="header__logo" />
          </RouterLink>
          <div className="header__links">
            <Link to="/#services" className="header__link" activeClassName="header__link--active">Services</Link>
            <Link to="/#installation" className="header__link" activeClassName="header__link--active">Installation Electrique</Link>
            <Link to="/#repair" className="header__link" activeClassName="header__link--active">Dépannage Electrique</Link>
            <Link to="/#contact" className="header__link" activeClassName="header__link--active">Contact</Link>
            <RouterLink to="/devis" className="header__link header__link--quote">Devis Gratuit</RouterLink>
          </div>
          <button className="header__menu-button" onClick={toggleMenu}>
            ☰
          </button>
        </nav>
      </header>
      <div className={`header__popup ${menuOpen ? 'header__popup--open' : ''}`}>
        <Link to="/#services" className="header__popup__link" onClick={toggleMenu}>Services</Link>
        <Link to="/#installation" className="header__popup__link" onClick={toggleMenu}>Installation Electrique</Link>
        <Link to="/#repair" className="header__popup__link" onClick={toggleMenu}>Dépannage Electrique</Link>
        <Link to="/#contact" className="header__popup__link" onClick={toggleMenu}>Contact</Link>
        <RouterLink to="/devis" className="header__popup__link header__popup__link--quote" onClick={toggleMenu}>Devis Gratuit</RouterLink>
      </div>
    </>
  );
}

export default Header;