import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="relative z-10 text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-mono font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          Hi, I'm Aman Kushwah
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-black font-display mb-8 tracking-tighter leading-none text-text-primary"
        >
          I BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            DIGITAL REALITIES
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-lg mx-auto mb-12 text-xl font-light leading-relaxed tracking-wide text-text-secondary"
        >
          MERN Stack Developer specializing in building scalable backend systems, robust APIs, and immersive, high-performance web applications.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-6 justify-center"
        >
          <button className="px-8 py-4 bg-primary text-black font-bold font-mono uppercase tracking-widest rounded-lg transition-transform hover:scale-105 shadow-[0_0_30px_var(--primary)]/30 hover:shadow-[0_0_50px_var(--primary)]/50">
            View Projects
          </button>
          <button className="px-8 py-4 border border-border-main hover:bg-primary/10 transition-all font-mono uppercase tracking-widest rounded-lg font-semibold text-text-primary">
            Contact Me
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-text-secondary">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
