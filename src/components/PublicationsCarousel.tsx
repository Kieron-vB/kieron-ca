"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Publication {
  title: string;
  pdf: string;
}

interface PublicationsCarouselProps {
  items: Publication[];
}

export default function PublicationsCarousel({ items }: PublicationsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = items.length;

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % count);
  };

  // Compute visible items (3 at a time)
  const visibleItems = [0, 1, 2].map((offset) => items[(currentIndex + offset) % count]);

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <button onClick={prev} className="p-2">
        ▲
      </button>
      <div className="overflow-hidden w-full">
        <AnimatePresence initial={false} custom={direction}>
          {visibleItems.map((item, idx) => (
            <motion.div
              key={`${item.title}-${idx}-${currentIndex}`}
              custom={direction}
              initial={{ y: direction * 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -direction * 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              layout
              className="py-2 text-center"
              style={{ position: 'relative' }}
            >
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-mobile lg:text-desktop font-body hover:underline"
              >
                {item.title}
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button onClick={next} className="p-2">
        ▼
      </button>
    </div>
  );
}