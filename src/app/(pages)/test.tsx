"use client"
import { useRef } from "react";

export default function SmoothScrollTest() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 2000,
      behavior: "smooth",
    });
  };

  return (
    <div>
      
      <div ref={scrollRef} className="flex overflow-x-auto w-full border border-black scroll-smooth">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="min-w-64 h-32 bg-gray-300 m-2 flex items-center justify-center">
            Item {i + 1}
          </div>
        ))}
      </div>
      <button onClick={scrollRight} className="mb-4 px-4 py-2 bg-blue-500 text-white">Scroll</button>
    </div>
  );
}
