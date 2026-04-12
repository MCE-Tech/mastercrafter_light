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
            <div className="text-3xl mb-4">🎤</div>
            <h3 className="text-2xl font-bold mb-2">Perform</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Musicians, poets, dancers, beatboxers, comedians — this is your stage, whatever art you do.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                { icon: "🎟️", text: "No registration charges for shortlisted performers" },
                { icon: "📝", text: "Limited slots per VibeVeda Edition" },
                { icon: "✅", text: "Shortlisted by performance quality & profile" },
                { icon: "🤝", text: "Referral code provided for shortlisted artists" },
                { icon: "海", text: "Poster for all shortlisted performer" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex-shrink-0">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* <Button asChild className="w-full">
              <a href="https://forms.gle/bN3naYfytBQcS5Mw5" target="_blank" rel="noopener">
                Apply to Perform →
              </a>
            </Button> */}
          </div>

          {/* Audience Card */}
          <div className="relative rounded-2xl border bg-secondary/10 p-8 overflow-hidden group hover:border-primary/40 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary/50" />
            <div className="text-3xl mb-4">🎫</div>
            <h3 className="text-2xl font-bold mb-2">Attend</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Come for the vibe, stay for the art. An evening of live performances, collabs, and community energy.
            </p>

            {/* Pricing */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-between rounded-lg border bg-background px-4 py-3">
                <div className="flex items-center gap-2 text-sm">
                  <span>🎫</span>
                  <span className="font-medium">General Pass</span>
                </div>
                <span className="font-bold text-primary">from ₹299</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border bg-background px-4 py-3">
                <div className="flex items-center gap-2 text-sm">
                  <span>🤝</span>
                  <span className="font-medium">Referral Pass</span>
                </div>
                <span className="font-bold text-primary">from ₹199</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border bg-background px-4 py-3">
                <div className="flex items-center gap-2 text-sm">
                  <span>🎤</span>
                  <span className="font-medium">Artist Pass</span>
                </div>
                <span className="font-bold text-primary">from ₹99</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground px-1">
                <span>🎵</span>
                <span>Jam session included for all guests</span>
              </div>
            </div>

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
