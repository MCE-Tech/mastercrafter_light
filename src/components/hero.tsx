"use client"

import logo from "../assets/images/logo.png";
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import { Music, Mic, Headphones } from "lucide-react"
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { images } from "@/assets/images";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AnimatedWave from "./AnimatedWave";
import Wave from 'react-wavify'

export function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // 1 second animation
      once: true      // animate only once when scrolling in
    })
  }, [])
  const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 }
  const SLIDE_COUNT = 5
  const temp = Array.from(Array(SLIDE_COUNT).keys())
  const SLIDES: (keyof typeof images)[] = [
    'landingPageSlide_1',
    'landingPageSlide_2',
    'landingPageSlide_3',
    'landingPageSlide_4',
    'landingPageSlide_5',
    'landingPageSlide_6',
    'landingPageSlide_7',
]


  return (
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-32">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-xl" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent/10 blur-xl" />

      <div className="container relative z-10">

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2 mx-auto md:mx-0">
              <Music className="h-4 w-4" />
              <span>India's Premier Artist Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="gradient-text">Welcome to our platform</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto md:mx-0">
              Discover, connect, and book India's most talented musicians, bands, and performers for your next event.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => navigate('/our-artists')}
              >
                Discover Artists
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto floating">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
              {/* <img src={logo} alt="Master Crafters Logo" className="object-contain w-full h-full" /> */}
            </div>

            {/* Floating icons */}
            <div className="absolute top-0 left-2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-bounce">
              <Music className="h-6 w-6 text-primary" />
            </div>
            <div
              className="absolute bottom-10 -right-5 sm:right-0 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <Mic className="h-6 w-6 text-secondary" />
            </div>
            <div
              className="absolute top-1/2 -right-2 sm:right-10 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <Headphones className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <AnimatedWave/>

    </section>
  )
}
