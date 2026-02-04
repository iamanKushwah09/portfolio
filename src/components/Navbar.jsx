import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass bg-opacity-20 backdrop-blur-lg border-b border-white/10"
      style={{ background: 'rgba(10, 10, 10, 0.7)' }}
    >
      <div className="text-2xl font-bold font-display tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 cursor-pointer hover:scale-105 transition-transform" style={{ backgroundImage: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        AMAN KUSHWAH
      </div>
      
      <ul className="hidden md:flex gap-8">
        {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--primary)' }}></span>
            </a>
          </li>
        ))}
      </ul>

      <motion.button 
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--primary)" }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm font-semibold tracking-wide hover:bg-cyan-400/10 transition-all"
        style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
      >
        HIRE ME
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
