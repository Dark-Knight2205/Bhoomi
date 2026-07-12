"use client";

import { useEffect } from "react";

export default function CursorFollower() {

  useEffect(() => {

    const dot = document.createElement("div");

    dot.className = "cursorDot";

    document.body.appendChild(dot);

    const move = (e: MouseEvent) => {

      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

    };

    window.addEventListener("mousemove", move);

    return () => {

      window.removeEventListener("mousemove", move);

      dot.remove();

    };

  }, []);

  return null;
}