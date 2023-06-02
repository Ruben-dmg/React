import React from 'react';
import './style.css';

import Footer from './footer';



function Home() {
  return (
<div className='wrap'>
 <div className='container'>
  <div className='image'>
   <img src='images/info.png' className="info" alt=""/>
    <div className='overlay'>
      <div className='text'>Las mejores Hambuerguesas Veganas</div>
    </div>
  </div>
 </div> 
 <section>
   <h2 className='text-2'>Sobre nosotros</h2>
 </section>

<div className='parrafo'>
<p className='p-1'>Creemos que la comida vegana no tiene que comprometer el sabor ni la satisfacción. Nos apasiona ofrecer opciones deliciosas y nutritivas que no solo satisfacen el paladar, sino que también promueven un estilo de vida más consciente y respetuoso con los animales y el planeta.
</p>
<p>Nuestra filosofía se basa en la creencia de que todos merecemos disfrutar de una comida sabrosa y satisfactoria, independientemente de nuestras preferencias alimentarias. Es por eso que nos hemos dedicado a crear una amplia variedad de hamburguesas veganas con ingredientes frescos y de alta calidad.</p>
<p>Cada hamburguesa que servimos está cuidadosamente elaborada para brindarte una experiencia gastronómica excepcional. Utilizamos ingredientes vegetales sabrosos y equilibrados, combinados con una amplia gama de condimentos y salsas caseras para realzar los sabores naturales y crear combinaciones únicas.</p>
<p className='p-2'> Estamos seguros de que encontrarás algo que te encante y te sorprenda. ¡No te arrepentirás!</p>
</div>

<Footer/>

</div>  
  );
}

export default Home;