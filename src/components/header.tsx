import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState<string>("/");

  const navigate = useNavigate();
  const location = useLocation();

  const navRef = useRef<HTMLElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLButtonElement | null>(null);

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
      "/services-for-artists",
      "/services-for-clients",
    ].includes(activePath);

    let activeLink: Element | null =
      isServicesPage && servicesRef.current
        ? servicesRef.current
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

  const handleSectionClick =
    (sectionId: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      setActivePath("/");
      navigate("/");
      setIsMenuOpen(false);

      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    };

  const isActive = (path: string) => activePath === path;
  const isServicesActive = [
    "/services-for-artists",
    "/services-for-clients",
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
            className={`text-sm font-medium ${
              isActive("/") ? "text-blue-700" : "text-gray-700"
            }`}
          >
            Home
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
                href="/services-for-artists"
                onClick={handlePageClick("/services-for-artists")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Service for Artists
              </a>
              <a
                href="/services-for-clients"
                onClick={handlePageClick("/services-for-clients")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Service for Clients
              </a>
            </div>
          </div>

          <a
            href="/our-artists"
            onClick={handlePageClick("/our-artists")}
            className={`text-sm font-medium ${
              isActive("/our-artists") ? "text-blue-700" : "text-gray-700"
            }`}
          >
            Our Artists
          </a>

          <a
            href="#our-initiatives"
            onClick={handleSectionClick("our-initiatives")}
            className="text-sm font-medium text-gray-700"
          >
            Our Initiatives
          </a>

          {/* Indicator */}
          <div
            ref={indicatorRef}
            className="absolute -bottom-2 h-0.5 bg-blue-600 transition-all duration-300"
          />
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSectionClick("contact-us")}
            className="hidden md:block bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-md"
          >
            Contact Us
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                <div className="flex flex-col">
                  <Link
                    to="/services-for-artists"
                    onClick={() => setIsMenuOpen(false)}
                    className="pl-6 py-2 text-gray-700"
                  >
                    Service for Artists
                  </Link>
                  <Link
                    to="/services-for-clients"
                    onClick={() => setIsMenuOpen(false)}
                    className="pl-6 py-2 text-gray-700"
                  >
                    Service for Clients
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/our-artists"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-md ${
                isActive("/our-artists")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700"
              }`}
            >
              Our Artists
            </Link>

            <a
              href="#our-initiatives"
              onClick={handleSectionClick("our-initiatives")}
              className="px-4 py-3 text-gray-700"
            >
              Our Initiatives
            </a>

            <button
              onClick={handleSectionClick("contact-us")}
              className="mt-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-3 rounded-md"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}