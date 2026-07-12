"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import CursorFollower from "./CursorFollower";
import FallingPetals from "./FallingPetals";
import FloatingHearts from "./FloatingHearts";

import ProgressBar from "./ProgressBar";

import PercentageCounter from "./PercentageCounter";
import WarningPopup from "./WarningPopup";

import "@/styles/cuteness.css";

const STATUS_MESSAGES = [
  "Measuring your cuteness... 🌸",
  "Analyzing your smile... 😊",
  "Checking your kindness... 💖",
  "Calculating adorable energy... ✨",
  "Comparing with Sakura flowers... 🌸",
  "Almost done... 💕",
];

export default function CutenessMeter() {

  const router = useRouter();

  const pageRef = useRef<HTMLDivElement>(null);

  const [started, setStarted] = useState(false);

  const [percentage, setPercentage] = useState(1);

  const [status, setStatus] = useState("");

  const [finished, setFinished] = useState(false);

  const [shake, setShake] = useState(false);

  const successAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {

    successAudio.current = new Audio("/music/magic.mp3");

    successAudio.current.volume = 0.35;

  }, []);

  function startMeter() {

    if (started) return;

    setStatus(STATUS_MESSAGES[0]);
    setStarted(true);

  }

  function continueJourney() {

    router.push("/timeline");

  }

  function createPetalBurst() {

    for (let i = 0; i < 30; i++) {

      const petal = document.createElement("div");

      petal.className = "escape-petal";

      petal.innerHTML =
        Math.random() > .5 ? "🌸" : "✨";

      petal.style.left =
        `${window.innerWidth / 2}px`;

      petal.style.top =
        `${window.innerHeight / 2}px`;

      petal.style.setProperty(
        "--x",
        `${(Math.random() - .5) * 650}px`
      );

      petal.style.setProperty(
        "--y",
        `${(Math.random() - .5) * 500}px`
      );

      document.body.appendChild(petal);

      setTimeout(() => {

        petal.remove();

      }, 900);

    }

  }

  function createHeartBurst() {

    for (let i = 0; i < 18; i++) {

      const heart = document.createElement("div");

      heart.className = "heart-burst";

      heart.innerHTML =
        Math.random() > .5 ? "💖" : "🌸";

      heart.style.left =
        `${window.innerWidth / 2}px`;

      heart.style.top =
        `${window.innerHeight / 2}px`;

      heart.style.setProperty(
        "--x",
        `${(Math.random() - .5) * 500}px`
      );

      heart.style.setProperty(
        "--y",
        `${(Math.random() - .5) * 400}px`
      );

      document.body.appendChild(heart);

      setTimeout(() => {

        heart.remove();

      }, 1000);

    }

  }

  useEffect(() => {

    if (!started) return;

    let value = 1;

    let messageIndex = 0;

    const statusTimer = setInterval(() => {

      messageIndex++;

      if (messageIndex < STATUS_MESSAGES.length) {

        setStatus(
          STATUS_MESSAGES[messageIndex]
        );

      }

    }, 900);

    const meterTimer = setInterval(() => {

      if (value < 100) {

        value++;

      } else {

        value += 2;

      }

      if (value > 120) {

        value = 120;

      }

      setPercentage(value);

      if (value >= 120) {

        clearInterval(meterTimer);

        clearInterval(statusTimer);

        setStatus("Measurement Complete ✨");

        setShake(true);

        successAudio.current
          ?.play()
          .catch(() => {});

        createPetalBurst();

        createHeartBurst();

       setTimeout(() => {

  console.log("Popup should open now");

  setFinished(true);

  setShake(false);

}, 900);

      }

    }, 45);

    return () => {

      clearInterval(meterTimer);

      clearInterval(statusTimer);

    };

  }, [started]);
    const progressValue = Math.min(percentage, 100);

  return (
    <>
      <CursorFollower />
     
      <FloatingHearts />
      <FallingPetals />

      <section
        ref={pageRef}
        className={`cuteness-page ${shake ? "screen-shake" : ""}`}
      >
        <ProgressBar page={3} total={9} />

        <div className="meter-card">

          {!started ? (

            <>
              <div className="meter-icon">
                🌸
              </div>

              <h1 className="meter-title">
                Hey Bhoomi,
              </h1>

              <h2 className="meter-subtitle">
                Do you even know
                <br />
                how cute you are?
              </h2>

              <button
                className="check-btn"
                onClick={startMeter}
              >
                Let&apos;s Check ✨
              </button>
            </>

          ) : (

            <div className="meter-content">

              <h2 className="status-text">
                {status}
              </h2>

              <PercentageCounter
                percentage={percentage}
              />

              <div className="progress-track">

                <div
                  className={`progress-fill ${
                    percentage >= 120
                      ? "completed"
                      : ""
                  }`}
                  style={{
                    width: `${progressValue}%`,
                  }}
                />

              </div>

              {percentage >= 120 && !finished &&(

                <div className="meter-complete">

                  ✨ Measurement Complete ✨

                </div>

              )}

            </div>

          )}

        </div>

        <WarningPopup
          open={finished}
          percentage={percentage}
          onContinue={continueJourney}
        />

      </section>

    </>
  );

}