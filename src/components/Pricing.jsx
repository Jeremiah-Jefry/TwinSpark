import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import { pricingPlans } from '../data/pricing';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-aurora-subtle" />

      <div className="container-custom relative" ref={ref}>
        {/* Section Header - Compact */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            <span className="text-xs font-medium text-violet-600 uppercase tracking-wider">
              Pricing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-3"
          >
            Transparent <span className="gradient-text">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto text-sm"
          >
            Clear pricing, no surprises. Choose the plan that fits your growth stage.
          </motion.p>
        </div>

        {/* Pricing Cards - SaaS Style */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative bg-white rounded-2xl p-6 flex flex-col ${plan.popular
                  ? 'ring-2 ring-violet-500 shadow-xl shadow-violet-500/10'
                  : 'border border-slate-200 shadow-lg shadow-slate-200/50'
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white text-[11px] font-semibold uppercase tracking-wide shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-5 pt-2">
                <h3 className="text-base font-semibold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-xs mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-slate-400 text-sm">{plan.currency}</span>
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                </div>
                <p className="text-slate-400 text-xs mt-1.5">{plan.period}</p>
              </div>

              {/* Delivery Badge */}
              <div className="flex items-center justify-center gap-2 py-2 mb-4 bg-slate-50 rounded-lg">
                <span className="text-slate-500 text-xs">Delivery:</span>
                <span className="text-violet-600 font-medium text-xs">{plan.deliveryTime}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-xs leading-relaxed ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
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
                className={`w-full py-2.5 rounded-lg font-medium text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 ${plan.popular
                    ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:from-violet-600 hover:to-pink-600 shadow-lg shadow-violet-500/20'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
              >
                {plan.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-slate-500 text-sm mb-2">
            Need something custom?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-violet-600 font-medium text-sm hover:text-violet-700 transition-colors inline-flex items-center gap-1.5"
          >
            Get a Custom Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
