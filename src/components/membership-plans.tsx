import { Check, X } from "lucide-react"
import { Button } from "./ui/button"

export function MembershipPlans() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 gradient-text">
          Which Plan is Right for You?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose the membership that fits your current career stage and goals
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="card-artists rounded-xl overflow-hidden border border-gray-300 shadow-sm transition-all duration-200 hover:shadow-2xl hover:border-[#8a2be2]">
            <div className="p-6 bg-[#8a2be2]/20">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="text-sm text-muted-foreground">Beginners looking to explore and build a profile</p>
              <div className="mt-4 text-3xl font-bold">
                ₹0<span className="text-sm font-normal text-muted-foreground">/month</span>
              </div>
            </div>
            <div className="p-6">
              <Button
                className="w-full bg-[#8a2be2] hover:bg-[#8a2be2]/90 mb-6"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQlBI1MNOcd3P8dmd7rZunX_lEega65maesf0ubE4-G_Z5Pg/viewform', '_blank')}
              >
                Get Started
              </Button>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  {/* <X className="h-4 w-4 text-red-500 shrink-0" /> */}
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span className="text-muted-foreground">Portfolio Creation (₹2,999 one-time)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>1 Free Portfolio Edit</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>20-40% Commission Rate</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>1 Session (30 min) Consultation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-artists rounded-xl overflow-hidden border border-gray-300 shadow-sm transition-all duration-200 hover:shadow-2xl hover:border-[#8a2be2]">
            <div className="p-6 bg-[#8a2be2]/20">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-sm text-muted-foreground">Artists stuck in a loop and needing direction</p>
              <div className="mt-4 text-3xl font-bold">
                ₹2,999<span className="text-sm font-normal text-muted-foreground">/month</span>
              </div>
            </div>
            <div className="p-6">
              <Button
                className="w-full bg-[#8a2be2] hover:bg-[#8a2be2]/90 mb-6"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQlBI1MNOcd3P8dmd7rZunX_lEega65maesf0ubE4-G_Z5Pg/viewform', '_blank')}
              >
                Choose Basic
              </Button>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Portfolio Creation (₹1,999 one-time)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>1/Month Free Portfolio Edit</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>15-30% Commission Rate</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>1/Month (45 min) Consultation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-artists rounded-xl overflow-hidden border border-gray-300 shadow-sm transition-all duration-200 hover:shadow-2xl hover:border-[#8a2be2]">
            <div className="p-6 bg-[#8a2be2]/20">
              <h3 className="text-xl font-bold mb-2">Advanced</h3>
              <p className="text-sm text-muted-foreground">Musicians ready to boost gigs and online image</p>
              <div className="mt-4 text-3xl font-bold">
                ₹5,999<span className="text-sm font-normal text-muted-foreground">/month</span>
              </div>
            </div>
            <div className="p-6">
              <Button
                className="w-full bg-[#8a2be2] hover:bg-[#8a2be2]/90 mb-6"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQlBI1MNOcd3P8dmd7rZunX_lEega65maesf0ubE4-G_Z5Pg/viewform', '_blank')}
              >
                Choose Advanced
              </Button>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Portfolio Creation (₹1,999 one-time)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>1/Month Free Portfolio Edit</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>10-20% Commission Rate</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>2/Month (1 hr) Consultation</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Song Distribution Support</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Social Media Strategy</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-artists rounded-xl overflow-hidden border border-gray-300 shadow-sm transition-all duration-200 hover:shadow-2xl hover:border-[#8a2be2]">
            <div className="p-6 bg-[#8a2be2]/20">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-sm text-muted-foreground">Serious artists aiming for full-scale growth & management</p>
              <div className="mt-4 text-3xl font-bold">
                ₹9,999<span className="text-sm font-normal text-muted-foreground">/month</span>
              </div>
            </div>
            <div className="p-6">
              <Button
                className="w-full bg-[#8a2be2] hover:bg-[#8a2be2]/90 mb-6"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQlBI1MNOcd3P8dmd7rZunX_lEega65maesf0ubE4-G_Z5Pg/viewform', '_blank')}
              >
                Choose Premium
              </Button>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Free Portfolio Creation</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Unlimited Portfolio Edits</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>10-15% Commission Rate</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>3/Month (1 hr) Consultation</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Song Distribution Support</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Full Social Media Management</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Original Composition Support</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Dedicated Artist Manager</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-[#8a2be2]/10 rounded-xl p-8 backdrop-blur-sm border border-[#8a2be2]/20">
          <h3 className="text-2xl font-bold mb-4 text-center gradient-text">Want a tailor-made plan?</h3>
          <p className="text-center text-muted-foreground mb-6">
            Our MadeForYou Membership, is designed for high-demand musicians and bands who need full-stack services —
            touring, media, management, and more.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-[#8a2be2] hover:bg-[#8a2be2]/90"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQlBI1MNOcd3P8dmd7rZunX_lEega65maesf0ubE4-G_Z5Pg/viewform', '_blank')}
            >
              Join Master Crafters Membership Plan NOW !!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
