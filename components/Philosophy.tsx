import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers } from 'lucide-react';

const philosophyItems = [
  {
    icon: <ShieldCheck size={32} className="text-emerald-400" />,
    title: "Security First",
    desc: "In an immutable world, bugs are forever. I prioritize auditable code, formal verification, and 100% test coverage before deployment."
  },
  {
    icon: <Zap size={32} className="text-yellow-400" />,
    title: "Gas Optimization",
    desc: "Efficient assembly usage and storage slot management. Every opcode counts when you're designing for high-throughput protocols."
  },
  {
    icon: <Layers size={32} className="text-blue-400" />,
    title: "Scalability",
    desc: "Architecture designed for the future of L2s. Stateless clients, data availability sampling, and modular stack integration."
  }
];

export const Philosophy: React.FC = () => {
  return (
    <section className="w-full py-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {philosophyItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border-t border-white/10 hover:bg-white/5 transition-colors duration-300"
          >
            <div className="mb-6 p-4 bg-white/5 w-fit rounded-full ring-1 ring-white/10">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};