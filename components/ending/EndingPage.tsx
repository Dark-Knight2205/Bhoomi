"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import endingData from "@/app/ending/ending.data";

import {
  pageVariants,
  heroVariants,
  cardVariants,
  paragraphVariants,
  buttonVariants,
} from "@/app/ending/motion";

import { useEndingAnimation } from "@/app/ending/hooks/useEndingAnimation";

import "@/styles/ending.css";

const petals = [
  { id: 1, left: "3%", delay: "0s", duration: "14s" },
  { id: 2, left: "8%", delay: "1.5s", duration: "15s" },
  { id: 3, left: "14%", delay: "3s", duration: "13s" },
  { id: 4, left: "20%", delay: "0.8s", duration: "16s" },
  { id: 5, left: "28%", delay: "2.5s", duration: "14s" },
  { id: 6, left: "35%", delay: "4s", duration: "17s" },
  { id: 7, left: "42%", delay: "1s", duration: "15s" },
  { id: 8, left: "48%", delay: "2.8s", duration: "13s" },
  { id: 9, left: "55%", delay: "0.5s", duration: "16s" },
  { id: 10, left: "62%", delay: "3.2s", duration: "15s" },
  { id: 11, left: "69%", delay: "2s", duration: "17s" },
  { id: 12, left: "76%", delay: "1.2s", duration: "14s" },
  { id: 13, left: "82%", delay: "3.8s", duration: "15s" },
  { id: 14, left: "88%", delay: "0.3s", duration: "16s" },
  { id: 15, left: "94%", delay: "2.4s", duration: "14s" },
  { id: 16, left: "6%", delay: "5s", duration: "18s" },
  { id: 17, left: "18%", delay: "6s", duration: "17s" },
  { id: 18, left: "31%", delay: "5.5s", duration: "16s" },
  { id: 19, left: "45%", delay: "7s", duration: "15s" },
  { id: 20, left: "58%", delay: "6.3s", duration: "18s" },
  { id: 21, left: "70%", delay: "5.8s", duration: "17s" },
  { id: 22, left: "80%", delay: "7.2s", duration: "15s" },
  { id: 23, left: "90%", delay: "6.5s", duration: "16s" },
  { id: 24, left: "97%", delay: "8s", duration: "18s" },
];

export default function EndingPage() {
  const { loaded } = useEndingAnimation();

  return (
    <motion.main
      className="ending-page"
      variants={pageVariants}
      initial="hidden"
      animate={loaded ? "visible" : "hidden"}
    >
      {/* Background */}

      <Image
        src="/ending/background.webp"
        alt="Ending Background"
        fill
        priority
        draggable={false}
        className="ending-background"
      />

      <div className="ending-overlay" />
      <div className="ending-vignette" />
      <div className="ending-light" />

      {/* Falling Petals */}

      <div className="ending-petals">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="petal"
            style={
              {
                "--left": petal.left,
                "--delay": petal.delay,
                "--duration": petal.duration,
              } as React.CSSProperties
            }
          >
            <Image
              src="/ending/petal.gif"
              alt=""
              fill
              draggable={false}
              sizes="40px"
            />
          </div>
        ))}
      </div>

      {/* Content */}

      <section className="ending-content">
        <motion.div
          className="ending-hero"
          variants={heroVariants}
        >
          <span className="ending-label">
            Sakura Journey
          </span>

          <h1>
            {endingData.title}
          </h1>

          <p>
            {endingData.subtitle}
          </p>
        </motion.div>

        <motion.article
          className="ending-card"
          variants={cardVariants}
        >
          {endingData.message.map((paragraph, index) => (
            <motion.p
              key={index}
              className="ending-paragraph"
              variants={paragraphVariants}
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            className="ending-signature"
            variants={paragraphVariants}
          >
            {endingData.signature}
          </motion.div>
        </motion.article>

        <motion.button
          className="ending-button"
          variants={buttonVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {endingData.button}
        </motion.button>
      </section>
    </motion.main>
  );
}