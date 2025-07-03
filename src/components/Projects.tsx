import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 'cp-platform',
      title: 'CP Platform',
      description: 'A competitive programming platform with backend API for managing contests, submissions, and user rankings.',
      tech: ['Python', 'Django', 'REST API'],
      gradient: 'from-blue-400 to-cyan-500',
      links: {
        github: 'https://github.com/Anower77/CP-Platform-Backend',
        live: 'https://cp-platform-backend.vercel.app/docs'
      }
    },
    {
      id: 'polling-system',
      title: 'Polling System',
      description: 'A full-stack polling application with real-time voting capabilities, user authentication, and analytics dashboard.',
      tech: ['Python', 'Django', 'Frontend'],
      gradient: 'from-purple-400 to-pink-500',
      links: {
        github: 'https://github.com/Anower77/polling-system-up',
        live: 'https://polling-system-up.onrender.com/',
        api: 'https://polling-system-up.onrender.com/polls/api/polls/'
      }
    },
    {
      id: 'job-portal',
      title: 'Job Portal',
      description: 'A comprehensive job portal platform connecting job seekers with employers, featuring job listings, applications, and user management.',
      tech: ['Python', 'Django', 'Full Stack'],
      gradient: 'from-green-400 to-blue-500',
      links: {
        github: 'https://github.com/Anower77/Job-Portal',
        live: 'https://job-portal-4uvu.onrender.com/',
        api: 'https://job-portal-4uvu.onrender.com/api/'
      }
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A showcase of my recent work and technical projects
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-lg mb-6`}></div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 text-xs sm:text-sm rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={`/project/${project.id}`}
                  className="flex items-center justify-center sm:justify-start gap-2 text-blue-400 hover:text-blue-300 transition-colors sm:ml-auto text-sm"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;