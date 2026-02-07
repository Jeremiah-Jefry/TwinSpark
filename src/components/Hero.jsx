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

      <div className="container-custom relative z-10 pt-14">
        {/* Hybrid Layout: Left Text + Right Graphics */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left: Text Content - LEFT ALIGNED */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="badge badge-gradient mb-5 inline-flex items-center gap-2 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                Web Development + AI Automation
              </span>
            </motion.div>

            {/* Main Headline - Tighter */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.1] tracking-tight mb-5"
            >
              <span className="text-slate-900">We are </span>
              <span className="gradient-text">Twinspark</span>
              <br />
              <span className="text-slate-400 text-[0.85em]">Digital experiences that inspire.</span>
            </motion.h1>

            {/* Subheadline - Tighter */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg mb-8"
            >
              A boutique studio crafting high-performance websites and intelligent
              automation systems for ambitious businesses.
            </motion.p>

            {/* CTAs - Left aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button onClick={scrollToContact} className="btn-primary text-sm py-3 px-6">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={scrollToWork} className="btn-secondary text-sm py-3 px-6">
                View Our Work
              </button>
            </motion.div>

            {/* Trust Stats - Compact inline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <div className="inline-flex flex-wrap items-center gap-6 py-4 px-6 glass-card">
                <div className="text-center">
                  <div className="text-lg font-bold gradient-text-static">50+</div>
                  <div className="text-xs text-slate-500">Projects</div>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                <div className="text-center">
                  <div className="text-lg font-bold gradient-text-static">100%</div>
                  <div className="text-xs text-slate-500">Satisfaction</div>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                <div className="text-center">
                  <div className="text-lg font-bold gradient-text-static">24h</div>
                  <div className="text-xs text-slate-500">Response</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: 3D Element / Graphics */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Rotating Gradient Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[400px] h-[400px] xl:w-[480px] xl:h-[480px] rounded-full opacity-30"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.4), transparent, rgba(139, 92, 246, 0.4), transparent, rgba(236, 72, 153, 0.4), transparent)',
              }}
            />

            {/* Pulsing Center Glow */}
            <div className="w-[280px] h-[280px] xl:w-[340px] xl:h-[340px] bg-gradient-to-r from-blue-500/15 via-violet-500/20 to-pink-500/15 rounded-full blur-2xl pulse-glow" />

            {/* Floating Tech Pills - Around Graphics */}
            {techPills.map((pill, index) => {
              const positions = [
                { top: '10%', left: '5%' },
                { top: '5%', right: '10%' },
                { bottom: '15%', left: '0%' },
                { bottom: '5%', right: '5%' },
              ];
              const pos = positions[index];
              return (
                <motion.div
                  key={pill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + pill.delay, duration: 0.5 }}
                  className={`absolute tech-pill text-xs ${index % 2 === 0 ? 'float' : 'float-reverse'}`}
                  style={{
                    ...pos,
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <pill.icon className="w-3 h-3 text-violet-500" />
                  {pill.name}
                </motion.div>
              );
            })}
          </div>
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
