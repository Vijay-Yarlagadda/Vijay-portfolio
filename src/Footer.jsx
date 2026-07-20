import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-[#333] py-12 px-8 relative overflow-hidden">
      {/* Porsche Taillight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[4px] bg-gradient-to-r from-transparent via-[#D5001C] to-transparent shadow-[0_0_20px_#D5001C,0_0_40px_#D5001C]" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div 
            className="text-4xl text-white cursor-pointer hover:text-[#D5001C] transition-colors duration-300"
            style={{ fontFamily: "'Alex Brush', cursive", transform: "translateY(-4px)" }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-[#D5001C]">V</span>K
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