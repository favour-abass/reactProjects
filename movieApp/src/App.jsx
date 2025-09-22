import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieList from './pages/MovieList'
import Navbar from './components/Navbar'
import Movie from './pages/movie'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </Router>
  )
}

export default App
