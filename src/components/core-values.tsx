import { Heart, Shield, Users, Award, Eye } from "lucide-react"
import { SectionHeader } from "./ui/section-header"
import { FeatureCard } from "./ui/feature-card"

export function CoreValues() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Light theme background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50" />

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeader
          title="Our Core Values (HEART ❤️)"
          subtitle="The principles that guide everything we do at Master Crafters"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Shield}
            title="Honesty"
            description="We stay truthful—with artists, clients, and ourselves."
            iconColor="primary"
            borderColor="primary"
          />
          <FeatureCard
            icon={Users}
            title="Empathy"
            description="We understand the real struggles of artists and clients, meeting them with care."
            iconColor="secondary"
            borderColor="secondary"
          />
          <FeatureCard
            icon={Award}
            title="Accountability"
            description="We deliver what we promise and own our outcomes."
            iconColor="accent"
            borderColor="accent"
          />

          {/* Center the last two cards */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-center gap-6">
            <div className="w-full max-w-sm">
              <FeatureCard
                icon={Heart}
                title="Respect"
                description="Every client, artist, and team member deserves dignity, appreciation & respect."
                iconColor="pink-500"
                borderColor="pink-500"
              />
            </div>
            <div className="w-full max-w-sm">
              <FeatureCard
                icon={Eye}
                title="Transparency"
                description="Open systems, clear commissions, and no fine print—ever."
                iconColor="blue-500"
                borderColor="blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
