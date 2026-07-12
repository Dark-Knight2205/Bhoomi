"use client";

import { useEffect, useRef } from "react";

export default function TimelineParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const generated = Array.from({ length: 22 }, () => {
      const span = document.createElement("span");

      span.className = "particle";

      span.style.left = `${Math.random() * 100}%`;
      span.style.top = `${Math.random() * 100}%`;

      span.style.animationDelay = `${Math.random() * 8}s`;
      span.style.animationDuration = `${8 + Math.random() * 8}s`;

      span.style.fontSize = `${12 + Math.random() * 14}px`;

      span.textContent = Math.random() > 0.55 ? "🌸" : "✨";

      return span;
    });

    generated.forEach((particle) => container.appendChild(particle));

    return () => {
      generated.forEach((particle) => particle.remove());
    };
  }, []);

  return <div ref={containerRef} className="timeline-particles" />;
}