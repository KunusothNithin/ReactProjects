// src/pages/Home.jsx
import React from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20 px-8 rounded-lg shadow-2xl mb-8 overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WHrGCaJ6JgkcZqZgurjKgCEZAsdIR728eQ&s"
      alt="Hero Background"
      className="w-full h-full object-cover object-center opacity-40"
    />
  </div>
  <div className="relative z-10 text-center">
    <h1 className="text-6xl font-bold leading-tight mb-6">
      Discover, Create, and Share Your Stories
    </h1>
    <p className="text-2xl mb-8 max-w-2xl mx-auto">
      Join our community and stay updated with the latest insights, articles, and creative content.
    </p>
    <a
      href="/create"
      className="bg-white text-blue-800 px-6 py-3 rounded-full shadow-lg font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      Start Writing
    </a>
  </div>
</section>


      {/* Search Bar */}
      <section className="bg-white p-4 rounded-lg shadow-md mb-8 flex items-center">
  <div className="relative w-full">
    <input
      type="text"
      placeholder="Search blog posts..."
      className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <svg
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.293 14.293a6 6 0 1 0-1.414-1.414m0 0L7.586 13m2.707-2.707a3 3 0 1 1-3.001-3.001M7.586 13l-3 3m0 0l3 3m-3-3h12"
      />
    </svg>
  </div>
</section>


      {/* Blog List */}
      <main className="bg-white p-6 rounded-lg shadow-md">
        <BlogList />
      </main>

      {/* Sidebar or Additional Sections */}
      <aside className="mt-8">
        {/* Categories/Tags */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
  <h2 className="text-2xl font-semibold mb-4">Categories</h2>
  <ul className="space-y-3">
    <li>
      <a
        href="/category/tech"
        className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
      >
        <svg
          className="w-6 h-6 text-blue-500 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v12a1 1 0 001 1h10a1 1 0 001-1V3m-4 4l-2-2m0 0l-2 2m2-2v12"
          />
        </svg>
        Tech
      </a>
    </li>
    <li>
      <a
        href="/category/lifestyle"
        className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
      >
        <svg
          className="w-6 h-6 text-green-500 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v12a1 1 0 001 1h10a1 1 0 001-1V3m-4 4l-2-2m0 0l-2 2m2-2v12"
          />
        </svg>
        Lifestyle
      </a>
    </li>
    <li>
      <a
        href="/category/education"
        className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
      >
        <svg
          className="w-6 h-6 text-red-500 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v12a1 1 0 001 1h10a1 1 0 001-1V3m-4 4l-2-2m0 0l-2 2m2-2v12"
          />
        </svg>
        Education
      </a>
    </li>
  </ul>
</section>


        {/* Recent Posts */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <img src="/path/to/image1.jpg" alt="Post 1" className="w-full h-40 object-cover rounded-t-lg" />
      <div className="mt-4">
        <a href="/blogs/1" className="text-blue-600 text-xl font-semibold hover:underline">Post Title 1</a>
      </div>
    </div>
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <img src="/path/to/image2.jpg" alt="Post 2" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="mt-4">
        <a href="/blogs/2" className="text-blue-600 text-xl font-semibold hover:underline">Post Title 2</a>
      </div>
    </div>
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <img src="/path/to/image3.jpg" alt="Post 3" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="mt-4">
        <a href="/blogs/3" className="text-blue-600 text-xl font-semibold hover:underline">Post Title 3</a>
      </div>
    </div>
  </div>
</section>

      </aside>

      {/* Subscription Form */}
      <section className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
