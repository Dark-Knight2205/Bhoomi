"use client";

import Image from "next/image";

export default function Clouds() {

    return (

        <>

            <Image
                src="/clouds/cloud1.png"
                alt=""
                className="travel-cloud cloud-one"
                draggable={false}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
            />

            <Image
                src="/clouds/cloud2.png"
                alt=""
                className="travel-cloud cloud-two"
                draggable={false}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
            />

            <Image
                src="/clouds/cloud3.png"
                alt=""
                className="travel-cloud cloud-three"
                draggable={false}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
            />

        </>

    );

}