import React from 'react';
import { motion } from 'framer-motion';

import { Sun, Moon } from 'lucide-react';

const Navbar = ({ isLight, toggleTheme }) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-lg border-b border-border-main transition-colors duration-300"
      style={{ background: isLight ? 'rgba(248, 250, 252, 0.8)' : 'rgba(5, 5, 5, 0.8)' }}
    >
      <div className="text-2xl font-bold font-display tracking-wider cursor-pointer hover:scale-105 transition-transform text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        AMAN KUSHWAH
      </div>
      
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex gap-8">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-text-secondary hover:text-primary transition-colors duration-300 text-xs font-mono font-bold uppercase tracking-widest relative group"
              >
                <span className="text-primary mr-1">//</span> {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors text-text-primary"
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--primary)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full border border-primary text-primary text-sm font-semibold tracking-wide transition-all"
          >
            HIRE ME
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
