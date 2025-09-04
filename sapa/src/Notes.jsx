import React from "react";
import Button from "./components/button";
import PinkNote from "./assets/images/pink-money.png";
import BlueNote from "./assets/images/blue-money.png";

function Notes() {
  return (
    <section className="px-20 primary grid items-center justify-content-center grid-cols-1 sm:grid-cols-2">
      {/* Text */}
      <div className="max-w-lg mb-8 md:mb-0">
        <h2 className="text-3xl font-semibold mb-4">
          Urgent Tukay – the Notes.
        </h2>
        <p className="text-gray-600 text-xl mb-6">
          No cash, No wahala get our application and deal with Sapa
        </p>
        <Button children={"Get Started"} />
      </div>

      {/* Notes Illustration */}
      <div className="relative flex items-end ">
        {/* Base image */}
        <img src={PinkNote} alt="Note 1" className="w-[450px] z-0 ms-20 mb-28" />

        {/* Overlapping image */}
        <img
          src={BlueNote}
          alt="Note 2"
          className="absolute top-32 right-40 w-[450px] z-10 mb-28"
        />
      </div>
    </section>
  );
}

export default Notes;
