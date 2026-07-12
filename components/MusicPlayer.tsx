"use client";

import { useEffect } from "react";

export default function MusicPlayer() {

  useEffect(() => {

    const audio = new Audio("/music/theme.mp3");

    audio.loop = true;

    audio.volume = 0.35;

    audio.play().catch(() => {});

    return () => audio.pause();

  }, []);

  return null;
}