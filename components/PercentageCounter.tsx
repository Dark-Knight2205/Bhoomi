"use client";

import { useEffect, useState } from "react";

type PercentageCounterProps = {
  percentage: number;
};

export default function PercentageCounter({
  percentage,
}: PercentageCounterProps) {

  const [pulse, setPulse] = useState(false);
  const displayValue = percentage;

  useEffect(() => {
    const startPulse = setTimeout(() => {
      setPulse(true);
    }, 0);

    const timer = setTimeout(() => {
      setPulse(false);
    }, 180);

     return () => {
      clearTimeout(startPulse);
      clearTimeout(timer);
    };
  }, [percentage]);

  return (

    <div className="percentage-wrapper">

      <div
        className={`percentage-number ${
          pulse ? "pulse" : ""
        } ${
          displayValue >= 120
            ? "overflow"
            : ""
        }`}
      >

        {displayValue}

        <span className="percentage-symbol">

          %

        </span>

      </div>

      <div className="percentage-caption">

        {

          displayValue < 100 &&

          "Looking adorable already... 🌸"

        }

        {

          displayValue >= 100 &&
          displayValue < 120 &&

          "Wait... this is unusually high... 💖"

        }

        {

          displayValue >= 120 &&

          "System overload detected! ✨"

        }

      </div>

    </div>

  );

}