import React from "react";
import click from "../src/assets/images/icon1.png";
import hourglass from "../src/assets/images/icon-hourglass.png";
import heart from "../src/assets/images/icon-heart.png";
import marketing from "../src/assets/images/icon-marketing.png";

const Features = () => {
  return (
    <section>
      <h1 className="text-4xl mx-0 sm:mx-80 mb-6 text-center font-bold">
        How MyStoreFront helps your business grow
      </h1>
      <div className="columns1 sm:columns-2 gap-8 mx-18">
        <div className="col-span-6">
          <img src={click} className=" w-" alt="click Icon" />
          <h1>
            <strong>Reach a wider audience</strong>
          </h1>
          <p>

          </p>
        </div>
        <div className="col-span-6">
          <img src={heart} className=" w-" alt="heart icon" />
          <h1>
            <strong>Cost-effective</strong>
          </h1>
          <p>

          </p>
        </div>
        <div className="col-span-6">
          <img src={hourglass} className=" w-" alt="hourglass icon" />
          <h1>
            <strong>24/7 availability</strong>
          </h1>
          <p>

          </p>
        </div>
        <div className="col-span-6">
          <img src={marketing} className=" w-" alt="marketing icon" />
          <h1>
            <strong>Marketing opportunities</strong>
          </h1>
          <p>

          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mb-60 mt-30">
        <button className="font-bold px-6 py-3 dark-red text-white rounded transition">
          Join the waitlist now!
        </button>
      </div>
    </section>
  );
};

export default Features;
