import React from "react";
import { AnimatedBackground } from "../components/animated-background";
import { Link } from "react-router-dom";
import { ScoreRing } from "../components/ScoreRing";
import { ARTISTS } from "../data/artistOverview";

export default function OurArtistsPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
  <section className="py-12 md:py-16 lg:py-20 min-h-screen relative z-10">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-5">Our Talents</h1>
          <h2 className="text-3xl sm:text-4xl text-center mb-5">Discover our Artist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {ARTISTS.map((artist) => (
              <Link
                to={`/artist/${artist.slug}`}
                key={artist.id}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-shadow no-underline h-full"
                style={{ color: 'inherit' }}
              >
                <div className="mb-2 flex justify-center">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-primary/30"
                  />
                </div>
                <h2 className="text-xl font-bold mb-1 mt-4 h-6 flex items-center justify-center w-full truncate" style={{minHeight:'1.5rem'}}>
                  {artist.name.split(' ')[0]}
                </h2>
                <p className="mb-2 text-sm text-muted-foreground w-full">
                  {artist.artistType}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-2 w-full">
                  {artist.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {artist.score !== undefined && artist.score !== null && artist.score !== 0 && (
                  <div className="flex flex-col items-center justify-center mt-1 w-full">
                    <span className="text-xs text-muted-foreground mb-1">Craft Score</span>
                    <div className="flex justify-center w-full">
                      <ScoreRing score={artist.score} />
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
// ...existing code...
