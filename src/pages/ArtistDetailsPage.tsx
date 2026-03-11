import React from "react";
import { useArtist } from "../hooks/useArtist";
import "./IndividualArtistPage.css"; // reuse flip‑card styles for photo
import { Badge } from "../components/ui/badge";
import { KeyValue } from "../components/ui/key-value";
import { Button } from "../components/ui/button";
import { getYouTubeEmbedSrc } from "../lib/utils";

// note: the YouTube util was moved to lib/utils.ts to share with other
// components.  it handles playlists, short links, etc.

export default function ArtistDetailsPage() {
  const { artist, isLoading } = useArtist();

  if (isLoading) {
    return (
      <section className="py-20 text-center">
        <p className="text-lg text-muted-foreground">Loading artist...</p>
      </section>
    );
  }

  if (!artist) {
    return (
      <section className="py-20 text-center" role="alert" aria-live="polite">
        <h1 className="text-3xl font-bold mb-4">Artist Not Found</h1>
        <p className="text-muted-foreground">
          Sorry, we couldn't find the artist you're looking for.
        </p>
      </section>
    );
  }

  const embedSrc = getYouTubeEmbedSrc(artist.youtubeVideo && artist.youtubeVideo[0]);

  return (
    <section className="py-12 bg-background min-h-screen">
      <div className="container mx-auto max-w-4xl px-4">
        {/* header */}
        <header className="text-center mb-8">
          {/* <h2 className="text-4xl font-semibold mt-8">Artist Profile</h2> */}
          <h1 className="text-4xl font-extrabold gradient-text break-words">
            {artist.name}
          </h1>
          <p className="text-muted-foreground mt-2">
            {artist.isMusician ? "Musician" : "Performer"} &middot; {artist.location || "—"}
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {/* left column - photo + quick info */}
          <aside className="md:w-1/3 text-center md:text-left">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full rounded-lg shadow mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2">Quick Info</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <KeyValue label="Craft" value={artist.craftType} />
              <KeyValue
                label="Score"
                value={Math.round(artist.craftScore).toString()}
              />
              {artist.genre.length > 0 && (
                <KeyValue label="Genres" value={artist.genre.join(", ")} />
              )}
              {artist.language.length > 0 && (
                <KeyValue label="Languages" value={artist.language.join(", ")} />
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
              {artist.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </aside>

          {/* right column - detailed sections */}
          <div className="md:w-2/3 prose prose-lg max-w-prose mx-auto">
            <section className="mt-6">
              <h2 className="text-2xl font-bold">Biography</h2>
              <p>{artist.bio}</p>
            </section>

            {artist.introduction && (
              <section>
                <h2 className="text-2xl font-bold mt-6">Introduction</h2>
                <div>{artist.introduction}</div>
              </section>
            )}

            <section>
                <h2 className="text-2xl font-bold mt-6">
                    Why book {artist.name}?
                </h2>

                <ol className="list-decimal list-inside mt-3 space-y-1">
                    {artist.whyBook.map((reason, idx) => (
                    <li key={idx} className="text-[clamp(0.95rem,1vw,1.125rem)] leading-relaxed">
                        {reason}
                    </li>
                    ))}
                </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-6">Details</h2>
              <div className="space-y-2 text-sm">
                {artist.performanceType.length > 0 && (
                  <KeyValue
                    label="Performance"
                    value={artist.performanceType.join(", ")}
                  />
                )}
                {artist.musicianType.length > 0 && (
                  <KeyValue
                    label="Musician Type"
                    value={artist.musicianType.join(", ")}
                  />
                )}
              </div>
            </section>

            {embedSrc && (
              <section>
                <h2 className="text-2xl font-bold mt-6">Video</h2>
                <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
                  <iframe
                    title={`${artist.name} video`}
                    src={embedSrc}
                    aria-label={`Video of ${artist.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
