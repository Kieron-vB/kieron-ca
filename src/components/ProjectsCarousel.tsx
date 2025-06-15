"use client";

import React, { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectsCarouselProps {
  items: Project[];
}

export default function ProjectsCarousel({ items }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = items.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % count);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="min-w-full flex-shrink-0 p-4">
            <a
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-text">{item.description}</p>
            </a>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background bg-opacity-50 text-text rounded-full p-2 focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background bg-opacity-50 text-text rounded-full p-2 focus:outline-none"
      >
        &#8594;
      </button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? 'bg-text' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}