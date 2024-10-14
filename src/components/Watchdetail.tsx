import React from "react";

const WatchDetails: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-8 py-4 bg-black text-white">
      {/* Watch Image */}
      <div className="w-full md:w-1/2 flex justify-center md:pt-2 pt-2 md:ml-6">
        {" "}
        {/* Removed left margin */}
        <img
          src="/Newcollection/Rectangle 16.png"
          alt="Watch"
          className="w-full max-w-md rounded-md shadow-lg border-4 border-white transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Watch Details */}
      <div className="w-full md:w-1/2 p-4 md:ml-6 mt-4">
        {" "}
        {/* Added top margin */}
        <h2 className="text-3xl font-semibold mb-4">Watch Details</h2>
        <p className="text-gray-400 mb-6">
          Deze Oris Aquis is een unieke exemplaar met een gang-reserve van vijf
          dagen...
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <span className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold">
              ✓
            </span>
            <span className="flex-1">Mechanical-Quartz Hybrid Movement</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold">
              ✓
            </span>
            <span className="flex-1">Michel Vaillant v-shaped sub-dials</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold">
              ✓
            </span>
            <span className="flex-1">Michel vaillant dial</span>
          </li>
        </ul>
        {/* Shop Now Button */}
        <div className="mt-6">
          <button className="bg-white text-black px-4 py-2 rounded-md shadow-lg transition-transform duration-300 transform hover:bg-gray-200 hover:scale-105">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WatchDetails;
