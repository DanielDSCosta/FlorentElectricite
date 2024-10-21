import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Devis.scss';
import { Header, Footer } from '../../components';

function Devis() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Nom est requis';
    if (!formData.email) errors.email = 'Email est requis';
    if (!formData.phone) errors.phone = 'Téléphone est requis';
    if (!formData.message) errors.message = 'Message est requis';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      fetch('https://formspree.io/f/xbljldgk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => {
          if (response.ok) {
            setIsSubmitted(true);
            alert('Message envoyé avec succès!');
            navigate('/'); // Redirect to home page
          } else {
            alert('Une erreur est survenue, veuillez réessayer.');
          }
        })
        .catch(error => {
          console.error('Erreur:', error);
          alert('Une erreur est survenue, veuillez réessayer.');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="devis-container">
        <div className="form-container">
          <h2>Demandez votre devis</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              {formErrors.name && <p className="error">{formErrors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              {formErrors.email && <p className="error">{formErrors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              {formErrors.phone && <p className="error">{formErrors.phone}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              {formErrors.message && <p className="error">{formErrors.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting}>Envoyer</button>
          </form>
          {isSubmitted && <p className="success">Votre message a été envoyé avec succès!</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Devis;