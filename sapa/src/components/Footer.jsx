import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0d4b4e] text-white px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Logo & Slogan */}
        <div>
          <h2 className="text-2xl font-bold mb-2">tukay</h2>
          <p className="text-gray-300">
            No cash, No wahala. Urgent 2k is on the way.
          </p>
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

      <p className="text-center text-gray-400 mt-12">© {new Date().getFullYear()} Tukay. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
