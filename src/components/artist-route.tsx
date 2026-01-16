import { Music, Award, Users, Sparkles, BarChart } from "lucide-react"
import { SectionHeader } from "./ui/section-header"
import { FeatureCard } from "./ui/feature-card"

export function ArtistRoute() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/10 to-secondary/10 transform -skew-y-3" />
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-r from-secondary/10 to-primary/10 transform skew-y-3" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4 gradient-text">
            Your Music, Your Dream — We handle the hustle.
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            At Master Crafters, we don't just find you gigs. We{" "}
            <span className="text-primary font-semibold">build careers</span>. Whether you're a solo artist, a duo, or a
            full band — just starting out or already seasoned — our
            <span className="text-secondary font-semibold"> ARTIST ROUTE Membership</span> plan helps you grow, perform,
            and stand out.
          </p>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            From first-time portfolios to full-fledged artist, we have a{" "}
            <span className="text-primary font-semibold">plan for every stage of your journey</span>.
          </p>
        </div>
        <div className="mx-auto">
          <SectionHeader title="Why Join the Artist Route?" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FeatureCard
              icon={Award}
              title="Artist-first system"
              description="Transparent payments, fixed commissions, and reliable support"
              iconColor="primary"
              borderColor="primary"
              className="bg-white/5 backdrop-blur-sm"
            />
            <FeatureCard
              icon={Sparkles}
              title="Be discovered, professionally"
              description="Get a crafted artist portfolio with performance videos, bios & more — ready to share instantly"
              iconColor="secondary"
              borderColor="secondary"
              className="bg-white/5 backdrop-blur-sm"
            />
            <FeatureCard
              icon={Music}
              title="More Gigs, Less Hassle"
              description="We bring regular paid and promo performance opportunities"
              iconColor="accent"
              borderColor="accent"
              className="bg-white/5 backdrop-blur-sm"
            />
            <FeatureCard
              icon={Users}
              title="Clarity & Coaching"
              description="With 1:1 consultations and feedback from industry experts."
              iconColor="pink-500"
              borderColor="pink-500"
              className="bg-white/5 backdrop-blur-sm"
            />
            <FeatureCard
              icon={Award}
              title="Expert help"
              description="Get reviews and mentorship through The Spotlight Index"
              iconColor="blue-500"
              borderColor="blue-500"
              className="bg-white/5 backdrop-blur-sm"
            />
            <FeatureCard
              icon={BarChart}
              title="Step-by-step growth"
              description="Shift to higher plans as you evolve — start free, go premium when you're ready"
              iconColor="green-500"
              borderColor="green-500"
              className="bg-white/5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
