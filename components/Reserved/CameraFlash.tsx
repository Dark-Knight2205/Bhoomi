"use client";

import { motion } from "framer-motion";

export default function CameraFlash() {

    return (

        <motion.div

            className="camera-flash"

            initial={{

                opacity:0,

                scale:.2

            }}

            animate={{

                opacity:[

                    0,
                    1,
                    .45,
                    0

                ],

                scale:[

                    .2,
                    1.4,
                    2.6

                ]

            }}

            transition={

                {

                    delay:.55,

                    duration:.55

                }

            }

        />

    );

}