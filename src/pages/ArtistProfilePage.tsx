import React, { useRef } from "react";
import { AnimatedBackground } from "../components/animated-background";
import PlaylistVideos from "../components/PlaylistVideos";
import StickyArtistHeader from "../components/StickyArtistHeader";
import ArtistIntro from "../components/ArtistIntro";
import ArtistFlipCard from "../components/ArtistFlipCard";
import { useArtist } from "../hooks/useArtist";
import { useShowStickyHeader } from "../hooks/useShowStickyHeader";

function ArtistNotFound() {
    return (
        <section className="py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Artist Not Found</h1>
            <p className="text-muted-foreground">
                Sorry, we couldn't find the artist you're looking for.
            </p>
        </section>
    );
}

export default function ArtistProfilePage() {
    const { artist } = useArtist();
    const heroRef = useRef<HTMLDivElement>(null);
    const showSticky = useShowStickyHeader(heroRef);

    if (!artist) {
        return <ArtistNotFound />;
    }

    return (
        <div className="relative min-h-screen">
            <AnimatedBackground />
            <StickyArtistHeader artist={artist} isVisible={showSticky} />

            <section className="py-12 md:py-16 lg:py-20 relative z-10">
                <div className="container px-2 md:px-4 max-w-6xl mx-auto">
                    {/* Main Content Grid */}
                    <div
                        ref={heroRef}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10 text-center md:text-left"
                    >
                        <ArtistIntro artist={artist} />
                        <ArtistFlipCard artist={artist} />
                    </div>

                    {/* Playlist Section */}
                    <div className="max-w-6xl mx-auto px-2 md:px-0 mt-12 text-center">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold">Videos</h2>
                        </div>
                        <PlaylistVideos
                            playlist="https://www.youtube.com/watch?v=JTMHOFf8_Ns&list=PLoganb-r1cCIwFSPzrkDltOWCzQiX4ScB"
                            max={5}
                            order="playlist"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
