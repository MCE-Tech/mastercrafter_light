import { Artist } from "@/types/Artist";
import React from "react";

interface ArtistDetailsDisplayProps {
    artist: Artist;
}

export default function ArtistDetailsDisplay({
    artist,
}: Readonly<ArtistDetailsDisplayProps>) {
    return (
        <div id="artist-details-section" className="p-6">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <DetailItem label="Name" value={artist.name} />
                <DetailItem label="Craft Type" value={artist.craftType} />
                <DetailItem label="Tags" value={artist.tags.join(", ")} />
                <DetailItem label="Location" value={artist.location} />
                <DetailItem
                    label="Language Known"
                    value={artist.language.join(", ")}
                />
                <DetailItem
                    label="Musician Type"
                    value={artist.musicianType.join(", ") || "—"}
                />
                <DetailItem
                    label="Performance Type"
                    value={artist.performanceType.join(", ")}
                />
                <DetailItem
                    label="Genre Performed"
                    value={artist.genre.join(", ")}
                />
                <DetailItem
                    label="Craft Score"
                    value={String(artist.craftScore)}
                />
                <DetailItem label="Last Modified" value={artist.lastModified} />
                <DetailItem
                    label="Verification Date"
                    value={artist.verificationDate}
                />
            </dl>
        </div>
    );
}

interface DetailItemProps {
    label: string;
    value: string;
}

function DetailItem({ label, value }: Readonly<DetailItemProps>) {
    return (
        <div className="flex">
            <dt className="w-36 text-muted-foreground font-medium">{label}</dt>
            <dd className="flex-1 font-semibold">{value}</dd>
        </div>
    );
}
