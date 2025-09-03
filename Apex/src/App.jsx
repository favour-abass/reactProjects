import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './Hero'
import FeatureList from './FeatureList'
import Testimonial from './Testimonial'
import CTA from './CTA'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <FeatureList />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  )
}

export default App
