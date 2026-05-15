import { Button } from "../components/ui/button"

const stats = [
  { value: "12", label: "Craft Parameters" },
  { value: "100", label: "Max Craft Score" },
  { value: "3", label: "Judge Categories" },
]

export function SpotlightHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-blue-500/10" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/20 to-blue-400 transform -skew-y-3 mt-4" />
      <div className="absolute -top-10 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              India's First Structured Evaluation Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
            <span className="text-foreground">The</span>{" "}
            <span className="gradient-text">Spotlight</span>
            <br />
            <span className="text-foreground">Index</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
            Blending{" "}
            <strong className="text-foreground">real gigs, expert feedback,</strong> and a
            transparent scoring system to help indie musicians and live performers{" "}
            <strong className="text-foreground">grow and get booked.</strong>
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            For indie musicians, acoustic bands, and live performers.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Button asChild size="lg" className="text-base px-8">
              <a href="https://forms.gle/bN3naYfytBQcS5Mw5" target="_blank" rel="noopener">
                Apply to Perform
              </a>
            </Button>
            <Button asChild size="lg" className="text-base px-8">
              <a
                href="https://wa.me/918329303275?text=Hi%20Master%20Crafters%2C%0AI%20want%20to%20partner%20with%20yous%20as%20a%20judge%20for%20your%20*spotlight%20index*%20event."
                target="_blank"
                rel="noopener noreferrer"
              >
                I'm a Judge
              </a>
            </Button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-px justify-center rounded-xl border bg-border overflow-hidden max-w-lg mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex-1 min-w-[120px] bg-background px-6 py-4 text-center"
              >
                <div className="text-3xl font-extrabold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
