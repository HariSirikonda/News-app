import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import About from './pages/AboutPage';
import Navbar from './components/Navbar';
import Login from './pages/LoginPage';
import SearchView from './pages/SearchPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/s" element={<SearchView />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
