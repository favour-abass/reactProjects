import React from "react";
import { Link, NavLink } from "react-router-dom";
import About from "../pages/About";

const Navbar = () => {
  return (
    <div>
      <nav className="space-y-6">
        <Link to="/about" className="p-2">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
