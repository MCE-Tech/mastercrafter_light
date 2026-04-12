import { Button } from "../components/ui/button"

export function VibeVedaCTA() {
  return (
    <section className="py-16 md:py-24 bg-secondary/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-primary/10 to-secondary/20 transform skew-y-2" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl border bg-background shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left: headline */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                Stay Connected
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Stay Updated for{" "}
                <span className="gradient-text">Next VibeVeda</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Have questions? Want the next lineup or event details? Follow us and we'll keep you in the loop.
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://www.instagram.com/mastercrafters.events/"
                    target="_blank"
                    rel="noopener"
                  >
                    📸 Instagram
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://www.youtube.com/@mastercrafters.events"
                    target="_blank"
                    rel="noopener"
                  >
                    ▶️ YouTube
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: contact details */}
            <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
              <p className="font-semibold text-sm">Reach Us Directly</p>
              <a
                href="mailto:mastercrafters.ent@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-base group-hover:bg-primary/20 transition-colors">
                  📧
                </span>
                mastercrafters.ent@gmail.com
              </a>
              <a
                href="tel:+918329303275"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-base group-hover:bg-primary/20 transition-colors">
                  📱
                </span>
                +91 83293 03275
              </a>
              <p className="text-xs text-muted-foreground mt-2 italic border-t pt-4">
                VibeVeda — where your art heals your soul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
