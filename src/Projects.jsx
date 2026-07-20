import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "High-Performance Trading Dashboard",
    description: "Architected a real-time analytics dashboard processing millions of data points with sub-millisecond latency. Built with React, WebGL, and Go.",
    link: "#"
  },
  {
    id: 2,
    title: "Automotive Telemetry System",
    description: "Developed a distributed system for collecting and analyzing vehicle telemetry data in real-time. Features advanced predictive maintenance algorithms.",
    link: "#"
  },
  {
    id: 3,
    title: "E-Commerce Reimagined",
    description: "Built a headless e-commerce platform using Next.js and Shopify, resulting in a 40% increase in conversion rates and blazing fast load times.",
    link: "#"
  },
  {
    id: 4,
    title: "Precision Security Protocol",
    description: "Designed and implemented a zero-trust security protocol for an enterprise client, ensuring end-to-end encryption and compliance.",
    link: "#"
  }
];

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
          transition={{ duration: 1 }}
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
                layout
                initial={false}
                animate={{ 
                  flex: isActive ? (window.innerWidth > 768 ? 6 : 4) : (isHovered ? 1.5 : 1) 
                }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(project.id)}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-colors duration-500 border border-[#333] ${
                  isActive ? "bg-[#080808]" : "bg-black/40 backdrop-blur-md hover:bg-black/50"
                }`}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {/* INACTIVE STATE - CLIPPED NUMBER */}
                {!isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute top-8 ${project.id < active ? 'right-0' : 'left-0'}`}
                  >
                    <span 
                      className={`block text-[80px] md:text-[100px] leading-none font-bold text-[#D5001C] opacity-90 select-none transition-transform duration-500 ease-out
                      ${project.id < active 
                         ? (isHovered ? '-translate-x-6' : 'translate-x-8') 
                         : (isHovered ? 'translate-x-6' : '-translate-x-8')}`}
                    >
                      {project.id}
                    </span>
                  </motion.div>
                )}

                {/* ACTIVE STATE CONTENT */}
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
