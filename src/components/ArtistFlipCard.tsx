import React, { useState } from "react";
import ArtistDetailsDisplay from "./ArtistDetailsDisplay";
import { Artist } from "../types/Artist";

interface ArtistFlipCardProps {
    artist: Artist;
    className?: string;
    style?: React.CSSProperties;
}

export default function ArtistFlipCard({
    artist,
}: Readonly<ArtistFlipCardProps>) {
    const [activeTab, setActiveTab] = useState<"basic" | "details">("basic");

    return (
        <div className="h-full w-full">
            <div
                className="relative w-full h-full"
                style={{ minHeight: "30rem" }}
            >
                <div className="rounded-xl shadow-md flex flex-col h-full overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)" }}
                >
                    {/* Tab Header */}
                    <div className="flex border-b border-purple-100"
                        style={{ background: "linear-gradient(90deg, #7c3aed08 0%, transparent 100%)" }}
                    >
                        <button
                            onClick={() => setActiveTab("basic")}
                            className={`flex-1 px-6 py-3 text-sm font-semibold transition-colors ${
                                activeTab === "basic"
                                    ? "text-primary border-b-2 border-primary bg-primary/5"
                                    : "text-gray-400 hover:text-primary/70"
                            }`}
                        >
                            Basic Info
                        </button>
                        <button
                            onClick={() => setActiveTab("details")}
                            className={`flex-1 px-6 py-3 text-sm font-semibold transition-colors ${
                                activeTab === "details"
                                    ? "text-primary border-b-2 border-primary bg-primary/5"
                                    : "text-gray-400 hover:text-primary/70"
                            }`}
                        >
                            Artist Bio
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 overflow-hidden">
                        {activeTab === "basic" ? (
                            <BasicInfoTab artist={artist} />
                        ) : (
                            <MoreDetailsTab artist={artist} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function BasicInfoTab({ artist }: Readonly<{ artist: Artist }>) {
    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">

                {/* Divider */}
                <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-purple-100" />
                    <span className="text-purple-300 text-xs">✦</span>
                    <div className="flex-1 h-px bg-purple-100" />
                </div>

                {/* Info pills grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                        { icon: "⭐", label: "Craft Score", value: artist.craftScore != null && artist.craftScore >= 0 ? artist.craftScore.toFixed(1) : undefined },
                        { icon: "🎭", label: "Craft", value: artist.craftType },
                        { icon: "🎸", label: "Instruments", value: artist.instruments?.join(", ") },
                        { icon: "🎤", label: "Performance", value: artist.performanceType?.join(", ") },
                        { icon: "🎵", label: "Genre", value: artist.genre?.join(", ") },
                        { icon: "📍", label: "Location", value: artist.location },
                        { icon: "🌐", label: "Languages", value: artist.language?.join(", ") },
                    ].filter(item => item.value).map(({ icon, label, value }) => (
                        <div
                            key={label}
                            className="flex items-start gap-2 bg-white/70 border border-purple-50 rounded-lg px-3 py-2 shadow-sm"
                        >
                            <span className="text-sm shrink-0 mt-0.5">{icon}</span>
                            <div className="min-w-0">
                                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide m-0 leading-tight">
                                    {label}
                                </p>
                                <p className="text-xs font-semibold text-gray-700 m-0 leading-snug truncate">
                                    {value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MoreDetailsTab({ artist }: Readonly<{ artist: Artist }>) {
    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* Sub-header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-purple-100"
                style={{ background: "linear-gradient(90deg, #7c3aed08 0%, transparent 100%)" }}
            >
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-base shrink-0">
                    👤
                </div>
                <h3 className="text-lg font-bold text-primary m-0 leading-tight">
                    About {artist.name}
                </h3>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
                {/* Bio */}
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {artist.introduction}
                </p>

                {/* Divider */}
                <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-purple-100" />
                    <span className="text-purple-300 text-xs">✦</span>
                    <div className="flex-1 h-px bg-purple-100" />
                </div>

                {/* Why Book section */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        {/* <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-sm shrink-0">
                            
                        </div> */}
                        <h3 className="text-base font-bold text-primary text-left m-0">
                            💡 Why your guests will love {artist.name}?
                        </h3>
                    </div>

                    <ul className="space-y-2">
                        {artist.whyBook.map((reason) => (
                            <li
                                key={reason}
                                className="flex items-start gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white/70 border border-purple-50 shadow-sm"
                            >
                                <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                                <span className="leading-snug text-justify">{reason}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}