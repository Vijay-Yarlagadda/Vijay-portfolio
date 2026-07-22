import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

function ParticleWave({ isMobile }) {
  const gridSize = isMobile ? 40 : 100;
  const count = gridSize * gridSize;
  const meshRef = useRef();

  // Generate initial particle positions in a wide grid and pre-calculate static values
  const { positions, colors, meta } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const meta = [];
    
    const colorA = new THREE.Color('#D5001C'); // Porsche Red
    const colorB = new THREE.Color('#4A000A'); // Dark Crimson
    const tempColor = new THREE.Color();

    let i = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        // Center the grid (-gridSize/2 to gridSize/2)
        const posX = (x - gridSize / 2) * (isMobile ? 0.6 : 0.4);
        const posZ = (z - gridSize / 2) * (isMobile ? 0.6 : 0.4);
        
        positions[i * 3] = posX;
        positions[i * 3 + 1] = 0; // Y will be animated
        positions[i * 3 + 2] = posZ;

        // Mix colors based on position
        const mixRatio = (posX + 20) / 40;
        tempColor.copy(colorA).lerp(colorB, Math.max(0, Math.min(1, mixRatio)));
        
        colors[i * 3] = tempColor.r;
        colors[i * 3 + 1] = tempColor.g;
        colors[i * 3 + 2] = tempColor.b;

        // Pre-calculate distance and falloff to avoid costly CPU math inside the render loop
        const distance = Math.sqrt(posX * posX + posZ * posZ);
        const falloff = Math.max(0, 1 - distance / (isMobile ? 12 : 20));

        meta.push({ posX, posZ, falloff });
        
        i++;
      }
    }
    return { positions, colors, meta };
  }, [count, gridSize, isMobile]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!meshRef.current) return;
    const positions = meshRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const m = meta[i];
      if (!m) continue;
      const { posX, posZ, falloff } = m;

      // Complex organic wave math (combining multiple sine waves)
      const wave1 = Math.sin(posX * 0.2 + time * 0.5) * 1.5;
      const wave2 = Math.cos(posZ * 0.3 + time * 0.4) * 1.0;
      const wave3 = Math.sin((posX + posZ) * 0.1 - time * 0.3) * 2.0;

      positions[i * 3 + 1] = (wave1 + wave2 + wave3) * falloff - 2; // Keep it below text
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Slowly rotate the entire wave
    meshRef.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.08 : 0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function GlowingOrbs() {
  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-8, 2, -5]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#00e5ff" transparent opacity={0.1} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[8, -1, -8]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial color="#a07490" transparent opacity={0.1} />
        </mesh>
      </Float>
    </group>
  );
}

export default function CarRevealScene({ scrollProgress }) {
  const { camera } = useThree();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useFrame(() => {
    const progress = scrollProgress.get(); 
    
    // Dramatic cinematic camera movement on scroll
    const targetZ = 12 - progress * 4; 
    const targetY = 2 + progress * 3;
    const targetX = progress * 2;
    
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.03);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.03);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={['#010101']} />
      <fog attach="fog" args={['#010101', 5, 25]} />
      
      <Environment preset="night" environmentIntensity={0.1} />

      {/* The Breathtaking Fluid Particle Wave */}
      <ParticleWave isMobile={isMobile} />
      
      {/* Subtle floating background elements */}
      <GlowingOrbs />

      {/* Ambient dust - reduced count on mobile */}
      <Sparkles count={isMobile ? 55 : 200} scale={25} size={2} speed={0.4} opacity={0.2} color="#ffffff" />

      {/* Cinematic Post Processing - bypassed on mobile for dramatic scroll/render speedups */}
      {!isMobile && (
        <EffectComposer disableNormalPass>
          <Bloom 
            luminanceThreshold={0.2} 
            mipmapBlur 
            intensity={2.5} 
            radius={0.8}
          />
          <DepthOfField focusDistance={0.05} focalLength={0.1} bokehScale={3} height={480} />
          <Vignette eskil={false} offset={0.3} darkness={1.3} />
        </EffectComposer>
      )}
    </>
  );
}
