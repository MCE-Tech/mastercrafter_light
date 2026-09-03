import { Artist } from "@/types/Artist";
import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface ArtistIntroProps {
    artist: Artist;
}

export default function ArtistIntro({ artist }: Readonly<ArtistIntroProps>) {
    return (
        <div className="flex flex-col items-center md:items-start h-full px-4 md:px-0 py-6 md:py-0">
            <img
                src={artist.image}
                alt={artist.name}
                className="artist-profile-image mt-4 md:mt-0 m-auto w-44 h-44 object-cover rounded-full mb-6 md:mb-4 border-4 border-primary/30"
            />
            <h1
                className="artist-profile-name m-auto text-4xl font-extrabold mb-4 md:mb-2 gradient-text"
                style={{ paddingBottom: "10px" }}
            >
                {artist.name}
            </h1>
            <p className="artist-profile-type m-auto mb-4 md:mb-2 text-lg text-muted-foreground">
                {artist.artistType}
            </p>
            <div className="artist-profile-tags m-auto flex flex-wrap gap-2 justify-center md:justify-start mb-4 md:mb-2">
                {artist.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Action Buttons */}
            <style>{`
                @media (max-width: 767px) {
                    .artist-profile-image { margin-bottom: 1.25rem !important; }
                    .artist-profile-name  { margin-bottom: 1rem !important; }
                    .artist-profile-tags  { margin-bottom: 1rem !important; }
                    .artist-profile-type  { margin-bottom: 1rem !important; }
                    .artist-action-buttons {
                        margin-top: 2rem !important;
                        margin-bottom: 2rem !important;
                    }
                }
            `}</style>
            <div className="artist-action-buttons m-auto mt-6 mb-4 flex flex-col sm:flex-row gap-3 justify-center w-full px-2">
                {/* View Videos */}
                <button
                    onClick={() => {
                        document.getElementById("view-playlist-button")?.scrollIntoView({
                            behavior: "smooth"
                        });
                    }}
                    className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm sm:text-base w-full sm:w-auto transition-all duration-200 active:scale-95 border-2 border-secondary text-secondary"
                    style={{
                        background: "transparent",
                        boxShadow: "0 0 0 0 transparent",
                        transition: "background 0.2s, box-shadow 0.2s, color 0.2s, transform 0.1s",
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, var(--secondary) 0%, var(--secondary) 100%)";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 18px 0 color-mix(in srgb, var(--secondary) 40%, transparent)";
                        (e.currentTarget as HTMLButtonElement).style.color = "#a855f7";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "#a855f7";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 0 transparent";
                        (e.currentTarget as HTMLButtonElement).style.color = "#fd4c96";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "#fd4c96";
                    }}
                >
                    <span>🎥</span>
                    View Videos
                </button>

                {/* Book Artist */}
                <button
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm sm:text-base w-full sm:w-auto active:scale-95 text-primary border-2 border-primary"
                    style={{
                        background: "linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 70%, #a855f7) 100%)",
                        boxShadow: "0 4px 20px 0 color-mix(in srgb, var(--primary) 40%, transparent)",
                        transition: "box-shadow 0.2s, transform 0.1s, filter 0.2s",
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 28px 0 color-mix(in srgb, var(--primary) 55%, transparent)";
                        (e.currentTarget as HTMLButtonElement).style.color = "#fd4c96";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "#fd4c96";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px 0 color-mix(in srgb, var(--primary) 40%, transparent)";
                        (e.currentTarget as HTMLButtonElement).style.color = "#a855f7";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "#a855f7";
                    }}
                    onClick={() => {
                        const phoneNumber = "918329303275";
                        const message = `Hi, I want to book ${artist.name} for an event. Please share pricing & availability.`;
                        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                        window.open(url, "_blank");
                    }}
                >
                    <span>📅</span>
                    Hire Me
                </button>
            </div>
        </div>
    );
}