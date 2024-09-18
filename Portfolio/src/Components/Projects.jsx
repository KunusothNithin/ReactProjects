import React from 'react';

const projects = [
  {
    title: "Tic-Tac-Toe",
    description: "A classic game of Tic-Tac-Toe with a modern twist.",
    link: "#",
    image: "https://play-lh.googleusercontent.com/5ENdgpFsRhQt9y_ySp9UK_p-CL0TmhSwW5pKmmzzIW0OLFR3EvAtzAGm6c_IkkfgVg",
  },
  {
    title: "Weather App",
    description: "An app that provides current weather conditions and forecasts.",
    link: "#",
    image: "https://play-lh.googleusercontent.com/znc7FD1BqyFR92b8n6hyROZrAR3FsTyV_ThO79hyuQG-Nb45z2qHFDTnf1HXH50DYg",
  },
  {
    title: "Quiz App",
    description: "An interactive quiz app with various questions and categories.",
    link: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7IgvIbP7MAcBwVuHtAynwlxs-kS2SNb1iDg&s",
  },
  {
    title: "Pinterest Clone",
    description: "A Pinterest clone allowing users to pin and organize images.",
    link: "#",
    image: "https://incartmarketing.com/wp-content/uploads/pinterest.jpg",
  },
  {
    title: "Instagram Clone",
    description: "A clone of Instagram with backend support for user interactions.",
    link: "#",
    image: "https://thumbs.dreamstime.com/b/instagram-new-logo-chisinau-moldova-september-instagram-new-logo-printed-white-paper-instagram-online-mobile-photo-128373447.jpg",
  },
  {
    title: "Todo List",
    description: "A simple and effective todo list application built with React.",
    link: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJu1W9gC925fxCYFTFtNG_Y7F2cLtvG7pvw&s",
  },
  {
    title: "Social Media App",
    description: "A social media app built with React, featuring user profiles and posts.",
    link: "#",
    image: "https://s3-alpha.figma.com/hub/file/3003358310/abf6b682-e86c-4494-ac8b-d1e7096c5ecb-cover.png",
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio website showcasing projects and skills, developed with React and Tailwind CSS.",
    link: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOGCXAY10WOy_7e_gxEV-_liSdXIXedyXHg&s",
  },
  {
    title: "Responsive Landing Pages",
    description: "Landing pages and other sheets developed responsively using Tailwind CSS.",
    link: "#",
    image: "/landing.png", // Ensure this path is correct
  },
];

function Projects() {
  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-700">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="relative w-full h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="text-purple-700 font-medium hover:text-purple-500">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
