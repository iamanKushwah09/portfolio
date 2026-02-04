import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Software Development',
    date: 'Aug 2025 - Present',
    description: 'Specializing in end-to-end web development using the MERN stack. Building scalable REST APIs with Node.js & Express, managing MongoDB databases, and creating responsive React frontends with modern UI frameworks.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js']
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
          className="text-4xl md:text-5xl font-display font-black mb-16 text-center tracking-tighter"
        >
          WORK <span className="text-cyan-400">EXPERIENCE</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Connecting Line (Left aligned for mobile, alternating or custom for desktop - enabling simple left list for now for better single-item look) */}
              <div className="hidden md:block absolute left-[20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-400 to-purple-600 opacity-30"></div>
              
              <div className="md:ml-12 relative group">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute -left-[35px] top-6 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full group-hover:scale-125 transition-transform shadow-[0_0_10px_var(--primary)] z-10"></div>

                <div className="p-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
                  <div className="bg-black/90 backdrop-blur-xl p-6 rounded-xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Briefcase size={100} />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                       <div>
                          <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                          <p className="text-lg text-gray-300 font-light">{exp.company}</p>
                       </div>
                       <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 w-fit">
                          <Calendar size={14} />
                          {exp.date}
                       </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
