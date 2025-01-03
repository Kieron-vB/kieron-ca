"use client";
import React, { useState, useEffect } from "react";

export default function Circle() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (0.5 - e.clientX / innerWidth) * 30;
      const offsetY = (0.5 - e.clientY / innerHeight) * 30;
      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="absolute top-[18%] right-[13%] h-[550px] w-[550px] rounded-full bg-accent overflow-hidden transition-transform duration-[100ms] ease-in-out"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    />
  );
}
