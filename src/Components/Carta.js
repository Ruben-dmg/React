import React from 'react';
import './style.css';

import Footer from './footer';

function Carta() {
  return (
<div className='wrap'>
    <div className="marco">
    <div className="left">
      <img src='images/image-1.png'  alt="" />
      <img src='images/image-2.png' alt="" />
      <img src='images/image-3.png' alt="" />
    </div>
    <div className="right">
      <img src='images/image-4.png' alt="" />
      <img src='images/image-5.png' alt="" />
      <img src='images/image-6.png' alt="" />
    </div>
  </div>
  <Footer/>

  </div>
  );
}

export default Carta;