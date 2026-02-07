import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, FileText, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom mx-auto relative" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Real results for real businesses. Each project is crafted with precision
            to deliver measurable impact.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group glass-card-hover overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMjAgMjBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz48L2c+PC9zdmc+')] opacity-50"></div>

                {/* Project Name Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold font-display text-white/90 text-center px-4">
                    {project.name}
                  </span>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-obsidian-950/80 flex items-center justify-center gap-4"
                >
                  <a
                    href={project.liveUrl}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.caseStudyUrl}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                    title="Case Study"
                  >
                    <FileText className="w-5 h-5 text-white" />
                  </a>
                </motion.div>

                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-obsidian-950/60 backdrop-blur-sm text-xs font-medium text-white border border-white/10">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-obsidian-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-obsidian-800 border border-obsidian-700 rounded-md text-obsidian-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs bg-primary-500/10 border border-primary-500/20 rounded text-primary-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <p className="text-sm text-accent-400 font-medium">
                  📈 {project.results}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
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
