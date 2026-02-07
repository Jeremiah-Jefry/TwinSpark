import {
  Brain,
  Bot,
  Workflow,
  LineChart,
  Globe,
  Rocket,
  Palette,
  Shield,
  Sparkles,
  Zap
} from 'lucide-react';

export const services = [
  // === AI & AUTOMATION SOLUTIONS ===
  {
    id: 1,
    title: 'AI Chatbot Integration',
    description: 'Deploy intelligent conversational AI that handles customer inquiries 24/7, qualifies leads, and books meetings—while you sleep.',
    icon: Bot,
    category: 'ai',
    isPremium: true,
    features: [
      'Custom-trained on your business data',
      'Seamless CRM & calendar integration',
      'Human handoff for complex queries'
    ]
  },
  {
    id: 2,
    title: 'Automated Workflows',
    description: 'Eliminate repetitive tasks with intelligent automation. Connect your tools, streamline operations, and reclaim 20+ hours per week.',
    icon: Workflow,
    category: 'ai',
    isPremium: true,
    features: [
      'Zapier, Make, & n8n integrations',
      'Custom API orchestration',
      'AI-powered decision logic'
    ]
  },
  {
    id: 3,
    title: 'Predictive Analytics Dashboards',
    description: 'Transform raw data into actionable insights. AI-powered dashboards that forecast trends and surface opportunities automatically.',
    icon: LineChart,
    category: 'ai',
    isPremium: true,
    features: [
      'Real-time data visualization',
      'Machine learning predictions',
      'Custom KPI tracking & alerts'
    ]
  },
  {
    id: 4,
    title: 'AI-Powered Content Generation',
    description: 'Scale your content creation with AI that writes, edits, and optimizes in your brand voice—across all channels.',
    icon: Brain,
    category: 'ai',
    isPremium: false,
    features: [
      'Brand voice training',
      'SEO-optimized output',
      'Multi-platform adaptation'
    ]
  },

  // === WEB DEVELOPMENT SOLUTIONS ===
  {
    id: 5,
    title: 'High-Converting Web Applications',
    description: 'Custom-built web applications engineered for performance, scalability, and conversion. Enterprise-grade architecture with startup speed.',
    icon: Globe,
    category: 'web',
    isPremium: true,
    features: [
      'React/Next.js architecture',
      'Sub-2s load times guaranteed',
      'Built-in analytics & A/B testing'
    ]
  },
  {
    id: 6,
    title: 'Landing Page Systems',
    description: 'Conversion-optimized landing pages that turn traffic into revenue. Every pixel engineered for maximum ROI.',
    icon: Rocket,
    category: 'web',
    isPremium: false,
    features: [
      'Proven conversion frameworks',
      'Mobile-first responsive design',
      'Integrated lead capture & CRM sync'
    ]
  },
  {
    id: 7,
    title: 'Premium UI/UX Design',
    description: 'Interface design that commands premium prices. Research-driven, user-tested, and crafted to elevate your brand perception.',
    icon: Palette,
    category: 'web',
    isPremium: false,
    features: [
      'User research & journey mapping',
      'Interactive prototypes',
      'Design system documentation'
    ]
  },
  {
    id: 8,
    title: 'Performance & Security Optimization',
    description: 'Enterprise-level security and blazing performance. Protect your digital assets while outpacing competitors.',
    icon: Shield,
    category: 'web',
    isPremium: false,
    features: [
      'Core Web Vitals optimization',
      'Security audit & hardening',
      '99.9% uptime SLA available'
    ]
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

// Service categories for filtering UI
export const serviceCategories = [
  { id: 'all', label: 'All Solutions', icon: Sparkles },
  { id: 'ai', label: 'AI & Automation', icon: Brain },
  { id: 'web', label: 'Web Development', icon: Globe },
];

