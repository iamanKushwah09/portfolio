import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display font-black mb-16 text-center text-text-primary tracking-tighter"
        >
          GET IN <span className="text-primary">TOUCH</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Let's Build the Future Together</h3>
            <p className="text-text-secondary leading-relaxed">
              Have a project in mind? Want to collaborate on something wild? 
              Drop me a line and let's create something extraordinary.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-text-secondary">
                <div className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center text-primary border border-border-main">
                  <Mail size={18} />
                </div>
                <span>[amankushwah073@gmail.com]</span>
              </div>
              <div className="flex items-center gap-4 text-text-secondary">
                <div className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center text-secondary border border-border-main">
                  <Phone size={18} />
                </div>
                <span>+91 7078349941</span>
              </div>
              <div className="flex items-center gap-4 text-text-secondary">
                <div className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center text-accent border border-border-main">
                  <MapPin size={18} />
                </div>
                <span>Agra Uttar Pradesh, India</span>
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
                className="w-full bg-bg-card border border-border-main rounded-lg px-4 py-3 text-text-primary font-mono focus:outline-none focus:border-primary transition-colors placeholder:opacity-50"
              />
              <div className="absolute inset-0 border border-primary/20 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-bg-card border border-border-main rounded-lg px-4 py-3 text-text-primary font-mono focus:outline-none focus:border-primary transition-colors placeholder:opacity-50"
              />
            </div>
            
            <div className="relative group">
              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full bg-bg-card border border-border-main rounded-lg px-4 py-3 text-text-primary font-mono focus:outline-none focus:border-primary transition-colors placeholder:opacity-50 resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-black font-bold font-mono uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_var(--primary)] transition-all">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full text-center py-6 text-text-secondary text-sm border-t border-border-main">
        &copy; 2026 Aman Kushwah. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
