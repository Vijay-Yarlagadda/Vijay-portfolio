import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "D-Portfolio",
    description: "A highly interactive, performance-optimized personal portfolio featuring complex 3D WebGL rendering, custom framer-motion physics, and a premium aesthetic designed to showcase high-end engineering capabilities.",
    website: "https://vijayportfolio-gilt.vercel.app/",
    repo: "https://github.com/Vijay-Yarlagadda/Vijay-portfolio.git",
    tech: ["React", "WebGL", "Framer Motion", "TailwindCSS"]
  },
  {
    id: 2,
    title: "DFlex",
    description: "An AI-powered fitness platform that generates personalized diet plans and workout guidance based on users' goals, body metrics, and preferences.",
    website: "https://dflex.vercel.app/",
    repo: "https://github.com/Vijay-Yarlagadda/DFlex.git",
    tech: ["React", "Node.js", "AI/ML", "MongoDB"]
  },
  {
    id: 3,
    title: "DocEase",
    description: "A secure healthcare platform that enables hospitals, doctors, and patients to manage appointments and medical records with role-based access control.",
    website: "https://mydocease.vercel.app/",
    repo: "https://github.com/Vijay-Yarlagadda/DocEase.git",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"]
  },
  {
    id: 4,
    title: "DSwap",
    description: "A campus-based cash exchange platform that helps students quickly find others to exchange small currency denominations within their college.",
    website: "https://d-swap.vercel.app/",
    repo: "https://github.com/Vijay-Yarlagadda/DSwap.git",
    tech: ["React", "Firebase", "WebSockets", "CSS Modules"]
  }
];

// Smooth cubic-bezier transition for a premium, non-glitchy feel
const smoothTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const TiltMockup = ({ project, className = '' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const gradients = {
    1: "from-[#D5001C] to-black",
    2: "from-[#00e5ff] to-black",
    3: "from-[#10b981] to-black",
    4: "from-[#8b5cf6] to-black"
  };
  const gradient = gradients[project.id] || "from-gray-800 to-black";

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative w-full ${className} aspect-[4/3] max-w-[500px] rounded-2xl border border-[#333] bg-[#111]/80 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col cursor-crosshair group`}
    >
      {/* Browser Bar */}
      <div className="h-10 border-b border-[#333] flex items-center px-4 gap-2 bg-[#0a0a0a]" style={{ transform: "translateZ(10px)" }}>
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="flex-1 ml-4 h-5 bg-white/5 rounded-full flex items-center px-3">
           <span className="text-[9px] font-mono text-[#555] tracking-widest">{new URL(project.website).hostname}</span>
        </div>
      </div>
      
      {/* Browser Content with 3D Depth */}
      <div className={`flex-1 bg-gradient-to-br ${gradient} p-8 flex items-center justify-center relative overflow-hidden`} style={{ transform: "translateZ(20px)" }}>
         {/* Floating Elements inside Browser */}
         <motion.div 
           style={{ transform: "translateZ(60px)" }}
           className="absolute w-48 h-48 border border-white/20 rounded-full"
         />
         <motion.div 
           style={{ transform: "translateZ(80px)" }}
           className="absolute w-24 h-24 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl rotate-12 group-hover:rotate-[24deg] transition-transform duration-700"
         />
         <h3 
           style={{ transform: "translateZ(120px)" }}
           className="text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl z-10 text-center leading-tight tracking-tight"
         >
           {project.title}
         </h3>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState(1);
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

        <div className="w-full">
          {isMobile ? (
            <div className="relative flex gap-3 overflow-hidden w-full h-[620px] sm:h-[560px]">
              {projects.map((project) => {
                const isActive = active === project.id;
                const isHovered = hovered === project.id;
                return (
                  <motion.div
                    key={project.id}
                    initial={false}
                    animate={{ flex: isActive ? 4 : 1 }}
                    transition={smoothTransition}
                    onMouseEnter={() => setHovered(project.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setActive(project.id)}
                    className={`group relative min-w-[120px] overflow-hidden rounded-[2rem] border border-[#222] bg-[#080808]/95 shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer ${isActive ? 'bg-[#0f0f0f]' : 'bg-[#090909]/90'}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(213,0,28,0.18),transparent_60%)] opacity-90 pointer-events-none" />
                    <div className="relative h-full flex flex-col justify-between p-5 sm:p-6">
                      <div className="space-y-3 z-10">
                        <span className="text-xs uppercase tracking-[0.35em] text-[#777]">Project</span>
                        <h4 className={`font-bold text-white leading-tight transition-all duration-300 ${isActive ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
                          {project.title}
                        </h4>
                        {!isActive ? (
                          <p className="text-sm text-[#aaa] leading-relaxed">{project.tech.join(' · ')}</p>
                        ) : (
                          <p className="text-sm text-[#ccc] leading-relaxed">{project.description}</p>
                        )}
                      </div>

                      {isActive ? (
                        <div className="grid gap-3">
                          {project.website && (
                            <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full bg-[#D5001C] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[#ff2a2a] focus:outline-none focus:ring-2 focus:ring-[#D5001C]/50">
                              Live Demo
                            </a>
                          )}
                          {project.repo && (
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full border border-[#444] bg-[#111] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D5001C]/30">
                              GitHub
                            </a>
                          )}
                          <button className="inline-flex w-full items-center justify-center rounded-full border border-[#333] bg-transparent px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#ccc] transition hover:border-[#D5001C] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D5001C]/20">
                            Case Study
                          </button>
                        </div>
                      ) : (
                        <div className="mt-4 rounded-[1.5rem] border border-[#222] bg-[#101010]/50 p-4 text-sm text-[#bbb]">
                          Tap to reveal project details
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className={`flex flex-col lg:flex-row gap-4 w-full h-[650px]`}>
              {projects.map((project) => {
                const isActive = active === project.id;
                const isHovered = hovered === project.id;
                
                return (
                  <motion.div
                    key={project.id}
                    initial={false}
                    animate={{ flex: isActive ? 7 : (isHovered ? 1.5 : 1) }}
                    transition={smoothTransition}
                    onMouseEnter={() => setHovered(project.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setActive(project.id)}
                    className={`relative rounded-[2rem] overflow-hidden transition-colors duration-500 border border-[#333] ${
                      isActive ? "bg-[#080808]" : "bg-black/40 backdrop-blur-md hover:bg-black/50"
                    } cursor-pointer`}
                  >
                    <AnimatePresence>
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
                        <motion.div 
                          key="active"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                          className="absolute inset-0 p-8 md:p-12 flex flex-col lg:flex-row gap-12 justify-between"
                        >
                          <div className="flex-1 flex flex-col justify-between h-full">
                            <div>
                              <div className="flex items-start md:items-center gap-6 mb-8 flex-col md:flex-row">
                                <span className="text-6xl md:text-8xl font-bold text-[#D5001C] leading-none">
                                  {project.id}
                                </span>
                                <div>
                                   <h4 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                                     {project.title}
                                   </h4>
                                   <div className="flex flex-wrap gap-2">
                                     {project.tech.map((t) => (
                                       <span key={t} className="px-3 py-1 bg-[#111] border border-[#333] text-[#aaa] text-xs font-mono uppercase tracking-widest rounded-full">
                                         {t}
                                       </span>
                                     ))}
                                   </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="max-w-xl mt-auto">
                              <p className="text-lg md:text-xl text-[#aaa] font-medium leading-relaxed mb-8">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-4">
                                {project.website && (
                                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#D5001C] hover:text-white transition-colors duration-300">
                                    Live Site
                                  </a>
                                )}
                                {project.repo && (
                                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[#555] text-white font-bold uppercase tracking-widest text-xs rounded-full hover:border-white hover:bg-white/10 transition-colors duration-300">
                                    GitHub Repo
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="hidden lg:flex flex-1 items-center justify-center perspective-[1200px]">
                             <TiltMockup project={project} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
