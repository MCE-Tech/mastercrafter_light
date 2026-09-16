import { Button } from "../components/ui/button"

export function VibeVedaJoin() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Get Involved
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Find Your Place at{" "}
            <span className="gradient-text">VibeVeda</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Performer Card */}
          <div className="relative rounded-2xl border bg-secondary/10 p-8 overflow-hidden group hover:border-primary/40 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
            <div className="flex h-14 w-14 items-center justify-center text-primary">
              <svg
                aria-hidden="true"
                className="h-8 w-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4.5a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0v-6a5 5 0 0 0-5-5Z"
                  className="fill-white stroke-primary"
                  strokeWidth="1.7"
                />
                <path
                  d="M8 14.8v.8a8 8 0 0 0 16 0v-.8M16 23.6v4.1M12.2 27.7h7.6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 9.2h4M14 13h4M14 16.8h4"
                  className="stroke-primary/60"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Take the Stage</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Musicians, poets, dancers, beatboxers, comedians — this is your stage, whatever art you do.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                { text: "No registration charges for shortlisted performers" },
                { text: "Limited slots per VibeVeda Edition" },
                { text: "Shortlisted by performance quality & profile" },
                { text: "Referral code provided for shortlisted artists" },
                { text: "Poster for all shortlisted performer" },
              ].map(({ text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="w-full">
              <a href="https://forms.gle/Nwz9Urm3F1Qdcxqw6" target="_blank" rel="noopener">
                Apply to Perform
              </a>
            </Button>
          </div>

          {/* Audience Card */}
          <div className="relative rounded-2xl border bg-secondary/10 p-8 overflow-hidden group hover:border-primary/40 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary/50" />
            <div className="flex h-14 w-14 items-center justify-center from-primary/15 via-secondary/20 to-primary/10 text-primary">
              <svg
                aria-hidden="true"
                className="h-8 w-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 10.5 21.9 6.9a1.8 1.8 0 0 1 2.2 1.3l.6 2.3a2.6 2.6 0 0 0 1.8 5.2l.6 2.3a1.8 1.8 0 0 1-1.3 2.2L12.4 23.8a1.8 1.8 0 0 1-2.2-1.3l-.6-2.3a2.6 2.6 0 0 0-1.8-5.2l-.6-2.3a1.8 1.8 0 0 1 1.3-2.2Z"
                  className="fill-secondary/35 stroke-primary/45"
                  strokeWidth="1.4"
                />
                <path
                  d="M6.5 13h15.8a1.8 1.8 0 0 1 1.8 1.8v2.4a2.6 2.6 0 0 0 0 5.2v2.4a1.8 1.8 0 0 1-1.8 1.8H6.5a1.8 1.8 0 0 1-1.8-1.8v-2.4a2.6 2.6 0 0 0 0-5.2v-2.4A1.8 1.8 0 0 1 6.5 13Z"
                  className="fill-background stroke-primary"
                  strokeWidth="1.6"
                />
                <path
                  d="M11 16.7h6.5M11 20h8.5M11 23.3h4.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Experience the Vibe</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Come for the vibe, stay for live art, open jams, and community energy.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Explore multiple art forms in one place",
                "Celebrate creativity in its rawest form",
                "Join an open jam session at the end",
                "Unwind, de-stress, and reconnect with your inner child",
                "Jam session included for all guests",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="w-full bg-gradient-to-r from-secondary to-secondary/70 text-secondary-foreground hover:from-secondary/90 hover:to-secondary/60">
              <a href="https://forms.gle/Nwz9Urm3F1Qdcxqw6" target="_blank" rel="noopener">
                Buy ticket
              </a>
            </Button>

            {/* <Button variant="outline" className="w-full">
              Get Your Pass →
            </Button> */}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8 italic">
          "Grow your confidence, credibility, and career — one live set at a time."
        </p>
      </div>
    </section>
  )
}
