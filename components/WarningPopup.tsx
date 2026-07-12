"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type WarningPopupProps = {
  open: boolean;
  percentage: number;
  onContinue: () => void;
};

export default function WarningPopup({
  open,
  percentage,
  onContinue,
}: WarningPopupProps) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (!open) return;

    const audio = new Audio("/music/magic.mp3");

    audio.volume = 0.35;

    audio.play().catch(() => {});

  }, [open]);

  function handleContinue() {

    if (loading) return;

    setLoading(true);

    onContinue();

  }

  return (

    <AnimatePresence>

      {open && (

        <motion.div
          className="warning-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .35 }}
        >

          <motion.div
            className="warning-card"
            initial={{
              scale: .7,
              opacity: 0,
              y: 40
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 16
            }}
          >

            <div className="warning-icon">
              ⚠️
            </div>

            <h2>
              Too Cute To Handle!
            </h2>

            <p>
              Our Cuteness Meter only supports values up to
              <strong> 100%</strong>
            </p>

            <div className="warning-percentage">
              {percentage}%
            </div>

            <p>
              Somehow... you reached
              <strong> 120%</strong> 💖
            </p>

            <p>
              Congratulations!<br />
              You officially broke the Cuteness Meter. 🌸✨
            </p>

            <button
              className="continue-btn"
              onClick={handleContinue}
              disabled={loading}
            >
              🌸 Continue Journey →
            </button>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}