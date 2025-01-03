"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function HeadModel() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/head.glb");

  useEffect(() => {
    const interval = setInterval(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; // Rotates the model
      }
    }, 16); // Approximately 60fps

    return () => clearInterval(interval);
  }, []);

  return <primitive ref={modelRef} object={scene} scale={4} />;
}

export default function Head() {
  return (
    <div className="absolute z-10 top-[6%] right-[7%] h-[800px] w-[800px] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <HeadModel />
          <OrbitControls enableZoom={false} enableRotate={true}/>
        </Suspense>
      </Canvas>
    </div>
  );
}

