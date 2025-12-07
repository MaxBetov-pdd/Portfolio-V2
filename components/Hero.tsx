import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-20 pb-20">
      
      {/* Abstract 3D Visual - Adjusted to be a background ambiance for the persona */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-60 pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent blur-[80px] animate-pulse" />
        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-[15%] border border-blue-500/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-8 md:mb-6"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></span>
          <span className="text-blue-400 font-mono tracking-widest uppercase text-xs md:text-sm font-medium">
            Available for L2 Protocols
          </span>
        </motion.div>

        {/* Name - The Brand */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-6 md:mb-8"
        >
          MaxMexc
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white/80 pb-4 md:pb-6"
        >
          Blockchain Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light mt-8 md:mt-10 leading-loose md:leading-relaxed px-4"
        >
          I architect <span className="text-white font-medium">trustless systems</span> and <span className="text-white font-medium">ZK circuits</span>.
          <br className="hidden md:block"/>
          Transforming complex consensus logic into scalable infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-5 justify-center mt-12 md:mt-14 w-full md:w-auto px-4"
        >
            <a 
              href="#stack" 
              className="px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:bg-gray-200 active:scale-95 flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <Code size={20} /> View My Stack
            </a>
            <a 
              href="https://t.me/MaxEther0x"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all hover:border-white/20 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-md w-full md:w-auto"
            >
              Contact Me <ArrowRight size={18} />
            </a>
        </motion.div>
      </div>

      {/* Tech Ticker */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 w-full overflow-hidden"
      >
        <div className="relative w-full max-w-4xl mx-auto mask-linear-fade">
          <div className="flex gap-12 justify-center items-center opacity-40 text-xs md:text-sm font-mono tracking-[0.2em] text-gray-500 uppercase">
             <span>Rust</span>
             <span className="text-blue-500">•</span>
             <span>Solidity</span>
             <span className="text-blue-500">•</span>
             <span>Python</span>
             <span className="text-blue-500">•</span>
             <span>TypeScript</span>
             <span className="text-blue-500">•</span>
             <span>TON</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
