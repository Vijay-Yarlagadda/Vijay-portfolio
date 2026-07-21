import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-[#333] py-12 px-8 relative overflow-hidden">
      {/* Porsche Taillight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[4px] bg-gradient-to-r from-transparent via-[#D5001C] to-transparent shadow-[0_0_20px_#D5001C,0_0_40px_#D5001C]" />
      
      {/* Spider-Man holding Gwen Stacy Hanging Easter Egg (Exact Uploaded Artwork) */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-4 md:right-16 z-20 origin-top pointer-events-auto cursor-pointer group"
        title="The Amazing Spider-Man: Catching Gwen"
      >
        {/* Smooth Pendulum Sway */}
        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="origin-top flex flex-col items-center"
        >
          {/* Top Web Thread connecting to ceiling */}
          <div className="w-[1.5px] h-6 bg-gradient-to-b from-white via-white/50 to-transparent mx-auto" />

          {/* Sleek Framed Card displaying exact user artwork */}
          <div className="relative w-28 md:w-36 rounded-xl border border-[#333] bg-[#0c0c0c]/90 p-2 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)] group-hover:border-[#D5001C] transition-colors overflow-hidden">
            <img 
              src="/spidey_gwen.png" 
              alt="Spider-Man Catching Gwen Stacy Artwork" 
              className="w-full h-auto object-contain rounded-lg filter invert opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>

          {/* Interactive Tag */}
          <span className="mt-2 bg-[#D5001C] text-white text-[8px] font-mono tracking-widest px-2.5 py-0.5 rounded-full uppercase shadow-md group-hover:bg-white group-hover:text-black transition-colors">
            Spidey & Gwen Artwork
          </span>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div 
            className="group text-4xl cursor-pointer"
            style={{ fontFamily: "'Alex Brush', cursive", transform: "translateY(-4px)" }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-[#D5001C] group-hover:text-white transition-colors duration-300">V</span>
            <span className="text-white group-hover:text-[#D5001C] transition-colors duration-300">K</span>
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