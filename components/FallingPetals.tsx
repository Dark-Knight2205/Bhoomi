"use client";

const petals = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: (index * 3.3) % 100,
  duration: 5 + (index % 6),
  delay: (index % 5) * 0.5,
}));

export default function FallingPetals() {
  return (
    <>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}
    </>
  );
}