"use client";

import Image from "next/image";

export default function Birds() {

    return (

        <>

            <Image
                src="/birds/birds.png"
                alt=""
                className="travel-birds birds-one"
                draggable={false}
                width={100}
                height={100}
            />

            <Image
                src="/birds/birds.png"
                alt=""
                className="travel-birds birds-two"
                draggable={false}
                width={100}
                height={100}
            />

        </>

    );

}