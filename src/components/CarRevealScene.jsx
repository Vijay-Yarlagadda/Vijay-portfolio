import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';

export default function CarRevealScene({ scrollProgress }) {
  const { camera } = useThree();
  const leftHeadlight = useRef();
  const rightHeadlight = useRef();
  const [lightsOn, setLightsOn] = useState(false);

  useEffect(() => {
    // Initial camera position (close and low)
    camera.position.set(0, 0.3, 3);
    camera.lookAt(0, 0.4, 0);

    // Headlight startup sequence
    const tl = gsap.timeline();
    tl.to({}, { duration: 1.5 }) // Brief pause in darkness
      .to([leftHeadlight.current, rightHeadlight.current], {
        emissiveIntensity: 0.1, // Subtle blink
        duration: 0.1,
      })
      .to([leftHeadlight.current, rightHeadlight.current], {
        emissiveIntensity: 0,
        duration: 0.1,
      })
      .to([leftHeadlight.current, rightHeadlight.current], {
        emissiveIntensity: 10, // Full stabilization
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => setLightsOn(true)
      });
  }, [camera]);

  useFrame(() => {
    // Get current scroll from framer-motion's motion value
    const progress = scrollProgress.get(); 
    
    // Animate camera dolly and angle based on scroll
    // Start at z=3, move back and around to z=6, x=3
    const targetZ = 3 + progress * 3; 
    const targetY = 0.3 + progress * 1.5;
    const targetX = progress * 4;
    
    // Smooth interpolation
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.lookAt(0, 0.5, 0);
  });

  return (
    <>
      <color attach="background" args={['#010101']} />
      
      {/* Subtle environment for reflections to define contours */}
      <Environment preset="night" environmentIntensity={0.3} />
      
      {/* Volumetric Fog */}
      <fog attach="fog" args={['#010101', 2, 8]} />

      <group position={[0, 0, 0]}>
        {/* Silhouette body */}
        <mesh position={[0, 0.4, 0]} castShadow>
          <boxGeometry args={[1.9, 0.25, 4.2]} />
          {/* Very dark, highly reflective physical material to catch rim light */}
          <meshPhysicalMaterial 
            color="#020202" 
            metalness={0.9} 
            roughness={0.3} 
            clearcoat={1} 
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Cabin */}
        <mesh position={[0, 0.7, -0.2]}>
          <boxGeometry args={[1.3, 0.35, 2]} />
          <meshPhysicalMaterial 
            color="#000000" 
            metalness={1} 
            roughness={0.05}
            clearcoat={1}
          />
        </mesh>

        {/* Headlights (Ice Blue accent) */}
        <mesh ref={leftHeadlight} position={[-0.75, 0.45, 2.1]}>
          <boxGeometry args={[0.35, 0.04, 0.1]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#00e5ff" 
            emissiveIntensity={0} 
            toneMapped={false} 
          />
        </mesh>
        
        <mesh ref={rightHeadlight} position={[0.75, 0.45, 2.1]}>
          <boxGeometry args={[0.35, 0.04, 0.1]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#00e5ff" 
            emissiveIntensity={0} 
            toneMapped={false} 
          />
        </mesh>
      </group>

      {/* Showroom Ground */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#020202" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Faint drifting particles */}
      <Sparkles count={40} scale={8} size={1.5} speed={0.3} opacity={0.15} color="#ffffff" />

      {/* Cinematic Post-processing */}
      <EffectComposer disableNormalPass>
        <Bloom 
          luminanceThreshold={1.5} 
          mipmapBlur 
          intensity={2.5} 
        />
        <DepthOfField focusDistance={0.02} focalLength={0.15} bokehScale={3} height={480} />
        <Vignette eskil={false} offset={0.2} darkness={1.3} />
      </EffectComposer>
    </>
  );
}
