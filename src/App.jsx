import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Navbar,
  Hero,
  About,
  Services,
  Projects,
  CaseStudies,
  WhyUs,
  Testimonials,
  Pricing,
  FAQ,
  Contact,
  Footer,
  Loader
} from './components';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Aurora background wrapper */}
      <div className={`bg-aurora ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <CaseStudies />
          <WhyUs />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
