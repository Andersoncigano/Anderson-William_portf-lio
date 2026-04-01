import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden relative bg-brand-white text-brand-black transition-colors duration-300">
      <CustomCursor />
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
