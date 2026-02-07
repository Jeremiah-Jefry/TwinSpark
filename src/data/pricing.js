export const pricingPlans = [
  {
    id: 1,
    name: 'MVP Build',
    description: 'Launch fast with a professional foundation',
    price: '1,499',
    currency: '$',
    period: 'one-time',
    deliveryTime: '7-10 days',
    popular: false,
    features: [
      { text: 'Next.js Architecture', included: true },
      { text: 'Mobile-first responsive design', included: true },
      { text: 'Core SEO optimization', included: true },
      { text: 'Performance optimized (90+ Lighthouse)', included: true },
      { text: 'Contact form integration', included: true },
      { text: '2 revision rounds', included: true },
      { text: 'Source code delivery', included: true },
      { text: 'AI chatbot integration', included: false },
      { text: 'Advanced analytics', included: false },
      { text: 'Priority support', included: false }
    ],
    cta: 'Start MVP',
    color: 'from-slate-500 to-slate-600'
  },
  {
    id: 2,
    name: 'Growth Scale',
    description: 'Scale your business with AI-powered tools',
    price: '3,999',
    currency: '$',
    period: 'one-time',
    deliveryTime: '14-21 days',
    popular: true,
    features: [
      { text: 'Next.js + TypeScript architecture', included: true },
      { text: 'Premium UI/UX design system', included: true },
      { text: 'Advanced SEO + Schema markup', included: true },
      { text: 'AI chatbot integration', included: true },
      { text: 'Analytics dashboard setup', included: true },
      { text: 'CMS integration (Sanity/Contentful)', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'Performance monitoring', included: true },
      { text: '60-day priority support', included: true },
      { text: 'Conversion optimization', included: true }
    ],
    cta: 'Scale Now',
    color: 'from-violet-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Enterprise AI',
    description: 'Full-stack solutions with AI automation',
    price: '9,999',
    currency: '$',
    period: 'starting at',
    deliveryTime: '4-6 weeks',
    popular: false,
    features: [
      { text: 'Custom Next.js + AI architecture', included: true },
      { text: 'Bespoke UI/UX + brand system', included: true },
      { text: 'Enterprise SEO strategy', included: true },
      { text: 'Custom AI automation workflows', included: true },
      { text: 'Multi-platform integrations', included: true },
      { text: 'Headless CMS + admin panel', included: true },
      { text: 'Dedicated project manager', included: true },
      { text: 'Load testing + security audit', included: true },
      { text: '90-day priority support', included: true },
      { text: 'Training + documentation', included: true }
    ],
    cta: 'Contact Us',
    color: 'from-blue-500 to-violet-500'
  }
];
