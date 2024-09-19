import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import { FaHeart } from 'react-icons/fa'; // React icon for heart

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // For handling the modal visibility
  const [donationType, setDonationType] = useState('once'); // 'once' or 'monthly'
  const [selectedAmount, setSelectedAmount] = useState(50); // Default amount

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleDonateClick = () => setShowModal(true); // Show the donation modal
  const handleCloseModal = () => setShowModal(false); // Close the modal

  const handleAmountSelect = (amount) => setSelectedAmount(amount);
  const handleTypeChange = (type) => setDonationType(type);
  const handleDonate = () => {
    // Here you can add your API call or logic to process the donation
    alert(`Thank you for your donation of $${selectedAmount}!`);
    handleCloseModal();
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
        <nav className="hidden md:flex space-x-8 relative items-center">
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

          {/* Donate Button for Desktop */}
          <button
            onClick={handleDonateClick}
            className="hidden md:flex bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors items-center space-x-2"
          >
            <FaHeart className="h-5 w-5" /> {/* React Icon for heart */}
            <span>Donate</span>
          </button>
        </nav>

        {/* Mobile Donate Button */}
        <button
          onClick={handleDonateClick}
          className="md:hidden bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors flex justify-center"
        >
          <FaHeart className="h-5 w-5" /> {/* React Icon for heart in mobile */}
        </button>

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

      {/* Donate Modal Popup */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Make a Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Toggle between Give Once and Donate Monthly */}
          <div className="d-flex justify-content-around mb-4">
            <Button
              variant={donationType === 'once' ? 'primary' : 'outline-primary'}
              onClick={() => handleTypeChange('once')}
            >
              Give Once
            </Button>
            <Button
              variant={donationType === 'monthly' ? 'primary' : 'outline-primary'}
              onClick={() => handleTypeChange('monthly')}
            >
              Donate Monthly
            </Button>
          </div>

          {/* Preset Donation Amounts */}
          <div className="d-flex justify-content-around mb-4">
            {[50, 150, 250, 500].map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? 'success' : 'outline-success'}
                onClick={() => handleAmountSelect(amount)}
              >
                ${amount}
              </Button>
            ))}
          </div>

          {/* Custom Amount */}
          <Form.Group className="mb-3">
            <Form.Label>Or Enter Custom Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              min="1"
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(Number(e.target.value))}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDonate}>
            Donate ${selectedAmount}
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
