import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  Music,
  Headphones,
  Mic,
} from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t pt-12 md:pt-16 music-section">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Logo + Description */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
            </div>

            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              India's First Artist-Centric Artist & Talent Management Platform
            </p>

            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a
                href="https://instagram.com/mastercrafters.events"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 hover:scale-110 transition"
              >
                <Instagram className="h-5 w-5 text-secondary" />
              </a>

              <a
                href="https://www.youtube.com/@mastercrafters.events"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 hover:scale-110 transition"
              >
                <Youtube className="h-5 w-5 text-secondary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-bold">Quick Links</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition"
                >
                  <Music className="h-4 w-4" />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/our-artists"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition"
                >
                  <Mic className="h-4 w-4" />
                  Our Artists
                </Link>
              </li>

              <li>
                <Link
                  to="/services-for-artists"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition"
                >
                  <Headphones className="h-4 w-4" />
                  Services for Artists
                </Link>
              </li>

              <li>
                <Link
                  to="/services-for-clients"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition"
                >
                  <Music className="h-4 w-4" />
                  Services for Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-bold">Contact Us</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href="mailto:mastercrafters.ent@gmail.com"
                  className="hover:text-secondary transition break-all"
                >
                  mastercrafters.ent@gmail.com
                </a>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a
                  href="tel:+918329303275"
                  className="hover:text-secondary transition"
                >
                  +91 8329303275
                </a>
              </li>
            </ul>

            {/* Mobile CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/918329303275?text=Hi%20MasterCrafters%2C%20I%20want%20to%20book%20an%20artist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto text-center bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-md"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Master Crafters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;