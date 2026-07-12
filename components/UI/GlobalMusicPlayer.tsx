"use client";

import { useEffect } from "react";
import { useMusic } from "@/context/MusicContext";

export default function GlobalMusicPlayer() {
  const { audioRef, volume } = useMusic();

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;
  }, [audioRef, volume]);

  return (
    <audio
      ref={audioRef}
      src="/music/theme.mp3"
      preload="auto"
      loop
    />
  );
}