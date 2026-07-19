import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-[#333] py-12 px-8 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#D5001C] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-bold tracking-[0.2em] uppercase text-white">
            <span className="text-[#D5001C]">V</span>ijay.
          </div>
          <p className="text-[#666] font-mono text-xs uppercase tracking-widest">
            Performance & Precision Engineering
          </p>
        </div>

        <div className="flex items-center gap-6">
          <motion.a 
            whileHover={{ y: -2 }}
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[#888] hover:text-white font-mono text-sm tracking-widest uppercase transition-colors"
          >
            Back to Top
          </motion.a>
        </div>

      </div>

      <div className="mt-12 text-center text-[#444] font-mono text-[10px] tracking-[0.3em] uppercase">
        © {new Date().getFullYear()} Vijay Yarlagadda. All Systems Operational.
      </div>
    </footer>
  );
};

export default Footer;