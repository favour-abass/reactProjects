import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-[#e9fbb6]">
      {/* Logo */}
      <img src="" alt="" />

      {/* Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li><a href="#">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* Buttons */}
      <div className="space-x-3">
        <button className="px-4 py-2 border rounded-full text-green-900">Login</button>
        <button className="px-4 py-2 bg-green-700 text-white rounded-full">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
