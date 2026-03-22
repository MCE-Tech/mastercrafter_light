import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import logo from '../assets/images/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState<string>('/');
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const navItems = navRef.current.querySelectorAll('a');
    const isServicesPage = ['/services-for-artists', '/services-for-clients'].includes(activePath);

    let activeLink: Element | null =
      isServicesPage && servicesRef.current
        ? servicesRef.current
        : (Array.from(navItems).find(link => link.getAttribute('href') === activePath) ?? null);

    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const containerRect = navRef.current.getBoundingClientRect();

      indicatorRef.current.style.width = `${rect.width}px`;
      indicatorRef.current.style.left = `${rect.left - containerRect.left}px`;
    } else {
      indicatorRef.current.style.width = `0px`;
    }
  }, [activePath]);

  const handlePageClick = (path: string, state?: any) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActivePath(path);
    navigate(path, { state });
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    setIsMenuOpen(false);
  };

  const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePath('/');
    navigate('/');
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const isActive = (path: string) => activePath === path;
  const isServicesActive = ["/services-for-artists", "/services-for-clients"].includes(activePath);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-gray-100/95 backdrop-blur-md shadow-md border-b border-gray-200" : "bg-transparent"}`}>
      <div className="w-full max-w-full mx-auto px-6 md:px-12 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" onClick={handlePageClick('/')} className="flex items-center gap-2">
            <div className="relative w-20 h-20 md:w-40 md:h-40 lg:w-28 lg:h-28 md:mt-2 lg:mt-2">
              <img src={logo} alt="Master Crafters Logo" className="object-contain w-20 h-20 md:w-40 md:h-40 lg:w-28 lg:h-28" />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden md:flex md:relative items-center gap-6">
          <a
            href="/"
            onClick={handlePageClick('/')}
            className={`text-sm font-medium hover:text-primary ${isActive('/') ? 'text-blue-700' : 'text-gray-700'}`}
          >
            Home
          </a>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              ref={servicesRef}
              className={`text-sm font-medium flex items-center gap-1 hover:text-primary ${isServicesActive ? 'text-blue-700' : 'text-gray-700'}`}
            >
              Services
              <svg className="w-4 h-4 transition-transform transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 z-50 invisible group-hover:visible
                ${scrolled ? "bg-gray-100/95 backdrop-blur-md" : "bg-gray-100/95 backdrop-blur-md"}`} 
            >
              <a
                href="/services-for-artists"
                onClick={handlePageClick('/services-for-artists')}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700"
              >
                Service for Artists
              </a>
              <a
                href="/services-for-clients"
                onClick={handlePageClick('/services-for-clients')}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700"
              >
                Service for Clients
              </a>
            </div>
          </div>

          <a
            href="/our-artists"
            onClick={handlePageClick('/our-artists', { ourArtistPage: true })}
            className={`text-sm font-medium hover:text-primary ${isActive('/our-artists') ? 'text-blue-700' : 'text-gray-700'}`}
          >
            Our Artists
          </a>

          <a href="#our-initiatives" onClick={handleSectionClick('our-initiatives')} className="text-sm font-medium hover:text-primary text-gray-700">
            Our Initiatives
          </a>

          {/* Active Indicator */}
          <div id="active-indicator" ref={indicatorRef} className="absolute -bottom-2 h-0.5 bg-blue-600 transition-all duration-300" />
        </nav>

        <div className="flex items-center gap-2">
            {/* Desktop Contact Us Button with Tooltip */}
            <div className="hidden md:block relative group">
              <button
                className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-md"
                onClick={handleSectionClick('contact-us')}
              >
                Contact Us
              </button>
              {/* <div className="absolute left-1/2 transform text-left -translate-x-1/2 mt-2 w-56 bg-gray-100/95 backdrop-blur-md text-gray-800 text-sm p-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                <p>mastercrafters.ent@gmail.com</p>
                <p>+91 8329303275</p>
              </div> */}
            </div>

          <button className="md:hidden text-gray-600 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="/" onClick={handlePageClick('/')} className="text-sm font-medium text-gray-700">Home</a>

            {/* Services - Mobile */}
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-semibold text-gray-900 px-2">Services</span>
              <Link to="/services-for-artists" onClick={() => { setActivePath('/services-for-artists'); setIsMenuOpen(false); }} className="text-sm font-medium text-gray-700 pl-4">• Service for Artists</Link>
              <Link to="/services-for-clients" onClick={() => { setActivePath('/services-for-clients'); setIsMenuOpen(false); }} className="text-sm font-medium text-gray-700 pl-4">• Service for Clients</Link>
            </div>

            <Link to="/our-artists" state={{ ourArtistPage: true }} onClick={() => { setActivePath('/our-artists'); setIsMenuOpen(false); }} className="text-sm font-medium text-gray-700">Our Artists</Link>
            <a href="#our-initiatives" onClick={handleSectionClick('our-initiatives')} className="text-sm font-medium text-gray-700">Our Initiatives</a>

            {/* Mobile Contact Us Button with Tooltip */}
            <div className="relative group">
              <div
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-md"
                onClick={handleSectionClick('contact-us')}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
              >
                Contact Us
              </div>
              {/* <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white text-gray-800 text-sm p-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 text-center">
                <p>mastercrafters.ent@gmail.com</p>
                <p>+91 8329303275</p>
              </div> */}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
