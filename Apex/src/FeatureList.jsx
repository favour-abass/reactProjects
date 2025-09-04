import React from "react";
import Video from "./assets/images/video-icon.png";
import Timer from "./assets/images/timer-icon.png";
import Wifi from "./assets/images/wifi-icon.png";

const FeatureList = () => {
  const featureData = [
    {
      id: 1,
      image: Video,
      title: "Video Messaging",
      description:
        "This software is very easy for you to manage. You can use it as you wish.",
    },
    {
      id: 2,
      image: Timer,
      title: "Save your time",
      description:
        "This software is very easy for you to manage. You can use it as you wish.",
    },
    {
      id: 3,
      image: Wifi,
      title: "Keep safe & private",
      description:
        "This software is very easy for you to manage. You can use it as you wish.",
    },
  ];

  return (
    <section className="px-32 py-16">
      <h1 className="font-semibold text-3xl text-gray-800 text-center mb-20">
        Features for a better experience
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {featureData.map((feature) => (
          <div key={feature.id} className="grid grid-cols-4">
            <div className="flex justify-center mt-1.5">
              <img
              src={feature.image}
              alt={feature.title}
              className="w-12 h-12"
            />
            </div>
            <div className="col-span-3">
              <h2 className="font-semibold text-lg text-gray-800 mb-3">
              {feature.title}
            </h2>
            <p className="text-xs text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureList;
