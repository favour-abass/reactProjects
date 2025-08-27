import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./components/footer";
import "@fontsource/poppins";
import "./App.css";

function App() {
  return (
    <>
      <>
        <div className="pattern"></div>
      </>
      <>
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </>
    </>
  );
}

export default App;
