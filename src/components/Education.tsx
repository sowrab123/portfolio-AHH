import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My educational background and academic journey
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap size={32} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-blue-400 font-medium mb-3">
                  Currently on Gap Year
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Completed Higher Secondary Certificate and currently taking a gap year to focus on 
                  programming skills development, competitive programming, and building practical projects. 
                  Using this time to strengthen my foundation in computer science concepts and gain 
                  real-world development experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;