"use client";

import Polaroid from "./Polaroid";

const memories = [
  {
    image: "/scrapbook/coffee.png",
    title: "☕ First Coffee",
    text: "Reserved for conversations over coffee.",
    className: "memory-one",
    rotate: -8,
    delay: 0.4,
  },
  {
    image: "/scrapbook/train.png",
    title: "🚆 Window Seat",
    text: "Reserved for a journey that has just begun.",
    className: "memory-two",
    rotate: 6,
    delay: 1.2,
  },
  {
    image: "/scrapbook/mountain.png",
    title: "🏔 Dream Destination",
    text: "Reserved for mountains we'll climb together.",
    className: "memory-three",
    rotate: -5,
    delay: 2.0,
  },
  {
    image: "/scrapbook/sunset.png",
    title: "🌅 Beautiful Sunset",
    text: "Reserved for watching sunsets together.",
    className: "memory-four",
    rotate: 9,
    delay: 2.8,
  },
];

export default function MemoryBoard() {
  return (
    <section className="memory-board">
      {memories.map((item, index) => (
        <Polaroid
          key={index}
          {...item}
        />
      ))}
    </section>
  );
}