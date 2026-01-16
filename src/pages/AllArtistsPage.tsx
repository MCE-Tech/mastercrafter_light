import React from "react";
import { AnimatedBackground } from "../components/animated-background";
import { Link } from "react-router-dom";
import { ScoreRing } from "../components/ScoreRing";

// Example artist data (replace with real data or props/fetch in future)
import anchorAishwarya from "../assets/images/anchor-aishwarya.png";
import gaurangSahu from "../assets/images/gaurang-sahu.png";
import humraag from "../assets/images/humraag.png";

const ARTISTS = [
  {
    id: 1,
    name: "Aishwarya Sharma",
    slug: "aishwarya-sharma",
    image: anchorAishwarya,
    isMusician: true,
  tags: ["Vocalist", "Performer", "Indie"],
  score: 87,
  },
  {
    id: 2,
    name: "Gaurang Sahu",
    slug: "gaurang-sahu",
    image: gaurangSahu,
    isMusician: true,
  tags: ["Guitarist", "Composer", "Live"],
  score: 92,
  },
  {
    id: 3,
    name: "Humraag",
    slug: "humraag",
    image: humraag,
    isMusician: false,
  tags: ["Host", "Anchor", "Events"],
  score: 78,
  },
  // Add more artists as needed
];

export default function AllArtistsPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
  <section className="py-12 md:py-16 lg:py-20 min-h-screen relative z-10">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-5">Our Talents</h1>
          <h2 className="text-3xl sm:text-4xl text-center mb-5">Discover our Artist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {ARTISTS.map((artist) => (
              <Link
                to={`/artist/${artist.slug}`}
                key={artist.id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow no-underline"
                style={{ color: 'inherit' }}
              >
                <div className="mb-4">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-primary/30"
                  />
                </div>
                <h2 className="text-xl font-bold mb-1 mt-6 h-8 flex items-center justify-center w-full truncate" style={{minHeight:'2rem'}}>
                  {artist.name.split(' ')[0]}
                </h2>
                <p className="mb-2 text-sm text-muted-foreground">
                  {artist.isMusician ? "Musician" : "Performer"}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-2">
                  {artist.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center mt-2">
                  <ScoreRing score={artist.score} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
// ...existing code...
