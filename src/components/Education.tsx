import React from 'react';
import { GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16">
      <SectionTitle title="Education" highlight="Education" />
      <div className="relative pl-8 border-l-2 border-blue-500">
        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
          <GraduationCap size={14} />
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="text-xl font-bold text-blue-400">Chandigarh Engineering College</h3>
            <div className="text-gray-400">Oct 2021 - 2025</div>
          </div>
          <h4 className="text-lg font-semibold mb-2">Bachelor of Computer Science and Engineering</h4>
          <p className="text-gray-300">CGPA: 7.9</p>
        </div>
      </div>
    </section>
  );
};

export default Education;