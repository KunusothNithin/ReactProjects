// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4 max-w-lg text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to QuizApp</h1>
      <p className="text-lg mb-4 text-center">
        Create, take, and share quizzes with ease. Get started by creating your first quiz or signing up.
      </p>
      <div className="flex gap-8 justify-center">
        {/* <Link to="/create-quiz">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create Quiz
          </button>
        </Link> */}
        <Link to="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
