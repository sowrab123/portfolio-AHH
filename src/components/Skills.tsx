import React from 'react';
import { Code, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code size={32} />,
      items: ['C / C++', 'Python', 'scratch programming'],
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      category: 'Core Concepts',
      icon: <Cpu size={32} />,
      items: ['Data Structures', 'Algorithms', 'OPPs'],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      category: 'Framework',
      icon: <Database size={32} />,
      items: ['Django', 'Flask', 'Pandas', 'Numpy'],
      gradient: 'from-green-400 to-blue-500'
    },
    {
      category: 'Cloud Computing',
      icon: <Database size={32} />,
      items: ['AWS', 'DigitalOcean', 'Advanced PostgreSQL', 'Docker'],
      gradient: 'from-red-400 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Technologies and concepts I work with to build robust backend solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.gradient} mb-6`}>
                <div className="text-white">
                  {skill.icon}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {skill.category}
              </h3>
              
              <div className="space-y-3">
                {skill.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.gradient} flex-shrink-0`}></div>
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
