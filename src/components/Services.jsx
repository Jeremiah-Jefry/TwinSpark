import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Subtle Aurora overlay */}
      <div className="absolute inset-0 bg-aurora-subtle" />

      <div className="container-custom relative" ref={ref}>
        {/* Section Header - Left aligned */}
        <div className="max-w-xl mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            <span className="text-xs font-medium text-violet-600 uppercase tracking-wider">
              Services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-title mb-4"
          >
            What we <span className="gradient-text">do best</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="section-subtitle text-sm"
          >
            From intelligent automation to high-converting websites—we build
            digital solutions that drive measurable results.
          </motion.p>
        </div>

        {/* Services Grid - Tighter gap, text-left cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group glass-card-hover p-5 text-left"
            >
              {/* Icon with gradient background - Smaller */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-pink-500/10 border border-violet-200/50 flex items-center justify-center mb-4 group-hover:from-blue-500/20 group-hover:via-violet-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                <service.icon className="w-5 h-5 text-violet-600 group-hover:text-violet-500 transition-colors duration-300" />
              </div>

              {/* Category Tag */}
              <span className={`inline-block text-[10px] font-medium uppercase tracking-wide mb-2 ${service.category === 'ai'
                ? 'text-violet-600'
                : 'text-slate-500'
                }`}>
                {service.category === 'ai' ? 'AI & Automation' : 'Web Development'}
              </span>

              {/* Title - Smaller */}
              <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors">
                {service.title}
              </h3>

              {/* Description - Smaller */}
              <p className="text-slate-600 text-xs mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features - Tighter */}
              <ul className="space-y-1.5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 mt-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-link group"
          >
            Discuss your project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
