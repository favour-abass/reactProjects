import React from "react";
import FooterImage from "../assets/images/footer-img.png";

function Footer() {
  return (
    <footer className="bg-[#0d4b4e] text-white ">
      <div className="grid grid-cols-1 sm:grid-cols-7 items-center gap-8 max-w-6xl">
        {/* Logo & Slogan */}
        <div className="col-span-2">
          <img src={FooterImage} alt="Footer Image" />
        </div>

        <div className="text-white col-span-2">
          <h6>
            Urgent Tukay - the Notes. No cash, No wahala get our application
            and deal with Sapa
          </h6>
        </div>

        {/* App */}
        <div>
          <h3 className="font-semibold mb-3">App</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Learning Modules</li>
            <li>Partnership</li>
            <li>Watch demo</li>
            <li>Event</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Our Company</li>
            <li>Career</li>
            <li>Investors Relations</li>
            <li>Social Impact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Contact</li>
            <li>Give feedback</li>
            <li>System status</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
