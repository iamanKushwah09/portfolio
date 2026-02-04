import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Frontend Engineer Intern',
    company: 'Kloudon Technologies Pvt. Ltd.',
    date: 'Aug 2025 - Present',
    description: 'Developing high-performance user interfaces using React and modern web technologies. Collaborating with senior developers to implement futuristic designs and optimize web application speed.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-display font-bold mb-16 text-center"
        >
          WORK <span className="text-cyan-400">EXPERIENCE</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 transform -translate-x-1/2 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-cyan-400 rounded-full blur-[2px] transform -translate-x-[5px] md:-translate-x-2 hidden md:block shadow-[0_0_10px_var(--primary)]"></div>

              <div className="md:w-1/2 pr-0 md:pr-12 md:text-right md:ml-0 ml-8">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-colors group">
                    <div className="flex items-center gap-3 mb-2 md:justify-end">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                        <Briefcase size={18} className="text-cyan-400 md:hidden" />
                    </div>
                    <div className="text-sm text-purple-400 font-mono mb-4">{exp.company} | {exp.date}</div>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {exp.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
