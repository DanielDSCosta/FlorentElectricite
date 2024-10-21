import React from 'react';
import './Contact.scss'; 

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contactez-moi !</h2>
      <p className="contact-description">
      Votre électricien qualifié dans le Gard : Nîmes et ses alentours..
      </p>
      <div className="contact-cards">
        <div className="contact-card card-phone">
          <i className="fas fa-phone"></i>
          <p>+33 6 09 24 81 45</p>
        </div>
        <div className="contact-card card-email">
          <i className="fas fa-envelope"></i>
          <p>donnetonmail@gmail.com</p>
        </div>
        <div className="contact-card card-meet">
          <strong>Vous souhaitez me rencontrer ?</strong>
          <p><br />Je suis disponible à <strong>Bouillargues</strong> et ses alentours</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;