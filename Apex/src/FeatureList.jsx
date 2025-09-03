import React from "react";

const FeatureList = () => {
  const featureData = [
    {
      id: 1,
      image: "./assets/images/video-icon.png",
      title: "Video Messaging",
      description:
        "This software is very easy for you to manage. You can use it as you wish.",
    },
    {
      id: 2,
      image: "./assets/images/timer-icon.png",
      title: "Save your time",
      description:
        "This software is very easy for you to manage. You can use it as you wish.",
    },
    {
      id: 3,
      image: "./assets/images/wifi-icon.png",
      title: "Keep safe & private",
      description:
        "This software is very easy for you to manage. You can use it as you wish.",
    },
  ];

  return (
    <section className="px-32 py-20">
      <h1 className="font-bold text-3xl text-gray-800 text-center mb-24">
        Features for a better experience
      </h1>
      <div className="grid grid-cols-3 gap-12">
        {featureData.map((feature) => (
          <div key={feature.id} className="text-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="mx-auto mb-6 w-16 h-16"
            />
            <h2 className="font-bold text-xl text-gray-800 mb-2">
              {feature.title}
            </h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureList;
