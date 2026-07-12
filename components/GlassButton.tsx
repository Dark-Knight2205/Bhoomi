"use client";

type Props = {
  text: string;
  onClick: () => void;
};

export default function GlassButton({ text, onClick }: Props) {
  return (
    <button
      type="button"
      className="start-btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
