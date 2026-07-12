"use client";

import Image from "next/image";

export default function Decorations() {

    return (

        <>

          

            {/* ======================================
                PAPER CLIPS
            ======================================= */}

            <Image
                src="/scrapbook/clips.png"
                alt=""
                width={28}
                height={28}
                className="clip clip-one"
                draggable={false}
            />

            <Image
                src="/scrapbook/clips.png"
                alt=""
                width={28}
                height={28}
                className="clip clip-two"
                draggable={false}
            />

            <Image
                src="/scrapbook/clips.png"
                alt=""
                width={28}
                height={28}
                className="clip clip-three"
                draggable={false}
            />

            <Image
                src="/scrapbook/clips.png"
                alt=""
                width={28}
                height={28}
                className="clip clip-four"
                draggable={false}
            />

            {/* ======================================
                FLOWERS
            ======================================= */}

            <div className="flower flower-1">🌸</div>
            <div className="flower flower-2">🌸</div>
            <div className="flower flower-3">🌸</div>
            <div className="flower flower-4">🌸</div>
            <div className="flower flower-5">🌸</div>

        </>

    );

}