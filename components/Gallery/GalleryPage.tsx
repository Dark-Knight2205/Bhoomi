"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";

import Background from "./Background";
import ContinueButton from "./ContinueButton";
import Decorations from "./Decorations";
import GalleryWall from "./GalleryWall";
import Header from "./Header";


import galleryData from "./gallery.data";

export default function GalleryPage() {
  const router = useRouter();

  const memories = useMemo(
    () => galleryData.memories,
    []
  );

  const handleContinue = () => {
    router.push("/ending");
  };

  return (
    <main className="gallery-page">
      <Background />

      <Decorations />

      <Header />

      <GalleryWall memories={memories} />

      

      <ContinueButton
        onContinue={handleContinue}
      />
    </main>
  );
}