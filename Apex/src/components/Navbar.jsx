import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="px-32 py-4 flex items-center justify-between">

      {/* left */}
      <div className="flex items-center">
        <p className="primary-text text-2xl font-bold">Ape<span className="secondary-text">x</span></p>
      </div>

      {/* center */}
      <div className="hidden md:flex space-x-8 text-sm font-normal">
        <a href="" className="text-black text-decoration-none ">
          Demos
        </a>
        <a href="" className="text-black text-decoration-none ">
          About
        </a>
        <a href="" className="text-black text-decoration-none ">
          Blog
        </a>
        <a href="" className="text-black text-decoration-none ">
          Pages
        </a>
        <a href="" className="text-black text-decoration-none ">
          Contact
        </a>
      </div>

      {/* right */}
      <div className="text-sm">
        <a href="" className="text-black text-decoration-none me-7">Login</a> 
        <Button children={"Get Started Free"} />
      </div>
    </nav>
  );
};

export default Navbar;
