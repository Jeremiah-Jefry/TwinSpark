import { motion } from 'framer-motion';
import { ArrowRight, Code2, Brain, Cpu, Zap } from 'lucide-react';

const techPills = [
  { name: 'React', icon: Code2, delay: 0 },
  { name: 'AI', icon: Brain, delay: 0.1 },
  { name: 'Vite', icon: Zap, delay: 0.2 },
  { name: 'n8n', icon: Cpu, delay: 0.3 },
];

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-aurora">
      {/* Animated Gradient Orbs */}
      <div className="gradient-orb gradient-orb-cyan w-[500px] h-[500px] -top-32 -left-32 float-slow" />
      <div className="gradient-orb gradient-orb-violet w-[400px] h-[400px] top-1/4 right-0 float" />
      <div className="gradient-orb gradient-orb-pink w-[300px] h-[300px] bottom-0 left-1/3 float-reverse" />

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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-xs font-medium text-violet-700 bg-violet-50 border border-violet-200 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Available for Projects
              </span>
            </motion.div>

            {/* Main Headline - Power Duo Statement */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight mb-5"
            >
              <span className="text-slate-900">We build </span>
              <span className="gradient-text">high-performance</span>
              <br />
              <span className="gradient-text">digital products.</span>
            </motion.h1>

            {/* Subheadline - Partnership Identity */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-md mb-4"
            >
              The combined expertise of <strong className="text-slate-900">Jeremiah Jefry</strong> & <strong className="text-slate-900">Joe Daniel</strong>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-slate-500 leading-relaxed max-w-md mb-8"
            >
              Web applications, AI automation, and modern UI — built by two specialists who obsess over every detail.
            </motion.p>

            {/* CTAs - View Work + Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button onClick={scrollToWork} className="btn-primary text-sm py-3 px-6">
                View Our Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={scrollToContact} className="btn-secondary text-sm py-3 px-6">
                Contact Us
              </button>
            </motion.div>

            {/* Trust Indicators - Partnership */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">2</span> founders
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">20+</span> projects delivered
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">100%</span> client satisfaction
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
              className="absolute w-[350px] h-[350px] xl:w-[420px] xl:h-[420px] rounded-full opacity-30"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.4), transparent, rgba(139, 92, 246, 0.4), transparent, rgba(236, 72, 153, 0.4), transparent)',
              }}
            />

            {/* Pulsing Center Glow */}
            <div className="w-[240px] h-[240px] xl:w-[300px] xl:h-[300px] bg-gradient-to-r from-blue-500/15 via-violet-500/20 to-pink-500/15 rounded-full blur-2xl pulse-glow" />

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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center pt-2 hover:border-violet-400 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2.5 rounded-full bg-gradient-to-b from-violet-400 to-pink-400"
          />
        </motion.button>
      </motion.div>
    </section>
  );
}
