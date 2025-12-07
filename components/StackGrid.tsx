import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Box, Code2, Cpu, Database, Network, Terminal, Layers } from 'lucide-react';

export const StackGrid: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-32" id="stack">
      <div className="mb-12 md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Engineering Arsenal
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '100px' }}
          viewport={{ once: true }}
          className="h-1 bg-blue-600 mt-4 rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
        
        {/* Card 1: Rust & Solidity (Large) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01, borderColor: "rgba(59, 130, 246, 0.4)" }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="glass-card col-span-1 md:col-span-2 row-span-2 p-8 md:p-12 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
             <div className="relative">
                <Box size={180} className="text-blue-500 absolute top-0 right-0" />
                <Cog size={180} className="text-orange-500 absolute top-10 right-10 opacity-70 animate-[spin_30s_linear_infinite]" />
             </div>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 w-fit rounded-xl border border-orange-500/20">
                    <Cog className="text-orange-500" size={32} />
                </div>
                <div className="p-3 bg-blue-500/10 w-fit rounded-xl border border-blue-500/20">
                    <Box className="text-blue-500" size={32} />
                </div>
            </div>

            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Rust <span className="text-gray-500">&</span> Solidity</h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
                The core of high-performance protocols. From gas-optimized smart contracts on EVM to ZK circuits and off-chain computation in Rust.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                <Badge color="blue">Foundry</Badge>
                <Badge color="orange">Halo2</Badge>
                <Badge color="blue">Yul</Badge>
                <Badge color="orange">Substrate</Badge>
                <Badge color="purple">Huff</Badge>
              </div>
            </div>
          </div>
          {/* Glow Effect */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>

        {/* Card 2: Integration & Scripting (Medium) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.3)" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card col-span-1 md:col-span-1 p-8 rounded-3xl relative overflow-hidden group min-h-[300px] flex flex-col justify-between"
        >
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Network size={140} className="text-purple-500" />
          </div>

          <div className="relative z-10">
            <div className="p-3 bg-purple-500/10 w-fit rounded-xl border border-purple-500/20 mb-6">
              <Network className="text-purple-500" size={28} />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Integration & Scripting</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bridging on-chain logic with the real world using robust indexing and automation layers.
            </p>
            
            <div className="flex flex-wrap gap-2">
                 <Badge color="purple">The Graph</Badge>
                 <Badge color="purple">Wagmi</Badge>
                 <Badge color="purple">Web3.js</Badge>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Other / Languages (Wide) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01, borderColor: "rgba(34, 197, 94, 0.3)" }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card col-span-1 md:col-span-3 p-8 md:p-10 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 transform skew-x-12" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/10 w-fit rounded-xl border border-green-500/20">
                  <Terminal className="text-green-500" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Languages & Tools</h3>
              </div>
              <p className="text-gray-400 max-w-2xl">
                A versatile toolkit for end-to-end dApp development, backend services, and cloud infrastructure.
              </p>
            </div>
            
            <div className="flex gap-4 items-center justify-start flex-wrap">
              <TechItem icon={<Code2 size={16} />} text="Python" />
              <TechItem icon={<Code2 size={16} />} text="TypeScript" />
              <TechItem icon={<Database size={16} />} text="PostgreSQL" />
              <TechItem icon={<Layers size={16} />} text="Docker" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const Badge: React.FC<{ children: React.ReactNode; color: 'orange' | 'blue' | 'purple' | 'green' }> = ({ children, color }) => {
  const colors = {
    orange: 'bg-orange-900/30 text-orange-300 border-orange-500/20',
    blue: 'bg-blue-900/30 text-blue-300 border-blue-500/20',
    purple: 'bg-purple-900/30 text-purple-300 border-purple-500/20',
    green: 'bg-green-900/30 text-green-300 border-green-500/20',
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-mono border ${colors[color]}`}>
      {children}
    </span>
  );
};

const TechItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {icon}
    <span>{text}</span>
  </div>
);
