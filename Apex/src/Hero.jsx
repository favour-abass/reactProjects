import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./components/Button";
import HeroImage from "./assets/images/hero-image.png";
import HeroImages from "./assets/images/hero-images.png";
import Stars from "./assets/images/stars.png";

const Hero = () => {
  return (
    <section className="px-32 mt-3">
      <div className="grid grid-cols-2 gap-24">
        <div className="text-left mt-8">
          <h1 className="font-semibold text-4xl mb-7">
            Start chatting with customers, anytime, anywhere with Apex
          </h1>
          <p className="font-normal text-md mb-7">
            Great software that allows you to chat from any place at any time
            without any interruption.
          </p>
          <Button className="px-5 mb-22 flex items-center gap-2">
            Start Chatting Now<FaArrowRight className="stroke-[40]" />
          </Button>

          <div className="grid grid-cols-3 items-center gap-6">
            <img
              className="mx-auto rounded-full w-[120px]"
              src={HeroImages}
              alt="Happy Customers"
            />
            <div>
              <strong className="text-2xl font-semibold">2,291</strong>
              <p className="font-normal text-sm text-gray-200">
                Happy Customers
              </p>
            </div>
            <div className="border-l-2 pl-4">
              <strong className="text-2xl font-semibold">4.8/5</strong>
              <div className="flex items-center gap-2">
                <img src={Stars} alt="Star Rating" className="w-20" />
                <p className="font-normal text-md text-gray-200">Rating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-1 border-b-0 p-5 pb-0">
          <img src={HeroImage} alt="Hero" className="w-[450px] h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
