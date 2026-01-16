import { Music, Calendar, Users } from "lucide-react"

export function ClientsIntro() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-secondary/10 to-primary/10 transform -skew-y-3" />
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-r from-primary/10 to-secondary/10 transform skew-y-3" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            <span className="text-secondary">Book Artists the Modern Way</span> — Simple. Reliable. Tailored.
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Tired of the old-school process of artist bookings — calling multiple musicians, forwarding heavy videos,
            and hoping they show up on time? <span className="text-primary font-semibold">Master Crafters</span> brings
            you the <span className="text-secondary font-semibold">VIBE PLAN</span> a smart, streamlined alternative.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            We help <span className="text-primary">cafés, weddings, corporates, and premium events</span> book verified,
            performance-ready artists — without the back-and-forth chaos. From shortlisting to showtime, we've got you
            covered.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-200 hover:shadow-lg border border-secondary/20 hover:border-secondary/50 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-secondary/20">
                  <Music className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Artists</h3>
              <p className="text-muted-foreground">
                Verified performers with proven track records and professional standards
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-200 hover:shadow-lg border border-primary/20 hover:border-primary/50 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Hassle-Free Booking</h3>
              <p className="text-muted-foreground">
                Simple process with dedicated support from selection to performance
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-200 hover:shadow-lg border border-accent/20 hover:border-accent/50 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-accent/20">
                  <Users className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Event-Matched Talent</h3>
              <p className="text-muted-foreground">
                Artists curated specifically for your event type, audience, and vibe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
