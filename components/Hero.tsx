"use client";

import { useRouter } from "next/navigation";
import FallingPetals from "./FallingPetals";
import FloatingHearts from "./FloatingHearts";
import CursorFollower from "./CursorFollower";

import GlassButton from "./GlassButton";

import "@/styles/landing.css";

export default function Hero() {
  const router = useRouter();

  return (
    <>
      <CursorFollower />
     
      
      <FloatingHearts />
      <FallingPetals />

      <section className="hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <p className="logo">
            Sakura Journey 🌸
          </p>

          <h1>
            Hi Bhoomi!
          </h1>

          <p className="subtitle">
            I made this little website just for you.
            <br />
            I hope you enjoy this little journey. 🌸
          </p>

          <GlassButton
            text="Start Journey →"
            onClick={() => router.push("/friend")}
          />

        </div>

      </section>
    </>
  );
}