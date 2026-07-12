"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MESSAGES = [
  "🥺 Please don't say no...",
  "🌸 Give me one chance...",
  "💖 I'll be a good friend, promise!",
  "🥹 Don't break my little website...",
  "👉 Just one little Yes?",
  "🌸 Friendship begins with one click.",
  "💗 You're making the button nervous!",
  "🥹 I spent hours making this...",
  "✨ Pretty please?",
  "🌸 Maybe destiny wants you to press Yes.",
  "🥺 My little heart can't take a No.",
  "💝 I even prepared petals for you.",
  "🌷 One click can start a beautiful friendship.",
  "😅 You're making this button work overtime!",
  "😂 Nice try!"
];

const ALERT_DISTANCE = 120;
const ESCAPE_DISTANCE = 180;
const PANIC_DISTANCE = 80;

interface Props {
  yesButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export default function MovingNoButton({
  yesButtonRef,
}: Props) {

  const buttonRef = useRef<HTMLButtonElement>(null);

  const activated = useRef(false);

  const isAnimating = useRef(false);

  const hideTimer = useRef<NodeJS.Timeout | null>(null);

  const [message, setMessage] = useState("");

  function clamp(value:number,min:number,max:number){
    return Math.max(min,Math.min(max,value));
  }

  function showRandomMessage(){

    const random =
      MESSAGES[Math.floor(Math.random()*MESSAGES.length)];

    setMessage(random);

    if(hideTimer.current){
      clearTimeout(hideTimer.current);
    }

    hideTimer.current=setTimeout(()=>{
      setMessage("");
    },1800);

  }

  function burst(x:number,y:number){

    for(let i=0;i<10;i++){

      const petal=document.createElement("div");

      petal.className="escape-petal";

      petal.innerHTML=Math.random()>.5?"🌸":"✨";

      petal.style.left=`${x}px`;
      petal.style.top=`${y}px`;

      petal.style.setProperty(
        "--x",
        `${(Math.random()-.5)*180}px`
      );

      petal.style.setProperty(
        "--y",
        `${(Math.random()-.5)*180}px`
      );

      document.body.appendChild(petal);

      setTimeout(()=>petal.remove(),800);

    }

  }

  useEffect(()=>{

    const button=buttonRef.current;

    const yesButton=yesButtonRef.current;

    if(!button || !yesButton) return;

    /* ---------- Initial position beside YES button ---------- */

    const rect=yesButton.getBoundingClientRect();

    button.style.position="fixed";

    button.style.left=`${rect.right+24}px`;

    button.style.top=`${rect.top}px`;

    button.style.margin="0";

    button.style.zIndex="9999";

    function escape(e:MouseEvent){

      if(isAnimating.current) return;

      const btn=buttonRef.current;

      if(!btn) return;

      

      const r=btn.getBoundingClientRect();

      const cx=r.left+r.width/2;

      const cy=r.top+r.height/2;

      const dx=cx-e.clientX;

      const dy=cy-e.clientY;

      const distance=Math.sqrt(dx*dx+dy*dy);

      if(distance>ALERT_DISTANCE) return;

      if(!activated.current){

        activated.current=true;

      }

      let multiplier=220;

      if(distance<PANIC_DISTANCE){

        multiplier=420;

      }

      else if(distance<ESCAPE_DISTANCE){

        multiplier=300;

      }

      const angle=Math.atan2(dy,dx);

      let targetX=
        cx+Math.cos(angle)*multiplier;

      let targetY=
        cy+Math.sin(angle)*multiplier;

      targetX=clamp(
        targetX,
        20,
        window.innerWidth-r.width-20
      );

      targetY=clamp(
        targetY,
        20,
        window.innerHeight-r.height-20
      );

      showRandomMessage();

      burst(cx,cy);

      const audio=new Audio("/music/boing.mp3");

      audio.volume=.25;

      audio.play().catch(()=>{});

      isAnimating.current=true;
            gsap.to(btn, {
        left: targetX,
        top: targetY,
        duration: 0.45,
        ease: "elastic.out(1,0.45)",
        onComplete: () => {
          isAnimating.current = false;
        },
      });

    }

    window.addEventListener("mousemove", escape);

    return () => {

      window.removeEventListener(
        "mousemove",
        escape
      );

      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }

    };

  }, [yesButtonRef]);

  return (
    <>
      <button
        ref={buttonRef}
        className="no-btn"
        onClick={(e) => {
          // Extra protection if someone somehow clicks it
          e.preventDefault();
          showRandomMessage();
        }}
      >
        No 🥺
      </button>

      {message && (
        <div className="emotion-popup">
          {message}
        </div>
      )}
    </>
  );

}