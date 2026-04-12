const highlights = [
  {
    icon: "✨",
    title: "Conscious Curation",
    desc: "A handpicked lineup of emerging and seasoned voices — no filler, just extraordinary art.",
  },
  {
    icon: "🤝",
    title: "Real Community",
    desc: "Connect with like-minded creatives who live and breathe artistic expression.",
  },
  {
    icon: "🎶",
    title: "Spontaneous Jams",
    desc: "Every night ends with a jam session where the audience becomes the stage.",
  },
  {
    icon: "🌱",
    title: "Safe Expression",
    desc: "Raw, honest, unfiltered — a space where your voice is heard without judgment.",
  },
]

export function VibeVedaAbout() {
  return (
    <section className="py-16 md:py-20 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Left: description */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
              The Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              More than an Open Mic.{" "}
              <span className="gradient-text">A Living Celebration.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From heartfelt music and powerful poetry to beatboxing, dance, and stand-up comedy —
              VibeVeda is a celebration of art, raw expression, and human connection.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              And when the performances end, everyone becomes part of a spontaneous musical jam
              session that turns strangers into collaborators.
            </p>
            <blockquote className="border-l-4 border-primary pl-5 italic text-muted-foreground text-base">
              "Whether you're a performer or just love great vibes,{" "}
              <strong className="text-foreground not-italic">VibeVeda is where you belong.</strong>"
            </blockquote>
          </div>

          {/* Right: benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-xl border bg-background p-5 hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
                  {h.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1.5">{h.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
