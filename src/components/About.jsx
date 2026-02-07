import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Zap, Heart, MessageCircle } from 'lucide-react';
import { team } from '../data/team';

const features = [
  {
    icon: Users,
    title: 'Two Minds, One Vision',
    description: 'Our unique synergy combines technical excellence with creative precision.'
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
    <section id="about" className="section-padding">
      <div className="container-strict" ref={ref}>
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-wider mb-4 block"
            style={{ color: 'var(--accent)' }}
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            Two minds. One spark.
            <br />
            Powerful results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
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
              {/* Avatar */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'var(--accent-light)' }}
              >
                <span
                  className="text-2xl font-semibold"
                  style={{ color: 'var(--accent)' }}
                >
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <h3
                className="text-xl font-semibold mb-1"
                style={{ color: 'var(--ink)' }}
              >
                {member.name}
              </h3>
              <p
                className="font-medium mb-2"
                style={{ color: 'var(--accent)' }}
              >
                {member.role}
              </p>
              <p
                className="text-sm mb-4"
                style={{ color: 'var(--ink-muted)' }}
              >
                {member.specialization}
              </p>
              <p
                className="mb-6"
                style={{ color: 'var(--ink-body)' }}
              >
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.slice(0, 4).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: 'var(--canvas-subtle)',
                      color: 'var(--ink-muted)',
                      border: '1px solid var(--border)'
                    }}
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
            <h3
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: 'var(--ink)' }}
            >
              Why choose a boutique studio?
            </h3>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--ink-body)' }}
            >
              Big agencies juggle dozens of projects. Their A-team pitches you, then
              hands you off to juniors. With Twinspark, you work directly with us—the
              same developers who design, code, and launch your website. That means
              faster turnaround, clearer communication, and a website that actually
              reflects your vision.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--accent-light)' }}
              >
                <feature.icon
                  className="w-6 h-6"
                  style={{ color: 'var(--accent)' }}
                />
              </div>
              <h4
                className="font-semibold text-lg mb-2"
                style={{ color: 'var(--ink)' }}
              >
                {feature.title}
              </h4>
              <p
                className="text-sm"
                style={{ color: 'var(--ink-body)' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
