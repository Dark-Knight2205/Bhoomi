"use client";

import { AnimatePresence, motion } from "framer-motion";

type StoryItem = {
  icon: string;
  title: string;
  text: string;
};

type TimelineCardProps = {
  item: StoryItem;
};

export default function TimelineCard({
  item,
}: TimelineCardProps) {

  return (

    <AnimatePresence mode="wait">

      <motion.div

        key={item.title}

        className="story-wrapper"

        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
          filter: "blur(10px)",
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}

        exit={{
          opacity: 0,
          y: -35,
          scale: 0.96,
          filter: "blur(10px)",
        }}

        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}

      >

        <div className="story-icon-container">

  <motion.div

    className={`story-glow glow-${item.title
      .toLowerCase()
      .replace(/\s+/g, "-")}`}

    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.45, 0.8, 0.45],
    }}

    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}

  />

  <motion.div

    className="story-icon"

    animate={{
      y: [0, -8, 0],
      rotate: [0, -4, 4, 0],
      scale: [1, 1.06, 1],
    }}

    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}

  >

    {item.icon}

  </motion.div>

</div>

        <motion.h2

          initial={{
            opacity: 0,
            y: 15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.15,
          }}

        >

          {item.title}

        </motion.h2>

        <motion.p

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.25,
          }}

        >

          {item.text}

        </motion.p>

      </motion.div>

    </AnimatePresence>

  );

}