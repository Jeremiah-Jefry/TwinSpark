import { Code2, Bot, Palette } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'Custom Web Application',
    description: 'High-performance React/Next.js applications built for speed, responsiveness, and search visibility. Clean architecture that scales.',
    icon: Code2,
    category: 'web',
    isPremium: true,
    features: [
      'React / Next.js / Vite architecture',
      'Tailwind CSS responsive design',
      'SEO-optimized, 90+ Lighthouse score'
    ],
    tech: ['React', 'Next.js', 'Tailwind', 'Vite']
  },
  {
    id: 2,
    title: 'AI Integration & Automation',
    description: 'Custom chatbots, OpenAI API integrations, and automated workflow scripts that save you hours every week.',
    icon: Bot,
    category: 'ai',
    isPremium: true,
    features: [
      'GPT-4 / Claude chatbot integration',
      'n8n / Zapier workflow automation',
      'Custom API orchestration'
    ],
    tech: ['OpenAI', 'Python', 'n8n', 'APIs']
  },
  {
    id: 3,
    title: 'UI/UX & Modernization',
    description: 'Transforming outdated websites into modern, high-conversion experiences. Clean design that builds trust and drives action.',
    icon: Palette,
    category: 'web',
    isPremium: false,
    features: [
      'Modern UI/UX redesign',
      'Performance optimization',
      'Mobile-first responsive layouts'
    ],
    tech: ['Figma', 'Tailwind', 'Framer Motion']
  }
];

// Helper to filter services by category
export const getServicesByCategory = (category) => {
  if (category === 'all') return services;
  return services.filter(service => service.category === category);
};

// Get premium/featured services
export const getPremiumServices = () => {
  return services.filter(service => service.isPremium);
};
