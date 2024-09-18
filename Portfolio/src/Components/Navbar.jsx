import React, { useState } from 'react';
import { FaHome, FaBrain, FaSuitcase, FaEnvelope, FaUser } from 'react-icons/fa';

function Navbar({ setChangeTab }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Skills', icon: <FaBrain /> },
    { name: 'Projects', icon: <FaSuitcase /> },
    { name: 'Contacts', icon: <FaEnvelope /> },
    { name: 'About', icon: <FaUser /> },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-900 via-gray-900 to-gray-800 text-white py-4 shadow-lg fixed w-full z-50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <a href="/" className="text-3xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          My Portfolio
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map(({ name, icon }) => (
            <a
              key={name}
              href={`/${name.toLowerCase()}`}
              onClick={() => setChangeTab(name)}
              className="flex items-center space-x-2 text-lg font-medium hover:text-pink-400 transition-colors duration-300 ease-in-out"
            >
              {icon}
              <span>{name}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-pink-400 hover:text-pink-300 focus:outline-none transition-transform duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden flex flex-col items-center space-y-4 pt-4 ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        {navItems.map(({ name, icon }) => (
          <a
            key={name}
            href={`/${name.toLowerCase()}`}
            onClick={() => { setChangeTab(name); toggleMobileMenu(); }}
            className="flex items-center space-x-2 text-lg font-medium hover:text-pink-400 transition duration-300 ease-in-out"
          >
            {icon}
            <span>{name}</span>
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
