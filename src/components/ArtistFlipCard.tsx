import React, { useState } from "react";
import ArtistDetailsDisplay from "./ArtistDetailsDisplay";
import { Artist } from "../types/Artist";

interface ArtistFlipCardProps {
    artist: Artist;
}

export default function ArtistFlipCard({
    artist,
}: Readonly<ArtistFlipCardProps>) {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => setIsFlipped(!isFlipped);

    return (
        <div
            className="flip-card h-full w-full"
            style={{ perspective: "1000px", minHeight: "30rem" }}
        >
            <div
                className="flip-card-inner relative w-full h-full transition-transform duration-700"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Front of card */}
                <CardFront artist={artist} onFlip={toggleFlip} />

                {/* Back of card */}
                <CardBack artist={artist} onFlip={toggleFlip} />
            </div>
        </div>
    );
}

function CardFront({
    artist,
    onFlip,
}: Readonly<{ artist: Artist; onFlip: () => void }>) {
    return (
        <div
            className="flip-card-front absolute inset-0 w-full h-full"
            style={{ backfaceVisibility: "hidden" }}
        >
            <div className="rounded-xl bg-white/80 shadow p-6 border-l-4 border-primary flex flex-col h-full">
                <div className="flex-1">
                    <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">👤</span>
                        <h2 className="text-xl font-bold text-primary m-0">
                            About {artist.name}
                        </h2>
                    </div>
                    <div className="text-base text-gray-700 leading-relaxed mb-6">
                        {artist.introduction}
                    </div>
                    <div className="flex items-center mb-2 mt-6">
                        <span className="text-2xl mr-2">💡</span>
                        <h3 className="text-xl font-bold text-primary m-0">
                            Why Book {artist.name}?
                        </h3>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
                        {artist.whyBook.map((reason) => (
                            <li key={reason} className="pl-1">
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={onFlip}
                    className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors self-end"
                    aria-label={`Flip card to see additional information about ${artist.name}`}
                >
                    Flip Card
                </button>
            </div>
        </div>
    );
}

function CardBack({
    artist,
    onFlip,
}: Readonly<{ artist: Artist; onFlip: () => void }>) {
    return (
        <div
            className="flip-card-back absolute inset-0 w-full h-full"
            style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
            }}
        >
            <div className="rounded-xl bg-white/80 shadow p-6 border-l-4 border-primary flex flex-col h-full justify-center items-center">
                <h2 className="text-xl font-bold text-primary mb-4">
                    Additional Information
                </h2>
                <ArtistDetailsDisplay artist={artist} />
                <button
                    onClick={onFlip}
                    className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors self-end"
                    aria-label={`Flip card back to see about ${artist.name}`}
                >
                    Flip Back
                </button>
            </div>
        </div>
    );
}
