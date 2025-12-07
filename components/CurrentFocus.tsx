import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const focusItems = [
  "Zero-Knowledge Proofs (zk-SNARKs)",
  "Account Abstraction (ERC-4337)",
  "TON FunC & Tact Development",
  "Modular Blockchain Architecture (Celestia)"
];

export const CurrentFocus: React.FC = () => {
  return (
    <section className="w-full py-20 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/5">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Currently Exploring</h2>
        <p className="text-gray-400 mb-8">
          The blockchain space moves fast. Here is what I am currently deep-diving into during my research time.
        </p>
      </div>

      <div className="md:w-1/2 w-full">
        <ul className="space-y-4">
          {focusItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Check size={14} className="text-blue-400" />
              </div>
              <span className="text-gray-200 font-medium">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};