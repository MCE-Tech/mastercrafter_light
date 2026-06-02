import React, { useState, useRef, useEffect } from "react";
import ArtistDetailsDisplay from "./ArtistDetailsDisplay";
import { Artist } from "../types/Artist";
import { ArtistDetails } from "@/api/artistDetails.api";

interface ArtistFlipAPICardProps {
    artist: Artist;
    artistDetails: ArtistDetails | null; // Replace 'any' with the correct type if available
    className?: string;
    style?: React.CSSProperties;
}

function ValueWithOverflow({ value }: { value: any }) {
    const [open, setOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const popRef = useRef<HTMLDivElement | null>(null);

    // Normalize value to array or string
    const items: string[] | null = Array.isArray(value)
        ? value.filter(Boolean)
        : typeof value === 'string' && value.includes(',')
            ? value.split(',').map(s => s.trim()).filter(Boolean)
            : null;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const measureRef = useRef<HTMLDivElement | null>(null);
    const [fittedCount, setFittedCount] = useState<number | null>(null);

    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!open) return;
            if (popRef.current && popRef.current.contains(e.target as Node)) return;
            if (btnRef.current && btnRef.current.contains(e.target as Node)) return;
            setOpen(false);
        }
        document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, [open]);

    // compute how many items fit dynamically
    useEffect(() => {
        if (!items || !measureRef.current || !containerRef.current) {
            setFittedCount(null);
            return;
        }

        const compute = () => {
            const containerWidth = containerRef.current!.clientWidth;
            const childNodes = Array.from(measureRef.current!.children) as HTMLElement[];
            const gap = 6; // approximate gap between items
                let acc = 0;
                let fit = 0;
                for (let i = 0; i < childNodes.length; i++) {
                    const w = Math.ceil(childNodes[i].getBoundingClientRect().width);
                    if (acc + w + (i > 0 ? gap : 0) <= containerWidth) {
                        acc += (i > 0 ? gap : 0) + w;
                        fit = i + 1;
                    } else {
                        break;
                    }
                }
            if (fit >= items.length) setFittedCount(items.length);
            else setFittedCount(fit);
        };

        //compute();
        //const ro = new ResizeObserver(() => compute());
        //ro.observe(containerRef.current);
        window.addEventListener('resize', compute);
        return () => {
            //ro.disconnect();
            window.removeEventListener('resize', compute);
        };
    }, [items]);

    const HoverContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="inline-flex items-center">
            {children}
        </div>
    );

    if (items && items.length > 0) {
        const fit = fittedCount ?? items.length;
        const visible = items.slice(0, fit);
        return (
            <div ref={containerRef} className="relative inline-flex items-center gap-1 max-w-full">
                <span className="truncate block max-w-[12rem]">{visible.join(', ')}</span>
                <div ref={measureRef} style={{ position: 'absolute', left: -9999, top: 0, visibility: 'hidden', whiteSpace: 'nowrap' }}>
                    {items.map((it, i) => (
                        <span key={i} style={{ display: 'inline-block', padding: '0 2px', fontSize: 12, fontWeight: 600 }}>{it}</span>
                    ))}
                </div>
                {/* Removed "+x" overflow button — show truncated list only */}
            </div>
        );
    }

    // Fallback for plain strings: show +more only if truncated
    if (typeof value === 'string') {
        const textRef = useRef<HTMLSpanElement | null>(null);
        const [overflowing, setOverflowing] = useState(false);

        useEffect(() => {
            const check = () => {
                if (!textRef.current || !containerRef.current) return setOverflowing(false);
                setOverflowing(textRef.current.scrollWidth > textRef.current.clientWidth + 1 || textRef.current.scrollWidth > containerRef.current.clientWidth + 1);
            };
            check();
            const ro = new ResizeObserver(() => check());
            if (containerRef.current) ro.observe(containerRef.current);
            window.addEventListener('resize', check);
            return () => {
                ro.disconnect();
                window.removeEventListener('resize', check);
            };
        }, [value]);

        return (
            <div className="relative inline-flex items-center max-w-full" ref={containerRef}>
                <span ref={textRef} className="truncate block max-w-[18rem]">{value}</span>
                {/* Removed "+more" button — rely on truncation only */}
            </div>
        );
    }

    return <span className="truncate block">{String(value)}</span>;
}

export default function ArtistFlipAPICard({
    artist,
    artistDetails,
}: Readonly<ArtistFlipAPICardProps>) {
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
                            <BasicInfoAPITab artist={artist} artistDetails={artistDetails} />
                        ) : (
                            <MoreDetailsAPITab artist={artist} artistDetails={artistDetails} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function BasicInfoAPITab({ artist, artistDetails }: Readonly<{ artist: Artist; artistDetails: ArtistDetails | null }>) {
    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* Body */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-purple-100"
                style={{ background: "linear-gradient(90deg, #7c3aed08 0%, transparent 100%)" }}
            >
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-base shrink-0">
                    👤
                </div>
                <h3 className="text-lg font-bold text-primary m-0 leading-tight">
                    Overview
                </h3>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {/* Divider
                <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-purple-100" />
                    <span className="text-purple-300 text-xs">✦</span>
                    <div className="flex-1 h-px bg-purple-100" />
                </div> */}

                
                {/* Info pills grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 text-left">
                    {[
                        { icon: "⭐", label: "Craft Score", value: artistDetails?.craftScore != null && artistDetails?.craftScore >= 0 ? String(artistDetails.craftScore.toFixed(1)) : undefined },
                        { icon: "🎭", label: "Craft Type", value: artistDetails?.craftTypeName },
                        { icon: "🎸", label: "Musical Skills", value: artistDetails?.tags?.Instruments },
                        { icon: "🎤", label: "Performance", value: artistDetails?.tags?.Performance },
                        { icon: "🎵", label: "Genre", value: artistDetails?.tags?.Genre ?? (artistDetails?.tags?.Genre && artistDetails?.tags?.Genre?.length ? artistDetails?.tags?.Genre.join(', ') : undefined) },
                        { icon: "📍", label: "Location", value: artistDetails?.location ?? (artistDetails?.location || undefined) },
                        { icon: "🌐", label: "Languages", value: artistDetails?.languages },
                    ].filter(item => {
                        const v = item.value;
                        return v !== undefined && v !== null && (!(Array.isArray(v)) || v.length > 0);
                    }).map(({ icon, label, value }) => (
                        <div
                            key={label}
                            className="flex items-start gap-2 bg-white/70 border border-purple-50 rounded-lg px-3 py-2 shadow-sm"
                        >
                            <span className="text-sm shrink-0 mt-0.5">{icon}</span>
                            <div className="min-w-0">
                                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide m-0 leading-tight">
                                    {label}
                                </p>
                                <div className="text-xs font-semibold text-gray-700 m-0 leading-snug">
                                    {
                                    label === "Craft Score" || label === "Location" ? (
                                        <span className="truncate block">{value}</span>
                                    ) : (
                                        <ValueWithOverflow value={value} />
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MoreDetailsAPITab({ artist , artistDetails }: Readonly<{ artist: Artist; artistDetails: ArtistDetails | null }>) {
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
                    About {artistDetails?.name}
                </h3>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
                {/* Bio */}
                <p style={{ whiteSpace: 'pre-line' }} className="text-sm text-gray-600 leading-relaxed text-justify">
                    {artistDetails?.about}
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
                            💡 Why your guests will love {artistDetails?.name}?
                        </h3>
                    </div>

                    <ul className="space-y-2">
                        {artistDetails?.whyChoose?.split("||").filter((s): s is string => !!s).map((reason) => (
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
