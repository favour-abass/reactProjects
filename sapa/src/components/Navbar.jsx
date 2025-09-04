import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import Button from "./button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-4 primary px-4 sm:px-20">
      {/* Logo */}
      <img src={Logo} alt="Tukay Logo" className="w-24" />

      {/* Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li>
          <a className="text-black" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-3">
        <Button children={"Login"} />
        <button className="px-6 py-2 rounded-xl bg-transparent border border-[#00545F] text-[#00545F]">
          Sign Up
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="items-center justify-center rounded-md p-2 secondary-text outline-gray-200"
        >
          {" "}
          {isOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full primary sm:hidden">
          {/* Links */}
          <ul className="flex flex-col space-y-2 px-4 py-4 text-gray-700">
            <li>
              <a className="text-black" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col space-y-2 px-5 py-4">
            <Button children={"Login"} />
            <button className="px-6 py-2 rounded-xl bg-transparent border border-[#00545F] text-[#00545F]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
