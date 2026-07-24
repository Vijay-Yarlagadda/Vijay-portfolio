import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="relative w-full bg-transparent flex items-center justify-center py-12 md:py-16 px-8 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[30vw] h-full bg-gradient-to-l from-[#1a1a1a] to-transparent skew-x-[-15deg] transform origin-bottom" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#D5001C]" />
              <p className="text-[#D5001C] font-semibold tracking-[0.2em] uppercase text-xs">01 // The Driver</p>
              <div className="w-8 h-[2px] bg-[#D5001C]" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight">
              About <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #555" }}>Me</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-[#888] text-lg font-light leading-relaxed max-w-2xl">
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
              href="https://drive.google.com/file/d/1PT-kkFGA7Y9PfQUfJ8c40PfCeM6A3soI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#D5001C] text-white font-bold tracking-[0.2em] uppercase text-sm hover:bg-white hover:text-[#0a0a0a] transition-colors duration-300 relative overflow-hidden group pointer-events-auto"
            >
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default About;