"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { decorationVariants } from "./motion";

interface PaperPiece {
  id: string;

  src: string;

  className: string;

  width: number;

  height: number;

  rotation: number;
}

const papers: PaperPiece[] = [
  {
    id: "paper-1",
    src: "/gallery/assets/paper/paper-01.png",
    className: "paper-piece paper-left",

    width: 330,
    height: 360,

    rotation: -8,
  },

  {
    id: "paper-2",
    src: "/gallery/assets/paper/paper-02.png",
    className: "paper-piece paper-center",

    width: 360,
    height: 380,

    rotation: 6,
  },

  {
    id: "paper-3",
    src: "/gallery/assets/paper/paper-03.png",
    className: "paper-piece paper-right",

    width: 330,
    height: 360,

    rotation: -5,
  },

  {
    id: "paper-4",
    src: "/gallery/assets/paper/paper-04.png",
    className: "paper-piece paper-bottom",

    width: 360,
    height: 380,

    rotation: 4,
  },
];

export default function PaperLayer() {
  return (
    <div
      className="paper-layer"
      aria-hidden="true"
    >
      {papers.map((paper, index) => (
        <motion.div
          key={paper.id}
          className={paper.className}
          variants={decorationVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: index * 0.1,
          }}
          style={{
            rotate: `${paper.rotation}deg`,
          }}
        >
          <Image
            src={paper.src}
            alt=""
            width={paper.width}
            height={paper.height}
            draggable={false}
            className="paper-image"
          />
        </motion.div>
      ))}
    </div>
  );
}