"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TravelContent() {

    const router = useRouter();

    return (

        <motion.section

            className="travel-story"

            initial={{
                opacity:0,
                x:80
            }}

            animate={{
                opacity:1,
                x:0
            }}

            transition={{
                duration:1.4,
                ease:[0.22,1,0.36,1]
            }}

        >

            <motion.div

                className="story-tag"

                initial={{
                    opacity:0,
                    y:20
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    delay:.3
                }}

            >

            

            </motion.div>

            <motion.h1

                initial={{
                    opacity:0,
                    y:25
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    delay:.5
                }}

            >
              

<div className="travel-quote">

    &quot;Not every beautiful destination
    
    is marked on a map.&quot;

</div>

                Some journeys begin with a single hello

            </motion.h1>

           <motion.p
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
>

    Some people travel
    to escape the world.

    <br /><br />

    But I think...

    you travel to find pieces of it.

    <br /><br />

    The quiet mountains.

    <br />

    Endless greenery.

    <br />

    Fresh morning air.

    <br />

    The kind of silence
    that somehow says everything.

    <br /><br />

    Maybe that&apos;s why
    every place you visit
    feels a little more beautiful.

    <br /><br />

    And maybe...

    one day,

    we&apos;ll have a few stories
    from those places too.

</motion.p>

            <motion.button

                className="travel-button"

                initial={{
                    opacity:0,
                    y:20
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    delay:1.2
                }}

                whileHover={{
                    scale:1.05
                }}

                whileTap={{
                    scale:.97
                }}

                onClick={() => router.push("/reserved")}

            >

                Let&apos;s Keep Walking →

            </motion.button>

        </motion.section>

    );

}
