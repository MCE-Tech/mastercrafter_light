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
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute -top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl" />
      <div className="absolute -bottom-10 right-10 w-20 h-20 rounded-full bg-secondary/10 blur-xl" />

      {/* Main Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <img
                  src={logo}
                  alt="Master Crafters Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              {/* <h3 className="text-lg font-bold gradient-text">
                Master Crafters
              </h3> */}
            </div>
            <p className="text-sm text-muted-foreground">
              India's First Artist-Centric Artist & Talent Management Platform
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/mastercrafters.events"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 transition-all"
              >
                <Instagram className="h-5 w-5 text-secondary" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com/mastercrafters"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 transition-all"
              >
                <Youtube className="h-5 w-5 text-secondary" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/home"
                  className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <Music className="h-3 w-3" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/our-artists"
                  className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <Mic className="h-3 w-3" />
                  Our Artists
                </Link>
              </li>
              <li>
                <Link
                  to="/services-for-artists"
                  className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <Headphones className="h-3 w-3" />
                  Services for Artists
                </Link>
              </li>
              <li>
                <Link
                  to="/services-for-clients"
                  className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <Music className="h-3 w-3" />
                  Services for Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20">
                  <Mail className="h-3 w-3 text-secondary" />
                </div>
                <a
                  href="mailto:mastercrafters.ent@gmail.com"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  mastercrafters.ent@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20">
                  <Phone className="h-3 w-3 text-secondary" />
                </div>
                <a
                  href="tel:+918329303275"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  +91 8329303275
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates on artists and
              events.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm rounded-md border bg-background"
              />
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Subscribe
              </Button>
            </div>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Master Crafters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
