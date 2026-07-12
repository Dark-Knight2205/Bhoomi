"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";

interface MusicContextType {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  volume: number;

  startMusic: () => Promise<void>;
  pauseMusic: () => void;
  toggleMusic: () => Promise<void>;
  setVolume: (volume: number) => void;
}

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, updateVolume] = useState(0.3);

  const fade = (
    target: number,
    callback?: () => void
  ) => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const step = target > audio.volume ? 0.02 : -0.02;

    const interval = setInterval(() => {
      const next = audio.volume + step;

      if (
        (step > 0 && next >= target) ||
        (step < 0 && next <= target)
      ) {
        audio.volume = target;

        clearInterval(interval);

        callback?.();

        return;
      }

      audio.volume = next;
    }, 60);
  };

  const startMusic = async () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    if (isPlaying) return;

    audio.volume = 0;

    await audio.play();

    setIsPlaying(true);

    fade(volume);
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    fade(0, () => {
      audio.pause();
      setIsPlaying(false);
    });
  };

  const toggleMusic = async () => {
    if (isPlaying) pauseMusic();
    else await startMusic();
  };

  const setVolume = (value: number) => {
    updateVolume(value);

    if (audioRef.current)
      audioRef.current.volume = value;
  };

  return (
    <MusicContext.Provider
      value={{
        audioRef,
        isPlaying,
        volume,
        startMusic,
        pauseMusic,
        toggleMusic,
        setVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);

  if (!context)
    throw new Error("MusicProvider missing");

  return context;
}