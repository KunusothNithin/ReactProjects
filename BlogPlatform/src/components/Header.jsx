// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlusCircle, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      <nav className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white shadow-md py-4 md:hidden">
        <div className="container mx-auto flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold">BlogApp</h1>
          <button onClick={toggleSidebar} className="text-white">
            {isSidebarOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="flex flex-col p-4">
          <Link
            to="/"
            className="flex items-center space-x-2 py-2 text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaHome className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/create"
            className="flex items-center space-x-2 py-2 text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaPlusCircle className="h-5 w-5" />
            <span>Create Blog</span>
          </Link>
          <Link
            to="/login"
            className="flex items-center space-x-2 py-2 text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaSignInAlt className="h-5 w-5" />
            <span>Login</span>
          </Link>
          <Link
            to="/register"
            className="flex items-center space-x-2 py-2 text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaUserPlus className="h-5 w-5" />
            <span>Register</span>
          </Link>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold">BlogApp</h1>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="flex items-center space-x-2 text-white"
              >
                <FaHome className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className="flex items-center space-x-2 text-white"
              >
                <FaPlusCircle className="h-5 w-5" />
                <span>Create Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="flex items-center space-x-2 text-white"
              >
                <FaSignInAlt className="h-5 w-5" />
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex items-center space-x-2 text-white"
              >
                <FaUserPlus className="h-5 w-5" />
                <span>Register</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
