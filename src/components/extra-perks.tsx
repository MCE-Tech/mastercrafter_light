import { Gift, Percent, Award, Youtube, Calendar } from "lucide-react"

export function ExtraPerks() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-secondary/10 to-primary/10 transform -skew-y-3" />
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-r from-primary/10 to-secondary/10 transform skew-y-3" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8 gradient-text">Extra Perks</h2>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-200 hover:shadow-lg border border-primary/20 hover:border-primary/50">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-full bg-primary/20">
                  <Percent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Special discounts on 3, 6, and 12-month plans</h3>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-200 hover:shadow-lg border border-secondary/20 hover:border-secondary/50">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-full bg-secondary/20">
                  <Gift className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">10% additional off for verified communities</h3>
              </div>
              <p className="text-muted-foreground ml-14">(The Upbeat Music Community & Artist Chowk)</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-200 hover:shadow-lg border border-accent/20 hover:border-accent/50">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-full bg-accent/20">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Loyalty Bonus</h3>
              </div>
              <p className="text-muted-foreground ml-14">Complete 12 months with us & get 10% off on renewal</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-200 hover:shadow-lg border border-pink-500/20 hover:border-pink-500/50">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-full bg-pink-500/20">
                  <Youtube className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold">Get featured on our YouTube & Instagram</h3>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-200 hover:shadow-lg border border-blue-500/20 hover:border-blue-500/50">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-full bg-blue-500/20">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Priority artist slots for premium events</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
