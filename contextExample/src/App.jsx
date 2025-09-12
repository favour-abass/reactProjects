import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from './components/navbar'
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
