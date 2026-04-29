import React from 'react';
import { motion } from 'motion/react';

export const HeaderSection: React.FC = () => {
  return (
    <header className="mb-10">
      <motion.h1 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl"
      >
        Live Reporting <span className="text-indigo-600">&</span> Analysis
      </motion.h1>
      <p className="text-slate-500 mt-2 max-w-2xl font-medium">
        Maintain community safety by reporting public hazards. Our AI identifies risks and provides immediate reporting steps.
      </p>
    </header>
  );
};