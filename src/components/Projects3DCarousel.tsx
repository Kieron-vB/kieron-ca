"use client";

import React, { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Projects3DCarouselProps {
  items: Project[];
}

export default function Projects3DCarousel({ items }: Projects3DCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const N = items.length;
  const deg = 360 / N;
  const itemWidth = 240;
  const radius = (itemWidth / 2) / Math.tan(Math.PI / N);
  const rotation = -currentIndex * deg;

  const prev = () => setCurrentIndex((i) => (i - 1 + N) % N);
  const next = () => setCurrentIndex((i) => (i + 1) % N);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full" style={{ height: "320px", perspective: 1000 }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${itemWidth}px`,
            height: "100%",
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`,
            transition: "transform 0.5s ease",
          }}
        >
          {items.map((item, i) => {
            const angle = i * deg + rotation;
            const norm = ((angle + 180) % 360) - 180;
            const opacity = Math.max(0, Math.cos((norm * Math.PI) / 180));
            return (
              <div
                key={i}
                className="absolute w-full text-center"
                style={{
                  transform: `rotateY(${i * deg}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                  opacity,
                }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="mt-2 text-xl font-semibold text-text">{item.title}</h3>
                  <p className="text-text">{item.description}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4 space-x-4">
        <button onClick={prev} className="p-2 bg-background rounded-full">&#8592;</button>
        <button onClick={next} className="p-2 bg-background rounded-full">&#8594;</button>
      </div>
    </div>
  );
}
