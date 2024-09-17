import React from 'react';
import { FaEnvelope, FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center">

          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <a href="/" className="flex items-center text-2xl font-bold">
              <img src="/path/to/logo.png" alt="Company Logo" className="h-10 w-10 mr-2" />
              {/* <span>Company</span> */}
            </a>
          </div>

          {/* Social Links */}
          <div className="mb-4 md:mb-0">
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="mailto:email@example.com" className="text-gray-400 hover:text-white">
                <FaEnvelope size={20} />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTelegramPlane size={20} />
              </a>
              <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Information Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <p className="text-gray-400">Email: info@company.com</p>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
