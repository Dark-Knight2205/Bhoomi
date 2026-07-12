import type { GalleryData } from "./types";

const galleryData: GalleryData = {
  /* ==========================================================
     Header
  ========================================================== */

  header: {
    title: "A Little Gallery",
    subtitle:
      "A few beautiful moments, gathered into one little scrapbook.",
  },

  /* ==========================================================
     Memories
  ========================================================== */

  memories: [
    {
      id: 1,

      style: "rope",

      content: {
        image: "photo-01.jpg",
        title: "A Lovely Smile",
        subtitle: "A smile that brightens the frame.",
      },

      layout: {
        x: 8,
        y: 8,
        rotation: -8,
        zIndex: 2,
      },

      decorations: {
        paper: 1,
        rope: 1,
        clothespin: 1,
        stamp: "airmail",
      },
    },

    {
      id: 2,

      style: "polaroid",

      content: {
        image: "photo-02.jpg",
        title: "Bright Moments",
        subtitle: "Some moments naturally stand out.",
      },

      layout: {
        x: 31,
        y: 7,
        rotation: 6,
        zIndex: 3,
      },

      decorations: {
        paper: 2,
        tape: 2,
        flower: "sakura",
      },
    },

    {
      id: 3,

      style: "journal",

      content: {
        image: "photo-03.jpg",
        title: "Everyday Magic",
        subtitle: "The ordinary can be beautiful too.",
      },

      layout: {
        x: 56,
        y: 11,
        rotation: -5,
        zIndex: 4,
      },

      decorations: {
        paper: 3,
        tape: 4,
        flower: "lavender",
      },
    },

    {
      id: 4,

      style: "vintage",

      content: {
        image: "photo-04.jpg",
        title: "Golden Glow",
        subtitle: "Sunlight and a genuine smile.",
      },

      layout: {
        x: 72,
        y: 16,
        rotation: 8,
        zIndex: 5,
      },

      decorations: {
        paper: 4,
        ribbon: "linen",
        stamp: "blossom",
        waxSeal: true,
      },
    },

    {
      id: 5,

      style: "tape",

      content: {
        image: "photo-05.jpg",
        title: "Radiant",
        subtitle: "Confidence captured in a single frame.",
      },

      layout: {
        x: 14,
        y: 53,
        rotation: 5,
        zIndex: 6,
      },

      decorations: {
        paper: 1,
        tape: 6,
        ribbon: "bow",
      },
    },

    {
      id: 6,

      style: "rope",

      content: {
        image: "photo-06.jpg",
        title: "Grace in Motion",
        subtitle: "A moment caught effortlessly.",
      },

      layout: {
        x: 39,
        y: 49,
        rotation: -6,
        zIndex: 4,
      },

      decorations: {
        paper: 2,
        rope: 4,
        clothespin: 2,
        flower: "eucalyptus",
      },
    },

    {
      id: 7,

      style: "journal",

      content: {
        image: "photo-07.jpg",
        title: "Simply You",
        subtitle: "Unfiltered and authentic.",
      },

      layout: {
        x: 58,
        y: 57,
        rotation: 4,
        zIndex: 5,
      },

      decorations: {
        paper: 3,
        tape: 7,
        flower: "hydrangea",
      },
    },

    {
      id: 8,

      style: "vintage",

      content: {
        image: "photo-08.jpg",
        title: "One More Smile",
        subtitle: "A picture worth remembering.",
      },

      layout: {
        x: 76,
        y: 58,
        rotation: -7,
        zIndex: 7,
      },

      decorations: {
        paper: 4,
        ribbon: "cream",
        stamp: "airmail",
        waxSeal: true,
      },
    },
  ],

  /* ==========================================================
     Progress
  ========================================================== */

  progress: {
    current: 7,
    total: 11,
    label: "Gallery",
  },

  /* ==========================================================
     Continue
  ========================================================== */

  continueButton: {
    text: "Continue Journey",
    href: "/letter",
  },
};

export default galleryData;