import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mx-20 mb-2">
        <hr />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-20 my-4">
          <span className="text-center sm:text-left">© 2023 My-Store-Front</span>
          <span className="text-center sm:text-right">All rights reserved.</span>
      </div>
    </>
  );
};

export default Footer;
