"use client";


import "@/styles/travel.css";
import dynamic from "next/dynamic";

const Clouds = dynamic(
    () => import("@/components/Travel/Clouds"),
    { ssr: false }
);

const Butterfly = dynamic(
    () => import("@/components/Travel/Butterfly"),
    { ssr: false }
);

const GlowParticles = dynamic(
    () => import("@/components/Travel/GlowParticles"),
    { ssr: false }
);

const Atmosphere = dynamic(
    () => import("@/components/Travel/Atmosphere"),
    { ssr: false }
);

const Petals = dynamic(
    () => import("@/components/Travel/Petals"),
    { ssr: false }
);

const Leaves = dynamic(
    () => import("@/components/Travel/Leaves"),
    { ssr: false }
);

const TravelContent = dynamic(
    () => import("@/components/Travel/TravelContent"),
    { ssr: false }
);





export default function TravelPage() {

    return (

        <main className="travel-page">
            

            {/* ======================================
                BACKGROUND
            ======================================= */}

            <div className="travel-background" />

            {/* ======================================
                CLOUDS
            ======================================= */}

            <div className="layer layer-clouds">
                <Clouds />
            </div>

            {/* ======================================
                BIRDS
            ======================================= */}

            <div className="layer layer-birds">
                <div className="bird bird-1"></div>
                <div className="bird bird-2"></div>
                <div className="bird bird-3"></div>
                <div className="bird bird-4"></div>
            </div>

            {/* ======================================
                PETALS
            ======================================= */}

            <div className="layer layer-petals">
                <Petals />
            </div>

            {/* ======================================
                BUTTERFLIES
            ======================================= */}

            <div className="layer layer-butterflies">
                <Butterfly />
            </div>

            {/* ======================================
                GLOW PARTICLES
            ======================================= */}

            <div className="layer layer-particles">
                <GlowParticles />
            </div>

            {/* ======================================
                ATMOSPHERE
            ======================================= */}

            <div className="layer layer-atmosphere">
                <Atmosphere />
            </div>

            {/* ======================================
                STORY CONTENT
            ======================================= */}

            <section className="layer layer-content">

                <div className="travel-content">

                    <TravelContent />

                </div>

            </section>

            {/* ======================================
                LEAVES
            ======================================= */}

            <div className="layer layer-leaves">
                <Leaves />
            </div>

        </main>

    );

}
