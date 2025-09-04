import React from "react";
import Button from "./components/button";
import { FiSettings } from "react-icons/fi";   // Feather Icons
import HeroImage from "./assets/images/hero-img.png";

function Hero() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between px-5 sm:ps-20 primary text-center sm:text-start">
      {/* Text */}
      <div>
        <h2 className="text-5xl sm:text-6xl font-semibold mb-6 b">Get your urgent 2k</h2>
        <p className="text-gray-600 mb-4 font-normal text-2xl">
          No cash, No wahala get our application and deal with Sapa
        </p>

        <div className="flex items-center justify-center sm:items-start sm:justify-start space-x-6 mb-4 ">
          <div>
            <p className="font-bold text-2xl">20k+</p>
            <p className="text-sm font-light text-gray-500">Active users</p>
          </div>
          <div>
            <p className="font-bold text-2xl">30M+</p>
            <p className="text-sm font-light text-gray-500">Downloads</p>
          </div>
        </div>

        <div className="space-x-4 flex items-center justify-center sm:items-start sm:justify-start">
          <Button children={"Get Started"} />
          <button className="px-6 py-3 bg-transparent secondary-text flex items-center space-x-2">
            <FiSettings className="me-2" size={20} />
            How it Work
          </button>
        </div>
      </div>

      {/* Image*/}
      <div className="">
        <img src={HeroImage} alt="Hero Image" />
      </div>
    </section>
  );
}

export default Hero;
