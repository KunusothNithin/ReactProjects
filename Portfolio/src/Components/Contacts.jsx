import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form data change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Set form data based on the platform clicked
  const handleSocialClick = (platform) => {
    const socialData = {
      facebook: {
        name: 'Your Name',
        email: 'your.email@example.com',
        message: 'Hello, I would like to connect with you on Facebook!',
      },
      instagram: {
        name: 'Your Name',
        email: 'your.email@example.com',
        message: 'Hello, I would love to connect with you on Instagram!',
      },
      github: {
        name: 'Your Name',
        email: 'your.email@example.com',
        message: 'Hi, I’m interested in collaborating on GitHub!',
      },
      linkedin: {
        name: 'Your Name',
        email: 'your.email@example.com',
        message: 'Hello, I’d like to connect with you on LinkedIn!',
      },
    };

    setFormData(socialData[platform]);
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen py-12 px-6 md:px-12 font-sans">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-800">Contact Me</h1>
        <div className="flex flex-col items-center">
          <form className="w-full max-w-lg space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <label htmlFor="name" className="text-lg font-medium text-gray-800 flex items-center space-x-2">
                <FaUser className="text-purple-600" />
                <span>Name</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition placeholder-gray-500"
                placeholder="Your Name"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label htmlFor="email" className="text-lg font-medium text-gray-800 flex items-center space-x-2">
                <FaEnvelope className="text-purple-600" />
                <span>Email</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition placeholder-gray-500"
                placeholder="Your Email"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label htmlFor="message" className="text-lg font-medium text-gray-800 flex items-center space-x-2">
                <FaPaperPlane className="text-purple-600" />
                <span>Message</span>
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition placeholder-gray-500"
                placeholder="Your Message"
                required
                aria-required="true"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-purple-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-12 flex space-x-6">
            <a
              href="#"
              onClick={() => handleSocialClick('facebook')}
              className="text-blue-600 hover:text-blue-400 transition"
            >
              <FaFacebookF className="text-3xl" />
            </a>
            <a
              href="#"
              onClick={() => handleSocialClick('instagram')}
              className="text-pink-600 hover:text-pink-400 transition"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="#"
              onClick={() => handleSocialClick('github')}
              className="text-gray-800 hover:text-gray-600 transition"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="#"
              onClick={() => handleSocialClick('linkedin')}
              className="text-blue-700 hover:text-blue-500 transition"
            >
              <FaLinkedinIn className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
