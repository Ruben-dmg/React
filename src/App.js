import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Componente1 from './Components/Componente1';
import Componente2 from './Components/Componente2';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Componente 1</Link>
          </li>
          <li>
            <Link to="/otraPagina">Otra página</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Componente1 />} />
        <Route path="/otraPagina" element={<Componente2 />} />
      </Routes>
    </Router>
  );
}

export default App;
