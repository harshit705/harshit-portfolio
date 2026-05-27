import React, { Suspense } from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';

// High-Performance Code Splitting: Lazy load heavy below-the-fold sections
const FeaturedProduct = React.lazy(() => import('./components/sections/FeaturedProduct').then(m => ({ default: m.FeaturedProduct })));
const About = React.lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const Experience = React.lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })));
const Projects = React.lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Skills = React.lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })));
const Certifications = React.lazy(() => import('./components/sections/Certifications').then(m => ({ default: m.Certifications })));
const Contact = React.lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <Layout>
      {/* Eagerly rendered LCP section for instant page loads */}
      <Hero />

      {/* Lazy-loaded operational dashboard and timeline blocks */}
      <Suspense fallback={
        <div className="py-24 text-center">
          <span className="relative flex h-3 w-3 mx-auto mb-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Assembling system components...</p>
        </div>
      }>
        <FeaturedProduct />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </Suspense>
    </Layout>
  );
}

export default App;
