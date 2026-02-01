import React from "react";

interface Artist {
    image: string;
    name: string;
    tags: string[];
    isMusician: boolean;
}

interface StickyArtistHeaderProps {
    artist: Artist;
    isVisible: boolean;
}

export default function StickyArtistHeader({
    artist,
    isVisible,
}: Readonly<StickyArtistHeaderProps>) {
    return (
        <div
            className={`fixed top-16 left-0 w-full z-40 bg-white/90 shadow backdrop-blur flex items-center justify-center border-b border-primary/10 transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
            style={{
                transition:
                    "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
            aria-hidden={!isVisible}
        >
            <div className="container max-w-6xl flex items-center py-2 px-2 md:px-4">
                <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-16 h-16 object-cover rounded-full border-2 border-primary/40 mr-4"
                />
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="block text-lg font-bold text-primary leading-tight">
                            {artist.name}
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {artist.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <span className="block mt-2 md:mt-0 text-sm text-muted-foreground font-semibold">
                        {artist.isMusician ? "Musician" : "Performer"}
                    </span>
                </div>
            </div>
        </div>
    );
}
