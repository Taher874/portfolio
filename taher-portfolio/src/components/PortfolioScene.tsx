
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const mesh = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    mesh.current.rotation.x += delta * 0.12;
    mesh.current.rotation.y += delta * 0.2;

    mesh.current.rotation.x +=
      (state.pointer.y * 0.12 - mesh.current.rotation.x) *
      delta * 0.25;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={mesh} scale={1.35}>
        <torusKnotGeometry args={[0.85, 0.25, 180, 24, 2, 3]} />
        <MeshDistortMaterial
          color="#C5FF65"
          emissive="#253D0A"
          emissiveIntensity={0.7}
          roughness={0.2}
          metalness={0.65}
          distort={0.22}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function PortfolioScene() {
  return (
    <div className="scene-container" aria-label="Animated 3D artwork">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[3, 3, 4]} intensity={35} color="#C5FF65" />
        <pointLight position={[-3, -2, 2]} intensity={18} color="#FFFFFF" />
        <Orb />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
