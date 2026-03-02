import { motion, useInView, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';

/* ── 3-D tilt card with cursor spotlight ── */
function ProjectCard({ project, index, isInView, isFeatured }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [spotX, setSpotX] = useState(50);
  const [spotY, setSpotY] = useState(50);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setSpotX(((e.clientX - rect.left) / rect.width) * 100);
    setSpotY(((e.clientY - rect.top) / rect.height) * 100);
  }, [mouseX, mouseY]);

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border border-white/60 bg-white/90 backdrop-blur-sm cursor-pointer select-none ${
        isFeatured ? 'col-span-2' : 'col-span-1'
      }`}
      whileHover={{ zIndex: 10 }}
    >
      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(180px circle at ${spotX}% ${spotY}%, rgba(255,255,255,0.18), transparent 70%)`,
        }}
      />

      {/* Gradient banner */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${project.color} ${isFeatured ? 'h-44' : 'h-36'}`}>
        {/* Dot grid texture */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
        />

        {/* Shimmer sweep on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="shimmer"
              initial={{ x: '-100%', skewX: '-20deg' }}
              animate={{ x: '200%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
              style={{ skewX: '-20deg' }}
            />
          )}
        </AnimatePresence>

        {/* Project name */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
          style={{ translateZ: 20 }}
        >
          <span className={`font-bold text-white/95 text-center drop-shadow leading-tight ${isFeatured ? 'text-2xl' : 'text-lg'}`}>
            {project.name}
          </span>
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="text-white/70 text-xs mt-1 font-medium"
          >
            {project.description.split('.')[0]}.
          </motion.span>
        </motion.div>

        {/* Industry badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2.5 py-1 rounded-full bg-black/20 backdrop-blur-md text-[10px] font-semibold text-white/90 uppercase tracking-wide border border-white/10">
            {project.industry}
          </span>
        </div>

        {/* Live link — slides in on hover */}
        <motion.div
          className="absolute top-3 right-3 z-20"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={project.liveUrl}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md border border-white/25 text-white text-[10px] font-medium transition-colors"
          >
            <ExternalLink className="w-3 h-3" /> View
          </a>
        </motion.div>
      </div>

      {/* Card body */}
      <div className="p-4" style={{ transform: 'translateZ(10px)' }}>
        {/* Tech pills animate in on hover */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.slice(0, isFeatured ? 4 : 3).map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0.6, x: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.04 }}
              className="px-2 py-0.5 text-[10px] font-semibold bg-slate-50 border border-slate-200 rounded-full text-slate-500 uppercase tracking-wide"
            >
              {tech}
            </motion.span>
          ))}
          {project.tech.length > (isFeatured ? 4 : 3) && (
            <span className="px-1.5 py-0.5 text-[10px] text-slate-400">
              +{project.tech.length - (isFeatured ? 4 : 3)}
            </span>
          )}
        </div>

        {/* Result — highlighted stat */}
        <div className="flex items-start gap-2">
          <div className="w-1 h-full min-h-[28px] rounded-full bg-gradient-to-b from-emerald-400 to-teal-500 flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-600 font-medium leading-snug">
            {project.results}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  // Layout: [span-2, span-1, span-1, span-1, span-2, span-1]
  const featuredIndices = new Set([0, 4]);

  return (
    <section id="portfolio" className="py-14 md:py-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-400/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-400/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-custom relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8"
        >
          <div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '2.5rem' } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mb-3 rounded-full"
            />
            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-2">
              <Sparkles className="w-3 h-3" /> Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-sm max-w-xs sm:text-right leading-relaxed"
          >
            Real results for real businesses —<br className="hidden sm:block" />crafted with precision and care.
          </motion.p>
        </motion.div>

        {/* Bento grid — 3 cols, asymmetric sizing */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              isFeatured={featuredIndices.has(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex whitespace-nowrap"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
        </motion.div>
      </div>
    </section>
  );
}
