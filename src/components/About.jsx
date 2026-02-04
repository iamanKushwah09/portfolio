import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layers } from 'lucide-react';

import profileImg from '../assets/aman.jpeg';

const About = () => {
    const skills = [
        { icon: <Layers size={24} />, title: "Frontend", desc: "React, Next.js, Redux, Tailwind" },
        { icon: <Server size={24} />, title: "Backend", desc: "Node.js, Express.js" },
        { icon: <Database size={24} />, title: "Databases", desc: "MongoDB, MySQL, PostgreSQL" },
        { icon: <Code size={24} />, title: "Languages", desc: "JavaScript, TypeScript, Python, C++" }
    ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter text-text-primary">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-text-secondary mb-8 leading-loose text-lg font-light tracking-wide">
              I am a <span className="text-text-primary font-semibold">BCA Final Year Student</span> and an aspiring <span className="text-text-primary font-semibold">MERN Stack Developer</span>. 
              I specialize in building full-stack applications with <span className="text-primary font-mono">MongoDB, Express.js, React, and Node.js</span>. 
              With a strong foundation in <span className="text-secondary font-mono">SQL (MySQL, PostgreSQL)</span> and <span className="text-primary font-mono">NoSQL</span> databases, I engineer scalable backends and dynamic user interfaces that deliver seamless digital experiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="p-4 border border-border-main rounded-lg bg-bg-card hover:bg-white/5 transition-colors">
                        <div className="text-primary mb-2">{skill.icon}</div>
                        <h4 className="font-bold font-display text-text-primary">{skill.title}</h4>
                        <p className="text-sm text-text-secondary">{skill.desc}</p>
                    </div>
                ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-[80px] animate-pulse"></div>
                <div className="relative z-10 w-full h-full glass rounded-2xl border border-border-main p-2 overflow-hidden flex items-center justify-center">
                    <div className="text-9xl font-black opacity-5 select-none absolute text-text-primary">DEV</div>
                    <img 
                        src={profileImg} 
                        alt="Profile" 
                        className="w-full h-full object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                    />
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
