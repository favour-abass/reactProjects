import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Features from "./FeatureList";
import Promo from "./Promo";
import Notes from "./Notes";
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
