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
    params: [
      { name: "Vocal Skills", desc: "Pitch, control, and expressive range" },
      { name: "Instrumental Skills", desc: "Skill and synergy of musicians / instrumentalists" },
      { name: "Song Arrangement", desc: "Smooth transitions and creative flow of the set" },
      { name: "Stage Presence", desc: "Charisma, body language, audience engagement" },
      { name: "Crowd Engagement", desc: "Interaction, vibe, and connection with the audience" },
      { name: "Song Choices", desc: "Relevance to event vibe and crowd expectations" },
      { name: "Sound Setup Management", desc: "Handling of live sound, mic check, and simulated issues" },
    ],
  },
  {
    id: "professionalism",
    label: "Professionalism",
    count: 2,
    color: "bg-purple-500",
    colorText: "text-purple-500",
    colorBg: "bg-purple-500/10",
    colorBorder: "border-purple-500/30",
    params: [
      { name: "Professionalism", desc: "Respectful behavior, communication, and preparedness" },
      { name: "Punctuality", desc: "Timely arrival, setup, and readiness for performance" },
    ],
  },
  {
    id: "impact",
    label: "Audience Impact & Portfolio",
    count: 3,
    color: "bg-emerald-500",
    colorText: "text-emerald-500",
    colorBg: "bg-emerald-500/10",
    colorBorder: "border-emerald-500/30",
    params: [
      { name: "Audience Reaction", desc: "Real-time crowd energy and sustained attention" },
      { name: "Adaptability", desc: "Handling requests, tech issues, or unexpected mood shifts" },
      { name: "Reality Check", desc: "Alignment between live performance and online portfolio" },
    ],
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
                  open === g.id ? `${g.colorBorder}` : "border-border"
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
                  <div className="px-5 pb-4 border-t border-border bg-secondary/5">
                    <div className="divide-y divide-border">
                      {g.params.map((p) => (
                        <div key={p.name} className="flex items-start justify-between py-3 gap-4">
                          <div>
                            <p className="text-sm font-medium">{p.name}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                          </div>
                          <span
                            className={`flex-shrink-0 text-xs font-bold px-2 py-1 rounded ${g.colorBg} ${g.colorText}`}
                          >
                            /10
                          </span>
                        </div>
                      ))}
                    </div>
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
