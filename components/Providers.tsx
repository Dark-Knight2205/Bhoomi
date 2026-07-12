"use client";

import { ReactNode } from "react";

import { MusicProvider } from "@/context/MusicContext";

import GlobalMusicPlayer from "@/components/UI/GlobalMusicPlayer";
import MusicButton from "@/components/UI/MusicButton";

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MusicProvider>

      <GlobalMusicPlayer />

      <MusicButton />

      {children}

    </MusicProvider>
  );
}