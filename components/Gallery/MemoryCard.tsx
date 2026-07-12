"use client";

import type { CSSProperties } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

import type { MemoryCardData } from "./types";

import {
  CLOTHESPIN,
  FLOWER,
  MEMORY_CARD,
  PAPER,
  RIBBON,
  ROPE,
  STAMP,
  TAPE,
  WAX_SEAL,
} from "./constants";

import {
  getClothespinPath,
  getFlowerPath,
  getPaperPath,
  getPhotoPath,
  getRibbonPath,
  getRopePath,
  getStampPath,
  getTapePath,
  getWaxSealPath,
} from "./utils";

import {
  hoverAnimation,
  memoryCardVariants,
  getFloatingAnimation,
} from "./motion";
interface MemoryCardProps {
  memory: MemoryCardData;
}

export default function MemoryCard({
  memory,
}: MemoryCardProps) {
  const {
    content,
    layout,
    decorations,
    style,
  } = memory;

  const cssVariables = {
    "--card-x": `${layout.x}%`,
    "--card-y": `${layout.y}%`,
    "--card-rotation": `${layout.rotation}deg`,
  } as CSSProperties;

  return (
    <motion.article
      layout
      className={`memory-card memory-card--${style}`}
      style={{
        ...cssVariables,
        zIndex: layout.zIndex,
      }}
      variants={memoryCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
      }}

      animate={getFloatingAnimation(memory.id)}

      whileHover={hoverAnimation}
    >
      <div className="memory-card-inner">

        {/* ======================================
            PAPER
        ====================================== */}

        <Image
          src={getPaperPath(decorations.paper)}
          alt=""
          width={PAPER.WIDTH}
          height={PAPER.HEIGHT}
          className="memory-paper"
          draggable={false}
        />

        {/* ======================================
            ROPE
        ====================================== */}

        {decorations.rope && (
          <Image
            src={getRopePath(decorations.rope)}
            alt=""
            width={ROPE.WIDTH}
            height={ROPE.HEIGHT}
            className="memory-rope"
            draggable={false}
          />
        )}

        {/* ======================================
            CLOTHESPIN
        ====================================== */}

        {decorations.clothespin && (
          <Image
            src={getClothespinPath(decorations.clothespin)}
            alt=""
            width={CLOTHESPIN.WIDTH}
            height={CLOTHESPIN.HEIGHT}
            className="memory-clothespin"
            draggable={false}
          />
        )}

        {/* ======================================
            TAPE
        ====================================== */}

        {decorations.tape && (
          <Image
            src={getTapePath(decorations.tape)}
            alt=""
            width={TAPE.WIDTH}
            height={TAPE.HEIGHT}
            className="memory-tape"
            draggable={false}
          />
        )}

        {/* ======================================
            RIBBON
        ====================================== */}

        {decorations.ribbon && (
          <Image
            src={getRibbonPath(decorations.ribbon)}
            alt=""
            width={RIBBON.WIDTH}
            height={RIBBON.HEIGHT}
            className="memory-ribbon"
            draggable={false}
          />
        )}

        {/* ======================================
            FLOWER
        ====================================== */}

        {decorations.flower && (
          <Image
            src={getFlowerPath(decorations.flower)}
            alt=""
            width={FLOWER.SIZE}
            height={FLOWER.SIZE}
            className="memory-flower"
            draggable={false}
          />
        )}

        {/* ======================================
            STAMP
        ====================================== */}

        {decorations.stamp && (
          <Image
            src={getStampPath(decorations.stamp)}
            alt=""
            width={STAMP.SIZE}
            height={STAMP.SIZE}
            className="memory-stamp"
            draggable={false}
          />
        )}

        {/* ======================================
            WAX SEAL
        ====================================== */}

        {decorations.waxSeal && (
          <Image
            src={getWaxSealPath()}
            alt=""
            width={WAX_SEAL.SIZE}
            height={WAX_SEAL.SIZE}
            className="memory-wax"
            draggable={false}
          />
        )}

        {/* ======================================
            PHOTO
        ====================================== */}

        <figure className="memory-figure">

          <Image
            src={getPhotoPath(content.image)}
            alt={content.title}
            width={MEMORY_CARD.PHOTO_WIDTH}
            height={MEMORY_CARD.PHOTO_HEIGHT}
            className="memory-photo"
            draggable={false}
            quality={100}
            priority={memory.id <= 2}
            loading={memory.id <= 2 ? "eager" : "lazy"}
            sizes="
              (max-width:768px) 42vw,
              (max-width:1024px) 26vw,
              220px
            "
          />

          {/* ======================================
              CAPTION
          ====================================== */}

          <figcaption className="memory-caption">

            <h3 className="memory-title">
              {content.title}
            </h3>

            {content.subtitle && (
              <p className="memory-subtitle">
                {content.subtitle}
              </p>
            )}

            {(content.location || content.date) && (
              <span className="memory-meta">
                {[content.location, content.date]
                  .filter(Boolean)
                  .join(" • ")}
              </span>
            )}

          </figcaption>

        </figure>

      </div>

    </motion.article>
  );
}