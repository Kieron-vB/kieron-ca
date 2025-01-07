

"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";

const publications = [
  { title: "Commercial Off The Shelf Ground Stations For Use in Rapid Testing and Innovation of Space Systems", pdf: "/pdfs/Commercial Off The Shelf Ground Stations For Use in Rapid Testing and Innovation of Space Systems.pdf" },
  { title: "CubeSat Constellations for Use in Hurricane Prediction", pdf: "/pdfs/CubeSat Constellations for Use in Hurricane Prediction.pdf" },
  { title: "Design, Verification, and Validation of the Communication System of an Undergraduate CubeSat Mission", pdf: "/pdfs/Design, Verification, and Validation of the Communication System of an Undergraduate CubeSat Mission.pdf" },
  { title: "The Development of an Undergraduate Ground Station Project for Space Education", pdf: "/pdfs/The Development of an Undergraduate Ground Station Project for Space Education.pdf" },
  { title: "The Importance of Lunar Telecommunications and its Use in Lunar Exploration", pdf: "/pdfs/The Importance of Lunar Telecommunications and its Use in Lunar Exploration.pdf" },
  { title: "The Receipt and Analysis of Weather Data in a Simulated Martian Environment", pdf: "/pdfs/The Receipt and Analysis of Weather Data in a Simulated Martian Environment.pdf" },
];

export default function Publications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastScrollTime = useRef(Date.now());
  const scrollThrottleMs = 600; // Adjust to control scroll sensitivity

  const handleScroll = (e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastScrollTime.current < scrollThrottleMs) {
      return;
    }

    if (e.deltaY > 0) {
      // Scroll down
      setCurrentIndex((prev) => (prev + 1) % publications.length);
    } else {
      // Scroll up
      setCurrentIndex((prev) =>
        prev - 1 < 0 ? publications.length - 1 : prev - 1
      );
    }

    lastScrollTime.current = now;
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <main className="bg-background h-screen overflow-hidden">
      <Navbar />
      <section className="pt-[7rem] flex flex-col items-center justify-center h-full">
        <h1 className="text-[10vw] font-headings leading-tight tracking-tight text-text mb-[-9rem]">
          Publications
        </h1>
        <div className="relative h-[100%] w-full flex flex-col items-center justify-center overflow-hidden">
          {publications.map((pub, index) => {
            // Calculate position relative to the currentIndex
            const relativeIndex = (index - currentIndex + publications.length) % publications.length;

            // Adjust spacing and visual effects
            const yOffset = (relativeIndex - 3) * 100; // Space between items
            const scale = 1 - Math.abs(relativeIndex - 3) * 0.1; // Scaling effect
            const opacity = 1 - Math.min(Math.abs(relativeIndex - 3) / 3, 1); // Fading effect

            return (
              <div
                key={index}
                className="absolute text-center transition-all duration-500 ease-out"
                style={{
                  transform: `translateY(${yOffset}px) scale(${scale})`,
                  opacity: opacity,
                }}
              >
                <a
                  href={pub.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-body text-[2vw] ${
                    relativeIndex === 3
                      ? "text-black font-bold"
                      : "text-gray-400"
                  }`}
                >
                  {pub.title}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

