import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-2">
      {/* Main Container */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-2">
          <a href="#">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
          </a>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="#newcollection" className="hover:text-black">
            New Collection
          </a>
          <a href="#" className="hover:text-black">
            Products
          </a>
          <a href="#" className="hover:text-black">
            About
          </a>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="flex items-center space-x-3">
          <a
           
            href="https://github.com/Developer-Samina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/samina-abdul-qadir-557b34304/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://www.instagram.com/saminadeveloper/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <FaInstagram className="text-lg" />
          </a>
        </div>
      </div>

      {/* Divider and Privacy Policy */}
      <div className="border-t border-gray-500 my-1"></div>
      <div className="text-center text-white text-sm space-x-3">
        <a href="#" className="hover:text-black">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="#" className="hover:text-black">
          Terms of Use
        </a>
      </div>
    </footer>
  );
};

export default Footer;
