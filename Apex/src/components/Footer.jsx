import React from "react";
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="px-32 py-4 flex items-center justify-between font-normal">
        {/* left */}
        <div className="flex items-center">
          <p className="primary-text text-2xl font-bold">
            Ape<span className="secondary-text">x</span>
          </p>
        </div>

        {/* center */}
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="" className="text-black text-decoration-none ">
            About
          </a>
          <a href="" className="text-black text-decoration-none ">
            Features
          </a>
          <a href="" className="text-black text-decoration-none ">
            Works
          </a>
          <a href="" className="text-black text-decoration-none ">
            Support
          </a>
        </div>

        {/* right */}
        <div className="flex space-x-6 text-base primary-text">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="px-32">
        <hr className="border-gray-200" />
      </div>
      <div className="px-32 py-4 flex items-center justify-between">
        {/* left */}
        <div className="flex items-center text-sm">
          <p className="text-gray-400">&copy; copyright 2022. All Rights Reserved</p>
        </div>

        {/* right */}
        <div className="flex space-x-9 text-sm primary-text">
          <p className="text-gray-400">Privacy Policy</p>
          <p className="text-gray-400">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
