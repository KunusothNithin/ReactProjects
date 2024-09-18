import React from 'react';

// Example image URLs for each skill; replace these with actual image URLs
const skillImages = {
  "JavaScript": "https://img.icons8.com/ios/50/000000/javascript.png",
  "React": "https://img.icons8.com/ios/50/000000/react-native.png",
  "Node.js": "https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/node-dot-js.svg", // Updated URL
  "Python": "https://img.icons8.com/ios/50/000000/python.png",
  "C++": "https://img.icons8.com/ios/50/000000/c-plus-plus.png",
  "Java": "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/svgs/brands/java.svg",
  "CSS": "https://img.icons8.com/ios/50/000000/css3.png",
  "HTML": "https://img.icons8.com/ios/50/000000/html-5.png",
};


const skills = [
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "React", color: "bg-blue-500" },
  { name: "Node.js", color: "bg-green-400" },
  { name: "Python", color: "bg-blue-300" },
  { name: "C++", color: "bg-gray-600" },
  { name: "Java", color: "bg-red-500" },
  { name: "CSS", color: "bg-blue-600" },
  { name: "HTML", color: "bg-orange-400" },
];

function Skills() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-700">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className={`flex items-center justify-center p-4 rounded-lg shadow-md ${skill.color} text-white text-lg font-semibold space-x-4`}>
              <img src={skillImages[skill.name]} alt={skill.name} className="w-12 h-12" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
