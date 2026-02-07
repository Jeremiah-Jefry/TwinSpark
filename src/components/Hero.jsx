import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Brain, Code2, Cpu } from 'lucide-react';

const techPills = [
  { name: 'React', icon: Code2, delay: 0 },
  { name: 'AI', icon: Brain, delay: 0.1 },
  { name: 'Node.js', icon: Cpu, delay: 0.2 },
  { name: 'Next.js', icon: Zap, delay: 0.3 },
];

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-aurora">
      {/* Animated Gradient Orbs */}
      <div className="gradient-orb gradient-orb-cyan w-[600px] h-[600px] -top-40 -left-40 float-slow" />
      <div className="gradient-orb gradient-orb-violet w-[500px] h-[500px] top-1/4 right-0 float" />
      <div className="gradient-orb gradient-orb-pink w-[400px] h-[400px] bottom-0 left-1/3 float-reverse" />

      {/* Rotating Gradient Ring - Behind headline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-20"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent, rgba(236, 72, 153, 0.3), transparent)',
          }}
        />
      </div>

      {/* Pulsing Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-gradient-to-r from-blue-500/10 via-violet-500/15 to-pink-500/10 rounded-full blur-3xl pulse-glow" />
      </div>

      <div className="container-strict relative z-10 pt-20">
        {/* Floating Tech Pills - Orbital Display */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {techPills.map((pill, index) => {
            const positions = [
              { top: '15%', left: '8%' },
              { top: '25%', right: '10%' },
              { bottom: '30%', left: '5%' },
              { bottom: '20%', right: '8%' },
            ];
            const pos = positions[index];
            return (
              <motion.div
                key={pill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + pill.delay, duration: 0.5 }}
                className={`absolute tech-pill ${index % 2 === 0 ? 'float' : 'float-reverse'}`}
                style={{
                  ...pos,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <pill.icon className="w-3.5 h-3.5 text-violet-500" />
                {pill.name}
              </motion.div>
            );
          })}
        </div>

        {/* Center Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="badge badge-gradient mb-8 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-500" />
              Web Development + AI Automation
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-8"
          >
            <span className="text-slate-900">We are </span>
            <span className="gradient-text">Twinspark</span>
            <br />
            <span className="text-slate-400">Digital experiences that inspire.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            A boutique studio crafting high-performance websites and intelligent
            automation systems for ambitious businesses that want to stand out.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={scrollToContact} className="btn-primary">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={scrollToWork} className="btn-secondary">
              View Our Work
            </button>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-8 md:gap-12 py-6 px-8 glass-card">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-static">50+</div>
                <div className="text-sm text-slate-500">Projects</div>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-static">100%</div>
                <div className="text-sm text-slate-500">Satisfaction</div>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-static">24h</div>
                <div className="text-sm text-slate-500">Response</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 rounded-full border-2 border-slate-300 flex items-start justify-center pt-2 hover:border-violet-400 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 rounded-full bg-gradient-to-b from-violet-400 to-pink-400"
          />
        </motion.button>
      </motion.div>
    </section>
  );
}
