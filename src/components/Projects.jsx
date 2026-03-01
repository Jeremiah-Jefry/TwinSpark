import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="portfolio" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative" ref={ref}>
        {/* Section Header — inline, compact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6"
        >
          <div>
            <span className="inline-block text-emerald-600 font-semibold text-xs uppercase tracking-wider mb-1">
              Our Portfolio
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs sm:text-right leading-snug">
            Real results for real businesses —<br className="hidden sm:block" /> crafted with precision.
          </p>
        </motion.div>

        {/* Compact bento grid — 3 cols × 2 rows, fits in one viewport */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + index * 0.07 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300"
            >
              {/* Gradient banner */}
              <div className={`relative h-28 overflow-hidden bg-gradient-to-br ${project.color}`}>
                {/* Dot texture */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '14px 14px',
                  }}
                />
                {/* Name */}
                <div className="absolute inset-0 flex items-center justify-center px-3">
                  <span className="text-base font-bold text-white/95 text-center drop-shadow-sm leading-tight">
                    {project.name}
                  </span>
                </div>
                {/* Industry badge */}
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 rounded-full bg-black/25 backdrop-blur-sm text-[10px] font-medium text-white/90">
                    {project.industry}
                  </span>
                </div>
                {/* Hover overlay */}
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 bg-slate-900/65 flex items-center justify-center"
                >
                  <a
                    href={project.liveUrl}
                    className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 transition-colors"
                    title="View Project"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </motion.div>
              </div>

              {/* Card body */}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-slate-900 mb-1.5 group-hover:text-emerald-600 transition-colors truncate">
                  {project.name}
                </h3>
                {/* Tech pills — max 3 shown */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 text-[10px] font-medium bg-slate-50 border border-slate-200 rounded text-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-1 py-0.5 text-[10px] text-slate-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                {/* Result highlight */}
                <p className="text-[11px] text-emerald-600 font-medium leading-snug line-clamp-1">
                  📈 {project.results}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-6"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
