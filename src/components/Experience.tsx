import React from 'react';
import { Briefcase, Code, Users, Clock } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            My professional experience and roles in the tech industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
            {/* Header with gradient */}
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600"></div>
            
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Briefcase size={32} className="text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    CS-Instructor (Python)
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-purple-400 font-medium">
                      <Code size={16} />
                      <span className="text-sm sm:text-base">Programming Instructor</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400">
                      <Clock size={16} />
                      <span className="text-sm sm:text-base">Current Role</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    Teaching Python programming fundamentals to students, covering topics including 
                    data structures, algorithms, object-oriented programming, and practical application 
                    development. Helping students build strong programming foundations and problem-solving skills.
                  </p>
                  
                  {/* Key responsibilities */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm sm:text-base">Key Responsibilities:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          'Python Programming Instruction',
                          'Data Structures Teaching',
                          'Algorithm Concepts',
                          'Problem-Solving Guidance'
                        ].map((responsibility, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm sm:text-base">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm sm:text-base">Teaching Focus:</h4>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {['Python', 'Data Structures', 'Algorithms', 'OOP', 'Problem Solving'].map((topic, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;