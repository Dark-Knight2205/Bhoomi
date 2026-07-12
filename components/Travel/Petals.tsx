"use client";

import Image from "next/image";

const petals = Array.from({ length: 16 });

export default function Petals() {
    return (
        <div className="petals-container">
            {petals.map((_, index) => (
                <Image
                    key={index}
                    src="/petals/kp2_dm.gif"
                    alt=""
                    className="travel-petal"
                    draggable={false}
                    width={64}
                    height={64}
                    unoptimized
                    style={{
                        left: `${(index * 100) / 16}%`,
                        animationDelay: `${index * 0.8}s`,
                        animationDuration: `${14 + (index % 5)}s`,
                        transform: `scale(${0.7 + (index % 4) * 0.15})`,
                    }}
                />
            ))}
        </div>
    );
}