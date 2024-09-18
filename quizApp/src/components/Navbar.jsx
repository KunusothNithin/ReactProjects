// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:underline">
            QuizApp
          </Link>
        </div>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/create-quiz" className="mr-4 hover:underline">Create Quiz</Link>
          <Link to="/signup" className="mr-4 hover:underline">Sign Up</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
