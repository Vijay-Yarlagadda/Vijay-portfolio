import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';

function SweepingWings() {
  const wingMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#000000',
    metalness: 1.0,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    side: THREE.DoubleSide
  }), []);

  const createWing = (points) => {
    const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
    return new THREE.TubeGeometry(curve, 128, 0.04, 16, false);
  };

  // Left sweeping wing
  const leftWing = createWing([
    [-2.5, 1.8, 0],       // Eye position (Top Left)
    [-1.5, 0.5, 1.0],     // Sweeping in and forward
    [-0.5, -1.0, 1.5],    // Curving down
    [-0.1, -2.5, 1.2]     // Converging at bottom center
  ]);

  // Right sweeping wing
  const rightWing = createWing([
    [2.5, 1.8, 0],        // Eye position (Top Right)
    [1.5, 0.5, 1.0],      // Sweeping in and forward
    [0.5, -1.0, 1.5],     // Curving down
    [0.1, -2.5, 1.2]      // Converging at bottom center
  ]);

  return (
    <group>
      <mesh geometry={leftWing} material={wingMaterial} />
      <mesh geometry={rightWing} material={wingMaterial} />
      
      {/* Outer subtle glow/accent line following the same path */}
      <mesh geometry={createWing([[-2.55, 1.85, -0.1], [-1.55, 0.55, 0.9], [-0.55, -0.95, 1.4], [-0.15, -2.45, 1.1]])}>
        <meshBasicMaterial color="#333333" transparent opacity={0.3} />
      </mesh>
      <mesh geometry={createWing([[2.55, 1.85, -0.1], [1.55, 0.55, 0.9], [0.55, -0.95, 1.4], [0.15, -2.45, 1.1]])}>
        <meshBasicMaterial color="#333333" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function PorscheEyes({ leftRef, rightRef }) {
  // 4-point LED signature
  const dotOffsets = [
    [-0.08, 0.08, 0], [0.08, 0.08, 0],
    [-0.08, -0.08, 0], [0.08, -0.08, 0]
  ];
  
  const ledMaterial = new THREE.MeshStandardMaterial({ 
    color: "#ffffff", 
    emissive: "#ffffff", 
    emissiveIntensity: 0,
    toneMapped: false 
  });

  return (
    <group>
      {/* Left Eye */}
      <group ref={leftRef} position={[-2.5, 1.8, 0]} rotation={[0.2, 0.4, -0.2]}>
        {/* Dark housing */}
        <mesh position={[0, 0, -0.1]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshPhysicalMaterial color="#000000" metalness={0.9} roughness={0.1} />
        </mesh>
        {dotOffsets.map((pos, i) => (
          <mesh key={`L-${i}`} position={pos} material={ledMaterial}>
            <sphereGeometry args={[0.03, 16, 16]} />
          </mesh>
        ))}
        {/* Central main beam (faint) */}
        <mesh position={[0, 0, 0.02]} material={ledMaterial}>
          <sphereGeometry args={[0.05, 16, 16]} />
        </mesh>
      </group>
      
      {/* Right Eye */}
      <group ref={rightRef} position={[2.5, 1.8, 0]} rotation={[0.2, -0.4, 0.2]}>
        {/* Dark housing */}
        <mesh position={[0, 0, -0.1]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshPhysicalMaterial color="#000000" metalness={0.9} roughness={0.1} />
        </mesh>
        {dotOffsets.map((pos, i) => (
          <mesh key={`R-${i}`} position={pos} material={ledMaterial}>
            <sphereGeometry args={[0.03, 16, 16]} />
          </mesh>
        ))}
        <mesh position={[0, 0, 0.02]} material={ledMaterial}>
          <sphereGeometry args={[0.05, 16, 16]} />
        </mesh>
      </group>
    </group>
  );
}

export default function CarRevealScene({ scrollProgress }) {
  const { camera } = useThree();
  const leftLights = useRef();
  const rightLights = useRef();

  useEffect(() => {
    // Initial camera position centered
    camera.position.set(0, 0, 7);
    camera.lookAt(0, 0, 0);

    const leftGroup = leftLights.current.children.filter(c => c.material && c.material.emissive);
    const rightGroup = rightLights.current.children.filter(c => c.material && c.material.emissive);
    const allLeds = [...leftGroup, ...rightGroup].map(m => m.material);

    // Engine/Eye startup sequence
    const tl = gsap.timeline();
    tl.to({}, { duration: 1.0 })
      .to(allLeds, {
        emissiveIntensity: 1, 
        duration: 0.1,
      })
      .to(allLeds, {
        emissiveIntensity: 0,
        duration: 0.1,
      })
      .to(allLeds, {
        emissiveIntensity: 4, 
        duration: 2.0,
        ease: "power2.inOut",
      });
  }, [camera]);

  useFrame(() => {
    const progress = scrollProgress.get(); 
    
    // Parallax effect on scroll
    const targetZ = 7 - progress * 2; 
    const targetY = progress * 2.0;
    
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={['#050505']} />
      
      {/* Front lighting to illuminate the metallic wings */}
      <directionalLight position={[0, 5, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-5, -5, 5]} intensity={0.5} color="#444444" />
      <directionalLight position={[5, -5, 5]} intensity={0.5} color="#444444" />
      
      <Environment preset="studio" environmentIntensity={0.5} />

      <group position={[0, 0.5, 0]}>
        <SweepingWings />
        <PorscheEyes leftRef={leftLights} rightRef={rightLights} />
      </group>

      <Sparkles count={40} scale={15} size={1.5} speed={0.2} opacity={0.15} color="#ffffff" />

      <EffectComposer disableNormalPass>
        <Bloom 
          luminanceThreshold={0.5} 
          mipmapBlur 
          intensity={1.2} 
        />
        <Vignette eskil={false} offset={0.3} darkness={1.1} />
      </EffectComposer>
    </>
  );
}
