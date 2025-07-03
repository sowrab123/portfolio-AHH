import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            My educational background and academic journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
            {/* Header with gradient */}
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    Higher Secondary Certificate (HSC)
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-400 font-medium">
                      <Calendar size={16} />
                      <span className="text-sm sm:text-base">Currently on Gap Year</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm sm:text-base">Focus on Skill Development</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Completed Higher Secondary Certificate and currently taking a gap year to focus on 
                    programming skills development, competitive programming, and building practical projects. 
                    Using this time to strengthen my foundation in computer science concepts and gain 
                    real-world development experience.
                  </p>
                  
                  {/* Skills gained during gap year */}
                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-white font-medium mb-3 text-sm sm:text-base">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {['Programming', 'Algorithms', 'Backend Development', 'Problem Solving'].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300"
                        >
                          {skill}
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
    </section>
  );
};

export default Education;