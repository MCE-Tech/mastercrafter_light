"use client"

import { Button } from "./ui/button"
import { Mic, Users, Heart, Star } from "lucide-react"
import { useState } from "react"

interface InitiativesSectionProps {
  showSkew?: boolean;
}

export function InitiativesSection({ showSkew = true }: InitiativesSectionProps) {
  const [selectedInitiative, setSelectedInitiative] = useState<"vibeveda" | "spotlight">("vibeveda")
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements - Reused for consistency */}
      {showSkew && (
        <>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/20 to-secondary/20 transform -skew-y-3" />
          <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-r from-secondary/20 to-primary/20 transform skew-y-3" />
        </>
      )}

      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-4 gradient-text">Our Initiatives</h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Driving change and fostering growth in the creative community
        </p>


        <div className="grid gap-8 md:grid-cols-2">
          {/* Initiative 1: VibeVeda: An Open Mic & Jam Night */}
          {selectedInitiative === "vibeveda" && (
          <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-rose-500 opacity-90 z-0" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center mix-blend-overlay opacity-20" />

            <div className="relative z-10 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Mic className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">VibeVeda: An Open Mic & Jam Night</h3>
              </div>

              <p className="text-white/80 mb-6">
                Step into a space where art flows freely, music heals, and soulful expression takes center stage.
                VibeVeda is more than just an open mic — it’s a consciously curated experience for emerging voices and spontaneous collaborations.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Discover a conscious space for raw and real performances</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Connect with a creative community of like-minded souls</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Mic className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">End the night with a spontaneous jam session</span>
                </li>
              </ul>

              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-white text-purple-600 hover:bg-white/90"
                onClick={() => (window.location.href = "/our-initiative/vibeveda")}
              >
                Learn More
              </Button>
            </div>
          </div>
          )}
          {/* Initiative 2: The Spotlight Index: Empowering Artists, Assuring Clients */}
          <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl">
            {/* Changed gradient from green to blue */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 opacity-90 z-0" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center mix-blend-overlay opacity-20" />

            <div className="relative z-10 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Spotlight Index: Empowering Artists, Assuring Clients</h3>
              </div>

              <p className="text-white/80 mb-6">
                India’s first structured evaluation platform for indie musicians, acoustic bands, and live performers,
                blending real gigs, expert feedback, and a transparent scoring system.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Mic className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Perform live at curated events before a real audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Receive professional feedback from music experts and clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Build a verified artist profile with a Craft Score out of 100</span>
                </li>
              </ul>

              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-white text-blue-600 hover:bg-white/90" // Changed text color to match new gradient
                onClick={() => (window.location.href = "/our-initiative/spotlight-index")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}