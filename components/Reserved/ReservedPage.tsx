"use client";

import "@/styles/reserved.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

import CursorFollower from "@/components/CursorFollower";
import ProgressBar from "@/components/ProgressBar";


import MouseParallax from "./MouseParallax";
import Sunlight from "./Sunlight";
import Dust from "./Dust";
import Leaves from "./Leaves";
import Camera from "./Camera";
import Decorations from "./Decorations";
import Header from "./Header";
import MemoryBoard from "./MemoryBoard";
import ContinueButton from "./ContinueButton";
import CameraFlash from "./CameraFlash";
import Letter from "./Letter";

export default function ReservedPage() {

    const [openLetter, setOpenLetter] = useState(false);

    const router = useRouter();

    const handleOpenLetter = () => {

        setOpenLetter(true);

        setTimeout(() => {

            router.push("/gallery");

        }, 2500);

    };

    return (

        <>

            <CursorFollower />

            

            <main className="reserved-page">

                <ProgressBar
                    page={6}
                    total={9}
                />

                <MouseParallax>

                    <div className="reserved-background" />

                    <Sunlight />

                    <Leaves />

                    <Dust />

                    <Decorations />

                    <Camera />

                    <CameraFlash />

                    <Header />

                    <MemoryBoard />

                    <div
                        style={{
                            opacity: openLetter ? 0 : 1,
                            pointerEvents: openLetter ? "none" : "auto",
                        }}
                    >
                        <ContinueButton
                            onClick={handleOpenLetter}
                        />
                    </div>

                    <Letter
                        open={openLetter}
                        onClose={() => setOpenLetter(false)}
                    />

                </MouseParallax>

            </main>

        </>

    );
}