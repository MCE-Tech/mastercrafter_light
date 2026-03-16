import { Artist } from "@/types/Artist";
import React from "react";

interface ArtistIntroProps {
    artist: Artist;
}

export default function ArtistIntro({ artist }: Readonly<ArtistIntroProps>) {
    return (
        <div className="flex flex-col items-center md:items-start h-full">
            <img
                src={artist.image}
                alt={artist.name}
                className="m-auto w-44 h-44 object-cover rounded-full mb-4 border-4 border-primary/30"
            />
            <h1
                className="m-auto text-4xl font-extrabold mb-2 gradient-text"
                style={{ paddingBottom: "10px" }}
            >
                {artist.name}
            </h1>
            <div className="m-auto flex flex-wrap gap-2 justify-center md:justify-start mb-2">
                {artist.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <p className="m-auto mb-2 text-lg text-muted-foreground">
                {artist.artistType}
            </p>
        </div>
    );
}
