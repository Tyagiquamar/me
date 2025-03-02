import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isLoaded: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, isLoaded }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className={`text-2xl font-bold transition-all duration-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <span className="text-blue-400">Mohd Quamar</span> Tyagi
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-1 md:space-x-6">
            {['About', 'Experience', 'Education', 'Projects', 'Skills', 'Achievements'].map((item, index) => (
              <li key={item} 
                  className={`transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} 
                  style={{ transitionDelay: `${index * 100}ms` }}>
                <button 
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-3 py-2 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-blue-500/20 ${activeSection === item.toLowerCase() ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300'}`}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;