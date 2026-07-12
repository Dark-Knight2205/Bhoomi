"use client";

import { motion } from "framer-motion";

import galleryData from "./gallery.data";

import {
  headerVariants,
  subtitleVariants,
} from "./motion";

export default function Header() {
  const { title, subtitle } = galleryData.header;

  return (
    <header className="gallery-header">

      {/* ======================================
          TITLE
      ====================================== */}

      <motion.h1
        className="gallery-title"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        {title}
      </motion.h1>

      {/* ======================================
          DIVIDER
      ====================================== */}

      <motion.div
        className="gallery-divider"
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          delay: 0.35,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* ======================================
          SUBTITLE
      ====================================== */}

      <motion.p
        className="gallery-subtitle"
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
      >
        {subtitle}
      </motion.p>

    </header>
  );
}