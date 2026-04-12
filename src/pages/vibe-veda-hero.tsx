import { Button } from "../components/ui/button"

const artForms = [
  { icon: "🎸", label: "Music" },
  { icon: "🎤", label: "Poetry" },
  { icon: "🥁", label: "Beatbox" },
  { icon: "💃", label: "Dance" },
  { icon: "😄", label: "Stand-up" },
  { icon: "🎷", label: "Live Jams" },
]

export function VibeVedaHero() {
  return (
    <section className="relative py-18 md:py-20 overflow-hidden">
      {/* Decorative background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/20 to-secondary/30 transform -skew-y-2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-2xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Open Mic &amp; Art Experience
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
            <span className="gradient-text">VibeVeda</span>
            <br />
            <span className="text-foreground">An Open Mic & Jam Night</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            VibeVeda is a consciously curated experience where emerging voices, seasoned artists,
            and spontaneous collaborations come together to create{" "}
            <span className="text-foreground font-medium">pure magic.</span>
          </p>

          {/* CTAs */}
          {/* <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <Button asChild size="lg" className="text-base px-8">
              <a href="https://forms.gle/bN3naYfytBQcS5Mw5" target="_blank" rel="noopener">
                Apply to Perform →
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8">
              Attend an Edition
            </Button>
          </div> */}

          {/* Art form tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            {artForms.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-1.5 bg-secondary/20 border border-border rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {a.icon} {a.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
