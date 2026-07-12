"use client";

type Props = {
    onClick: () => void;
};

export default function ContinueButton({ onClick }: Props) {
    return (
        <button
            className="continue-btn"
            onClick={onClick}
        >
            📖 Open the Letter
        </button>
    );
}