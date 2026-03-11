import { Artist } from "@/types/Artist";
import React from "react";
import { Badge } from "./ui/badge";
import { KeyValue } from "./ui/key-value";

interface ArtistDetailsDisplayProps {
    artist: Artist;
}

export default function ArtistDetailsDisplay({
    artist,
}: Readonly<ArtistDetailsDisplayProps>) {
    return (
        <div id="artist-details-section" className="p-6">
            <dl className="space-y-2 text-sm">
                <KeyValue label="Name" value={artist.name} />
                <KeyValue label="Craft Type" value={artist.craftType} />
                {artist.tags.length > 0 && (
                    <KeyValue
                        label="Tags"
                        value={
                            <div className="flex flex-wrap gap-1">
                                {artist.tags.map((tag) => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </div>
                        }
                    />
                )}
                <KeyValue label="Location" value={artist.location} />
                {artist.language.length > 0 && (
                    <KeyValue
                        label="Language Known"
                        value={artist.language.join(", ")}
                    />
                )}
                {artist.musicianType.length > 0 && (
                    <KeyValue
                        label="Musician Type"
                        value={artist.musicianType.join(", ")}
                    />
                )}
                {artist.performanceType.length > 0 && (
                    <KeyValue
                        label="Performance Type"
                        value={artist.performanceType.join(", ")}
                    />
                )}
                {artist.genre.length > 0 && (
                    <KeyValue
                        label="Genre Performed"
                        value={artist.genre.join(", ")}
                    />
                )}
                <KeyValue label="Craft Score" value={String(artist.craftScore)} />
                <KeyValue label="Last Modified" value={artist.lastModified} />
                <KeyValue
                    label="Verification Date"
                    value={artist.verificationDate}
                />
            </dl>
        </div>
    );
}
