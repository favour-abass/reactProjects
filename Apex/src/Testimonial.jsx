import React from "react";
import Esther from "./assets/images/Esther.png";
import Wade from "./assets/images/Wade.png";

const Testimonial = () => {
  return (
    <section className="primary my-20">
      <div className="mx-[500px] py-16 text-center text-white">
        <h1 className="text-3xl font-semibold">
          Our blessed client said about us 😍
        </h1>
      </div>

      {/* testimonials */}
      <div className="grid grid-cols-2 gap-20 px-28 place-items-center">

        {/* left */}
        <div>
          <div className="rounded-md bg-white p-7">
            <h1 className="text-center secondary-text font-semibold">"Incredible Experience"</h1>
            <p className="text-gray-400 text-center">We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.</p>
          </div>
          <div className="flex flex-col gap-2 p-8 sm:justify-center sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
            <img
              className="mx-auto block rounded-full sm:mx-0 sm:shrink-0 w-10"
              src={Wade}
              alt="Wade"
            />
            <div className="space-y-2 text-center sm:text-left">
              <div className="space-y-0.5">
                <p className="text-md font-semibold text-white">Wade Warren</p>
                <p className="text-white font-light text-sm">
                  CEO, ABC Corporation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div>
          <div className="rounded-md bg-white p-7">
            <h1 className="text-center secondary-text font-semibold">"Dependable, Responsive, Professional"</h1>
            <p className=" text-gray-400 text-center">Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond.</p>
          </div>
          <div className="flex flex-col gap-2 p-8 sm:justify-center sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
            <img
              className="mx-auto block rounded-full sm:mx-0 sm:shrink-0 w-10"
              src={Esther}
              alt="Esther"
            />
            <div className="space-y-2 text-center sm:text-left">
              <div className="space-y-0.5">
                <p className="text-md font-semibold text-white">Esther Howard</p>
                <p className="text-white font-light text-sm">
                  CEO, ABC Corporation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
