import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Globe } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    'cp-platform': {
      title: 'CP Platform',
      description: 'A comprehensive competitive programming platform designed to host programming contests and manage submissions. The platform provides a robust backend API for handling user authentication, contest management, problem submissions, and real-time leaderboards.',
      longDescription: 'This competitive programming platform is built with Django and provides a complete solution for organizing programming contests. It features user registration and authentication, contest creation and management, problem submission handling, automated judging system, and real-time leaderboards. The platform is designed to scale and handle multiple concurrent users during contests.',
      tech: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery'],
      features: [
        'User authentication and profile management',
        'Contest creation and scheduling',
        'Problem submission and judging',
        'Real-time leaderboards',
        'Admin dashboard for contest management',
        'RESTful API documentation'
      ],
      gradient: 'from-blue-400 to-cyan-500',
      links: {
        github: 'https://github.com/Anower77/CP-Platform-Backend',
        live: 'https://cp-platform-backend.vercel.app/docs'
      },
      images: [
        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
        'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg'
      ]
    },
    'polling-system': {
      title: 'Polling System',
      description: 'A full-stack polling application that enables users to create polls, vote on various topics, and view real-time results. The system includes user authentication, poll management, and comprehensive analytics dashboard.',
      longDescription: 'This polling system is a complete web application that allows users to create and participate in polls. Built with Django for the backend and modern frontend technologies, it provides real-time voting capabilities, user authentication, poll creation and management, and detailed analytics. The system is designed to handle high traffic and provides instant feedback on poll results.',
      tech: ['Python', 'Django', 'JavaScript', 'HTML/CSS', 'SQLite', 'Chart.js'],
      features: [
        'User registration and authentication',
        'Poll creation with multiple choice options',
        'Real-time voting and results',
        'Poll analytics and statistics',
        'Responsive web design',
        'Admin panel for poll management'
      ],
      gradient: 'from-purple-400 to-pink-500',
      links: {
        github: 'https://github.com/Anower77/polling-system-up',
        live: 'https://polling-system-up.onrender.com/',
        api: 'https://polling-system-up.onrender.com/polls/api/polls/'
      },
      images: [
        'https://images.pexels.com/photos/18069694/pexels-photo-18069694.png',
        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg'
      ]
    },
    'job-portal': {
      title: 'Job Portal',
      description: 'A comprehensive job portal platform that connects job seekers with employers. The platform features job listings, application management, user profiles, and advanced search capabilities.',
      longDescription: 'This job portal is a full-featured platform designed to bridge the gap between job seekers and employers. Built with Django, it provides comprehensive functionality for both parties including job posting, application tracking, user profile management, and advanced search and filtering options. The platform includes separate dashboards for employers and job seekers with role-based access control.',
      tech: ['Python', 'Django', 'Bootstrap', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
      features: [
        'Dual user roles (Job Seekers & Employers)',
        'Job posting and management',
        'Application tracking system',
        'Advanced job search and filtering',
        'User profile and resume management',
        'Email notifications',
        'Admin dashboard'
      ],
      gradient: 'from-green-400 to-blue-500',
      links: {
        github: 'https://github.com/Anower77/Job-Portal',
        live: 'https://job-portal-4uvu.onrender.com/',
        api: 'https://job-portal-4uvu.onrender.com/api/'
      },
      images: [
        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
        'https://images.pexels.com/photos/18069694/pexels-photo-18069694.png'
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className={`h-2 w-32 bg-gradient-to-r ${project.gradient} rounded-lg mb-6`}></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Github size={20} />
            View Code
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-opacity`}
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
          {project.links.api && (
            <a
              href={project.links.api}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Globe size={20} />
              API Docs
            </a>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Images */}
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">About This Project</h2>
              <p className="text-gray-400 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
              <div className="space-y-2">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className={`px-3 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-medium text-center`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span>Source Code</span>
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
                {project.links.api && (
                  <a
                    href={project.links.api}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Globe size={20} />
                    <span>API Documentation</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;