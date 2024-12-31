"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function Model() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/head.glb");

  useEffect(() => {
    const interval = setInterval(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
      }
    }, 16); // approximately 60fps

    return () => clearInterval(interval);
  }, []);

  return <primitive ref={modelRef} object={scene} scale={0.5} />;
}

export default function HeadWithCircle() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = ((0.5 - e.clientX / innerWidth)) * 30;
      const offsetY = ((0.5 - e.clientY / innerHeight)) * 30;
      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="absolute top-[20%] right-[15%] h-[500px] w-[500px] rounded-full bg-accent flex items-center justify-center overflow-hidden transition-transform duration-[100ms] ease-in-out"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Model />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
