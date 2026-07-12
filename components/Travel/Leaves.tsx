"use client";

const leaves = Array.from({ length: 18 });

// Precompute random styles at module initialization to avoid calling
// impure Math.random during render/useMemo.
const leafStyles = leaves.map(() => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 20}s`,
    animationDuration: `${18 + Math.random() * 10}s`,
    transform: `scale(${0.6 + Math.random() * 0.7})`,
}));

export default function Leaves() {
    return (
        <div className="leaves-container">
            {leaves.map((_, index) => (
                <div
                    key={index}
                    className={`leaf leaf-${(index % 3) + 1}`}
                    style={leafStyles[index]}
                />
            ))}
        </div>
    );
}