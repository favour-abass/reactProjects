import React from "react";

function Notes() {
  return (
    <section className="px-8 py-16 bg-[#e9fbb6] flex flex-col md:flex-row items-center justify-between">
      {/* Text */}
      <div className="max-w-lg mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Urgent Tukay – the Notes.</h2>
        <p className="text-gray-600 mb-6">
          No cash, No wahala get our application and deal with Sapa
        </p>
        <button className="px-6 py-3 bg-green-700 text-white rounded-full">Get Started</button>
      </div>

      {/* Notes Illustration */}
      <div className="flex space-x-4">
        <img src="/images/note1.png" alt="Note 1" className="w-[200px]" />
        <img src="/images/note2.png" alt="Note 2" className="w-[200px]" />
      </div>
    </section>
  );
}

export default Notes;
