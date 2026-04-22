import React from "react";
import logo from "../assets/images/logo.png";
import { Music, Mic, Star } from "lucide-react";
import AnimatedWave from "./AnimatedWave";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-20 lg:py-20">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-20" />

      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent/20 blur-xl" />

      {/* Content container */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Logo */}
          {/* <div className="relative w-48 h-48">
            <img
              src={logo}
              alt="Master Crafters Logo"
              className="object-contain w-full h-full"
            />
          </div> */}

          {/* Heading */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="gradient-text">The Artist Route</span> - Journey to Dreams
            </h1>
          </div>
          {/* Icons */}
          <div className="flex items-center justify-center gap-4">
            <div className="p-2 rounded-full bg-primary/20">
              <Music className="h-5 w-5 text-primary" />
            </div>
            <div className="p-2 rounded-full bg-secondary/20">
              <Mic className="h-5 w-5 text-secondary" />
            </div>
            <div className="p-2 rounded-full bg-accent/20">
              <Star className="h-5 w-5 text-accent" />
            </div>
          </div>

          {/* Subheading */}
          {/* <h2 className="text-2xl md:text-3xl font-bold">Services for Artists</h2> */}
        </div>
      </div>

      {/* Bottom wave divider */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 170"
          className="w-full h-auto"
        >
          <path
            fill="currentColor"
            fillOpacity="0.1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,69.3C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}
      <AnimatedWave/>
    </section>
  );
}
