
"use client";
import * as THREE from "three";
import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";


function HeadModelWithLight() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/head.glb");
  // Signal that the 3D model has loaded
  useEffect(() => {
    window.dispatchEvent(new Event("model-loaded"));
  }, []);

  useFrame(() => {
	  if (groupRef.current) {
		  groupRef.current.rotation.y += 0.01;
	  }
  });
  return (
    <group ref={groupRef} rotation={[0, Math.PI, 0]}>
      {/* Add lights to the same group as the model */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} intensity={3} />
      <primitive object={scene} scale={1.63} />
    </group>
  );
}

export default function Head() {
  return (
    <div className="relative z-10 w-full h-full p-[3vh] sm:p-[0] flex items-center aspect-square">
      <Canvas camera={{ position: [0, 0, 4], fov:30 }}>
        <Suspense fallback={null}>
          <hemisphereLight args={["#ffffff", "#ffffff", 0.8]} />
          <HeadModelWithLight />
          {/* OrbitControls will rotate the entire group */}
          <OrbitControls enableZoom={false} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}

