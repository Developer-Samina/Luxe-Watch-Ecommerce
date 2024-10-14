"use client";
import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import Image from "next/image"; // Correct import statement for Image

const Navbar: React.FC = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <a href="#">
            <Image
              src="/logo.png" // Logo ka sahi path
              alt="logo"
              width={50} // Adjust width as needed
              height={50} // Adjust height as needed
            />
          </a>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#newcollection"
              className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              New Collection
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>
        </ul>

        {/* Right Side - Shopping Cart, Search Bar, Hamburger Button */}
        <div className="flex items-center space-x-4">
          {/* Shopping Cart Icon (hidden on mobile) */}
          <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-300 md:block hidden" />

          {/* Search Bar for Desktop */}
          <div className="relative hidden md:block">
            <input
              type="text"
              className="bg-gray-800 text-white rounded-full px-4 py-1 focus:outline-none"
              placeholder="Search..."
            />
            <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white" />
          </div>

          {/* Hamburger Button for Mobile */}
          <FaBars
            className="text-2xl cursor-pointer md:hidden hover:text-gray-300"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black text-white py-4 z-50">
          {" "}
          {/* Added z-index */}
          <a href="#newcollection" className="hover:text-gray-300">
            New Collection
          </a>
          <a href="#" className="hover:text-gray-300">
            Products
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
