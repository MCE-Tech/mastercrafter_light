import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Menu, Music, Phone, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import {
  Dialog,
  DialogContent,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ContactInfo } from "./ui/contact-info";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [initiativesOpen, setInitiativesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState<string>("/");
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navRef = useRef<HTMLElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLButtonElement | null>(null);
  const initiativesRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const navItems = navRef.current.querySelectorAll("a");
    const isServicesPage = [
      "/our-services/services-for-artists",
      "/our-services/services-for-clients",
    ].includes(activePath);
    const isInitiativesPage = [
      "/our-initiative/vibeveda",
      "/our-initiative/spotlight-index",
    ].includes(activePath);

    let activeLink: Element | null =
      isServicesPage && servicesRef.current
        ? servicesRef.current
        : isInitiativesPage && initiativesRef.current
        ? initiativesRef.current
        : Array.from(navItems).find(
            (link) => link.getAttribute("href") === activePath
          ) ?? null;

    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const containerRect = navRef.current.getBoundingClientRect();

      indicatorRef.current.style.width = `${rect.width}px`;
      indicatorRef.current.style.left = `${
        rect.left - containerRect.left
      }px`;
    } else {
      indicatorRef.current.style.width = "0px";
    }
  }, [activePath]);

  const handlePageClick =
    (path: string, state?: any) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setActivePath(path);
      navigate(path, { state });
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      setIsMenuOpen(false);
    };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      setActivePath("/");
      const section = document.getElementById("contact-us");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    setIsContactDialogOpen(true);
  };

  const isActive = (path: string) => activePath === path;
  const isOurInitiative = [
    "/our-initiative/vibeveda", 
    "/our-initiative/spotlight-index"
  ].includes(activePath);
  const isServicesActive = [
    "/our-services/services-for-artists",
    "/our-services/services-for-clients",
  ].includes(activePath);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-gray-100/95 backdrop-blur-md shadow-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={handlePageClick("/")}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 md:w-28 md:h-28 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          className="hidden md:flex items-center gap-6 relative"
        >
          <a
            href="/"
            onClick={handlePageClick("/")}
            className={`px-2 py-2 text-sm font-medium ${
              isActive("/") ? "text-blue-700" : "text-gray-700"
            }`}
          >
            Home
          </a>

          <a
            href="/our-artists"
            onClick={handlePageClick("/our-artists")}
            className={`px-2 py-2 text-sm font-medium ${
              isActive("/our-artists") ? "text-blue-700" : "text-gray-700"
            }`}
          >
            Our Artists
          </a>

          {/* Services */}
          <div className="relative group">
            <button
              ref={servicesRef}
              className={`text-sm font-medium flex items-center gap-1 ${
                isServicesActive ? "text-blue-700" : "text-gray-700"
              }`}
            >
                Services
            </button>

            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              <a
                href="/our-services/services-for-artists"
                onClick={handlePageClick("/our-services/services-for-artists")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Service for Artists
              </a>
              <a
                href="/our-services/services-for-clients"
                onClick={handlePageClick("/our-services/services-for-clients")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Service for Clients
              </a>
            </div>
          </div>

          <div className="relative group">
            <button
              ref={initiativesRef}
              className={`text-sm font-medium flex items-center gap-1 ${
                isOurInitiative ? "text-blue-700" : "text-gray-700"
              }`}
            >
                Our Initiatives
            </button>

            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              <a
                href="/our-initiative/vibeveda"
                onClick={handlePageClick("/our-initiative/vibeveda")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                VibeVeda
              </a>
              <a
                href="/our-initiative/spotlight-index"
                onClick={handlePageClick("/our-initiative/spotlight-index")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Spot Light Index
              </a>
            </div>
          </div>

          {/* Indicator */}
          <div
            ref={indicatorRef}
            className="absolute -bottom-2 h-0.5 bg-blue-600 transition-all duration-300"
          />
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleContactClick}
            className="hidden md:block bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-md"
          >
            Contact Us
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setServicesOpen(false);
              setInitiativesOpen(false);
            }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col gap-2 p-4">
            <a
              href="/"
              onClick={handlePageClick("/")}
              className={`px-4 py-3 rounded-md ${
                isActive("/") ? "bg-blue-100 text-blue-700" : "text-gray-700"
              }`}
            >
              Home
            </a>

            <a
              href="/our-artists"
              onClick={handlePageClick("/our-artists")}
              className={`px-4 py-3 rounded-md ${
                isActive("/our-artists")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700"
              }`}
            >
              Our Artists
            </a>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between px-4 py-3 font-semibold"
              >
                Services
                <span>{servicesOpen ? "-" : "+"}</span>
              </button>

              {servicesOpen && (
                <div className="flex flex-col gap-2 p-2">
                  <Link
                    to="/our-services/services-for-artists"
                    onClick={() => setIsMenuOpen(false)}
                    className="pl-6 py-3 text-gray-700"
                  >
                    Service for Artists
                  </Link>
                  <Link
                    to="/our-services/services-for-clients"
                    onClick={() => setIsMenuOpen(false)}
                    className="pl-6 py-3 text-gray-700"
                  >
                    Service for Clients
                  </Link>
                </div>
              )}
            </div>

            {/* Initiatives Accordion */}
            <div>
              <button
                onClick={() => setInitiativesOpen(!initiativesOpen)}
                className="w-full flex justify-between px-4 py-3 font-semibold"
              >
                Our Initiatives
                <span>{initiativesOpen ? "-" : "+"}</span>
              </button>

              {initiativesOpen && (
                <div className="flex flex-col gap-2 p-2">
                  <Link
                    to="/our-initiative/vibeveda"
                    onClick={() => setIsMenuOpen(false)}
                    className="pl-6 py-3 text-gray-700"
                  >
                    VibeVeda
                  </Link>
                  <Link
                    to="/our-initiative/spotlight-index"
                    onClick={() => setIsMenuOpen(false)}
                    className="pl-6 py-3 text-gray-700"
                  >
                    Spotlight Index
                  </Link>
                </div>
              )}
            </div>


            <button
              onClick={handleContactClick}
              className="mt-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-3 rounded-md"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}

      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
          <DialogContent className="overflow-hidden border-0 bg-transparent p-0 shadow-none max-w-full sm:max-w-2xl mx-3 sm:mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-r from-primary to-secondary p-6 text-center shadow-2xl sm:p-8 md:p-12 w-full box-border">
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-white/10" />
            <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-12 translate-y-12 rounded-full bg-white/10" />

            <div className="relative flex flex-col items-center space-y-6">
              <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                <Music className="h-8 w-8 text-white" />
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Ready to Book the Right Artist?
                </h2>
                <p className="mx-auto max-w-2xl text-white/80">
                  Planning a performance or hosting an event? Get in touch for availability, pricing, and customized options tailored to your needs.
                </p>
              </div>

              <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center sm:items-center flex-wrap">
                <Button
                  className="gap-2 bg-white text-primary hover:bg-white/90 sm:w-auto w-full"
                  onClick={() => window.location.href = "mailto:mastercrafters.ent@gmail.com"}
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </Button>
                <Button
                  className="gap-2 bg-white text-primary hover:bg-white/90 sm:w-auto w-full"
                  onClick={() => window.location.href = "tel:+918329303275"}
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Us</span>
                </Button>
                <Button
                  className="gap-2 bg-white text-primary hover:bg-white/90 sm:w-auto w-full"
                  onClick={() => window.open("https://wa.me/918329303275?text=Hi%20MasterCrafters%2C%20I%20want%20to%20book%20an%20artist", "_blank")}
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="18"
                    height="18"
                    className="text-[#8A2CE2] flex-shrink-0"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  <span>WhatsApp</span>
                </Button>
              </div>

              <ContactInfo className="mt-2" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
