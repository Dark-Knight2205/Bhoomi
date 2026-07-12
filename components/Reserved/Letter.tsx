"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {

    open:boolean;

    onClose:()=>void;

};

export default function Letter({

    open,

    onClose

}:Props){

    const router = useRouter();

    return(

        <AnimatePresence>

            {

                open && (

                    <>

                        <motion.div

                            className="letter-overlay"

                            initial={{opacity:0}}

                            animate={{opacity:1}}

                            exit={{opacity:0}}

                            onClick={onClose}

                        />

                        <motion.article

                            className="letter"

                            initial={{

                                opacity:0,

                                scale:.4,

                                rotateX:-90,

                                y:120

                            }}

                            animate={{

                                opacity:1,

                                scale:1,

                                rotateX:0,

                                y:0

                            }}

                            exit={{

                                opacity:0,

                                scale:.8,

                                y:80

                            }}

                            transition={{

                                duration:.8,

                                ease:[0.22,1,0.36,1]

                            }}

                        >

                            <h2>

                                Dear You,

                            </h2>

                            <p>

                                Some pages are written.

                                <br/><br/>

                                Some are waiting.

                                <br/><br/>

                                Maybe the most beautiful

                                memories are the ones

                                we haven&apos;t created yet.

                                <br/><br/>

                                Until then...

                                I&apos;ll keep a place

                                for them here.

                            </p>

                            <button

    className="letter-next"

    onClick={() => router.push("/gallery")}

>

    Continue →

</button>

                        </motion.article>

                    </>

                )

            }

        </AnimatePresence>

    );

}