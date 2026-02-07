import { Check, X } from 'lucide-react';

export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    description: 'Perfect for small businesses & personal brands',
    price: '499',
    currency: '$',
    period: 'one-time',
    deliveryTime: '5-7 days',
    popular: false,
    features: [
      { text: '1-page landing website', included: true },
      { text: 'Mobile responsive design', included: true },
      { text: 'Contact form integration', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Social media links', included: true },
      { text: '1 revision round', included: true },
      { text: 'Source code delivery', included: true },
      { text: 'Custom animations', included: false },
      { text: 'CMS integration', included: false },
      { text: 'Priority support', included: false }
    ],
    cta: 'Get Started',
    color: 'from-obsidian-600 to-obsidian-700'
  },
  {
    id: 2,
    name: 'Business',
    description: 'Ideal for growing businesses & agencies',
    price: '1,499',
    currency: '$',
    period: 'one-time',
    deliveryTime: '10-14 days',
    popular: true,
    features: [
      { text: '5-page responsive website', included: true },
      { text: 'Premium UI/UX design', included: true },
      { text: 'Contact & inquiry forms', included: true },
      { text: 'Advanced SEO optimization', included: true },
      { text: 'Social media integration', included: true },
      { text: '3 revision rounds', included: true },
      { text: 'Source code + documentation', included: true },
      { text: 'Smooth scroll animations', included: true },
      { text: 'Basic CMS setup', included: true },
      { text: 'Priority support (30 days)', included: true }
    ],
    cta: 'Get Started',
    color: 'from-primary-600 to-accent-600'
  },
  {
    id: 3,
    name: 'Premium',
    description: 'Complete solution for established brands',
    price: '3,499',
    currency: '$',
    period: 'one-time',
    deliveryTime: '21-30 days',
    popular: false,
    features: [
      { text: '8-12 page custom website', included: true },
      { text: 'Advanced UI/UX + branding', included: true },
      { text: 'Multi-step forms & booking', included: true },
      { text: 'Complete SEO strategy', included: true },
      { text: 'Full social integration', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'Full source + training', included: true },
      { text: 'Premium animations', included: true },
      { text: 'Full CMS + admin panel', included: true },
      { text: 'Priority support (90 days)', included: true }
    ],
    cta: 'Get Started',
    color: 'from-accent-600 to-primary-600'
  }
];
