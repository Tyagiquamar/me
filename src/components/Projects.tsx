import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <SectionTitle title="Projects" highlight="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-blue-400">NOTION AI</h3>
              <div className="flex gap-2">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <ExternalLink size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              <li>Crafted a Notion-like editor, reducing formatting time by 40%, enhancing productivity.</li>
              <li>Optimized backend for large-scale data handling, reducing latency by 50%.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">React.Js</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">SHADECN</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">Firebase</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">OpenAI API</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-blue-400">CryptoTrade</h3>
              <div className="flex gap-2">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <ExternalLink size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              <li>Developed a cryptocurrency tracker with ReactJS, integrating Crypto API for real-time data.</li>
              <li>Implemented key features like price tracking and market trends, boosting engagement by 30%.</li>
              <li>Optimized performance, improving page load speed by 95%.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">ReactJs</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">ChakraUI</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">HTML</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">CSS</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">JS</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">CryptoAPI</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 md:col-span-2">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-blue-400">Accommodation Finder</h3>
              <div className="flex gap-2">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <ExternalLink size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              <li>Created a secure user registration and login system using JWT, reducing unauthorized access incidents by 30%.</li>
              <li>Designed and launched a user-friendly booking system enabling seamless tour selection and reservation, increasing online bookings by 40% within 3 months.</li>
              <li>Launched a comprehensive review and rating system for tours, capturing user feedback and ratings; increased customer engagement by 40% and improved overall tour quality ratings by 25%.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">ReactJs</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">NodeJs</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">ExpressJs</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">MongoDB</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;