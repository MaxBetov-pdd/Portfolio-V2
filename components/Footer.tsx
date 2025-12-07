import React from 'react';
import { Github, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full py-24 px-4 border-t border-white/5 bg-black/50 overflow-hidden">
      
      {/* Background glow for footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
        >
          Let's build something <br />
          <span className="text-white">scalable.</span>
        </motion.h2>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          {/* Updated: Changed button to 'a' tag for mailto functionality */}
          <a 
            href="mailto:varchenkomaks15@gmail.com"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] inline-flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in touch <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>

        <div className="mt-16 flex justify-center gap-8">
          <SocialLink 
            href="https://github.com/MaxBetov-pdd" 
            icon={<Github size={24} />} 
            label="GitHub" 
          />
          <SocialLink 
            href="https://t.me/MaxEther0x" 
            icon={<Send size={24} />} 
            label="Telegram" 
          />
          <SocialLink 
            href="mailto:varchenkomaks15@gmail.com" 
            icon={<Mail size={24} />} 
            label="Email" 
            isExternal={false}
          />
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isExternal?: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, isExternal = true }) => (
  <a 
    href={href}
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="text-gray-400 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2 group"
  >
    <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all">
      {icon}
    </div>
    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">{label}</span>
  </a>
);
