import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Zap, Heart, MessageCircle } from 'lucide-react';
import { team } from '../data/team';

const features = [
  {
    icon: Users,
    title: 'Two Minds, One Spark',
    description: 'Our unique synergy combines technical excellence with creative vision.'
  },
  {
    icon: Zap,
    title: 'Speed & Quality',
    description: 'Fast delivery without compromising on design or performance.'
  },
  {
    icon: Heart,
    title: 'We Care',
    description: 'Your success is our success. We treat every project as our own.'
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'No middlemen. Work directly with the developers building your site.'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
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
            About Twinspark
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            Two Minds.{' '}
            <span className="gradient-text">One Spark.</span>
            <br />
            Powerful Websites.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            We're not a big agency with layers of bureaucracy. We're two passionate 
            developers who obsess over every pixel, every line of code, and every 
            conversion opportunity.
          </motion.p>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {team.map((member, index) => (
            <div
              key={member.id}
              className="glass-card-hover p-8 flex flex-col items-center text-center"
            >
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1 mb-6">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                  <span className="text-4xl font-bold gradient-text">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-display mb-1">{member.name}</h3>
              <p className="text-primary-400 font-medium mb-2">{member.role}</p>
              <p className="text-dark-400 text-sm mb-4">{member.specialization}</p>
              <p className="text-dark-300 mb-6">{member.bio}</p>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.slice(0, 4).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-dark-800 border border-dark-700 rounded-full text-dark-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Why Small Agency */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 md:p-12 mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-6">
              Why Choose a <span className="gradient-text">Boutique Studio</span>?
            </h3>
            <p className="text-dark-300 text-lg leading-relaxed">
              Big agencies juggle dozens of projects. Their A-team pitches you, then 
              hands you off to juniors. With Twinspark, you work directly with us—the 
              same developers who design, code, and launch your website. That means 
              faster turnaround, clearer communication, and a website that actually 
              reflects your vision.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h4 className="font-bold font-display text-lg mb-2">{feature.title}</h4>
              <p className="text-dark-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
