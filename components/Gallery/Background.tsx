"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  pageVariants,
} from "./motion";

export default function Background() {
  return (
    <motion.div
      className="gallery-background"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      {/* Wall Texture */}

      <Image
        src="/gallery/assets/background/wall.png"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="gallery-background-image"
      />

      {/* Warm Overlay */}

      <div className="gallery-background-overlay" />

      {/* Soft Light */}

      <motion.div
        className="gallery-background-light"
        animate={{
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vignette */}

      <div className="gallery-background-vignette" />
    </motion.div>
  );
}