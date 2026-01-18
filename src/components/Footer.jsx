import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Instagram,
  ArrowUp
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Business Websites', href: '#services' },
    { name: 'Landing Pages', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Website Redesign', href: '#services' },
    { name: 'E-commerce', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800/50">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display">
                Twin<span className="gradient-text">spark</span>
              </span>
            </a>

            <p className="text-dark-400 mb-6 max-w-sm">
              Two developers, one mission: creating premium websites that turn 
              visitors into customers. Let's build something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@twinspark.dev" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4" />
                hello@twinspark.dev
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4" />
                +91 123 456 7890
              </a>
              <div className="flex items-center gap-3 text-dark-400">
                <MapPin className="w-4 h-4" />
                India • Working Worldwide
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold font-display mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold font-display mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold font-display mb-4">Legal</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h4 className="font-semibold font-display mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center hover:border-primary-500/50 hover:bg-dark-700 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-dark-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Twinspark. All rights reserved.
          </p>
          <p className="text-dark-500 text-sm">
            Made with ❤️ by Joe Daniel & Jeremiah Jefry
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-500 transition-colors z-40"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
