import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Services.scss';

function Services() {
  return (
    <div className="services-container">
      <div className="divider"></div>
      <h1>Au service des professionnels et des particuliers sur Nîmes et ses alentours, je prends en charge la réalisation de vos travaux électriques à travers différentes prestations :</h1>
      <div className="divider"></div>
      <ul className="services-list">
        <li><span className="arrow">></span> Installation électrique</li>
        <li><span className="arrow">></span> Rénovation électrique</li>
        <li><span className="arrow">></span> Mise aux normes</li>
        <li><span className="arrow">></span> Dépannage électrique</li>
        <li><span className="arrow">></span> Installation de tableaux électriques</li>
        <li><span className="arrow">></span> Installation de prises et interrupteurs</li>
        <li><span className="arrow">></span> Éclairage intérieur et extérieur</li>
        <li><span className="arrow">></span> Installation de systèmes de sécurité</li>
        <li><span className="arrow">></span> Maintenance électrique</li>
      </ul>
      <h2>Faire appel à mes services pour vos travaux électriques à Nîmes c’est :</h2>
      <p className="services-description">
        Un accompagnement personnalisé tout au long des travaux, des conseils en fonction de vos besoins, un suivi de chantier régulier, une assurance décennale valable 10 ans, un devis détaillé gratuit, un respect des délais et des normes électriques.
      </p>
      <div className="quote-link-container">
        <Link to="#quote" className="quote-link">Devis Gratuit</Link>
      </div>
    </div>
  );
}

export default Services;