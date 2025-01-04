"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";

const publications = [
  { title: "Publication 1", pdf: "/pdfs/publication1.pdf" },
  { title: "Publication 2", pdf: "/pdfs/publication2.pdf" },
  { title: "Publication 3", pdf: "/pdfs/publication3.pdf" },
  { title: "Publication 4", pdf: "/pdfs/publication4.pdf" },
  { title: "Publication 5", pdf: "/pdfs/publication5.pdf" },
  { title: "Publication 6", pdf: "/pdfs/publication6.pdf" },
  { title: "Publication 7", pdf: "/pdfs/publication7.pdf" },
];

export default function Publications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastScrollTime = useRef(Date.now());
  const scrollThrottleMs = 500;
  
  const handleScroll = (e) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastScrollTime.current < scrollThrottleMs) {
      return;
    }
    
    if (e.deltaY > 0) {
      setCurrentIndex((prev) => (prev + 1) % publications.length);
    } else {
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
            const relativeIndex = (index - currentIndex + publications.length) % publications.length;
            // Use a cosine function for smoother opacity transitions
            const opacity = Math.cos(Math.min(Math.abs(relativeIndex - 3) / 3, 1) * Math.PI / 2);
            // Smoother scale transition with cubic easing
            const scale = 1 - Math.pow(Math.abs(relativeIndex - 3) / 4, 2) * 0.3;
            // Use sine function for smoother vertical movement
            const baseOffset = (relativeIndex - 3) * 150;
            const yOffset = baseOffset + Math.sin((relativeIndex - 3) * 0.2) * 5;
            
            return (
              <div
                key={index}
                className="absolute text-center"
                style={{
                  transform: `translateY(${yOffset}%) scale(${scale})`,
                  opacity: opacity,
                  transition: 'all 600ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                  willChange: 'transform, opacity'
                }}
              >
                <a
                  href={pub.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-body text-[2vw] transition-all duration-200 ${
                    Math.abs(relativeIndex - 3) < 0.1
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
