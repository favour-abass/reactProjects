import { useState } from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-5 transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} w-64`}
      >
        <h2 className="text-2xl font-bold mb-6">MyApp</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            <FaHome /> Home
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            <FaUser /> Profile
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            <FaCog /> Settings
          </a>
        </nav>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="m-4 me-96 p-2 bg-blue-600 text-white rounded"
      >
        {open ? "Close" : "Open"} Sidebar
      </button>
    </div>
  );
}
