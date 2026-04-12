import { Check, X } from "lucide-react"
import { Button } from "./ui/button"

export function ClientsPlans() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 gradient-text">Recommended Plans for you</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose the plan that best fits your event needs and budget
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto mb-12 rounded-lg border border-border shadow-sm">
            <table className="w-full border-collapse bg-white/40 backdrop-blur-sm">
              <thead>
                <tr className="bg-gradient-to-r from-primary/15 to-secondary/15 border-b border-border/50">
                  <th className="px-6 py-4 text-left font-bold text-foreground">Recommended Plan</th>
                  <th className="px-6 py-4 text-center font-bold text-foreground">Client Type</th>
                  <th className="px-6 py-4 text-left font-bold text-foreground">Why It Works</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/30 hover:bg-white/60 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Pay-as-you-go</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">One-Time Gig</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    No commitment. Test MCE's artist quality before upgrading.
                  </td>
                </tr>
                <tr className="bg-white/20 border-b border-border/30 hover:bg-white/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Vibe Starter</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Cafés & Lounges</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Ideal for regular live sets with cost savings & easy artist rotation.
                  </td>
                </tr>
                <tr className="border-b border-border/30 hover:bg-white/60 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Vibe Pro or Vibe Elite</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Wedding Planners</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Access to top-tier talent, theme support, and high refund flexibility.
                  </td>
                </tr>
                <tr className="bg-white/20 border-b border-border/30 hover:bg-white/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Vibe Elite</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Corporate/Event Agencies</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Full planning support, marketing coordination, and premium lineup access.
                  </td>
                </tr>
                <tr className="border-b border-border/30 hover:bg-white/60 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">
                    Vibe Enterprise <span className="text-xs text-secondary">(Custom)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-muted-foreground">High-Volume Gigs</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Tailored plans with enterprise billing, exclusive discounts, and partial service à la carte.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Client Subscription Breakdown</h3>

          <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
            <table className="w-full border-collapse bg-white/40 backdrop-blur-sm">
              <thead>
                <tr className="bg-gradient-to-r from-primary/15 to-secondary/15 border-b border-border/50">
                  <th className="px-6 py-4 text-left font-bold text-foreground">Service</th>
                  <th className="px-6 py-4 text-center font-bold text-foreground">Pay-as-you-go</th>
                  <th className="px-6 py-4 text-center font-bold text-foreground">Vibe Starter</th>
                  <th className="px-6 py-4 text-center font-bold text-foreground">Vibe Pro</th>
                  <th className="px-6 py-4 text-center font-bold text-foreground">Vibe Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/30 hover:bg-white/60 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Monthly Fee</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">₹0</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">₹2,999</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">₹5,999</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">₹9,999</td>
                </tr>
                <tr className="bg-white/20 border-b border-border/30 hover:bg-white/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Easy Artist Booking</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/30 hover:bg-white/60 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Quality Artist in your Budget</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white/20 border-b border-border/30 hover:bg-white/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Artist Curation & Coordination</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/30 hover:bg-white/60 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Dedicated Booking Manager</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white/20 border-b border-border/30 hover:bg-white/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">
                    Weekly Artist Rotation
                    <br />
                    (Craft Score ≥ 80)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/30 hover:bg-white/60 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Discounts on Bookings</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center text-muted-foreground">3%</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">5%</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">10%</td>
                </tr>
                <tr className="bg-white/20 border-b border-border/30 hover:bg-white/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Loyalty Discounts on every (5% OFF)</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">6th Gig</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">5th Gig</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">3rd Gig</td>
                  <td className="px-6 py-4 text-center text-secondary font-semibold">Every Gig</td>
                </tr>
                <tr className="border-b border-border/30 hover:bg-white/60 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">
                    Refund Support
                    <br />
                    (T&C apply)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Up to 40%</td>
                  <td className="px-6 py-4 text-center text-secondary font-semibold">Up to 50%</td>
                </tr>
                <tr className="bg-white/20 border-b border-border/30 hover:bg-white/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Theme & Event Planning</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Docs + Ops Help</td>
                  <td className="px-6 py-4 text-center text-secondary font-semibold">Full Support (includes marketing)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button
              className="bg-[#ff1493] hover:bg-[#ff1493]/90"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfI2q_Stp5_nttvzHm-FuXpw_N-NEDub73R4cBdmEpBjbJvRA/viewform', '_blank')}
            >
              Buy Subscription Plan NOW !
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
