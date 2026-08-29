'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

const BRAND = '#34A983';

/**
 * Two interlocked rings — design and development fused into one studio.
 * One ring is dark glossy (the craft), one glows brand green (the ship).
 */
function InterlockedRings() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame(({ pointer: p, clock }) => {
    if (!group.current) return;
    pointer.current.x += (p.x - pointer.current.x) * 0.04;
    pointer.current.y += (p.y - pointer.current.y) * 0.04;

    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.12 + pointer.current.x * 0.35;
    group.current.rotation.x =
      Math.sin(t * 0.18) * 0.12 - pointer.current.y * 0.25;
  });

  return (
    <group ref={group}>
      {/* Dark glossy ring — the craft */}
      <mesh rotation={[Math.PI / 2.1, 0, 0]} position={[-0.55, 0, 0]}>
        <torusGeometry args={[1.5, 0.42, 64, 128]} />
        <meshPhysicalMaterial
          color="#0d0d0d"
          metalness={0.85}
          roughness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </mesh>

      {/* Brand ring — the ship */}
      <mesh rotation={[0.35, 0.5, Math.PI / 2.4]} position={[0.75, 0, 0.1]}>
        <torusGeometry args={[1.5, 0.42, 64, 128]} />
        <meshPhysicalMaterial
          color={BRAND}
          metalness={0.35}
          roughness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.2}
          emissive={BRAND}
          emissiveIntensity={0.28}
        />
      </mesh>
    </group>
  );
}

export function HeroOrb() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
      eventSource={
        typeof document !== 'undefined' ? document.body : undefined
      }
      eventPrefix="client"
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} />
      <pointLight position={[-5, -2, 3]} intensity={12} color={BRAND} />

      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.9}>
        <InterlockedRings />
      </Float>

      {/* Studio-style reflections without external HDR fetches */}
      <Environment resolution={256}>
        <Lightformer
          intensity={2.5}
          position={[0, 5, -6]}
          scale={[12, 4, 1]}
          color="#ffffff"
        />
        <Lightformer
          intensity={1.6}
          position={[-6, 0, 2]}
          scale={[3, 8, 1]}
          color={BRAND}
        />
        <Lightformer
          intensity={1.2}
          position={[7, -3, 1]}
          scale={[4, 6, 1]}
          color="#c9fff0"
        />
      </Environment>
    </Canvas>
  );
}
