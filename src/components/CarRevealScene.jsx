import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

function LightTrails() {
  const trailCount = 40;
  
  // Pre-generate trail data
  const trails = useMemo(() => {
    const data = [];
    for (let i = 0; i < trailCount; i++) {
      data.push({
        x: Math.random() * 40 - 20, // Start randomly across the screen
        y: (Math.random() - 0.5) * 4 + 1, // Vertical spread
        z: (Math.random() - 0.5) * 6 - 2, // Depth spread
        speed: Math.random() * 0.4 + 0.1, // High speed
        length: Math.random() * 4 + 2, // Long streaks
        thickness: Math.random() * 0.015 + 0.005, // Razor thin
        color: Math.random() > 0.2 ? '#00e5ff' : '#ffffff', // Mostly ice blue, some white
        intensity: Math.random() * 3 + 2
      });
    }
    return data;
  }, []);

  const linesRef = useRef([]);

  useFrame(() => {
    linesRef.current.forEach((mesh, i) => {
      const data = trails[i];
      // Move left
      mesh.position.x -= data.speed;
      
      // Aerodynamic dip (flyline simulation)
      // As it passes the center (x=0), it dips and rises slightly
      const distFromCenter = mesh.position.x;
      const aerodynamicCurve = Math.sin(distFromCenter * 0.5) * 0.5 * Math.exp(-Math.abs(distFromCenter * 0.2));
      mesh.position.y = data.y + aerodynamicCurve;

      // Reset when out of bounds
      if (mesh.position.x < -20) {
        mesh.position.x = 20;
      }
    });
  });

  return (
    <group>
      {trails.map((data, i) => (
        <mesh 
          key={i} 
          ref={el => linesRef.current[i] = el}
          position={[data.x, data.y, data.z]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[data.thickness, data.thickness, data.length, 8]} />
          <meshBasicMaterial color={data.color} />
        </mesh>
      ))}
    </group>
  );
}

function SmoothFlyline() {
  // A single, elegant, glowing curve that perfectly mimics the 911 roofline (the "Flyline")
  const flylineGeo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(5, -0.5, -3),    // Front bumper
      new THREE.Vector3(3, 0.5, -3),     // Hood nose
      new THREE.Vector3(1, 1.2, -3),     // Windshield base
      new THREE.Vector3(-0.5, 2.0, -3),  // Roof peak
      new THREE.Vector3(-3, 1.2, -3),    // Rear slope (fastback)
      new THREE.Vector3(-5, 0.5, -3),    // Rear deck
      new THREE.Vector3(-5.5, -0.5, -3)  // Rear bumper
    ]);
    return new THREE.TubeGeometry(curve, 128, 0.02, 8, false);
  }, []);

  return (
    <mesh geometry={flylineGeo}>
      <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
    </mesh>
  );
}

export default function CarRevealScene({ scrollProgress }) {
  const { camera } = useThree();

  useFrame(() => {
    const progress = scrollProgress.get(); 
    
    // Subtle camera drift on scroll
    const targetZ = 8 - progress * 2; 
    const targetY = 1.0 - progress * 1.0;
    
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={['#020202']} />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} color="#00e5ff" />
      <Environment preset="night" environmentIntensity={0.2} />

      {/* Abstract Aerodynamic Elements */}
      <LightTrails />
      <SmoothFlyline />

      {/* Highly Reflective Studio Floor */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshPhysicalMaterial 
          color="#000000" 
          metalness={0.9} 
          roughness={0.1} 
          clearcoat={1.0}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Particle Dust simulating wind tunnel smoke */}
      <Sparkles count={100} scale={20} size={1.5} speed={0.8} opacity={0.3} color="#00e5ff" />

      {/* Post Processing for Cinematic Glow */}
      <EffectComposer disableNormalPass>
        <Bloom 
          luminanceThreshold={0.1} 
          mipmapBlur 
          intensity={2.0} // High bloom for light trails
          radius={0.8}
        />
        <Vignette eskil={false} offset={0.3} darkness={1.2} />
      </EffectComposer>
    </>
  );
}
