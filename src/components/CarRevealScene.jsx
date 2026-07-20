import React, { useRef, useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';

function DottedMatrix({ position }) {
  // A grid of tiny dots for the bottom of the headlight housing
  const dots = useMemo(() => {
    const arr = [];
    for (let x = -0.4; x <= 0.4; x += 0.05) {
      for (let y = -0.3; y <= 0; y += 0.05) {
        // Shape it like a triangle/trapezoid
        if (Math.abs(x) < 0.4 + y) {
          arr.push(new THREE.Vector3(x, y, 0));
        }
      }
    }
    return arr;
  }, []);

  return (
    <group position={position} rotation={[-0.2, 0, 0]}>
      {dots.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.02, 0.02, 0.02]} />
          <meshStandardMaterial color="#888888" metalness={1} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function DetailedPorscheHeadlight({ groupRef, position, rotation, scale = 1 }) {
  const ledMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: "#ffffff", 
    emissive: "#ffffff", 
    emissiveIntensity: 0,
    toneMapped: false 
  }), []);

  // Save the ledMaterial to the ref so we can animate it later
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.userData.ledMaterial = ledMaterial;
    }
  }, [groupRef, ledMaterial]);

  return (
    <group position={position} rotation={rotation} scale={scale} ref={groupRef}>
      
      {/* Outer Glass Cover */}
      <mesh position={[0, 0, 0.4]}>
        <sphereGeometry args={[1.02, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          transmission={0.9} 
          opacity={1} 
          metalness={0.1} 
          roughness={0} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          transparent={true}
        />
      </mesh>

      {/* Dark Inner Housing */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial color="#050505" metalness={0.9} roughness={0.4} />
      </mesh>

      {/* Central Projector Housing */}
      <mesh position={[0, 0.1, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.35, 0.4, 32]} />
        <meshPhysicalMaterial color="#111111" metalness={0.8} roughness={0.5} />
      </mesh>

      {/* Central Projector Lens */}
      <mesh position={[0, 0.1, 0.7]}>
        <sphereGeometry args={[0.25, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
        <meshPhysicalMaterial color="#0a1526" metalness={0.9} roughness={0.1} transmission={0.5} thickness={0.5} />
      </mesh>

      {/* 4-Point LED Daytime Running Lights (Thick angled bars) */}
      <group position={[0, 0.1, 0.65]}>
        {/* Top Left */}
        <mesh position={[-0.4, 0.25, 0]} rotation={[0, 0, 0.2]} material={ledMaterial}>
          <capsuleGeometry args={[0.04, 0.2, 8, 16]} />
        </mesh>
        {/* Top Right */}
        <mesh position={[0.4, 0.25, 0]} rotation={[0, 0, -0.2]} material={ledMaterial}>
          <capsuleGeometry args={[0.04, 0.2, 8, 16]} />
        </mesh>
        {/* Bottom Left */}
        <mesh position={[-0.4, -0.25, 0]} rotation={[0, 0, -0.2]} material={ledMaterial}>
          <capsuleGeometry args={[0.04, 0.2, 8, 16]} />
        </mesh>
        {/* Bottom Right */}
        <mesh position={[0.4, -0.25, 0]} rotation={[0, 0, 0.2]} material={ledMaterial}>
          <capsuleGeometry args={[0.04, 0.2, 8, 16]} />
        </mesh>
      </group>

      {/* Dotted Matrix at the bottom */}
      <DottedMatrix position={[0, -0.5, 0.7]} />
      
    </group>
  );
}

export default function CarRevealScene({ scrollProgress }) {
  const { camera } = useThree();
  const leftLightRef = useRef();
  const rightLightRef = useRef();

  useEffect(() => {
    // Initial camera position
    camera.position.set(0, 0, 6);
    camera.lookAt(0, 0, 0);

    const leds = [
      leftLightRef.current?.userData.ledMaterial,
      rightLightRef.current?.userData.ledMaterial
    ].filter(Boolean);

    if (leds.length > 0) {
      // Cinematic Eye startup sequence
      const tl = gsap.timeline();
      tl.to({}, { duration: 1.0 })
        .to(leds, {
          emissiveIntensity: 2, 
          duration: 0.1,
        })
        .to(leds, {
          emissiveIntensity: 0,
          duration: 0.1,
        })
        .to(leds, {
          emissiveIntensity: 8, // Very bright final state
          duration: 2.0,
          ease: "power2.inOut",
        });
    }
  }, [camera]);

  useFrame(() => {
    const progress = scrollProgress.get(); 
    
    // Subtle parallax effect on scroll
    const targetZ = 6 - progress * 1.5; 
    const targetY = progress * 1.0;
    
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={['#050505']} />
      
      {/* Lighting to illuminate the glossy housings */}
      <directionalLight position={[0, 5, 5]} intensity={3} color="#ffffff" />
      <directionalLight position={[-5, -5, 5]} intensity={1} color="#333333" />
      <directionalLight position={[5, -5, 5]} intensity={1} color="#333333" />
      <ambientLight intensity={0.2} />
      
      <Environment preset="studio" environmentIntensity={0.8} />

      {/* Left Massive Headlight */}
      {/* Positioned far left, rotated slightly inward */}
      <DetailedPorscheHeadlight 
        groupRef={leftLightRef} 
        position={[-3.5, 0, 0]} 
        rotation={[0, 0.3, 0]} 
        scale={2.2} 
      />

      {/* Right Massive Headlight */}
      {/* Positioned far right, rotated slightly inward */}
      <DetailedPorscheHeadlight 
        groupRef={rightLightRef} 
        position={[3.5, 0, 0]} 
        rotation={[0, -0.3, 0]} 
        scale={2.2} 
      />

      <EffectComposer disableNormalPass>
        <Bloom 
          luminanceThreshold={0.6} 
          mipmapBlur 
          intensity={1.5} 
        />
        <Vignette eskil={false} offset={0.2} darkness={1.2} />
      </EffectComposer>
    </>
  );
}
