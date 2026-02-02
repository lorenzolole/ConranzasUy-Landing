import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features'; // "Ingredients"
import Metrics from './components/Metrics';   // "Nutrition"
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Features />
            <Metrics />
            <Reviews />
            <FAQ />
            <Contact />
          </main>
          
          <footer className="py-8 text-center text-neutral-600 text-sm border-t border-neutral-900">
            <p>© {new Date().getFullYear()} CobranzasUy. Todos los derechos reservados.</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;