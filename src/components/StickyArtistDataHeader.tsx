import { ArtistDetails } from "@/api/artistDetails.api";
import React from "react";

interface Artist {
    image: string;
    name: string;
    tags: string[];
    artistType: string;
}

interface StickyArtistDataHeaderProps {
    artist: Artist;
    isVisible: boolean;
    artistDetails: ArtistDetails | null; // make artistDetails optional and allow null
}

export default function StickyArtistDataHeader({
    artist,
    isVisible,
    artistDetails,
}: Readonly<StickyArtistDataHeaderProps>) { 
    const handleBookClick = () => {
        const phoneNumber = "918329303275"; // WhatsApp Business number
        const message = `Hi, I want to book ${artist.name} for an event. Please share pricing & availability.`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div
            className={`fixed top-16 left-0 w-full z-40 bg-white/90 shadow backdrop-blur flex items-center justify-center border-b border-primary/10 transition-all duration-300
            ${
                isVisible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
            style={{
                transition:
                    "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
            aria-hidden={!isVisible}
        >
            <div className="container max-w-6xl flex items-center py-2 px-2 md:px-4 gap-3">
                {/* Artist Image */}
                <img
                    src={artistDetails?.image}
                    alt={artistDetails?.name}
                    className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full border-2 border-primary/40"
                />

                {/* Artist Info */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="block text-base md:text-lg font-bold text-primary leading-tight">
                            {artistDetails?.name}
                            <span className="hidden md:block text-sm text-muted-foreground font-semibold mt-1 md:mt-0">
                                {artistDetails?.craftTypeName}
                            </span>
                        </span>

                        <div className="flex flex-wrap gap-1 mt-1">
                            {artistDetails?.defaultTags?.map((tag) => (
                                <span
                                    key={String(tag)}
                                    className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-[10px] md:text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    
                </div>

                {/* Book Artist Button */}
                <button
                    onClick={handleBookClick}
                    className="flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-5 md:py-2 rounded-full font-semibold text-xs md:text-sm whitespace-nowrap active:scale-95 text-primary border-2 border-primary"
                    style={{
                        background:
                            "linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 70%, #a855f7) 100%)",
                        boxShadow:
                            "0 3px 12px 0 color-mix(in srgb, var(--primary) 35%, transparent)",
                        transition:
                            "box-shadow 0.2s, transform 0.1s, filter 0.2s",
                    }}
                    onMouseEnter={(e) => {
                        const btn = e.currentTarget;
                        btn.style.filter = "brightness(1.1)";
                        btn.style.boxShadow =
                            "0 6px 20px 0 color-mix(in srgb, var(--primary) 55%, transparent)";
                    }}
                    onMouseLeave={(e) => {
                        const btn = e.currentTarget;
                        btn.style.filter = "brightness(1)";
                        btn.style.boxShadow =
                            "0 3px 12px 0 color-mix(in srgb, var(--primary) 35%, transparent)";
                    }}
                >
                    <span className="text-sm md:text-base">📅</span>
                    <span className="text-sm md:text-base">Hire</span>
                </button>
            </div>
        </div>
    );
}