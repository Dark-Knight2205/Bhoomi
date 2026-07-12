/* ==========================================================
   Gallery Types
========================================================== */

/* ==========================================================
   Card Styles
========================================================== */

export type MemoryStyle =
  | "rope"
  | "tape"
  | "journal"
  | "polaroid"
  | "vintage";

/* ==========================================================
   Decoration Variants
========================================================== */

export type PaperVariant = 1 | 2 | 3 | 4;

export type TapeVariant =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8;

export type RopeVariant =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6;

export type ClothespinVariant =
  | 1
  | 2
  | 3
  | 4;

export type RibbonVariant =
  | "bow"
  | "cream"
  | "linen";

export type StampVariant =
  | "airmail"
  | "blossom";

export type FlowerVariant =
  | "babys-breath"
  | "daisy"
  | "eucalyptus"
  | "fern"
  | "hydrangea"
  | "lavender"
  | "petals"
  | "sakura"
  | "wildflower";

/* ==========================================================
   Memory Content
========================================================== */

export interface MemoryContent {
  image: string;
  title: string;
  subtitle?: string;
  date?: string;
  location?: string;
}

/* ==========================================================
   Memory Layout
========================================================== */

export interface MemoryLayout {
  /**
   * Horizontal position (%)
   */
  x: number;

  /**
   * Vertical position (%)
   */
  y: number;

  /**
   * Rotation (degrees)
   */
  rotation: number;

  /**
   * Stack order
   */
  zIndex: number;
}

/* ==========================================================
   Decorations
========================================================== */

export interface MemoryDecorations {
  paper: PaperVariant;

  tape?: TapeVariant;

  rope?: RopeVariant;

  clothespin?: ClothespinVariant;

  ribbon?: RibbonVariant;

  stamp?: StampVariant;

  flower?: FlowerVariant;

  waxSeal?: boolean;
}

/* ==========================================================
   Memory Card
========================================================== */

export interface MemoryCardData {
  id: number;

  style: MemoryStyle;

  content: MemoryContent;

  layout: MemoryLayout;

  decorations: MemoryDecorations;
}

/* ==========================================================
   Header
========================================================== */

export interface GalleryHeaderData {
  title: string;
  subtitle: string;
}

/* ==========================================================
   Progress Tracker
========================================================== */

export interface GalleryProgressData {
  current: number;
  total: number;
  label: string;
}

/* ==========================================================
   Continue Button
========================================================== */

export interface ContinueButtonData {
  text: string;
  href: string;
}

/* ==========================================================
   Gallery Data
========================================================== */

export interface GalleryData {
  header: GalleryHeaderData;

  memories: MemoryCardData[];

  progress: GalleryProgressData;

  continueButton: ContinueButtonData;
}