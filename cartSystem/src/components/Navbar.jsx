import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartsContext";

const Navbar = () => {
  const { cart, totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-20 py-2.5 fixed flex items-center justify-between top-0 left-0 w-full bg-blue-400 z-50">
      {/* Logo */}
      <div className="flex">
        <h1 className="font-bold text-3xl text-white">Cart System</h1>
      </div>

      {/* Desktop Menu */}
      <div className="justify-end hidden sm:flex text-white gap-4">
        <Link
          to="/"
          className="p-3 text-md hover:bg-blue-500 rounded-4xl transition"
        >
          Product List
        </Link>
        <Link
          to="/cart"
          className="transition flex items-center z-10"
        >
          <FaShoppingCart className="h-6 w-6" />
          <span className="text-sm absolute right-16 bottom-5 rounded-4xl px-1.5 bg-red-600 z-0">{totalItems}</span>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="sm:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="items-center justify-center rounded-md p-2 text-white hover:bg-blue-500 focus:outline-none"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-400 text-white sm:hidden shadow-md">
          <Link to="/" className="block p-4 hover:bg-blue-500">
            Product List
          </Link>
          <Link to="/cart" className="block p-4 hover:bg-blue-500">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
