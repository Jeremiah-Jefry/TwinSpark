import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Palette,
  Zap,
  Smartphone,
  Code2,
  Search,
  Target,
  HeadphonesIcon,
  Shield
} from 'lucide-react';

const reasons = [
  {
    icon: Palette,
    title: 'Premium UI Design',
    description: 'Every pixel is carefully crafted to create stunning, memorable experiences that reflect your brand.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround without cutting corners. Launch your website in days, not months.'
  },
  {
    icon: Smartphone,
    title: '100% Responsive',
    description: 'Flawless experience across all devices—phones, tablets, laptops, and desktops.'
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Well-structured, maintainable code that scales with your business needs.'
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built with search engines in mind to help your business get found online.'
  },
  {
    icon: Target,
    title: 'Conversion Focused',
    description: 'Strategic design that guides visitors toward becoming customers.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Post-Launch Support',
    description: 'We don\'t disappear after delivery. Ongoing support when you need it.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security best practices and hosted on reliable infrastructure.'
  }
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom mx-auto relative" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Why Twinspark
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            Why Businesses <span className="gradient-text">Choose Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            We don't just build websites—we build digital assets that drive growth.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group glass-card-hover p-6 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-primary-500/40 transition-all duration-300">
                <reason.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-bold font-display mb-2 group-hover:text-primary-400 transition-colors">
                {reason.title}
              </h3>
              <p className="text-obsidian-400 text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 py-12 border-t border-b border-obsidian-800"
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '5 Days', label: 'Average Delivery' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-obsidian-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
