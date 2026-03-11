import React, { useState } from "react";
import { useParams } from "react-router-dom";
import artistsData from "../data/artists";
import "./IndividualArtistPage.css";

export default function IndividualArtistPage() {
  const { name } = useParams();
  const artist = artistsData.find(
    (a) => a.slug.toLowerCase() === String(name).toLowerCase()
  );
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleFlip = () => setIsFlipped((v) => !v);

  const getYouTubeEmbedSrc = (raw?: string) => {
    if (!raw) return "";
    const value = String(raw).trim();
    // playlist URL or param
    const listMatch = value.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    if (listMatch) return `https://www.youtube.com/embed/videoseries?list=${listMatch[1]}`;
    // youtu.be short link
    const shortMatch = value.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    // watch?v= style
    const watchMatch = value.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
    // raw playlist id (starts with PL)
    if (/^PL[a-zA-Z0-9_-]+$/.test(value)) return `https://www.youtube.com/embed/videoseries?list=${value}`;
    // default: treat as video id
    return `https://www.youtube.com/embed/${value}`;
  };

  if (!artist) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Artist Not Found</h1>
        <p className="text-muted-foreground">Sorry, we couldn't find the artist you're looking for.</p>
      </section>
    );
  }

  const embedSrc = getYouTubeEmbedSrc(artist.youtubeVideo && artist.youtubeVideo[0]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background min-h-screen">
      <div className="container px-2 md:px-4 max-w-6xl mx-auto h-[8vh]">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
          {/* Left: Artist Image / Flip card */}
          <div className="flex-shrink-0 w-full md:w-56 lg:w-72 text-center md:text-left">
            <section
              className="artist-card mx-auto md:mx-0"
              role="button"
              tabIndex={0}
              aria-pressed={isFlipped}
              onClick={toggleFlip}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFlip();
                }
              }}
            >
              <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
                <div className="card-face card-front">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    loading="lazy"
                    className="artist-image"
                    width={288}
                    height={288}
                  />
                </div>

                <div className="card-face card-back">
                  <div className="p-3 text-left">
                    <h3 className="text-base font-semibold mb-2">About</h3>
                    <p className="text-sm text-muted-foreground">{artist.bio}</p>
                    <div className="mt-3">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{artist.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right: Basic Info + Details + About/Why */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 gradient-text">{artist.name}</h1>
            <div className="flex flex-wrap gap-2 mb-3">
              {artist.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mb-4 text-lg text-muted-foreground">{artist.isMusician ? "Musician" : "Performer"} • {artist.location}</p>

            <div className="rounded-xl bg-secondary/10 p-4 shadow border border-secondary/20 mb-6">
              <button
                className="flex items-center gap-2 w-full px-2 py-2 focus:outline-none hover:bg-secondary/20 rounded-t-md"
                onClick={() => setDetailsOpen((open) => !open)}
                aria-expanded={detailsOpen}
                aria-controls="artist-details-section"
                type="button"
              >
                <span className="text-base font-semibold text-muted-foreground">🧾 Artist Details</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  width="18"
                  height="18"
                  className={`text-muted-foreground transition-transform duration-200 ${detailsOpen ? '' : 'rotate-180'}`}
                >
                  <path d="M7.47 10.93a.75.75 0 0 0 1.06 0l4.32-4.32a.75.75 0 1 0-1.06-1.06L8 9.34 4.21 5.55a.75.75 0 0 0-1.06 1.06z" fill="currentColor"></path>
                </svg>
              </button>
              {detailsOpen && (
                <div id="artist-details-section" className="p-4">
                  <table className="w-full text-sm table-auto">
                    <tbody>
                      <tr className="border-b">
                        <th className="text-left text-muted-foreground font-medium w-40 py-2">Craft Type</th>
                        <td className="py-2 font-semibold">{artist.craftType}</td>
                      </tr>
                      <tr className="border-b">
                        <th className="text-left text-muted-foreground font-medium w-40 py-2">Tags</th>
                        <td className="py-2 font-semibold">{artist.tags.join(', ')}</td>
                      </tr>
                      <tr className="border-b">
                        <th className="text-left text-muted-foreground font-medium w-40 py-2">Language</th>
                        <td className="py-2 font-semibold">{artist.language.join(', ')}</td>
                      </tr>
                      <tr className="border-b">
                        <th className="text-left text-muted-foreground font-medium w-40 py-2">Genre</th>
                        <td className="py-2 font-semibold">{artist.genre.join(', ')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* About & Why on the right column */}
            <div className="prose prose-lg">
              <div className="rounded-xl bg-white/80 shadow p-4 border-l-4 border-primary">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">👤</span>
                  <h2 className="text-lg md:text-xl font-bold text-primary m-0">About {artist.name}</h2>
                </div>
                <div className="text-base text-gray-700 leading-relaxed mb-4">
                  {artist.introduction}
                </div>
                <div className="flex items-center mb-2 mt-4">
                  <span className="text-2xl mr-2">💡</span>
                  <h3 className="text-lg md:text-xl font-bold text-primary m-0">Why Book {artist.name}?</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
                  {artist.whyBook.map((reason, idx) => (
                    <li key={idx}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Videos Section - embed playlist from provided YouTube link */}
        {embedSrc ? (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Videos</h2>
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
              <iframe
                title={`${artist.name} - Videos`}
                src={embedSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
