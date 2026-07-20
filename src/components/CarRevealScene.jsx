import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';

function CarContours() {
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#00e5ff',
    emissive: '#00e5ff',
    emissiveIntensity: 1.5,
    transparent: true,
    opacity: 0.8,
    wireframe: false
  }), []);

  const createCurveGeometry = (points) => {
    const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
    return new THREE.TubeGeometry(curve, 64, 0.015, 8, false);
  };

  // Center Roofline
  const roofline = createCurveGeometry([
    [0, 0.1, 2.5],     // Front bumper lower
    [0, 0.35, 1.8],    // Hood nose
    [0, 0.45, 1.0],    // Windshield base
    [0, 0.9, -0.2],    // Roof peak
    [0, 0.7, -1.2],    // Rear slope
    [0, 0.4, -2.0],    // Rear deck
    [0, 0.2, -2.2]     // Rear bumper
  ]);

  // Left Fender & Beltline
  const leftFender = createCurveGeometry([
    [-0.6, 0.15, 2.4],   // Front bumper edge
    [-0.8, 0.55, 1.5],   // Front wheel arch
    [-0.9, 0.5, 0],      // Door beltline
    [-0.95, 0.6, -1.2],  // Rear wheel arch (wide body)
    [-0.7, 0.3, -2.1]    // Rear bumper edge
  ]);

  // Right Fender & Beltline (Mirrored)
  const rightFender = createCurveGeometry([
    [0.6, 0.15, 2.4],
    [0.8, 0.55, 1.5],
    [0.9, 0.5, 0],
    [0.95, 0.6, -1.2],
    [0.7, 0.3, -2.1]
  ]);

  // Lower Side Skirts
  const leftSkirt = createCurveGeometry([[-0.6, 0.1, 2.2], [-0.9, 0.1, 0], [-0.8, 0.15, -1.9]]);
  const rightSkirt = createCurveGeometry([[0.6, 0.1, 2.2], [0.9, 0.1, 0], [0.8, 0.15, -1.9]]);

  return (
    <group>
      <mesh geometry={roofline} material={material} />
      <mesh geometry={leftFender} material={material} />
      <mesh geometry={rightFender} material={material} />
      <mesh geometry={leftSkirt} material={material} />
      <mesh geometry={rightSkirt} material={material} />
      
      {/* Front air intakes subtle line */}
      <mesh geometry={createCurveGeometry([[-0.5, 0.15, 2.45], [0, 0.1, 2.52], [0.5, 0.15, 2.45]])} material={material} />
    </group>
  );
}

function PorscheHeadlights({ leftRef, rightRef }) {
  // 4-point LED signature
  const dotOffsets = [
    [-0.04, 0.04, 0], [0.04, 0.04, 0],
    [-0.04, -0.04, 0], [0.04, -0.04, 0]
  ];
  
  const ledMaterial = new THREE.MeshStandardMaterial({ 
    color: "#ffffff", 
    emissive: "#00e5ff", 
    emissiveIntensity: 0,
    toneMapped: false 
  });

  return (
    <group>
      {/* Left Headlight */}
      <group ref={leftRef} position={[-0.75, 0.52, 1.7]} rotation={[-0.2, 0.1, 0]}>
        {dotOffsets.map((pos, i) => (
          <mesh key={`L-${i}`} position={pos} material={ledMaterial}>
            <sphereGeometry args={[0.02, 16, 16]} />
          </mesh>
        ))}
      </group>
      
      {/* Right Headlight */}
      <group ref={rightRef} position={[0.75, 0.52, 1.7]} rotation={[-0.2, -0.1, 0]}>
        {dotOffsets.map((pos, i) => (
          <mesh key={`R-${i}`} position={pos} material={ledMaterial}>
            <sphereGeometry args={[0.02, 16, 16]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function CarRevealScene({ scrollProgress }) {
  const { camera } = useThree();
  const leftLights = useRef();
  const rightLights = useRef();

  useEffect(() => {
    // Initial camera position (front center, cinematic wide shot)
    camera.position.set(0, 0.6, 5);
    camera.lookAt(0, 0.4, 0);

    const leftGroup = leftLights.current.children;
    const rightGroup = rightLights.current.children;
    const allLeds = [...leftGroup, ...rightGroup].map(m => m.material);

    // Headlight startup sequence
    const tl = gsap.timeline();
    tl.to({}, { duration: 1.0 }) // Shorter pause
      .to(allLeds, {
        emissiveIntensity: 1, // Subtle blink
        duration: 0.1,
      })
      .to(allLeds, {
        emissiveIntensity: 0,
        duration: 0.1,
      })
      .to(allLeds, {
        emissiveIntensity: 5, // Reduced from 10 to avoid blown-out glow
        duration: 1.5,
        ease: "power2.inOut",
      });
  }, [camera]);

  useFrame(() => {
    const progress = scrollProgress.get(); 
    
    // Start from front (z=5), move back and rotate around
    const targetZ = 5 - progress * 2; 
    const targetY = 0.6 + progress * 1.0;
    const targetX = progress * 4.5;
    
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.lookAt(0, 0.4, 0);
  });

  return (
    <>
      <color attach="background" args={['#010101']} />
      <Environment preset="night" environmentIntensity={0.1} />
      <fog attach="fog" args={['#010101', 3, 10]} />

      <group position={[0, -0.2, 0]}>
        <CarContours />
        <PorscheHeadlights leftRef={leftLights} rightRef={rightLights} />
      </group>

      <mesh position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#020202" roughness={0.9} metalness={0.1} />
      </mesh>

      <Sparkles count={30} scale={10} size={1} speed={0.2} opacity={0.1} color="#00e5ff" />

      <EffectComposer disableNormalPass>
        <Bloom 
          luminanceThreshold={0.5} 
          mipmapBlur 
          intensity={1.0} /* Reduced Bloom Intensity */
        />
        <DepthOfField focusDistance={0.05} focalLength={0.1} bokehScale={2} height={480} />
        <Vignette eskil={false} offset={0.3} darkness={1.1} />
      </EffectComposer>
    </>
  );
}
