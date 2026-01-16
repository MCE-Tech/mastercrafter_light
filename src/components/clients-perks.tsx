import { Gift, Percent, Settings } from "lucide-react"

export function ClientsPerks() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8 gradient-text">Extra Perks</h2>

          <div className="space-y-6">
            <div className="card-clients rounded-xl p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-full icon-clients">
                  <Percent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Referral Rewards</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                Get 5% off for every successful referral on your current budget.
              </p>
            </div>

            <div className="card-clients rounded-xl p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-full icon-clients">
                  <Gift className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Long-Term Bonuses</h3>
              </div>
              <p className="text-muted-foreground ml-14">Up to 20% off when subscribing for 3/6/12 months.</p>
            </div>

            <div className="card-clients rounded-xl p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-full icon-clients">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Custom Add-ons</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                Need theme nights, backup artists, or just portfolios? Use à la carte features with Vibe Enterprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
