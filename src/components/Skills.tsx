import React from 'react';
import { Code, Server, Database } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16">
      <SectionTitle title="Technical Skills" highlight="Technical" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-blue-400" size={24} />
            <h3 className="text-xl font-bold">Programming Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Python</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">C++</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Java</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">HTML/CSS</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">JavaScript</span>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Server className="text-blue-400" size={24} />
            <h3 className="text-xl font-bold">Web Development</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">React.js</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Node.js</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Microservices</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">REST APIs</span>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Server className="text-blue-400" size={24} />
            <h3 className="text-xl font-bold">Cloud Services</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Microsoft Azure</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Amazon Web Services (AWS)</span>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-blue-400" size={24} />
            <h3 className="text-xl font-bold">Databases</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">SQL</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">NoSQL</span>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-blue-400" size={24} />
            <h3 className="text-xl font-bold">Core Concepts</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Data Structures</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Algorithms</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Computer Network</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Operating System</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">SDLC</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Object-Oriented Programming (OOP)</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">Git</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;