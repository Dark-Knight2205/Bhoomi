"use client";

import { motion } from "framer-motion";

export default function WoodenSign() {

    return (

        <motion.div

            className="wooden-sign-wrapper"

            initial={{
                opacity:0,
                y:30,
                scale:.92,
            }}

            animate={{
                opacity:1,
                y:0,
                scale:1,
            }}

            transition={{
                duration:1,
                ease:[0.22,1,0.36,1],
            }}

        >

            {/* Glow */}

            <div className="wood-glow" />

            {/* Left Petal */}

            <div className="wood-petal petal-left">
                🌸
            </div>

            {/* Right Petal */}

            <div className="wood-petal petal-right">
                🌸
            </div>

            {/* Sign */}

            <motion.img

                src="/ui/wooden-sign.png"

                alt="Wooden Sign"

                className="wooden-sign"

                animate={{
                    rotate:[-1.2,1.2,-1.2],
                }}

                transition={{
                    duration:6,
                    repeat:Infinity,
                    ease:"easeInOut",
                }}

                draggable={false}

            />

        </motion.div>

    );

}