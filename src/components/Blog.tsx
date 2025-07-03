import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Just Array',
      description: 'Deep dive into array data structures, operations, and optimization techniques for competitive programming.',
      gradient: 'from-blue-400 to-cyan-500',
      url: 'https://anower77.hashnode.dev/just-array'
    },
    {
      title: 'Segment Tree',
      description: 'Understanding segment trees for efficient range queries and updates in competitive programming.',
      gradient: 'from-purple-400 to-pink-500',
      url: 'https://anower77.hashnode.dev/segment-tree-1'
    },
    {
      title: 'Recursion & Backtracking',
      description: 'Mastering recursive algorithms and backtracking techniques for solving complex problems.',
      gradient: 'from-green-400 to-blue-500',
      url: ' https://anower77.hashnode.dev/recursion-backtracking'
    },
    {
      title: 'Lower & Upper Bound',
      description: 'Binary search variations and bound finding techniques for efficient searching algorithms.',
      gradient: 'from-orange-400 to-red-500',
      url: 'https://anower77.hashnode.dev/lower-upper-bound'
    }
  ];

  return (
    <section id="blog" className="py-16 sm:py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Blog & Articles
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Technical articles and insights on programming concepts and algorithms
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${post.gradient} rounded-t-lg mb-6`}></div>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar size={16} />
                <span>Technical Article</span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                {post.description}
              </p>
              
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm sm:text-base"
              >
                Read Article <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://hashnode.com/@Anower77"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            View All Articles <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;