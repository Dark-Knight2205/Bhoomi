import type {
  ClothespinVariant,
  FlowerVariant,
  PaperVariant,
  RibbonVariant,
  RopeVariant,
  StampVariant,
  TapeVariant,
} from "./types";

/* ==========================================================
   Base Paths
========================================================== */

const PHOTO_PATH = "/gallery/photos";
const PAPER_PATH = "/gallery/assets/paper";
const TAPE_PATH = "/gallery/assets/tapes";
const ROPE_PATH = "/gallery/assets/ropes";
const CLOTHESPIN_PATH = "/gallery/assets/clothespins";
const FLOWER_PATH = "/gallery/assets/flowers";
const RIBBON_PATH = "/gallery/assets/ribbons";
const STAMP_PATH = "/gallery/assets/decorations/stamps";
const WAX_PATH = "/gallery/assets/decorations/wax";

/* ==========================================================
   Photos
========================================================== */

export const getPhotoPath = (fileName: string): string =>
  `${PHOTO_PATH}/${fileName}`;

/* ==========================================================
   Paper
========================================================== */

export const getPaperPath = (
  variant: PaperVariant
): string => `${PAPER_PATH}/paper-0${variant}.png`;

/* ==========================================================
   Tape
========================================================== */

export const getTapePath = (
  variant: TapeVariant
): string => `${TAPE_PATH}/tape-0${variant}.png`;

/* ==========================================================
   Rope
========================================================== */

export const getRopePath = (
  variant: RopeVariant
): string => `${ROPE_PATH}/rope-0${variant}.png`;

/* ==========================================================
   Clothespin
========================================================== */

export const getClothespinPath = (
  variant: ClothespinVariant
): string =>
  `${CLOTHESPIN_PATH}/clothespin-0${variant}.png`;

/* ==========================================================
   Ribbon
========================================================== */

const ribbonMap: Record<RibbonVariant, string> = {
  bow: "ribbon-bow.png",
  cream: "ribbon-cream-twist.png",
  linen: "ribbon-linen.png",
};

export const getRibbonPath = (
  variant: RibbonVariant
): string => `${RIBBON_PATH}/${ribbonMap[variant]}`;

/* ==========================================================
   Stamp
========================================================== */

const stampMap: Record<StampVariant, string> = {
  airmail: "airmail-stamp.png",
  blossom: "cherry-blossom-stamp.png",
};

export const getStampPath = (
  variant: StampVariant
): string => `${STAMP_PATH}/${stampMap[variant]}`;

/* ==========================================================
   Flowers
========================================================== */

const flowerMap: Record<FlowerVariant, string> = {
  "babys-breath": "baby's-breath.png",
  daisy: "daisy.png",
  eucalyptus: "eucalyptus.png",
  fern: "fern.png",
  hydrangea: "hydrangea.png",
  lavender: "lavender.png",
  petals: "petals.png",
  sakura: "sakura.png",
  wildflower: "wildflower.png",
};

export const getFlowerPath = (
  variant: FlowerVariant
): string => `${FLOWER_PATH}/${flowerMap[variant]}`;

/* ==========================================================
   Wax Seal
========================================================== */

export const getWaxSealPath = (): string =>
  `${WAX_PATH}/wax-seal.png`;