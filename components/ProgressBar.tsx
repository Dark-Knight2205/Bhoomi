"use client";

type Props = {
  page: number;
  total: number;
};

export default function ProgressBar({
  page,
  total,
}: Props) {

  const width = (page / total) * 100;

  return (

    <div
      style={{
        position: "absolute",
        top: 30,
        left: "50%",
        transform: "translateX(-50%)",
        width: "60%",
        height: 8,
        borderRadius: 99,
        background: "#f7d9e5",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${width}%`,
          height: "100%",
          background: "#f06292",
          transition: ".8s",
        }}
      />
    </div>

  );
}