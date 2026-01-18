import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import { pricingPlans } from '../data/pricing';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom mx-auto relative" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Pricing Plans
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            Transparent <span className="gradient-text">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Choose a plan that fits your needs. All plans include our signature 
            quality and attention to detail.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative glass-card p-8 flex flex-col ${
                plan.popular ? 'border-primary-500/50 shadow-glow' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold font-display mb-2">{plan.name}</h3>
                <p className="text-dark-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-dark-400 text-lg">{plan.currency}</span>
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                </div>
                <p className="text-dark-500 text-sm mt-2">{plan.period}</p>
              </div>

              {/* Delivery Time */}
              <div className="flex items-center justify-center gap-2 py-3 mb-6 bg-dark-800/50 rounded-lg border border-dark-700">
                <span className="text-dark-400 text-sm">Delivery:</span>
                <span className="text-primary-400 font-semibold text-sm">{plan.deliveryTime}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-dark-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-dark-300' : 'text-dark-500'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-500 hover:to-accent-500 shadow-lg shadow-primary-500/25'
                    : 'bg-dark-800 border border-dark-600 text-white hover:border-primary-500/50'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Project Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-dark-400 mb-4">
            Have a larger or more complex project in mind?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-primary-400 font-semibold hover:text-primary-300 transition-colors inline-flex items-center gap-2"
          >
            Get a Custom Quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
