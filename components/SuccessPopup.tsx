"use client";

import { motion, AnimatePresence } from "framer-motion";

type SuccessPopupProps = {
  show: boolean;
};

export default function SuccessPopup({
  show,
}: SuccessPopupProps) {

  return (

    <AnimatePresence>

      {show && (

        <motion.div
          className="success-popup"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 0.35,
          }}
        >

          <motion.div
            className="success-card"

            initial={{
              scale: 0.8,
              opacity: 0,
              y: 40,
            }}

            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}

            transition={{
              type: "spring",
              stiffness: 180,
              damping: 15,
            }}
          >

            <div className="success-emoji">
              🌸 💖 ✨
            </div>

            <h2>
              Yayyyyy!!
            </h2>

            <p>
              You just made my day! 🥹
            </p>

            <p>
              Thank you for saying <strong>Yes</strong>.
            </p>

            <p>
              Our Sakura Journey continues... 🌸
            </p>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}