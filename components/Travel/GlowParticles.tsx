"use client";

export default function GlowParticles() {
  return (
    <>
      {Array.from({ length: 24 }).map((_, index) => (
        <span
          key={index}
          className={`glow-particle particle-${index + 1}`}
        />
      ))}
    </>
  );
}