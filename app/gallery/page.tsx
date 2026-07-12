import type { Metadata } from "next";

import "@/styles/gallery.css";

import GalleryPage from "@/components/Gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Scrapbook",
  description:
    "A handcrafted scrapbook gallery filled with beautiful memories.",
};

export default function Page() {
  return <GalleryPage />;
}