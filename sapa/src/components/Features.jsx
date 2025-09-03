import React from "react";

function Features() {
  const features = [
    {
      title: "No more Sapa",
      desc: "In Nigerian Pidgin English, 'Sapa' is sometimes used to describe financial hardship or running out of money.",
      img: "/images/sapa.png",
    },
    {
      title: "Beg",
      desc: "In Nigerian Pidgin English, 'Beg' means asking someone for money. Our app makes it easy to request funds.",
      img: "/images/beg.png",
    },
    {
      title: "Send Money",
      desc: "In Nigerian Pidgin English, 'Send' is a quick way to transfer money. Do it faster with Tukay.",
      img: "/images/send.png",
    },
  ];

  return (
    <section className="py-16 px-8 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">What you stand to benefit.</h2>
      <p className="text-gray-600 mb-12">This is how our products works</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
          >
            <img src={feature.img} alt={feature.title} className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
