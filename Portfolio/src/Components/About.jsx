import React from 'react';

function About() {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-50 min-h-screen py-12 px-6 md:px-12 font-sans">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-purple-800">About Me</h1>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <img
            src="https://img.freepik.com/premium-photo/captivating-cartoon-characters-cute-kids-playful-boys-lovely-girls-digital-world_1142283-85135.jpg"
            alt="About Me"
            className="rounded-full border-4 border-purple-300 shadow-2xl w-64 h-64 object-cover transition-transform transform hover:scale-105"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 bg-purple-100 p-4 rounded-lg shadow-md">
              Who I Am
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am a dedicated full-stack developer with a passion for crafting solutions that make a difference. With experience in modern technologies and a keen eye for detail, I strive to build applications that are both functional and visually appealing.
            </p>
            <a
              href="/contacts"
              className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-purple-600 transition transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
