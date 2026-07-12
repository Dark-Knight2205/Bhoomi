"use client";

import { useState, useEffect } from "react";

export function useEndingAnimation() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return {
    loaded,
  };
}