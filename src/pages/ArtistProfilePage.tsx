import React, { useEffect, useRef } from "react";
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


const parseYouTube = (raw?: string) => {
    if (!raw) return { embedSrc: "", isPlaylist: false, playlistId: "" };
    const value = String(raw).trim();

    // playlist in URL or param
    const listMatch = value.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    if (listMatch) {
        const playlistId = listMatch[1];
        return {
            embedSrc: `https://www.youtube.com/embed/videoseries?list=${playlistId}`,
            isPlaylist: true,
            playlistId,
        };
    }

    // raw playlist id (common YouTube playlist ids start with PL)
    if (/^PL[a-zA-Z0-9_-]+$/.test(value)) {
        return {
            embedSrc: `https://www.youtube.com/embed/videoseries?list=${value}`,
            isPlaylist: true,
            playlistId: value,
        };
    }

    // youtu.be short link
    const shortMatch = value.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) return { embedSrc: `https://www.youtube.com/embed/${shortMatch[1]}`, isPlaylist: false, playlistId: "" };

    // watch?v= style or embed with v= param
    const watchMatch = value.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch) return { embedSrc: `https://www.youtube.com/embed/${watchMatch[1]}`, isPlaylist: false, playlistId: "" };

    // plain 11-char id
    if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return { embedSrc: `https://www.youtube.com/embed/${value}`, isPlaylist: false, playlistId: "" };

    // fallback: treat whole value as video id
    return { embedSrc: `https://www.youtube.com/embed/${value}`, isPlaylist: false, playlistId: "" };
};


export default function ArtistProfilePage() {
    const { artist } = useArtist();
    const heroRef = useRef<HTMLDivElement>(null);
    const showSticky = useShowStickyHeader(heroRef);

    // Scroll to top when component mounts or artist changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [artist]);

    if (!artist) {
        return <ArtistNotFound />;
    }

    const { embedSrc, isPlaylist, playlistId } = parseYouTube(artist.youtubeVideo && artist.youtubeVideo[0]);

    return (
        <div className="relative min-h-screen">
            <AnimatedBackground />
            <StickyArtistHeader artist={artist} isVisible={showSticky} />

            <section className="py-12 md:py-16 lg:py-20 relative z-10">
                <div className="container px-2 md:px-4 max-w-6xl mx-auto">
                    {/* Main Content Grid */}
                    <div
                        ref={heroRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_65%] gap-4 items-stretch mb-10 text-center md:text-left"
                    >
                        <ArtistIntro artist={artist} />
                        <ArtistFlipCard
                            artist={artist}
                            className="p-4 lg:p-2 overflow-hidden md:overflow-visible"
                            style={{ maxHeight: "100%", wordWrap: "break-word" }}
                        />
                    </div>
                    <div className="max-w-6xl mx-auto px-2 md:px-0 mt-12 text-center">
                        <div className="mb-4" id="view-playlist-button">
                            <h2 className="text-2xl font-bold">Performance Videos</h2>
                        </div>
                    </div>
                    {/* Playlist Section */}
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-stretch">
                        {artist.youtubeVideo.slice(0, 3).map((video, index) => {
                            const { embedSrc } = parseYouTube(video);
                            return (
                                <div key={index} className="col-span-1 md:col-span-2 w-full aspect-video rounded-lg overflow-hidden shadow">
                                    <iframe
                                        title={`${artist.name} - Video ${index + 1}`}
                                        className="w-full h-full"
                                        src={embedSrc}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            );
                        })}
                        {artist.youtubePlaylist && (
                            <a
                                href={parseYouTube(artist.youtubePlaylist).embedSrc.replace("embed/videoseries?list=", "playlist?list=")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="col-span-1 flex flex-col items-center justify-center gap-2 group self-center"
                            >
                                <div className="w-14 h-14 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 md:w-4 md:h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="text-sm md:text-xs font-semibold text-foreground text-center leading-tight px-1">View Full Playlist</span>
                                <span className="text-[12px] md:text-[10px] text-muted-foreground">YouTube</span>
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
