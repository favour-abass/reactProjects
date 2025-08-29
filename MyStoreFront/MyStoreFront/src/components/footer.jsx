import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mx-20 mb-2">
        <hr />
      </div>
      <div className="mx-20 my-4 flex place-items-baseline justify-between">
          <span className=" col-span-6 sm:col-span-12">© 2023 My-Store-Front</span>
          <span className=" col-span-6 sm:col-span-12">All rights reserved.</span>
      </div>
    </>
  );
};

export default Footer;
