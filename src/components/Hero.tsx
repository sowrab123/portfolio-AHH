import React from 'react';
import { Download, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Anower Hossain (Resume) .pdf';
    link.download = 'Anower_Hossain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Professional Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                <img
                  src="/image.png"
                  alt="Anower Hossain - Backend Engineer"
                  className="w-full h-full object-cover rounded-full bg-gray-800"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hi, There. This is Anower Hossain
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              Backend Engineer
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              I have been working as a programmer for several years, with experience in C, C++, and Python, 
              Algorithms, and Data Structures. I am passionate about problem-solving and enjoy finding 
              creative solutions to complex challenges.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              Download Resume
            </button>
            <div className="flex gap-4">
              <a
                href="https://github.com/Anower77"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anowerhossain5a346b220/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                CP Platform
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                A competitive programming platform with backend API for managing contests and submissions.
              </p>
              <a
                href="/project/cp-platform"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
              >
                View Details <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Polling System
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                A full-stack polling application with real-time voting capabilities and analytics.
              </p>
              <a
                href="/project/polling-system"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
              >
                View Details <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                Job Portal
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                A comprehensive job portal with features for both job seekers and employers.
              </p>
              <a
                href="/project/job-portal"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm sm:text-base"
              >
                View Details <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;