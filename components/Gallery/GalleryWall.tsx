"use client";

import MemoryCard from "./MemoryCard";
import type { MemoryCardData } from "./types";

interface GalleryWallProps {
  memories: MemoryCardData[];
}

export default function GalleryWall({
  memories,
}: GalleryWallProps) {
  return (
    <section className="gallery-wall">

      <div className="gallery-wall-inner">

        {memories.map((memory) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
          />
        ))}

      </div>

    </section>
  );
}