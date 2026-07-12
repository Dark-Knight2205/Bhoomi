"use client";

import Image from "next/image";


export default function Camera(){

    return(

        <div className="camera">

            <Image

                src="/scrapbook/camera.png"

                alt="camera"

                width={210}

                height={210}

                priority

                draggable={false}

            />

        </div>

    );

}