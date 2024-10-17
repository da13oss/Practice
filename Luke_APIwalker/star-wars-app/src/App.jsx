import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharacterPage from './pages/CharacterPage';
import PlanetPage from './pages/PlanetPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people/:id" element={<CharacterPage />} />
      <Route path="/planets/:id" element={<PlanetPage />} />
    </Routes>
  </Router>
);

export default App;
