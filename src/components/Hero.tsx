import React from "react";

const Hero: React.FC = () => {
  return (
    // <div className="relative h-screen overflow-hidden">
    <div className="relative h-screen bg-black bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Desktop background image (visible on larger screens) */}
      <div
        className="absolute inset-0 hidden md:block bg-black bg-center bg-no-repeat bg-contain md:min-h-screen"
        style={{ backgroundImage: "url('/heroBg.png')" }}
      ></div>

      {/* Mobile background image (visible on smaller screens) */}
      <div
        className="absolute inset-0 block md:hidden bg-center bg-cover"
        style={{ backgroundImage: "url('/heroBg1.png')" }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 sm:px-12 md:px-20 lg:px-32 space-y-6">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight shadow-lg">
          Time’s Elegance: Elevate Your Every Moment
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl shadow-lg">
          Crafting moments, one ticking second at a time
        </p>

        <button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Hero;
