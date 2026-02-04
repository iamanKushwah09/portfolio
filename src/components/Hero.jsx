import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--bg-dark)_0%,_#000000_100%)] z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
        backgroundSize: '50px 50px' 
      }}></div>

      <div className="relative z-10 text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
        >
          Hi, I'm Aman Kushwah
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl font-black font-display mb-6 tracking-tighter"
        >
          I BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600" style={{ backgroundImage: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            DIGITAL REALITIES
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed"
        >
          Full Stack Developer specializing in high-performance web applications and immersive user experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-6 justify-center"
        >
          <button className="px-8 py-3 bg-cyan-500 text-black font-bold uppercase tracking-wider rounded transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,243,255,0.5)]" style={{ backgroundColor: 'var(--primary)' }}>
            View Projects
          </button>
          <button className="px-8 py-3 border border-white/20 hover:bg-white/5 transition-all uppercase tracking-wider rounded font-semibold">
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
        <span className="text-xs tracking-widest text-gray-500 uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
