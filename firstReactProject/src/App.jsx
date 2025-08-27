import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./hero";
import Greetings from "./greetings";
import Counter from "./counter";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  const name ="Favour";
  const time = "12:30"
  const product1 = "Table";
  const product2 = "Chair";
  const product3 = "Cabinet";
  const product4 = "Bag"; 
  const product5 = "Desk";
  const product6 = "Purse";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
