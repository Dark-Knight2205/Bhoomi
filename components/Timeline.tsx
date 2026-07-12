"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CursorFollower from "./CursorFollower";
import FallingPetals from "./FallingPetals";
import FloatingHearts from "./FloatingHearts";

import ProgressBar from "./ProgressBar";

import TimelineCard from "./TimelineCard";
import TimelineDots from "./TimelineDot";
import TimelineParticles from "./TimelineParticles";

import "@/styles/timeline.css";

const STORY = [
  {
    icon: "🌸",
    title: "Today",
    text:
      "One little click...\nOne beautiful beginning.\nMaybe this is where our story starts.",
  },

  {
    icon: "💬",
    title: "Soon",
    text:
      "Random conversations.\nLaughing over the silliest things.\nCreating countless memories.",
  },

  {
    icon: "🌙",
    title: "One Day",
    text:
      "Late-night talks.\nSharing dreams.\nEnding every day with a warm 'Good Night'.",
  },

  {
    icon: "📸",
    title: "Future",
    text:
      "Collecting unforgettable moments.\nBecause every friendship deserves beautiful memories.",
  },
];

export default function Timeline() {

  const router = useRouter();

  const [active, setActive] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setActive((prev) => {

        if (prev >= STORY.length - 1) {

          return prev;

        }

        return prev + 1;

      });

    }, 3500);

    return () => clearInterval(timer);

  }, []);



  

 

  return (

    <>

      <CursorFollower />

      

      <FloatingHearts />

      <FallingPetals />

     <section className={`timeline-page theme-${active}`}>

    <TimelineParticles />

    <ProgressBar page={4} total={9} />

    <div className={`timeline-card card-theme-${active}`}>

          <div className="timeline-header">

            <div className="header-icon">

              🌸

            </div>

            <h1>

              A Little Beginning

            </h1>

            <p>

              Maybe today is the first page
              <br />
              of something beautiful.

            </p>

          </div>

          <div className="timeline-nav">

            <TimelineDots
              active={active}
              total={STORY.length}
            />

          </div>

          <div className="story-content">

            <TimelineCard
              item={STORY[active]}
            />

          </div>

          <div className="bottom-area">

          <button
    className="continue-btn"
    onClick={() => {
        console.log("Button clicked");
        router.push("/travel");
    }}
>
    Continue Journey
</button>

          </div>

        </div>

      </section>

    </>

  );

}