import { Button } from "../components/ui/button"

const artistBenefits = [
  "Perform live before a real paying audience",
  "Get scored by music experts and clients",
  "Build a verified profile with your Craft Score",
  "Unlock real booking opportunities",
  "No politics. No gatekeeping. Pure music.",
]

const clientBenefits = [
  "Discover artists with verified Craft Scores",
  "View real portfolios with live performance data",
  "Join the Judge Panel — shape next-gen talent",
  "Book with confidence, not guesswork",
  "Support India's emerging music scene",
]

export function SpotlightForWho() {
  return (
    <section className="py-16 md:py-24 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/20 to-blue-400/30 transform -skew-y-2" />
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Who Is This For
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Two Paths,{" "}
            <span className="gradient-text">One Stage</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Artists Card */}
          <div className="relative rounded-2xl border bg-background p-8 overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/30" />
            <div className="text-3xl mb-4">🎸</div>
            <h3 className="text-xl font-bold mb-1">Artists, Bands & Musicians</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Solo performers, acoustic duos, or new bands — this platform gives your talent the
              recognition, direction, and real bookings it deserves.
            </p>
            <ul className="space-y-2.5 mb-7">
              {artistBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <blockquote className="text-xs italic text-muted-foreground border-l-2 border-primary pl-3 mb-6">
              "No politics. No gatekeeping. Just pure music and measurable growth."
            </blockquote>
            <Button asChild className="w-full">
              <a href="https://forms.gle/bN3naYfytBQcS5Mw5" target="_blank" rel="noopener">
                Apply to Perform →
              </a>
            </Button>
          </div>

          {/* Clients Card */}
          <div className="relative rounded-2xl border bg-background p-8 overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-400/30" />
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-1">Clients & Event Planners</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Looking to book credible live performers without the guesswork? Discover verified
              talent with proven stage presence and real Craft Scores.
            </p>
            <ul className="space-y-2.5 mb-7">
              {clientBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <blockquote className="text-xs italic text-muted-foreground border-l-2 border-blue-400 pl-3 mb-6">
              "Book with confidence. Support real growth."
            </blockquote>
            <Button className="w-full">
              <a
                href="https://wa.me/918329303275?text=Hi%20MasterCrafters%2C%20I%20want%20to%20partner%20with%20yous%20as%20a%20client."
                target="_blank"
                rel="noopener noreferrer"
              >
                Partner With Us →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
