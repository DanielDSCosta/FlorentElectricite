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
          <p><strong>06 11 87 14 26</strong></p>
        </div>
        <div className="contact-card card-email">
          <i className="fas fa-envelope"></i>
          <p><strong>florentelectricite@gmail.com</strong></p>
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