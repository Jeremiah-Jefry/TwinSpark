import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  ArrowUpRight
} from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
  ],
  resources: [
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/twinspark', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/twinspark', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/twinspark', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com/twinspark', label: 'Instagram' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-canvas border-t border-border" ref={ref}>
      <div className="container-strict py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-xl font-display font-semibold text-ink">
                Twin<span className="text-accent">spark</span>
              </span>
            </a>

            <p className="text-ink-body mb-6 max-w-sm leading-relaxed">
              A boutique studio crafting high-performance websites and intelligent
              automation systems for ambitious businesses.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@twinspark.dev"
                className="flex items-center gap-3 text-ink-body hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                hello@twinspark.dev
              </a>
              <div className="flex items-center gap-3 text-ink-body text-sm">
                <MapPin className="w-4 h-4" />
                India • Working Worldwide
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-ink-body hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-ink-body hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-canvas-subtle border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-muted text-sm">
            © {new Date().getFullYear()} Twinspark. All rights reserved.
          </p>
          <p className="text-ink-muted text-sm">
            Made with care by Joe Daniel & Jeremiah Jefry
          </p>
        </div>
      </div>
    </footer>
  );
}
