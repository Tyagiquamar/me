import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16">
      <SectionTitle title="Work Experience" highlight="Work" />
      <div className="space-y-12">
        <div className="relative pl-8 border-l-2 border-blue-500">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <Briefcase size={14} />
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-blue-400">The Linux Foundation</h3>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Nov 2023 - March 2024</span>
                <span className="hidden md:inline">•</span>
                <span>Seol (Remote)</span>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">SDE Intern</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Replaced traditional HTTPS calls with guided gRPC control buffer architecture, resulting in a 60% increase in data transfer speed.</li>
              <li>Implemented CloudForet development images featuring plugins; supported over 50 microservices, improving deployment processes.</li>
              <li>Streamlined the development lifecycle with advanced container orchestration, enabling faster feature deployments.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">Docker</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">Nginx</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">gRPC</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">Linux</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">Minikube</span>
            </div>
          </div>
        </div>

        <div className="relative pl-8 border-l-2 border-blue-500">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <Briefcase size={14} />
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-blue-400">ITJOBS</h3>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Jul 2023 - Sep 2023</span>
                <span className="hidden md:inline">•</span>
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">SDE Intern</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Redesigned 12 core web pages, ensuring accessibility compliance, enhancing usability, and receiving positive user feedback.</li>
              <li>Designed automated bot detection, resulting in the removal of 2,000+ inappropriate posts, improving content quality.</li>
              <li>Deployed reCAPTCHA, improving user data integrity for over 10,000 monthly visitors.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">ReactJs</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">NodeJs</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">ExpressJs</span>
              <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;