import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Intro = () => {
  const [showHomepage, setShowHomepage] = useState(false);

  useEffect(() => {
    // Ignition sequence duration (decreased for ultra-fast load)
    const timer = setTimeout(() => {
      setShowHomepage(true);
    }, 600); 

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
            className="relative w-48 h-48 rounded-full border border-[#D5001C] flex flex-col items-center justify-center bg-[#111]"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0.05, 0.2], scale: [1, 1.1, 1] }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[#D5001C] blur-lg"
            />
            <img 
              src="/porsche.png" 
              alt="Porsche Logo" 
              className="relative z-10 w-20 h-28 object-contain mb-2 opacity-100 drop-shadow-[0_0_15px_rgba(213,0,28,0.5)]"
            />
            <div className="relative z-10 text-[#D5001C] font-mono text-[11px] tracking-[0.2em] uppercase font-bold text-center leading-tight">
              Engine Start
            </div>
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
