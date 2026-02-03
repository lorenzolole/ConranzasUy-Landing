import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="text-4xl font-bold tracking-tighter text-foreground"
        >
          Cobranzas<span className="text-primary">Uy</span>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-primary mt-4 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Loader;