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
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 text-left border border-muted">Recommended Plan</th>
                  <th className="p-4 text-center border border-muted">Client Type</th>
                  <th className="p-4 text-left border border-muted">Why It Works</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-muted font-medium">Pay-as-you-go</td>
                  <td className="p-4 text-center border border-muted">One-Time Gig</td>
                  <td className="p-4 border border-muted">
                    No commitment. Test MCE's artist quality before upgrading.
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 border border-muted font-medium">Vibe Starter</td>
                  <td className="p-4 text-center border border-muted">Cafés & Lounges</td>
                  <td className="p-4 border border-muted">
                    Ideal for regular live sets with cost savings & easy artist rotation.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-muted font-medium">Vibe Pro or Vibe Elite</td>
                  <td className="p-4 text-center border border-muted">Wedding Planners</td>
                  <td className="p-4 border border-muted">
                    Access to top-tier talent, theme support, and high refund flexibility.
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 border border-muted font-medium">Vibe Elite</td>
                  <td className="p-4 text-center border border-muted">Corporate/Event Agencies</td>
                  <td className="p-4 border border-muted">
                    Full planning support, marketing coordination, and premium lineup access.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-muted font-medium">
                    Vibe Enterprise <span className="text-xs text-[#ff1493]">(Custom)</span>
                  </td>
                  <td className="p-4 text-center border border-muted">High-Volume Gigs</td>
                  <td className="p-4 border border-muted">
                    Tailored plans with enterprise billing, exclusive discounts, and partial service à la carte.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Client Subscription Breakdown</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 text-left border border-muted">Service</th>
                  <th className="p-4 text-center border border-muted">Pay-as-you-go</th>
                  <th className="p-4 text-center border border-muted">Vibe Starter</th>
                  <th className="p-4 text-center border border-muted">Vibe Pro</th>
                  <th className="p-4 text-center border border-muted">Vibe Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-muted">Monthly Fee</td>
                  <td className="p-4 text-center border border-muted">₹0</td>
                  <td className="p-4 text-center border border-muted">₹2,999</td>
                  <td className="p-4 text-center border border-muted">₹5,999</td>
                  <td className="p-4 text-center border border-muted">₹9,999</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 border border-muted">Easy Artist Booking</td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-muted">Quality Artist in your Budget</td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 border border-muted">Artist Curation & Coordination</td>
                  <td className="p-4 text-center border border-muted">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-muted">Dedicated Booking Manager</td>
                  <td className="p-4 text-center border border-muted">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 border border-muted">
                    Weekly Artist Rotation
                    <br />
                    (Craft Score ≥ 80)
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-muted">Discounts on Bookings</td>
                  <td className="p-4 text-center border border-muted">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">3%</td>
                  <td className="p-4 text-center border border-muted">5%</td>
                  <td className="p-4 text-center border border-muted">10%</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 border border-muted">Loyalty Discounts on every (5% OFF)</td>
                  <td className="p-4 text-center border border-muted">6th Gig</td>
                  <td className="p-4 text-center border border-muted">5th Gig</td>
                  <td className="p-4 text-center border border-muted">3rd Gig</td>
                  <td className="p-4 text-center border border-muted">Every Gig</td>
                </tr>
                <tr>
                  <td className="p-4 border border-muted">
                    Refund Support
                    <br />
                    (T&C apply)
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">Up to 40%</td>
                  <td className="p-4 text-center border border-muted">Up to 50%</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 border border-muted">Theme & Event Planning</td>
                  <td className="p-4 text-center border border-muted">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border border-muted">Docs + Ops Help</td>
                  <td className="p-4 text-center border border-muted">Full Support (includes marketing)</td>
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
