import type { Variants } from "framer-motion";

/* =========================================
   PAGE
========================================= */

export const pageVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
};

/* =========================================
   HERO
========================================= */

export const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
    },
  },
};

/* =========================================
   CARD
========================================= */

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.9,
    },
  },
};

/* =========================================
   PARAGRAPH
========================================= */

export const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

/* =========================================
   BUTTON
========================================= */

export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.3,
      duration: 0.8,
    },
  },
};