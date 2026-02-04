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
          className="text-4xl md:text-5xl font-display font-black mb-16 text-center tracking-tighter text-text-primary"
        >
          WORK <span className="text-primary">EXPERIENCE</span>
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
              {/* Connecting Line */}
              <div className="hidden md:block absolute left-[20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary to-secondary opacity-30"></div>
              
              <div className="md:ml-12 relative group">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute -left-[35px] top-6 w-4 h-4 bg-bg-primary border-2 border-primary rounded-full group-hover:scale-125 transition-transform shadow-[0_0_10px_var(--primary)] z-10"></div>

                <div className="p-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20">
                  <div className="bg-bg-primary/90 backdrop-blur-xl p-6 rounded-xl border border-border-main relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-text-primary">
                      <Briefcase size={100} />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                       <div>
                          <h3 className="text-2xl font-display font-bold text-text-primary group-hover:text-primary transition-colors">{exp.role}</h3>
                          <p className="text-lg text-text-secondary font-light">{exp.company}</p>
                       </div>
                       <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 w-fit">
                          <Calendar size={14} />
                          {exp.date}
                       </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
                        {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-bold text-black bg-gradient-to-r from-primary to-secondary rounded-sm">
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
