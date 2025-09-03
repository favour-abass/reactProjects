import React from "react";

function Promo() {
  return (
    <section className="px-8 py-16 bg-[#0d4b4e] text-white flex flex-col md:flex-row items-center justify-between">
      {/* Text */}
      <div className="max-w-lg mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Bros, I greet o</h2>
        <p className="text-gray-300 mb-6">
          Howfa my urgent <span className="font-bold text-green-300">tuks</span> – normal tukay na.
        </p>
        <div className="flex space-x-4">
          <img src="/images/googleplay.png" alt="Google Play" className="h-12" />
          <img src="/images/appstore.png" alt="App Store" className="h-12" />
        </div>
      </div>

      {/* Illustration */}
      <div>
        <img src="/images/promo.png" alt="Promo" className="w-[400px]" />
      </div>
    </section>
  );
}

export default Promo;
