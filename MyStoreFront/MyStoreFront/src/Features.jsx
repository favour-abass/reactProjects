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
      <div className="columns1 mx-3 sm:columns-2 gap-8 sm:mx-18">
        <div className="p-1 col-span-6">
          <img src={click} className="w-18" alt="click Icon" />
          <h1 className="text-xl">
            <strong>Reach a wider audience</strong>
          </h1>
          <p>
            By having an online store, you can reach customers from all over the
            world, not just those in your local area. This means you have access
            to a larger customer base, which can lead to increased sales and
            revenue.
          </p>
        </div>
        <div className="p-1 col-span-6">
          <img src={heart} className=" w-18" alt="heart icon" />
          <h1 className="text-xl">
            <strong>Cost-effective</strong>
          </h1>
          <p>
            Setting up an online store is often more cost-effective than opening
            a physical storefront. You don't need to worry about rent,
            utilities, and other overhead costs associated with a
            brick-and-mortar store.
          </p>
        </div>
        <div className="p-1 pb-8 col-span-6">
          <img src={hourglass} className=" w-18" alt="hourglass icon" />
          <h1 className="text-xl">
            <strong>24/7 availability</strong>
          </h1>
          <p>
            With an online store, your business is open 24/7. Customers can shop
            at any time, which can lead to more sales and a better customer
            experience.
          </p>
        </div>
        <div className="p-1 col-span-6">
          <img src={marketing} className=" w-18" alt="marketing icon" />
          <h1 className="text-xl">
            <strong>Marketing opportunities</strong>
          </h1>
          <p>
            An online store provides a variety of marketing opportunities,
            including email marketing, social media marketing, and search engine
            optimization. These channels can help you reach new customers and
            drive more sales.
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
