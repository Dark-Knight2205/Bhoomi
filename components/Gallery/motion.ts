import type {
  Variants,
  Transition,
  TargetAndTransition,
} from "framer-motion";

import { ANIMATION } from "./constants";

/* ==========================================================
   Shared Transition
========================================================== */

export const defaultTransition: Transition = {
  duration: ANIMATION.DURATION,
  ease: [0.22, 1, 0.36, 1],
};

/* ==========================================================
   Page
========================================================== */

export const pageVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.35,
    },
  },
};

/* ==========================================================
   Header
========================================================== */

export const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      ...defaultTransition,
      duration: 0.8,
    },
  },
};
/* ==========================================================
   Subtitle
========================================================== */

export const subtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      ...defaultTransition,
      delay: 0.3,
      duration: 0.7,
    },
  },
};

/* ==========================================================
   Memory Card
========================================================== */

export const memoryCardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 45,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      ...defaultTransition,
      duration: 0.75,
    },
  },
};

/* ==========================================================
   Decoration
========================================================== */

export const decorationVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      ...defaultTransition,
      duration: 0.9,
    },
  },
};

/* ==========================================================
   Continue Button
========================================================== */

export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      ...defaultTransition,
      delay: 1,
      duration: 0.7,
    },
  },

  hover: {
    scale: 1.03,
    y: -2,

    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  tap: {
    scale: 0.97,
  },
};

/* ==========================================================
   Progress Tracker
========================================================== */

export const progressVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: defaultTransition,
  },
};

/* ==========================================================
   Floating Animation
========================================================== */

export const getFloatingAnimation = (
  id: number
): TargetAndTransition => ({

  scale: [1, 1.003, 1],

  rotate: [
    0,
    id % 2 === 0 ? 0.4 : -0.4,
    0,
  ],

  transition: {

    duration: 8 + (id % 3),

    delay: id * 0.4,

    repeat: Infinity,

    repeatType: "mirror",

    ease: "easeInOut",

  },

});

/* ==========================================================
   Hover Animation
========================================================== */

export const hoverAnimation: TargetAndTransition = {
  scale: 1.025,
  y: -4,

  transition: {
    duration: 0.28,
    ease: [0.22, 1, 0.36, 1],
  },
};