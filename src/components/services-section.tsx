"use client"

import { Button } from "./ui/button"
import { Music, Users, Calendar, Award, Mic, Headphones } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/20 to-secondary/20 transform -skew-y-3" />
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-r from-secondary/20 to-primary/20 transform skew-y-3" />

      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-4 gradient-text">Our Services</h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive solutions for both artists and event organizers
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 opacity-90 z-0" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center mix-blend-overlay opacity-20" />

            <div className="relative z-10 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Services for Artists</h3>
              </div>

              <p className="text-white/80 mb-6">
                We craft your path from open mics to grand stages with professional development and strategic promotion.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Professional artist development and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Regular performance opportunities and bookings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Marketing, promotion and audience building</span>
                </li>
              </ul>

              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90"
                onClick={() => (window.location.href = "/services-for-artists")}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-pink-600 opacity-90 z-0" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center mix-blend-overlay opacity-20" />

            <div className="relative z-10 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Services for Clients</h3>
              </div>

              <p className="text-white/80 mb-6">
                We don't just provide talent. We curate your perfect experience with end-to-end event solutions.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Mic className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Curated artist selection for your specific event</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Headphones className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Complete sound, lighting and stage management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-full mt-0.5">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">End-to-end event planning and execution</span>
                </li>
              </ul>

              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-white text-secondary hover:bg-white/90"
                onClick={() => (window.location.href = "/services-for-clients")}
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
