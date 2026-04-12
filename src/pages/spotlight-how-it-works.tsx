import { Button } from "../components/ui/button"

const steps = [
  {
    n: "01",
    title: "Apply to Perform",
    desc: "Sign up for an upcoming Spotlight Index event via our application form.",
    link: { href: "https://forms.gle/bN3naYfytBQcS5Mw5", label: "Apply here →" },
  },
  {
    n: "02",
    title: "Portfolio Created / Updated",
    desc: "We create or update your Master Crafters artist portfolio — this is mandatory before performing.",
    link: { href: "https://forms.gle/9Vyq9BMkeFqyiFmX7", label: "Create portfolio →" },
  },
  {
    n: "03",
    title: "Perform Live",
    desc: "Take the stage in a supportive open-mic format before a real audience.",
  },
  {
    n: "04",
    title: "Expert Panel Evaluates",
    desc: "A diverse panel of judges — music experts, clients & select audience — scores your set.",
  },
  {
    n: "05",
    title: "12 Parameters Scored",
    desc: "Each of 12 craft parameters is scored out of 10 by multiple judges independently.",
  },
  {
    n: "06",
    title: "Craft Score Published",
    desc: "Your Craft Score (out of 100) is calculated and published on your Master Crafters profile.",
  },
  {
    n: "07",
    title: "Jam, Connect & Celebrate",
    desc: "After the show, everyone jams together — music, community, and growth.",
  },
]

export function SpotlightHowItWorks() {
  return (
    <section className="py-14 md:py-18 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
              The Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
              A clear, structured journey from application to a verified score on your profile.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {steps.map((step, index) => {
              const isLastItem = index === steps.length - 1
              const isOddNumber = steps.length % 2 === 1
              const centerLast = isLastItem && isOddNumber
              return (
              <div
                key={step.n}
                className={`group flex gap-4 rounded-xl border bg-background p-5 hover:border-primary/40 hover:shadow-sm transition-all duration-200 ${
                  centerLast ? "md:col-span-2 md:w-fit md:mx-auto" : ""
                }`}
              >
                {/* Number badge */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-block mt-2 text-xs font-semibold text-primary hover:underline"
                    >
                      {step.link.label}
                    </a>
                  )}
                </div>
              </div>
              )
            })}
          </div>

          {/* Eligibility note */}
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 flex gap-3 items-start max-w-2xl mx-auto">
            <span className="text-lg flex-shrink-0">💡</span>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Eligibility:</strong> Must have a portfolio with
              Master Crafters before applying.{" "}
              <a
                href="https://forms.gle/9Vyq9BMkeFqyiFmX7"
                target="_blank"
                rel="noopener"
                className="text-primary font-semibold hover:underline"
              >
                Create your profile →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
