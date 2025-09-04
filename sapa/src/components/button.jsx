import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`px-6 py-2 rounded-xl secondary text-white ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
