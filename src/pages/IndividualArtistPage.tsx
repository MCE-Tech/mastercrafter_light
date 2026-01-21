import React, { useState } from "react";
import { useParams } from "react-router-dom";
import artistsData from "../data/artists";

export default function IndividualArtistPage() {
  const { name } = useParams();
  const artist = artistsData.find(
    (a) => a.slug.toLowerCase() === String(name).toLowerCase()
  );
  const [detailsOpen, setDetailsOpen] = useState(true);

  if (!artist) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Artist Not Found</h1>
        <p className="text-muted-foreground">Sorry, we couldn't find the artist you're looking for.</p>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background min-h-screen">
      <div className="container px-2 md:px-4 max-w-6xl mx-auto h-[8vh]">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
          {/* Left: Artist Image */}
          <div className="flex-shrink-0 w-full md:w-56 lg:w-72 text-center md:text-left">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-44 h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover rounded-lg border-4 border-primary/20 mx-auto md:mx-0"
            />
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
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Videos</h2>
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
            <iframe
              title={`${artist.name} - Videos`}
              src="https://www.youtube.com/embed/videoseries?list=PLoganb-r1cCIwFSPzrkDltOWCzQiX4ScB"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
