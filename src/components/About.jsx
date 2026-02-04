import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Rocket, Terminal } from 'lucide-react';

const About = () => {
    const skills = [
        { icon: <Code size={24} />, title: "Frontend", desc: "HTML, CSS, React, TypeScript" },
        { icon: <Terminal size={24} />, title: "Languages", desc: "C, C++, Python, JavaScript" },
        { icon: <Cpu size={24} />, title: "Education", desc: "BCA Final Year Student" },
        { icon: <Rocket size={24} />, title: "Approach", desc: "Futuristic & Scalable Code" }
    ];

  return (
    <section id="about" className="py-20 relative bg-black/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              I am a <span className="text-white font-bold">BCA Final Year Student</span> passionate about building the future of the web. 
              My expertise spans from low-level systems programming in <span className="text-cyan-400">C/C++</span> to modern web development with <span className="text-purple-400">React & TypeScript</span>.
              I don't just write code; I engineer digital experiences that are fast, futuristic, and efficient.
            </p>
            <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="text-cyan-400 mb-2">{skill.icon}</div>
                        <h4 className="font-bold font-display text-white">{skill.title}</h4>
                        <p className="text-sm text-gray-500">{skill.desc}</p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-[80px] opacity-30 animate-pulse"></div>
                <div className="relative z-10 w-full h-full glass rounded-2xl border border-white/10 p-2 overflow-hidden flex items-center justify-center">
                    <div className="text-9xl font-black text-white/5 select-none absolute">DEV</div>
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
