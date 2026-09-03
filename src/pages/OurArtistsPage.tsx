import React, { useMemo, useState } from "react";
import { AnimatedBackground } from "../components/animated-background";
import { ARTISTS } from "../data/artistOverview";
import ProfileCard from "../components/ProfileCard";
import { Search, SlidersHorizontal } from "lucide-react";

const SCORE_MAX = 100;
const RATING_MAX = 5;

const convertScoreToFivePointRating = (score?: number) =>
  typeof score === "number" && Number.isFinite(score)
    ? (score / SCORE_MAX) * RATING_MAX
    : score;

export default function OurArtistsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArtistType, setSelectedArtistType] = useState("all");

  const artistTypes = useMemo(
    () =>
      Array.from(
        new Set(
          ARTISTS.map((artist) => artist.artistType ?? artist.category).filter(Boolean)
        )
      ).sort(),
    []
  );

  const filteredArtists = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return ARTISTS.filter((artist) => {
      const artistType = artist.artistType ?? artist.category ?? "";
      const matchesSearch =
        normalizedQuery.length === 0 ||
        artist.name.toLowerCase().includes(normalizedQuery) ||
        artistType.toLowerCase().includes(normalizedQuery) ||
        artist.tags.some((tag: string) => tag.toLowerCase().includes(normalizedQuery));

      const matchesArtistType =
        selectedArtistType === "all" || artistType === selectedArtistType;

      return matchesSearch && matchesArtistType;
    });
  }, [searchQuery, selectedArtistType]);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
  <section className="py-12 md:py-16 lg:py-20 min-h-screen relative z-10">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-5">Meet Our Artists</h1>
          <p className="text-xl text-center mb-5">Book top talent for your next event</p>

          {/* <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="group relative w-full md:max-w-sm">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r opacity-20 blur transition duration-200 group-hover:opacity-40"></div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search artists, genres, instruments..."
                  className="w-full rounded-lg border py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </div>
            </div>

            <div className="group relative w-full md:max-w-xs">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r opacity-20 blur transition duration-200 group-hover:opacity-40"></div>
              <div className="relative">
                <SlidersHorizontal className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <select
                  aria-label="Filter artists by type"
                  className="w-full appearance-none rounded-lg border bg-background/70 py-2.5 pl-10 pr-10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={selectedArtistType}
                  onChange={(event) => setSelectedArtistType(event.target.value)}
                >
                  <option value="all">Artist Type</option>
                  {artistTypes.map((artistType) => (
                    <option key={artistType} value={artistType}>
                      {artistType}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div> */}
      
          {filteredArtists.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredArtists.map((artist) => (
              <ProfileCard
                key={artist.id}
                artist={{
                  ...artist,
                  rating: convertScoreToFivePointRating(artist.score),
                }}
                ratingMax={RATING_MAX}
              />        
              // <Link
              //   to={`/artist/${artist.slug}`}
              //   key={artist.id}
              //   className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-shadow no-underline h-full"
              //   style={{ color: 'inherit' }}
              // >
              //   <div className="mb-2 flex justify-center">
              //     <img
              //       src={artist.image}
              //       alt={artist.name}
              //       className="w-32 h-32 object-cover rounded-full border-4 border-primary/30"
              //     />
              //   </div>
              //   <h2 className="text-xl font-bold mb-1 mt-4 h-6 flex items-center justify-center w-full truncate" style={{minHeight:'1.5rem'}}>
              //     {artist.name.split(' ')[0]}
              //   </h2>
              //   <p className="mb-2 text-sm text-muted-foreground w-full">
              //     {artist.artistType}
              //   </p>
              //   <div className="flex flex-wrap gap-2 justify-center mb-2 w-full">
              //     {artist.tags.map((tag: string, idx: number) => (
              //       <span
              //         key={idx}
              //         className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
              //       >
              //         {tag}
              //       </span>
              //     ))}
              //   </div>
              //   {artist.score !== undefined && artist.score !== null && artist.score !== 0 && (
              //     <div className="flex flex-col items-center justify-center mt-1 w-full">
              //       <span className="text-xs text-muted-foreground mb-1">Craft Score</span>
              //       <div className="flex justify-center w-full">
              //         <ScoreRing score={artist.score} />
              //       </div>
              //     </div>
              //   )}
              // </Link>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-xl text-muted-foreground">No artists found matching your search or filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
// ...existing code...
