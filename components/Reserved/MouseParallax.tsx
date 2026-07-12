"use client";

import { useEffect, useRef } from "react";

export default function MouseParallax({

    children,

}:{

    children:React.ReactNode;

}){

    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{

        const move=(e:MouseEvent)=>{

            if(!wrapperRef.current) return;

            const x=(e.clientX/window.innerWidth-.5)*8;

            const y=(e.clientY/window.innerHeight-.5)*8;

            wrapperRef.current.style.transform=

                `rotateY(${x*.25}deg)
                 rotateX(${-y*.25}deg)
                 translate(${x}px,${y}px)`;

        };

        window.addEventListener("mousemove",move);

        return ()=>window.removeEventListener("mousemove",move);

    },[]);

    return(

        <div

            ref={wrapperRef}

            className="reserved-wrapper"

        >

            {children}

        </div>

    );

}