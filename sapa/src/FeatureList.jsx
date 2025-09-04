import React from "react";
import boy from "./assets/images/boy.png";
import girl from "./assets/images/girl.png";
import boss from "./assets/images/boss.png";
import { BiBuoy } from "react-icons/bi";

function FeatureList() {
  const featureData = [
    {
      id: 1,
      title: "No more Sapa",
      desc: `In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.`,
      img: boy,
    },
    {
      id: 2,
      title: "Beg",
      desc: `In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.`,
      img: girl,
    },
    {
      id: 3,
      title: "Send Money",
      desc: `In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.`,
      img: boss,
    },
  ];

  return (
    <section className="py-16 px-8 primary text-center">
      <h2 className="text-3xl md:text-4xl font-medium mb-2">
        What you stand to benefit.
      </h2>
      <p className="text-gray-600 mb-12">This is how our products works</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featureData.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-2xl p-20 sm:p-14 flex flex-col items-center"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-20 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-xs font-light">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureList;
