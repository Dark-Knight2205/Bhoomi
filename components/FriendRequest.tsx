"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import CursorFollower from "./CursorFollower";
import FallingPetals from "./FallingPetals";
import FloatingHearts from "./FloatingHearts";

import ProgressBar from "./ProgressBar";
import MovingNoButton from "./MovingNoButton";
import SuccessPopup from "./SuccessPopup";

import "@/styles/friend.css";

export default function FriendRequest() {

  const router = useRouter();

  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const [showPopup, setShowPopup] = useState(false);

  function handleYesClick() {

    setShowPopup(true);

    setTimeout(() => {

      router.push("/cuteness");

    }, 2500);

  }

  return (
    <>
      <CursorFollower />
      
      <FloatingHearts />
      <FallingPetals />

      <section className="friend-page">

        <ProgressBar page={2} total={9} />

        <div className="friend-card">

          <div className="friend-icon">
            👫
          </div>

          <h1>
            Would you like to
            <br />
            be my friend,
            <span> Bhoomi?</span>
          </h1>

          <p>
            It would mean a lot to me! 💖
          </p>

          {/* YES button stays permanently here */}

          <div className="button-row">

            <button
              ref={yesButtonRef}
              className="yes-btn"
              onClick={handleYesClick}
            >
              Yes, I&apos;d love to! 💖
            </button>

          </div>

          <p className="tiny">
            (Try catching the No button 😄)
          </p>

        </div>

        {/* No button is NOT inside button-row */}
        <MovingNoButton yesButtonRef={yesButtonRef} />

        <SuccessPopup show={showPopup} />

      </section>
    </>
  );

}