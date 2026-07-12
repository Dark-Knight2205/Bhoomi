"use client";

import { useMusic } from "@/context/MusicContext";
import { useState } from "react";

export default function MusicButton() {
  const {
    isPlaying,
    toggleMusic,
    volume,
    setVolume,
  } = useMusic();

  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`music-player ${expanded ? "expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <button
        className="music-toggle"
        onClick={toggleMusic}
        aria-label="Toggle Music"
      >
        {isPlaying ? "🎵" : "🔇"}
      </button>

      <div className="music-controls">
        <input
          type="range"
          min={0}
          max={100}
          value={volume * 100}
          onChange={(e) =>
            setVolume(Number(e.target.value) / 100)
          }
        />
      </div>
    </div>
  );
}