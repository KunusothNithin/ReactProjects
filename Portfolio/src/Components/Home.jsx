import React, { useState, useEffect } from 'react';

function Home() {
  const messages = [
    "Welcome to My Portfolio",
    "Bienvenido a Mi Portafolio",
    "Bienvenue dans Mon Portfolio",
    "Willkommen in Meinem Portfolio",
    "欢迎来到我的作品集",
    "Добро пожаловать в мое портфолио",
    "स्वागत है मेरे पोर्टफोलियो में",
    "मेरे पोर्टफोलियो में आपका स्वागत है",
    "আমার পোর্টফোলিওতে স্বাগতম",
    "என் போர்ட்ஃபோலியோவில் வரவேற்கிறேன்",
    "నా పోర్ట్‌ఫోలియోకు స్వాగతం",
    "ನನ್ನ ಪೋರ್ಟ್‌ಫೋಲಿಯೋಗೆ ಸ್ವಾಗತ",
    "എൻ്റെ പോർട്ട്ഫോളിയോയിലേക്ക് സ്വാഗതം",
    "ਮੇਰੇ ਪੋਰਟਫੋਲੀਓ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
    "મારા પોર્ટફોલિયોમાં આપનું સ્વાગત છે",
    "माझ्या पोर्टफोलिओ मध्ये आपले स्वागत आहे",
    "माझ्या पोर्टफोलियो में आपला स्वागत आहे",
    "ମୋର ପୋର୍ଟଫୋଲିଓକୁ ସ୍ବାଗତ",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
        setFade(true); // Fade in new message
      }, 500); // Half second fade out before message change
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-100 to-pink-50 flex items-center justify-center relative overflow-hidden px-6 py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 relative z-10">
        
        {/* Welcome Message */}
        <div className="text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'} ${currentMessage % 2 === 0 ? 'text-purple-600' : 'text-pink-600'}`}
          >
            {messages[currentMessage]}
          </h1>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/captivating-cartoon-characters-cute-kids-playful-boys-lovely-girls-digital-world_1142283-85135.jpg"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:shadow-2xl w-3/4 md:w-1/2"
            alt="Hero"
          />
        </div>

        {/* About Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700">About Me</h2>
          <p className="text-lg md:text-xl font-medium text-gray-700">
            I’m a passionate full-stack developer focused on creating impactful and scalable solutions. With expertise in modern frameworks, I’m always exploring innovative ideas. Let's create something extraordinary together!
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-8">
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-8">
            Discover my projects, and let's collaborate to build innovative solutions!
          </p>
          <div className="flex justify-center space-x-4">
            <a href='/projects' className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-purple-600 transition">
              Explore Projects
            </a>
            <a href='/contacts' className="border-2 border-purple-700 text-purple-700 px-6 py-3 rounded-md shadow-md hover:bg-purple-100 transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Extra Decorative Elements */}
        <div className="absolute -top-16 left-[-10%] w-72 h-72 bg-gradient-to-br from-yellow-300 to-red-400 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute -bottom-16 right-[-10%] w-60 h-60 bg-gradient-to-bl from-blue-400 to-purple-500 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-300 to-teal-500 rounded-full opacity-50 transform rotate-45"></div>
        <div className="absolute top-1/2 right-0 w-24 h-24 bg-gradient-to-tl from-pink-300 to-yellow-500 rounded-full blur-xl opacity-40"></div>
      </div>

      {/* Floating Decorative Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute top-0 left-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
          <circle cx="25" cy="25" r="20" fill="currentColor" />
          <circle cx="75" cy="75" r="20" fill="currentColor" />
          <circle cx="25" cy="75" r="15" fill="currentColor" />
          <circle cx="75" cy="25" r="15" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default Home;
