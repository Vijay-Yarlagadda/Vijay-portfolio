import React, { Suspense } from 'react';
import { ReactLenis } from 'lenis/react';
import { Canvas } from '@react-three/fiber';
import { useScroll } from 'framer-motion';

import Intro from './Intro.jsx';
import Homepage from './Homepage.jsx';
import About from './About.jsx';
import Education from './Education.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import CarRevealScene from './components/CarRevealScene.jsx';
import CustomCursor from './CustomCursor.jsx';
import SpidermanWidget from './components/SpidermanWidget.jsx';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <ReactLenis root>
      <CustomCursor />
      <SpidermanWidget />
      <div className="relative w-full min-h-screen bg-[#010101]">
        
        {/* Global 3D Background - Fixed behind everything */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas shadows gl={{ antialias: false }}>
            <Suspense fallback={null}>
              <CarRevealScene scrollProgress={scrollYProgress} />
            </Suspense>
          </Canvas>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full flex flex-col">
          <Intro />
          <Homepage />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
        
      </div>
    </ReactLenis>
  );
}

export default App;
