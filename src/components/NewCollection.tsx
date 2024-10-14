import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";

const NewCollection = () => {
  return (
    <div
      id="newcollection"
      className="relative min-h-screen bg-black px-8 md:px-20 py-12"
    >
      {/* Heading */}
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-12 text-center">
        New Collection
      </h1>

      {/* Grid Layout with Equal Spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
        {/* Images with Hover Effects */}
        {[
          "Rectangle 8.jpg",
          "Rectangle 11.jpg",
          "Rectangle 12.jpg",
          "Rectangle 13.jpg",
          "Rectangle 14.jpg",
        ].map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-lg border-4 border-white" // White border for images
          >
            <Image
              src={`/Newcollection/${img}`}
              alt={`Watch ${index + 1}`}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        ))}

        {/* View All Collections Button and Circular Icon */}
        <div className="flex flex-col items-center">
          {/* View All Collections Button */}
          <button className="mt-6 mb-2 text-white text-lg font-extrabold transition-colors duration-300 hover:text-gray-300">
            View all collections
          </button>

          {/* Circular Icon with Hover Effect */}
          <div className="relative mt-2 group">
            <Image
              src="/Newcollection/Rectangle 15.png"
              alt="Circular Watch"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110" // Removed white border from circular image
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaArrowCircleRight className="text-white text-5xl transition-transform duration-300 group-hover:rotate-90" />{" "}
              {/* No border here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
