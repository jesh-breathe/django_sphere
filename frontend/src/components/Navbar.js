import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/" className="flex items-center">
            <img src="/path/to/logo.png" alt="Company Logo" className="h-10 w-10 mr-2" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 relative">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>

          {/* Dropdown for About */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="#about" className="text-gray-700 hover:text-blue-600 relative">
              About
            </a>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-10">
                {/* Triangle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    className="w-4 h-4 text-white drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0L24 24H0L12 0z" />
                  </svg>
                </div>
                <ul className="py-2 relative mt-1">
                  <li>
                    <a href="#our-story" className="block px-4 py-2 hover:bg-gray-100">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#our-team" className="block px-4 py-2 hover:bg-gray-100">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#our-mission" className="block px-4 py-2 hover:bg-gray-100">
                      Our Mission
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 py-2 space-y-2 shadow-md">
          <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
