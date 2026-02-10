import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { team } from '../data/team';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <div className="max-w-xl mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            <span className="text-xs font-medium text-violet-600 uppercase tracking-wider">
              About Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-4"
          >
            Two minds. <span className="gradient-text">One spark.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle text-sm"
          >
            Twinspark is the collaborative powerhouse of Jeremiah & Joe. We blend technical rigor with creative vision.
          </motion.p>
        </div>

        {/* Power Duo Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg shadow-slate-200/50 p-6 md:p-8">
            <div className="max-w-3xl">
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                <strong className="text-slate-900">We're not a faceless agency.</strong> We're two developers who
                left corporate roles to build something better — a studio where clients work directly with the people
                who actually code and design their projects.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                <strong className="text-slate-900">Jeremiah</strong> architects the backend, builds AI integrations,
                and obsesses over performance. <strong className="text-slate-900">Joe</strong> crafts the UI/UX,
                builds the frontend, and ensures every pixel serves a purpose.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Together, we deliver what agencies can't: <strong className="text-slate-900">speed, quality, and
                  direct communication</strong> — without the overhead, handoffs, or surprises.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl border border-slate-200 shadow-lg shadow-slate-200/50 p-5"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${index === 0
                    ? 'bg-gradient-to-br from-blue-500 to-violet-500'
                    : 'bg-gradient-to-br from-violet-500 to-pink-500'
                  }`}>
                  <span className="text-lg font-semibold text-white">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-xs text-violet-600 font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-200 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Two is Better */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: 'Specialized Skills', desc: 'Engineering + Design expertise' },
            { label: 'Built-in Backup', desc: 'Two founders means reliability' },
            { label: 'Direct Access', desc: 'No account managers or handoffs' }
          ].map((item, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-sm font-semibold text-slate-900 mb-1">{item.label}</p>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-slate-500">
            Ready to work with us?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-violet-600 font-medium hover:text-violet-700 transition-colors"
            >
              Let's talk →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
