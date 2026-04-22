"use client"

import { useState } from "react"

const paramGroups = [
  {
    id: "performance",
    label: "Performance Quality",
    count: 7,
    color: "bg-blue-500",
    colorText: "text-blue-500",
    colorBg: "bg-blue-500/10",
    colorBorder: "border-blue-500/30",
    description:
      "We evaluate the full spectrum of what makes a live performance exceptional — from raw vocal and instrumental ability to how seamlessly the set flows. This domain covers song arrangement, stage presence, crowd engagement, song selection, and live sound management, rewarding artists who deliver a cohesive, well-crafted experience from the first note to the last.",
  },
  {
    id: "professionalism",
    label: "Professionalism",
    count: 2,
    color: "bg-purple-500",
    colorText: "text-purple-500",
    colorBg: "bg-purple-500/10",
    colorBorder: "border-purple-500/30",
    description:
      "Great artists show up ready — mentally, physically, and logistically. This domain looks at how an artist conducts themselves before, during, and after the event: their communication, preparedness, respect for the organiser and audience, and whether they arrived on time and set up without friction. Professionalism isn't a soft metric — it directly shapes the event experience.",
  },
  {
    id: "impact",
    label: "Audience Impact & Portfolio",
    count: 3,
    color: "bg-emerald-500",
    colorText: "text-emerald-500",
    colorBg: "bg-emerald-500/10",
    colorBorder: "border-emerald-500/30",
    description:
      "Talent means little if it doesn't land. This domain measures the real-time effect of the performance — crowd energy, sustained attention, and how the artist handled the unexpected. It also holds artists accountable to their portfolio: your live show should reflect what you've put out online. Consistency between promise and delivery is what builds long-term trust with event organisers.",
  },
]

export function SpotlightCraftScore() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
              Evaluation System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              The <span className="gradient-text">Craft Score</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
              Evaluation, not judgment. Growth, not perfection. 12 parameters across 3 domains —
              all scored out of 10, giving you a final score out of 100.
            </p>
          </div>

          {/* Score overview chips */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {paramGroups.map((g) => (
              <div
                key={g.id}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${g.colorBg} ${g.colorBorder}`}
              >
                <span className={`w-2 h-2 rounded-full ${g.color}`} />
                <span className={g.colorText}>{g.label}</span>
                <span className="text-muted-foreground text-xs">({g.count})</span>
              </div>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {paramGroups.map((g) => (
              <div
                key={g.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  open === g.id ? g.colorBorder : "border-border"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-secondary/5 transition-colors"
                  onClick={() => setOpen(open === g.id ? null : g.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${g.color}`} />
                    <span className="font-semibold text-sm">{g.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {g.count} parameter{g.count > 1 ? "s" : ""}
                    </span>
                  </div>
                  <span
                    className={`text-muted-foreground text-lg transition-transform duration-200 ${
                      open === g.id ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {open === g.id && (
                  <div className="px-5 py-4 border-t border-border bg-secondary/5">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {g.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final score note */}
          <div className="mt-6 rounded-xl border bg-secondary/10 p-5 text-center">
            <p className="text-sm text-muted-foreground">
              All parameters scored by multiple judges independently.
            </p>
            <p className="text-2xl font-extrabold gradient-text mt-1">
              Final Craft Score = out of 100
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Published directly on your Master Crafters profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}