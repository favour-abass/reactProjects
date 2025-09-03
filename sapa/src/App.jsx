import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Promo from "./components/Promo";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Promo />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
