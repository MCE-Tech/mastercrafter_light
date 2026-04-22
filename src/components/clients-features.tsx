import { Award, Link, Music, Clock, Shield } from "lucide-react"

export function ClientsFeatures() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Why <span className="text-[#ff1493]">Clients Choose</span> Master Crafters
          </h2>

          <div className="space-y-4">
            <div className="card-clients rounded-xl p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full icon-clients">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Trained & Verified Artists Only</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                No random picks. Every artist has a Craft Score that measures their reliability and performance quality.
              </p>
            </div>

            <div className="card-clients rounded-xl p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full icon-clients">
                  <Link className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">One-Click Portfolios</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                Stop chasing links. Get curated artist profiles with videos, genre, vibe, and availability in one link.
              </p>
            </div>

            <div className="card-clients rounded-xl p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full icon-clients">
                  <Music className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Event-Specific Recommendations</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                Acoustic brunch? Sundowner jazz? High-energy sangeet? We match artists to your vibe.
              </p>
            </div>

            <div className="card-clients rounded-xl p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full icon-clients">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Reliable Coordination</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                We handle artist follow-ups, arrival time, sound checks, and backups. You stay stress-free.
              </p>
            </div>

            <div className="card-clients rounded-xl p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full icon-clients">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Backup & Refund Support</h3>
              </div>
              <p className="text-muted-foreground ml-14">If things go wrong, we help you get it right. (T&C Apply)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
