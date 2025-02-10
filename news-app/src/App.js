import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
}

export default App;
