import React from "react";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-[#e9fbb6]">
      {/* Text */}
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold mb-4">Get your urgent 2k</h2>
        <p className="text-gray-600 mb-4">
          No cash, No wahala get our application and deal with Sapa
        </p>

        <div className="flex space-x-6 mb-4">
          <div>
            <p className="font-bold text-xl">20k+</p>
            <p className="text-sm text-gray-500">Active users</p>
          </div>
          <div>
            <p className="font-bold text-xl">30M+</p>
            <p className="text-sm text-gray-500">Downloads</p>
          </div>
        </div>

        <div className="space-x-4">
          <button className="px-6 py-3 bg-green-700 text-white rounded-full">Get Started</button>
          <button className="px-6 py-3 border rounded-full text-green-900">How it Work</button>
        </div>
      </div>

      {/* Illustration */}
      <div className="mt-8 md:mt-0">
        <img src="/images/hero.png" alt="illustration" className="w-[400px]" />
      </div>
    </section>
  );
}

export default Hero;
