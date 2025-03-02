import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code } from 'lucide-react';
import profileImage from "../assets/profile.jpg"; // Remove (1) from filename

<img 
  src={profileImage} 
  alt="Profile" 
  className="w-full h-full object-cotain" 
/>

interface AboutProps {
  isLoaded: boolean;
}

const About: React.FC<AboutProps> = ({ isLoaded }) => {
  return (
    <section id="about" className="py-16 min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-blue-400">Full Stack</span> Developer
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Passionate software engineer with expertise in web development, cloud services, and competitive programming.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="mailto:mohdquamartyagi@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md">
              <Mail size={18} /> Contact Me
            </a>
            <a href="https://github.com/Tyagiquamar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-md">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohd-quamar-tyagi-5456b1225/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-md">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-400" />
              <span>+91-8279581337</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-400" />
              <span>Chandigarh, India</span>
            </div>
          </div>
        </div>
        <div className={`relative transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="aspect-square rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
           
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />

            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gray-800 p-3 rounded-full border-4 border-gray-900">
            <Code size={32} className="text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;