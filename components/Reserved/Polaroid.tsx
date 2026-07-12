"use client";

import type { CSSProperties } from "react";
import Image from "next/image";

type Props = {
    image: string;
    title: string;
    text: string;
    className: string;
    rotate: number;
    delay: number;
};

export default function Polaroid({

    image,

    title,

    text,

    className,

    rotate,

    delay,

}:Props) {

    const style: CSSProperties & Record<string, string> = {

    "--rotate": `${rotate}deg`,

    "--delay": `${delay}s`

};

    return (

        <article

            className={`polaroid ${className}`}

            style={style}

        >

            {/* Frame */}

            <div className="polaroid-paper">

                {/* Photo */}

                <div className="polaroid-photo">

                    <Image

                       
                      src={image}

                        alt="Memory"

                        fill

                        draggable={false}

                        className="memory-image"

                    />

                </div>

                {/* Caption */}

                <div className="polaroid-bottom">

                    <h3>

                        {title}

                    </h3>

                    <p>

                        {text}

                    </p>

                </div>

            </div>

        </article>

    );

}