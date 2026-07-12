"use client";

import Image from "next/image";

export default function Butterfly() {

    return (

        <>

            <Image
                src="/effects/butterfly.gif"
                alt="butterfly"
                className="travel-butterfly butterfly-one"
                draggable={false}
                width={64}
                height={64}
            />

            <Image
                src="/effects/butterfly.gif"
                alt="butterfly"
                className="travel-butterfly butterfly-two"
                draggable={false}
                width={64}
                height={64}
            />

        </>

    );

}