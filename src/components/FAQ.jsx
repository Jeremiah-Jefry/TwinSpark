import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { faqs } from '../data/faq';

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-sm font-medium transition-colors ${isOpen ? 'text-violet-600' : 'text-slate-900 group-hover:text-violet-600'
          }`}>
          {faq.question}
        </span>
        <ChevronRight
          className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-90 text-violet-500' : 'text-slate-400 group-hover:text-violet-400'
            }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-slate-600 text-sm leading-relaxed pb-4 pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-aurora-subtle" />

      <div className="container-custom relative" ref={ref}>
        {/* Section Header - Centered, Compact */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            <span className="text-xs font-medium text-violet-600 uppercase tracking-wider">
              Trust Center
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-3"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto text-sm"
          >
            Everything you need to know about working with us.
          </motion.p>
        </div>

        {/* FAQ Accordion - Narrow Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg shadow-slate-200/50 px-6">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-slate-500 text-sm">
            Still have questions?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-violet-600 font-medium hover:text-violet-700 transition-colors"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
