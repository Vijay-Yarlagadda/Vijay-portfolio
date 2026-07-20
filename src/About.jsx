import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-20 px-8 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[30vw] h-full bg-gradient-to-l from-[#1a1a1a] to-transparent skew-x-[-15deg] transform origin-bottom" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#D5001C]" />
              <p className="text-[#D5001C] font-semibold tracking-[0.2em] uppercase text-xs">01 // The Driver</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight">
              About <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #555" }}>Me</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-[#888] text-lg font-light leading-relaxed">
            <p>
              I’m passionate about crafting intuitive UI/UX designs and engaging visuals 
              through creative editing. Designing clean, user-friendly interfaces is something 
              I truly enjoy and constantly explore.
            </p>
            <p>
              I love bringing ideas to life through logic, structure, and well-written code. 
              Solving problems and building seamless digital experiences keeps me motivated 
              every day.
            </p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4"
          >
            <a
              href="https://drive.google.com/file/d/1XnEA7Q4qsgzvTCQU04GoA2YNvELIa8Eu/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#D5001C] text-white font-bold tracking-[0.2em] uppercase text-sm hover:bg-white hover:text-[#0a0a0a] transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right 3D Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative w-full aspect-square md:aspect-[4/3] glass-panel rounded-2xl overflow-hidden group"
          style={{ perspective: "1000px" }}
        >
          {/* Simulated 3D Card/Panel Effect */}
          <motion.div 
            whileHover={{ rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-4 border border-[#333] rounded-xl flex flex-col justify-between p-8 bg-gradient-to-br from-[#111] to-[#0a0a0a]"
          >
            <div className="text-[#333] font-mono text-xs flex justify-between">
              <span>SYS.CORE.INIT</span>
              <span>v2.0.26</span>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="w-full h-[1px] bg-[#333]" />
              <h3 className="text-2xl text-white font-light tracking-wide uppercase">Performance Driven</h3>
              <div className="w-1/2 h-[2px] bg-[#D5001C]" />
            </div>

            <div className="absolute bottom-8 right-8 text-[#D5001C] opacity-50">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default About;