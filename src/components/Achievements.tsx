import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16">
      <SectionTitle title="Achievements" highlight="Achievements" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-yellow-500" size={24} />
            <h3 className="text-xl font-bold">Codeforces</h3>
          </div>
          <p className="text-gray-300 mb-4">Ranked among the top 1%, with a 1940+ (Candidate Master) rating on Codeforces.</p>
          <a href="https://codeforces.com/profile/altair_45" className="text-blue-400 flex items-center gap-1 hover:underline">
            Profile Link <ChevronRight size={16} />
          </a>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-yellow-500" size={24} />
            <h3 className="text-xl font-bold">Leetcode</h3>
          </div>
          <p className="text-gray-300 mb-4">Achieved 2400+ (Guardian Badge), Top 0.6% Globally on Leetcode.</p>
          <a href="https://leetcode.com/u/Altair_4/" className="text-blue-400 flex items-center gap-1 hover:underline">
            Profile Link <ChevronRight size={16} />
          </a>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-yellow-500" size={24} />
            <h3 className="text-xl font-bold">CodeChef</h3>
          </div>
          <p className="text-gray-300 mb-4">Attained 5-star rating (2017 rating) on CodeChef.</p>
          <a href="https://www.codechef.com/users/tyagiquamar" className="text-blue-400 flex items-center gap-1 hover:underline">
            Profile Link <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;