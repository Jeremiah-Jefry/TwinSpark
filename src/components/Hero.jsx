import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Smartphone, Search, Shield } from 'lucide-react';

const trustItems = [
  { icon: Zap, text: 'Fast Delivery' },
  { icon: Smartphone, text: 'Mobile First' },
  { icon: Search, text: 'SEO Ready' },
  { icon: Shield, text: 'Secure' },
];

export default function Hero() {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Animated Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="glow-orb w-[600px] h-[600px] bg-primary-500/30 top-0 -right-48"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="glow-orb w-[500px] h-[500px] bg-accent-500/20 bottom-0 -left-48"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="glow-orb w-[300px] h-[300px] bg-primary-600/20 top-1/3 left-1/4"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDEzOSwgOTIsIDI0NiwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Now accepting new projects for 2026
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
          >
            We build websites that{' '}
            <span className="gradient-text">turn visitors</span>
            <br className="hidden sm:block" />
            {' '}into{' '}
            <span className="gradient-text">customers</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-dark-400 max-w-3xl mx-auto mb-10"
          >
            Two developers, one mission: creating premium commercial websites 
            that look stunning, load fast, and convert visitors into paying clients.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => handleScroll('#contact')}
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Get a Website
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('#portfolio')}
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
            >
              <Play className="w-5 h-5" />
              See Portfolio
            </button>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          >
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-dark-400">
                <item.icon className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent"></div>
    </section>
  );
}
