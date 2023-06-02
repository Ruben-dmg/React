import React from 'react';
import './style.css';

import FooterDos from './footer-2';

function Contact() {
  return (

    <div className='wrap'>
    <div className="page-container">
    <div className="form-container">
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="number">Número:</label>
        <input type="tel" id="number" name="number" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
  <FooterDos/>

  </div>
  );
}

export default Contact;