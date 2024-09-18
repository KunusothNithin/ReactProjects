import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contacts from './Components/Contacts';

function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <Router>
      <Navbar setChangeTab={handleTabChange} />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
