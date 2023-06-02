import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Carta from './Components/Carta';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <h1 className='title'>Veggie Burger</h1>
        <ul className="navbar">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacto" className="navbar-link">Contacto</Link>
          </li>
          <li className="navbar-item">
            <Link to="/carta" className="navbar-link">Nuestra Carta</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/carta" element={<Carta/>} />
      </Routes>
    </Router>
  );
}

export default App;
