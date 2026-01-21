import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import artistsData from "../data/artists";
import { AnimatedBackground } from "../components/animated-background";
import PlaylistVideos from "../components/PlaylistVideos";

export default function ArtistProfilePage() {
  const { name } = useParams();
  const artist = artistsData.find(
    (a) => a.slug.toLowerCase() === String(name).toLowerCase()
  );

  // Sticky header state and ref must be inside the component
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      // Find the artist image inside heroRef
      const img = heroRef.current.querySelector('img');
      if (!img) return;
      const imgRect = img.getBoundingClientRect();
      // Show sticky header as soon as the image is out of view (bottom <= header offset)
      const headerOffset = 16 * 4; // 4rem (top-16)
      setShowSticky(imgRect.bottom <= headerOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Expand/collapse state for details (must be before any return)
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!artist) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Artist Not Found</h1>
        <p className="text-muted-foreground">Sorry, we couldn't find the artist you're looking for.</p>
      </section>
    );
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      {/* Sticky header for artist image and info */}
      <div
        className={`fixed top-16 left-0 w-full z-40 bg-white/90 shadow backdrop-blur flex items-center justify-center border-b border-primary/10 transition-all duration-300
        ${showSticky ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
        style={{ transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)' }}
        aria-hidden={!showSticky}
      >
          <div className="container max-w-6xl flex items-center py-2 px-2 md:px-4">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-16 h-16 object-cover rounded-full border-2 border-primary/40 mr-4"
          />
          <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <span className="block text-lg font-bold text-primary leading-tight">{artist.name}</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {artist.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="block mt-2 md:mt-0 text-sm text-muted-foreground font-semibold">
              {artist.isMusician ? "Musician" : "Performer"}
            </span>
          </div>
          
        </div>
      </div>
      <section className="py-12 md:py-16 lg:py-20 min-h-screen relative z-10">
        <div className="container px-2 md:px-4 max-w-6xl mx-auto">
          <div ref={heroRef} className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-10 text-center md:text-left">
            <div className="m-auto col-span-1 flex flex-col items-center md:items-start">
              <img
                src={artist.image}
                alt={artist.name}
                className="m-auto w-44 h-44 object-cover rounded-full mb-4 border-4 border-primary/30"
              />
              <h1 className="m-auto text-4xl font-extrabold mb-2 gradient-text" style={{paddingBottom:"10px"}}>{artist.name}</h1>
              <div className="m-auto flex flex-wrap gap-2 justify-center md:justify-start mb-2">
                {artist.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="m-auto mb-2 text-lg text-muted-foreground">
                {artist.isMusician ? "Musician" : "Performer"}
              </p>
              {/* Artist Details moved to left column (swapped) */}
            </div>
            <div className="col-span-2 h-80" style={{minWidth: '90%'}}>
              {/* About and Why Book moved to right column (swapped) */}
              <div className="w-full">
                <div className="flip-card" style={{ perspective: '1000px' }}>
                  <div 
                    className="flip-card-inner relative w-full transition-transform duration-700"
                    style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                  >
                    {/* Front of card */}
                    <div className="flip-card-front absolute inset-0 w-full  h-full" style={{ backfaceVisibility: 'hidden' }}>
                      <div className="rounded-xl bg-white/80 shadow p-6 border-l-4 border-primary flex flex-col">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">👤</span>
                            <h2 className="text-xl font-bold text-primary m-0">About {artist.name}</h2>
                          </div>
                          <div className="text-base text-gray-700 leading-relaxed mb-6">
                            {artist.introduction}
                          </div>
                          <div className="flex items-center mb-2 mt-6">
                            <span className="text-2xl mr-2">💡</span>
                            <h3 className="text-xl font-bold text-primary m-0">Why Book {artist.name}?</h3>
                          </div>
                          <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
                            {artist.whyBook.map((reason, idx) => (
                              <li key={idx} className="pl-1">{reason}</li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => setIsFlipped(!isFlipped)}
                          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors self-end"
                        >
                          Flip Card
                        </button>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="flip-card-back absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                      <div className="rounded-xl bg-white/80 shadow p-6 border-l-4 border-primary flex flex-col justify-center items-center">
                        <h2 className="text-xl font-bold text-primary mb-4">Additional Information</h2>
                          <div id="artist-details-section" className="p-6">
                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Name</dt>
                                <dd className="flex-1 font-semibold">{artist.name}</dd>
                              </div>
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Craft Type</dt>
                                <dd className="flex-1 font-semibold">{artist.craftType}</dd>
                              </div>
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Tags</dt>
                                <dd className="flex-1 font-semibold">{artist.tags.join(', ')}</dd>
                              </div>
                              {/* <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Bio</dt>
                                <dd className="flex-1 font-semibold">{artist.bio}</dd>
                              </div> */}
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Location</dt>
                                <dd className="flex-1 font-semibold">{artist.location}</dd>
                              </div>
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Language Known</dt>
                                <dd className="flex-1 font-semibold">{artist.language.join(', ')}</dd>
                              </div>
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Musician Type</dt>
                                <dd className="flex-1 font-semibold">{artist.musicianType.join(', ') || '—'}</dd>
                              </div>
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Performance Type</dt>
                                <dd className="flex-1 font-semibold">{artist.performanceType.join(', ')}</dd>
                              </div>
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Genre Performed</dt>
                                <dd className="flex-1 font-semibold">{artist.genre.join(', ')}</dd>
                              </div>
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Craft Score</dt>
                                <dd className="flex-1 font-semibold">{artist.craftScore}</dd>
                              </div>
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Last Modified</dt>
                                <dd className="flex-1 font-semibold">{artist.lastModified}</dd>
                              </div>
                              <div className="flex">
                                <dt className="w-36 text-muted-foreground font-medium">Verification Date</dt>
                                <dd className="flex-1 font-semibold">{artist.verificationDate}</dd>
                              </div>
                            </dl>
                          </div>
                        <button
                          onClick={() => setIsFlipped(!isFlipped)}
                          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors self-end"
                        >
                          Flip Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1 md:col-span-3 w-full mt-6 mb-4 rounded-xl bg-secondary/10 p-0 shadow border border-secondary/20 text-left">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 focus:outline-none hover:bg-secondary/20 rounded-t-xl"
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
                    <path d="M7.47 10.93a.75.75 0 0 0 1.06 0l4.32-4.32a.75.75 0 1 0-1.06-1.06L8 9.34 4.21 5.55a.75.75 0 0 0-1.06 1.06z" fill="currentColor" />
                  </svg>
                </button>
                {detailsOpen && (
                  <div id="artist-details-section" className="p-6">
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Name</dt>
                        <dd className="flex-1 font-semibold">{artist.name}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Craft Type</dt>
                        <dd className="flex-1 font-semibold">{artist.craftType}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Tags</dt>
                        <dd className="flex-1 font-semibold">{artist.tags.join(', ')}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Bio</dt>
                        <dd className="flex-1 font-semibold">{artist.bio}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Location</dt>
                        <dd className="flex-1 font-semibold">{artist.location}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Language Known</dt>
                        <dd className="flex-1 font-semibold">{artist.language.join(', ')}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Musician Type</dt>
                        <dd className="flex-1 font-semibold">{artist.musicianType.join(', ') || '—'}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Performance Type</dt>
                        <dd className="flex-1 font-semibold">{artist.performanceType.join(', ')}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Genre Performed</dt>
                        <dd className="flex-1 font-semibold">{artist.genre.join(', ')}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Craft Score</dt>
                        <dd className="flex-1 font-semibold">{artist.craftScore}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Last Modified</dt>
                        <dd className="flex-1 font-semibold">{artist.lastModified}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-36 text-muted-foreground font-medium">Verification Date</dt>
                        <dd className="flex-1 font-semibold">{artist.verificationDate}</dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div> */}
          </div>
          <br></br>
          <br></br>
          {/* Playlist - placed below artist details as requested */}
          <div className="max-w-6xl mx-auto px-2 md:px-0 mt-8 text-center">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Videos</h2>
            </div>
            <PlaylistVideos playlist={`https://www.youtube.com/watch?v=JTMHOFf8_Ns&list=PLoganb-r1cCIwFSPzrkDltOWCzQiX4ScB`} max={5} order="playlist" />
          </div>
        </div>
      </section>
    </div>
  );
}
