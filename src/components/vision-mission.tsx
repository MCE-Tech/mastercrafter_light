import { Rocket, Target } from "lucide-react"
import { SectionHeader } from "./ui/section-header"

export function VisionMission() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Light decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeader title="Vision & Mission" subtitle="Our guiding principles that drive everything we do" />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group light-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become India&apos;s most trusted premium artist management company by empowering talents across every
              city, and transforming live events with unforgettable performances & experiences.
            </p>
          </div>

          <div className="group light-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-secondary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-full">
                <Rocket className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We help emerging artists grow in craft, confidence, and career while delivering seamless, high-quality
              live experiences through curated performances, professional systems, and creative collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
