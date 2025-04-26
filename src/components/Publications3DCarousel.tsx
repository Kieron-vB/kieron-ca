"use client";
import React, { useState } from "react";

interface Publication {
  title: string;
  pdf: string;
}

interface Publications3DCarouselProps {
  items: Publication[];
}

export default function Publications3DCarousel({ items }: Publications3DCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const N = items.length;
  const deg = 360 / N;
  // Height of each item in px
  const itemHeight = 80;
  // Radius for the 3D wheel
  const radius = (itemHeight / 2) / Math.tan(Math.PI / N);
  // Rotation of wheel (deg)
  const rotation = -currentIndex * deg;

  const prev = () => setCurrentIndex(i => (i - 1 + N) % N);
  const next = () => setCurrentIndex(i => (i + 1) % N);

  return (
    <div className="flex flex-col items-center">
      <button onClick={prev} className="mb-2 p-2">▲</button>
      <div
        className="relative w-full overflow-hidden"
        style={{ height: `${itemHeight * 3}px`, perspective: 800 }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${radius}px) rotateX(${rotation}deg)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {items.map((item, i) => {
            // opacity fade based on angular position
            const angle = i * deg + rotation;
            const norm = ((angle + 180) % 360) - 180;
            const opacity = Math.max(0, Math.cos((norm * Math.PI) / 180));
            return (
              <div
                key={i}
                className="absolute w-full flex items-center justify-center"
                style={{
                  height: `${itemHeight}px`,
                  top: `${(itemHeight * 3) / 2 - itemHeight / 2}px`,
                  transform: `rotateX(${i * deg}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                  opacity,
                }}
              >
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-mobile lg:text-desktop font-body hover:underline"
                >
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={next} className="mt-2 p-2">▼</button>
    </div>
  );
}