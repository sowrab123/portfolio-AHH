import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;