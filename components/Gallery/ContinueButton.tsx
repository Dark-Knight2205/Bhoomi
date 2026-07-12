"use client";

import { motion } from "framer-motion";

import { buttonVariants } from "./motion";

interface ContinueButtonProps {
  disabled?: boolean;
  loading?: boolean;
  onContinue: () => void;
}

export default function ContinueButton({
  disabled = false,
  loading = false,
  onContinue,
}: ContinueButtonProps) {
  return (
    <motion.button
      type="button"
      className="gallery-continue-button"
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
      disabled={disabled || loading}
      onClick={onContinue}
    >
      <span className="gallery-continue-text">
        {loading ? "Opening..." : "Continue Journey"}
      </span>

      <span
        className="gallery-continue-arrow"
        aria-hidden="true"
      >
        →
      </span>
    </motion.button>
  );
}