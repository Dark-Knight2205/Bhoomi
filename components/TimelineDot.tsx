"use client";

import { motion } from "framer-motion";

type TimelineDotsProps = {
  active: number;
  total: number;
};

export default function TimelineDots({
  active,
  total,
}: TimelineDotsProps) {

  return (

    <div className="timeline-dots">

      {Array.from({ length: total }).map((_, index) => (

        <div
          key={index}
          className="timeline-step"
        >

          <motion.div

            className={`timeline-dot ${
              index <= active ? "active" : ""
            }`}

            animate={{
              scale: index === active ? 1.35 : 1,
            }}

            transition={{
              type: "spring",
              stiffness: 250,
              damping: 16,
            }}

          />

          {index !== total - 1 && (

            <div className="timeline-line">

              <motion.div

                className="timeline-line-fill"

                initial={{
                  width: "0%",
                }}

                animate={{
                  width:
                    index < active
                      ? "100%"
                      : "0%",
                }}

                transition={{
                  duration: .45,
                }}

              />

            </div>

          )}

        </div>

      ))}

    </div>

  );

}