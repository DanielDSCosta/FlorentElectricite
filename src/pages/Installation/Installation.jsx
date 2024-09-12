import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Installation.scss';

function Installation() {
  return (
    <div className="installation-container">
      <div className="divider"></div> {/* Nouveau trait jaune au-dessus du titre */}
      <h1 className="installation-title">Confiez votre installation électrique à un professionnel.</h1>
      <div className="divider"></div>
      <p className="installation-paragraph">
        Florent Belinha, <strong>électricien qualifié à Nîmes</strong>, je vous propose <Link to="#services" className="services-link">mes services</Link> pour tous vos besoins en électricité générale.
      </p>
      <p className="installation-paragraph">
        Grâce à mon expérience dans le domaine de l’électricité, j’interviens rapidement sur tous types d’installations électriques, que vous soyez une entreprise ou un particulier.
      </p>
      <div className="quote-link-container">
        <Link to="#quote" className="quote-link">Demandez vos devis ></Link>
      </div>
    </div>
    
  );
}

export default Installation;