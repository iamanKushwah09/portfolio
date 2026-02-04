import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MERN E-Commerce',
    description: 'A full-featured e-commerce platform with secure authentication, product management, and real-time payment integration.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    color: 'from-cyan-400 to-blue-500' 
  },
  {
    title: 'AI Data Analyst',
    description: 'Python-based data analysis tool using Pandas and NumPy to visualize complex datasets with real-time insights.',
    tags: ['Python', 'Pandas', 'Data Science'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Futuristic Portfolio',
    description: 'A cutting-edge portfolio experience built with React, TypeScript, and Framer Motion, featuring glassmorphism and neon aesthetics.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    color: 'from-green-400 to-emerald-500'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display font-black mb-16 text-center tracking-tighter"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            FEATURED PROJECTS
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 hover:from-cyan-400 hover:to-purple-600 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative h-full bg-black/90 backdrop-blur-xl p-8 rounded-xl border border-white/10 group-hover:border-transparent transition-colors overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 blur-[50px] rounded-full group-hover:opacity-30 transition-opacity`}></div>

                <h3 className="text-3xl font-display font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed font-light">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono font-bold bg-white/5 border border-white/10 rounded-full text-cyan-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:mr-2 transition-all">
                  View Code <span className="ml-2 text-white">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
