import React, { useState } from "react";
import ArtistDetailsDisplay from "./ArtistDetailsDisplay";
import { Artist } from "../types/Artist";
import { RotateCw } from "lucide-react";

interface ArtistFlipCardProps {
    artist: Artist;
}

interface ArtistFlipCardProps {
    artist: Artist;
    className?: string;           // ← add
    style?: React.CSSProperties;  // ← add
}

export default function ArtistFlipCard({
    artist,
}: Readonly<ArtistFlipCardProps>) {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => setIsFlipped(!isFlipped);

    return (
        <div
            className="flip-card h-full w-full"
            style={{ perspective: "1000px" }}
        >
            <div
                className="flip-card-inner relative w-full h-full transition-transform duration-700"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    minHeight: "30rem",   // ← moved here so only the inner layer is constrained
                }}
            >
                {/* Front of card */}
                <CardFront artist={artist} onFlip={toggleFlip} isFlipped={isFlipped} />

                {/* Back of card */}
                <CardBack artist={artist} onFlip={toggleFlip} isFlipped={isFlipped} />
            </div>
        </div>
    );
}

// function CardBack({
//     artist,
//     onFlip,
//     isFlipped,
// }: Readonly<{ artist: Artist; onFlip: () => void; isFlipped: boolean }>) {
//     return (
//         <div
//             className="flip-card-front absolute inset-0 w-full h-full"
//             style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
//         >
//             <div className="rounded-xl bg-white/80 shadow p-6 border-l-4 border-primary flex flex-col h-full justify-center">
//                 {/* Make this inner content scrollable instead of overflowing */}
//                 <div className="flex-1 overflow-y-auto pr-1">
//                     <div className="flex items-center mb-2">
//                         <span className="text-2xl mr-2">👤</span>
//                         <h2 className="text-xl font-bold text-primary m-0">
//                             About {artist.name}
//                         </h2>
//                     </div>
//                     <div className="text-base text-gray-700 leading-relaxed mb-6">
//                         {artist.introduction}
//                     </div>
//                     <div className="flex items-center mb-2 mt-6">
//                         <span className="text-2xl mr-2">💡</span>
//                         <h3 className="text-xl font-bold text-primary m-0">
//                             Why Book {artist.name}?
//                         </h3>
//                     </div>
//                     <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
//                         {artist.whyBook.map((reason) => (
//                             <li key={reason} className="pl-1">
//                                 {reason}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <button
//                     onClick={onFlip}
//                     className="absolute right-4 bottom-4 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-lg z-10"
//                     aria-label={`Flip card to see additional information about ${artist.name}`}
//                     title="Flip"
//                 >
//                     <RotateCw className={`h-5 w-5 transition-transform duration-500 ${isFlipped ? "rotate-180" : "rotate-0"} hover:rotate-90`} />
//                 </button>
//             </div>
//         </div>
//     );
// }

function CardBack({
    artist,
    onFlip,
    isFlipped,
}: Readonly<{ artist: Artist; onFlip: () => void; isFlipped: boolean }>) {
    return (
        <div
            className="flip-card-front absolute inset-0 w-full h-full"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
            <div className="rounded-xl shadow-md flex flex-col h-full overflow-hidden"
                style={{ background: "linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)" }}
            >
                {/* Header band */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-purple-100"
                    style={{ background: "linear-gradient(90deg, #7c3aed08 0%, transparent 100%)" }}
                >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-base shrink-0">
                        👤
                    </div>
                    <h2 className="text-lg font-bold text-primary m-0 leading-tight">
                        About {artist.name}
                    </h2>
                </div>

                {/* Scrollable body */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
                    {/* Bio */}
                    <p className="text-sm text-gray-600 leading-relaxed">
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
                            <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-sm shrink-0">
                                💡
                            </div>
                            <h3 className="text-base font-bold text-primary m-0">
                                Why Book {artist.name}?
                            </h3>
                        </div>

                        <ul className="space-y-2">
                            {artist.whyBook.map((reason) => (
                                <li
                                    key={reason}
                                    className="flex items-start gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white/70 border border-purple-50 shadow-sm"
                                >
                                    <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                                    <span className="leading-snug">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer flip button */}
                <div className="px-6 py-3 border-t border-purple-100 flex justify-end"
                    style={{ background: "linear-gradient(90deg, transparent 0%, #7c3aed08 100%)" }}
                >
                    <button
                        onClick={onFlip}
                        className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors px-3 py-1.5 rounded-full hover:bg-primary/5"
                        aria-label={`Flip card back to see basic info about ${artist.name}`}
                    >
                        <RotateCw className={`h-3.5 w-3.5 transition-transform duration-500 ${isFlipped ? "rotate-180" : "rotate-0"}`} />
                        View Basic Info
                    </button>
                </div>
            </div>
        </div>
    );
}

// function CardFront({
//     artist,
//     onFlip,
//     isFlipped,
// }: Readonly<{ artist: Artist; onFlip: () => void; isFlipped: boolean }>) {
//     return (
//         <div
//             className="flip-card-back absolute inset-0 w-full h-full"
//             style={{
//                 backfaceVisibility: "hidden",
//             }}
//         >
//             <div className="rounded-xl bg-white/80 shadow p-6 border-l-4 border-primary flex flex-col h-full justify-center items-center">
//                 <h2 className="text-xl font-bold text-primary mb-4">
//                     Basic Information
//                 </h2>
//                 <ArtistDetailsDisplay artist={artist} />
//                 <button
//                     onClick={onFlip}
//                     className="absolute right-4 bottom-4 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-lg z-10"
//                     aria-label={`Flip card back to see about ${artist.name}`}
//                     title="Flip back"
//                 >
//                     <RotateCw className={`h-5 w-5 transition-transform duration-500 ${isFlipped ? "rotate-180" : "rotate-0"} hover:rotate-90`} />
//                 </button>
//             </div>
//         </div>
//     );
// }


function CardFront({
    artist,
    onFlip,
    isFlipped,
}: Readonly<{ artist: Artist; onFlip: () => void; isFlipped: boolean }>) {
    return (
        <div
            className="flip-card-back absolute inset-0 w-full h-full"
            style={{ backfaceVisibility: "hidden" }}
        >
            <div
                className="rounded-xl shadow-md flex flex-col h-full overflow-hidden"
                style={{ background: "linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)" }}
            >
                {/* Header band */}
                <div
                    className="flex items-center justify-center gap-3 px-6 py-4 border-b border-purple-100"
                    style={{ background: "linear-gradient(90deg, #7c3aed08 0%, transparent 100%)" }}
                >
                    <h1 className="text-lg font-bold text-primary m-0 leading-tight text-center">
                        {artist.name}
                    </h1>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {artist.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/20 text-center"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-px bg-purple-100" />
                        <span className="text-purple-300 text-xs">✦</span>
                        <div className="flex-1 h-px bg-purple-100" />
                    </div>

                    {/* Info pills grid */}
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            { icon: "📍", label: "Location", value: artist.location },
                            { icon: "🎭", label: "Craft", value: artist.craftType },
                            { icon: "🌐", label: "Languages", value: artist.language?.join(", ") },
                            { icon: "🎵", label: "Genre", value: artist.genre?.join(", ") },
                            { icon: "🎤", label: "Performance", value: artist.performanceType?.join(", ") },
                            { icon: "⭐", label: "Craft Score", value: artist.craftScore?.toFixed(1) },
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

                {/* Footer flip button */}
                <div
                    className="px-6 py-3 border-t border-purple-100 flex justify-end"
                    style={{ background: "linear-gradient(90deg, transparent 0%, #7c3aed08 100%)" }}
                >
                    <button
                        onClick={onFlip}
                        className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors px-3 py-1.5 rounded-full hover:bg-primary/5"
                        aria-label={`Flip card to see about ${artist.name}`}
                    >
                        <RotateCw
                            className={`h-3.5 w-3.5 transition-transform duration-500 ${isFlipped ? "rotate-180" : "rotate-0"}`}
                        />
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}