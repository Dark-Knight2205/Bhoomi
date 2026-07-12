"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { decorationVariants } from "./motion";

interface DecorationItem {
  id: string;
  src: string;
  className: string;
  width: number;
  height: number;
  rotate?: number;
}

const backDecorations: DecorationItem[] = [
  {
    id: "botanical-piece",
    src: "/gallery/assets/decorations/leaves/botanical-piece.png",
    className: "botanical-piece",
    width: 180,
    height: 180,
    rotate: -18,
  },

  {
    id: "lavender",
    src: "/gallery/assets/flowers/lavender.png",
    className: "page-flower lavender",
    width: 85,
    height: 85,
  },

  {
    id: "eucalyptus",
    src: "/gallery/assets/flowers/eucalyptus.png",
    className: "page-flower eucalyptus",
    width: 110,
    height: 110,
  },
];

const frontDecorations: DecorationItem[] = [
  {
    id: "corner-tl",
    src: "/gallery/assets/decorations/corners/floral-corner-left.png",
    className: "corner corner-top-left",
    width: 150,
    height: 150,
  },

  {
    id: "corner-tr",
    src: "/gallery/assets/decorations/corners/floral-corner-right.png",
    className: "corner corner-top-right",
    width: 150,
    height: 150,
  },

  {
    id: "corner-bl",
    src: "/gallery/assets/decorations/corners/botanical-corner.png",
    className: "corner corner-bottom-left",
    width: 150,
    height: 150,
  },

  {
    id: "corner-br",
    src: "/gallery/assets/decorations/corners/vintage-corner.png",
    className: "corner corner-bottom-right",
    width: 150,
    height: 150,
  },

  {
    id: "feather",
    src: "/gallery/assets/decorations/feather/feather.png",
    className: "page-feather",
    width: 95,
    height: 95,
    rotate: -18,
  },
];

export default function Decorations() {
  return (
    <>
      <div className="gallery-decorations gallery-decorations-back">
        {backDecorations.map((item, index) => (
          <motion.div
            key={item.id}
            className={item.className}
            variants={decorationVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.08 }}
            style={{ rotate: `${item.rotate ?? 0}deg` }}
          >
            <Image
              src={item.src}
              alt=""
              width={item.width}
              height={item.height}
              draggable={false}
            />
          </motion.div>
        ))}
      </div>

      <div className="gallery-decorations gallery-decorations-front">
        {frontDecorations.map((item, index) => (
          <motion.div
            key={item.id}
            className={item.className}
            variants={decorationVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 + index * 0.08 }}
            style={{ rotate: `${item.rotate ?? 0}deg` }}
          >
            <Image
              src={item.src}
              alt=""
              width={item.width}
              height={item.height}
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}