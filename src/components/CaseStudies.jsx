import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden bg-obsidian-900/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDYsIDE4MiwgMjEyLCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-60"></div>

      <div className="container-custom mx-auto relative" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            Real <span className="gradient-text">Results</span> for Real Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Dive deep into how we transformed businesses with strategic web solutions.
          </motion.p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="glass-card overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Left Side - Image/Visual */}
                <div className="relative h-64 lg:h-auto min-h-[300px] bg-gradient-to-br from-primary-600 to-accent-600">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMjAgMjBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz48L2c+PC9zdmc+')] opacity-30"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <span className="text-sm font-medium text-white/70 uppercase tracking-wider mb-2">
                      {study.industry} • {study.duration}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold font-display text-white text-center">
                      {study.client}
                    </h3>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="p-8 lg:p-10">
                  <h3 className="text-xl lg:text-2xl font-bold font-display mb-6">
                    {study.title}
                  </h3>

                  {/* Problem */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2">
                      {study.problem.title}
                    </h4>
                    <p className="text-obsidian-300 text-sm leading-relaxed">
                      {study.problem.description}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-2">
                      {study.solution.title}
                    </h4>
                    <p className="text-obsidian-300 text-sm leading-relaxed">
                      {study.solution.description}
                    </p>
                  </div>

                  {/* Results Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {study.outcome.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 bg-obsidian-800/50 rounded-lg">
                        <div className="text-xl lg:text-2xl font-bold gradient-text">
                          {stat.value}
                        </div>
                        <div className="text-xs text-obsidian-400 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative p-4 bg-obsidian-800/30 rounded-lg border border-obsidian-700/50">
                    <Quote className="absolute top-4 left-4 w-6 h-6 text-primary-500/30" />
                    <p className="text-obsidian-300 text-sm italic pl-8">
                      "{study.testimonial.text}"
                    </p>
                    <p className="text-primary-400 text-sm font-medium mt-2 pl-8">
                      — {study.testimonial.author}, {study.testimonial.role}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {study.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-primary-500/10 border border-primary-500/20 rounded text-primary-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
          <p className="text-obsidian-400 mb-4">
            Ready to be our next success story?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex"
          >
            Let's Build Something Great
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
