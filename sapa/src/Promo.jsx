import React from "react";
import PromoImg from "./assets/images/promo-img.png";
import MobilePromoImg from "./assets/images/mobile-promo-img.png";
import bossLG from "./assets/images/boss-lg.png";

function Promo() {
  return (
    <section className="px-8 bg-[#0d4b4e] text-white grid grid-cols-1 sm:grid-cols-2 items-center">
      {/* Left Column */}
      <div className="max-w-lg mx-auto">
        <img src={bossLG} alt="Boss" className="hidden sm:block w-full" />
        <img
          src={MobilePromoImg}
          alt="Mobile Promo"
          className="sm:hidden w-full"
        />
      </div>

      {/* Right Column */}
      <div className="flex justify-center">
        <img src={PromoImg} alt="Promo" className="hidden sm:block h-[452px]" />
      </div>
    </section>
  );
}

export default Promo;
