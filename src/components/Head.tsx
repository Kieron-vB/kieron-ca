
"use client";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function HeadModelWithLight() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/head.glb");

  useFrame(() => {
	  if (groupRef.current) {
		  groupRef.current.rotation.y += 0.01;
	  }
  });
  return (
    <group ref={groupRef}>
      {/* Add lights to the same group as the model */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} intensity={3} />
      <primitive object={scene} scale={4} />
    </group>
  );
}

export default function Head() {
  return (
    <div className="absolute z-10 top-[16%] right-[13%] h-[550px] w-[550px] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Suspense fallback={null}>
          <hemisphereLight skyColor={"#ffffff"} groundColor={"#ffffff"} intensity={0.8} />
          <HeadModelWithLight />
          {/* OrbitControls will rotate the entire group */}
          <OrbitControls enableZoom={false} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}

