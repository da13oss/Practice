import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import NumberDisplay from './components/NumberDisplay';
import StyledWordDisplay from './components/StyledWordDisplay';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:param" element={<NumberDisplay />} />
        <Route path="/:word/:color/:backgroundColor" element={<StyledWordDisplay />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

