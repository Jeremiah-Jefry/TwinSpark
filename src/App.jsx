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

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
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
