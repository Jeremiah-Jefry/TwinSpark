import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Navbar,
  About,
  Services,
  Projects,
  WhyUs,
  Contact,
  Footer,
  Loader
} from './components';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Premium entrance animation - 1.8s sweet spot
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all elements with reveal-on-scroll class
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <>
      {/* Premium Loader with smooth exit */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Main content fades in after loader */}
      <div className={`bg-aurora transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <About />
          <Services />
          <Projects />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
