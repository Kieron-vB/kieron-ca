"use client";

import React, { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface EnhancedProjectsCarouselProps {
  items: Project[];
}

export default function EnhancedProjectsCarousel({ items }: EnhancedProjectsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = items.length;

  const goToSlide = (index: number) => {
    const container = containerRef.current;
    const slide = slidesRef.current[index];
    if (container && slide) {
      const offset = slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
      container.scrollTo({ left: offset, behavior: 'smooth' });
    }
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + count) % count);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % count);
  };

  useEffect(() => {
    // center first slide on mount
    goToSlide(0);
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (slidesRef.current[idx] = el)}
            className="snap-center flex-shrink-0 w-[80%] md:w-[60%] lg:w-[40%] mx-4"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-2 text-xl font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-1 text-text">{item.description}</p>
            </a>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background bg-opacity-50 p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background bg-opacity-50 p-2 rounded-full"
      >
        &#8594;
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? 'bg-text' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}