import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo-large-bg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`fixed px-10 top-0 left-0 w-full z-50 flex items-center justify-between bg-transparent ${
        scrolled
          ? "bg-white/30 backdrop-blur-xs"
          : "bg-transparent"}`}>
        <div className="flex">
          <img src={Logo} alt="Logo" className="logo sm:ms-3" />
        </div>
        <div className="justify-end hidden sm:block">
          <a className="me-3.5 hover:text-red-950" href="">
            Home
          </a>
          <a className=" me-14 hover:text-red-950" href="">
            Features
          </a>
          <button className=" me-8 font-bold px-7 py-3 dark-red text-white rounded">
            Get early access
          </button>
        </div>

        {/* mobile navbar */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="items-center justify-center rounded-md p-2 text-gray-700 hover:bg-white/5 focus:outline-1 focus:-outline-offset-1 focus:outline-gray-200"
          >
            {isOpen ? (
              // Close icon
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
          <div className="absolute top-16 left-0 w-full bg-white shadow-md sm:hidden">
            <div className="flex flex-col space-y-2 px-4 py-4">
              <a href="#" className="py-2 hover:text-red-950">
                Home
              </a>
              <a href="#" className="py-2 hover:text-red-950">
                Features
              </a>
              <button className="font-bold px-7 py-3 dark-red text-white rounded">
                Get early access
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
