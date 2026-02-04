import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-display font-black mb-20 text-center text-white tracking-tighter"
        >
          GET IN <span className="text-cyan-400">TOUCH</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-4">Let's Build the Future Together</h3>
            <p className="text-gray-400 leading-relaxed">
              Have a project in mind? Want to collaborate on something wild? 
              Drop me a line and let's create something extraordinary.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 border border-white/10">
                  <Mail size={18} />
                </div>
                <span>hello@amankushwah.dev</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-400 border border-white/10">
                  <Phone size={18} />
                </div>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pink-400 border border-white/10">
                  <MapPin size={18} />
                </div>
                <span>Bangalore, India</span>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-600"
              />
              <div className="absolute inset-0 border border-cyan-400/20 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-600"
              />
            </div>
            
            <div className="relative group">
              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-600 resize-none"
              ></textarea>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold uppercase tracking-wider rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full text-center py-6 text-gray-600 text-sm border-t border-white/5">
        &copy; 2026 Aman Kushwah. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
