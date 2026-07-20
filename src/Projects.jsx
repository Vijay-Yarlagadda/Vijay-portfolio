import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "D-Portfolio",
    description: "A highly interactive, performance-optimized personal portfolio featuring complex 3D WebGL rendering, custom framer-motion physics, and a premium aesthetic designed to showcase high-end engineering capabilities.",
    link: "#"
  },
  {
    id: 2,
    title: "DFlex",
    description: "An AI-powered fitness platform that generates personalized diet plans and workout guidance based on users' goals, body metrics, and preferences.",
    link: "#"
  },
  {
    id: 3,
    title: "DocEase",
    description: "A secure healthcare platform that enables hospitals, doctors, and patients to manage appointments and medical records with role-based access control.",
    link: "#"
  },
  {
    id: 4,
    title: "DSwap",
    description: "A campus-based cash exchange platform that helps students quickly find others to exchange small currency denominations within their college.",
    link: "#"
  }
];

// Smooth cubic-bezier transition for a premium, non-glitchy feel
const smoothTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const Projects = () => {
  const [active, setActive] = useState(1);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="relative w-full min-h-screen bg-transparent py-24 px-8 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col h-full justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#D5001C]" />
            <h2 className="text-[#D5001C] font-semibold tracking-[0.3em] uppercase text-sm">Case Studies</h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">Featured Projects</h3>
        </motion.div>

        {/* Horizontal Accordion */}
        <div className="flex flex-col md:flex-row gap-4 w-full h-[500px] md:h-[600px]">
          {projects.map((project) => {
            const isActive = active === project.id;
            const isHovered = hovered === project.id;
            
            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{ 
                  flex: isActive ? (window.innerWidth > 768 ? 6 : 4) : (isHovered ? 1.5 : 1) 
                }}
                transition={smoothTransition}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(project.id)}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-colors duration-500 border border-[#333] ${
                  isActive ? "bg-[#080808]" : "bg-black/40 backdrop-blur-md hover:bg-black/50"
                }`}
              >
                <AnimatePresence>
                  {/* INACTIVE STATE - CLIPPED NUMBER (All numbers on the right, slide left on hover) */}
                  {!isActive ? (
                    <motion.div 
                      key="inactive"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute top-8 right-0 bottom-0 flex items-start pointer-events-none"
                    >
                      <motion.span 
                        initial={false}
                        animate={{ x: isHovered ? -20 : 30 }}
                        transition={smoothTransition}
                        className="block text-[80px] md:text-[120px] leading-none font-bold text-[#D5001C] opacity-90 select-none"
                      >
                        {project.id}
                      </motion.span>
                    </motion.div>
                  ) : (
                    /* ACTIVE STATE CONTENT */
                    <motion.div 
                      key="active"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start md:items-center gap-6 mb-8 flex-col md:flex-row">
                          <span className="text-6xl md:text-8xl font-bold text-white leading-none">
                            {project.id}
                          </span>
                          <h4 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-tight max-w-xl">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                      
                      <div className="max-w-2xl">
                        <p className="text-base md:text-lg text-[#888] font-light leading-relaxed border-l-2 border-[#D5001C] pl-6 mb-8">
                          {project.description}
                        </p>
                        <a href={project.link} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#D5001C] hover:text-white transition-colors duration-300">
                          View Project
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
