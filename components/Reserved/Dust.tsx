"use client";

export default function Dust() {

    return (

        <div className="dust-container">

            {

                [...Array(18)].map((_, i) => (

                    <span

                        key={i}

                        className={`dust dust-${i}`}

                    />

                ))

            }

        </div>

    );

}