import React from "react";

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
        <a href="" className="text-black text-decoration-none">Login</a> 
        <button className="primary text-white px-4 py-2 rounded ms-7">Get Started Free</button>
      </div>
    </nav>
  );
};

export default Navbar;
