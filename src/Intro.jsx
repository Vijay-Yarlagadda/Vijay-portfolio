import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Intro = () => {
  const [showHomepage, setShowHomepage] = useState(false);

  useEffect(() => {
    // Ignition sequence duration (increased to allow time to appreciate the logo)
    const timer = setTimeout(() => {
      setShowHomepage(true);
    }, 1600); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!showHomepage && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col justify-center items-center bg-[#050505] overflow-hidden"
        >
          {/* Engine Start Button Effect */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-32 h-32 rounded-full border border-[#D5001C] flex items-center justify-center bg-[#111]"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 10px rgba(213,0,28,0.25), inset 0 0 12px rgba(255,255,255,0.06)',
                  '0 0 24px rgba(213,0,28,0.7), inset 0 0 22px rgba(255,255,255,0.08)',
                  '0 0 12px rgba(213,0,28,0.35), inset 0 0 14px rgba(255,255,255,0.05)'
                ],
                scale: [1, 1.02, 0.98, 1],
                opacity: [0.85, 0.95, 0.9, 0.95]
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[#D5001C]/10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.24, 0.12, 0.28, 0.16] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.1 }}
              className="absolute inset-0 rounded-full border border-[#D5001C]/40"
            />
            <img 
              src="/porsche.png" 
              alt="Porsche Logo" 
              className="absolute -top-6 z-10 w-48 h-40 object-contain opacity-100 drop-shadow-[0_0_30px_rgba(213,0,28,0.75)] pointer-events-none"
            />
            <motion.div
              animate={{
                opacity: [0.8, 0.4, 0.9, 0.45, 0.85],
                textShadow: [
                  '0 0 6px rgba(213,0,28,0.4)',
                  '0 0 20px rgba(213,0,28,0.8)',
                  '0 0 8px rgba(213,0,28,0.5)'
                ]
              }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: 0.2 }}
              className="absolute bottom-5 z-10 text-[#D5001C] font-mono text-[9px] tracking-[0.2em] uppercase font-bold text-center leading-tight"
            >
              Engine Start
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            className="h-[2px] bg-[#D5001C] mt-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-4 text-[#666] font-mono text-xs uppercase tracking-widest"
          >
            System Initialization...
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
