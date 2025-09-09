// Main App component
// HINT: Set up React Router and layout here

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';

const App: React.FC = () => (
  <Router>
    {/* HINT: Add AppBar/Navigation here if needed */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  </Router>
);

export default App;
