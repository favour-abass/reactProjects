import React from "react";
import HeroImg from "../src/assets/images/shopping_bags.svg";

const Hero = () => {
  return (
    <section className="mt-22 mb-52 mx-18">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-8">
        {/* left */}
        <div className="text-center sm:col-span-6 sm:text-left">
          <h1 className="text-4xl mb-6 sm:text-5xl sm:text-left font-bold">
            Create a simple, beautiful store in minutes.
          </h1>
          <p className="text-lg mb-10">
            We help you build, manage & grow your business. Craft an elegant and
            user-friendly online shop in just a few minutes.
          </p>
          <button className="font-bold px-12 py-4 dark-red text-white rounded transition">
            Join the waitlist!
          </button>
        </div>

        {/* right */}
        <div className="sm:col-span-6 flex justify-center sm:justify-end">
          <img
            src={HeroImg}
            alt="Shopping bags"
            className="max-w-md sm:max-w-full mt-4 sm:mt-0 "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
