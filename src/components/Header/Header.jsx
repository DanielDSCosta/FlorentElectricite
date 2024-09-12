import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <Link to="#home" className="header__link" activeClassName="header__link--active">
            Electricien Nîmes
          </Link>
          <Link to="#services" className="header__link" activeClassName="header__link--active">Services</Link>
          <Link to="#installation" className="header__link" activeClassName="header__link--active">Installation Electrique</Link>
          <Link to="#repair" className="header__link" activeClassName="header__link--active">Dépannage Electrique</Link>
          <Link to="#contact" className="header__link" activeClassName="header__link--active">Contact</Link>
          <Link to="#quote" className="header__link header__link--quote" activeClassName="header__link--active">Devis Gratuit</Link>
        </nav>
      </header>
      <button className="header__menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`header__popup ${menuOpen ? 'header__popup--open' : ''}`}>
        <Link to="#home" className="header__popup__link" onClick={toggleMenu}>
          <i className="fa-solid fa-house"></i> Electricien Nîmes
        </Link>
        <div className="header__popup__separator"></div>
        <Link to="#services" className="header__popup__link" onClick={toggleMenu}>Services</Link>
        <Link to="#installation" className="header__popup__link" onClick={toggleMenu}>Installation Electrique</Link>
        <Link to="#repair" className="header__popup__link" onClick={toggleMenu}>Dépannage Electrique</Link>
        <Link to="#contact" className="header__popup__link" onClick={toggleMenu}>Contact</Link>
        <Link to="#quote" className="header__popup__link header__popup__link--quote" onClick={toggleMenu}>Devis Gratuit</Link>
      </div>
    </>
  );
}

export default Header;