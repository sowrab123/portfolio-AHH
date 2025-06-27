import React from 'react';
import { Briefcase, Code } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional experience and roles in the tech industry
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Briefcase size={32} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  CS-Instructor (Python)
                </h3>
                <p className="text-purple-400 font-medium mb-3">
                  Programming Instructor
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Code size={16} className="text-gray-400" />
                  <span className="text-gray-400">Python Programming</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Teaching Python programming fundamentals to students, covering topics including 
                  data structures, algorithms, object-oriented programming, and practical application 
                  development. Helping students build strong programming foundations and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;