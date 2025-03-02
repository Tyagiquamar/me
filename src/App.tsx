import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    setIsLoaded(true);

    // Intersection Observer to detect which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Navigation */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} isLoaded={isLoaded} />

      <main className="container mx-auto px-4">
        {/* All sections are now visible and scrollable */}
        <About isLoaded={isLoaded} />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
      </main>

      <Footer />
    </div>
  );
}

export default App;