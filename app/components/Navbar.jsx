"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const segments = [
    { name: "HCV Segment", href: "/services/hcv" },
    { name: "LCV Segment", href: "/services/lcv" },
    { name: "ICV Segment", href: "/services/icv" },
    { name: "SCV Segment", href: "/services/scv" },
    { name: "Trailer Segment", href: "/services/trailer" },
  ];

  // Condition for navbar style
  const isHomeTop = pathname === "/" && !isScrolled;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHomeTop
          ? "bg-white lg:bg-transparent shadow-lg lg:shadow-none py-2 lg:py-4" 
          : "bg-white shadow-lg py-2" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <Link href="/">
              <img
                src="/color logo.png"
                alt="Logo"
                className={`h-12 md:h-16 w-auto transition-all duration-300 ${
                  isHomeTop ? "block lg:hidden" : "block"
                }`}
              />
              <img
                src="/whitelogo.png"
                alt="Logo"
                className={`h-12 md:h-16 w-auto transition-all duration-300 ${
                  isHomeTop ? "hidden lg:block" : "hidden"
                }`}
              />
            </Link>
          </div>

          {/* ----------------- DESKTOP MENU ----------------- */}
          <div className="hidden lg:flex items-center space-x-7">
            <Link href="/" className={`${isHomeTop ? "text-slate-900 lg:text-white" : "text-slate-900"} hover:text-blue-500 font-semibold transition-colors`}>
              Home
            </Link>

            <Link href="/about" className={`${isHomeTop ? "text-slate-900 lg:text-white" : "text-slate-900"} hover:text-blue-500 font-semibold transition-colors`}>
              About Us
            </Link>

            {/* Desktop Services Dropdown */}
            <div className="relative group">
              <button className={`${isHomeTop ? "text-slate-900 lg:text-white" : "text-slate-900"} group-hover:text-blue-500 font-semibold flex items-center gap-1 transition-colors`}>
                Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block w-56 bg-white text-slate-800 shadow-2xl rounded-b-md border-t-4 border-blue-600">
                {segments.map((s) => (
                  <Link key={s.name} href={s.href} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 last:border-0 font-medium">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" className={`${isHomeTop ? "text-slate-900 lg:text-white" : "text-slate-900"} hover:text-blue-500 font-semibold transition-colors`}>
              Gallery
            </Link>

            <Link href="/client" className={`${isHomeTop ? "text-slate-900 lg:text-white" : "text-slate-900"} hover:text-blue-500 font-semibold transition-colors`}>
              Client
            </Link>

            <Link href="/contact" className={`${isHomeTop ? "text-slate-900 lg:text-white" : "text-slate-900"} hover:text-blue-500 font-semibold transition-colors`}>
              Contact
            </Link>

            <a href="/Company Profile - PSV Pragadeesh Transport.pptx.pdf" 
              target="_blank" 
              rel="noopener noreferrer" className="bg-red-600 text-white px-5 py-2.5 rounded shadow-lg font-bold hover:bg-orange-700 transition transform hover:scale-105">
              BROCHURE
            </a>
          </div>

          {/* ----------------- MOBILE HAMBURGER ICON ----------------- */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ----------------- MOBILE MENU DROPDOWN ----------------- */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <Link href="/" className="block text-slate-900 font-semibold hover:text-blue-600">Home</Link>
          <Link href="/about" className="block text-slate-900 font-semibold hover:text-blue-600">About Us</Link>
          
          {/* Mobile Services Accordion */}
          <div>
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex justify-between items-center w-full text-slate-900 font-semibold hover:text-blue-600"
            >
              Our Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? "max-h-48 mt-3" : "max-h-0"}`}>
              <div className="flex flex-col space-y-3 border-l-2 border-slate-100 pl-4">
                {segments.map((s) => (
                  <Link key={s.name} href={s.href} className="text-sm text-slate-600 hover:text-blue-600 font-medium">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/gallery" className="block text-slate-900 font-semibold hover:text-blue-600">Gallery</Link>
          <Link href="/client" className="block text-slate-900 font-semibold hover:text-blue-600">Client</Link>
          <Link href="/contact" className="block text-slate-900 font-semibold hover:text-blue-600">Contact</Link>
          
          <div className="pt-4">
            <a 
              href="/Company Profile - PSV Pragadeesh Transport.pptx.pdf" 
              target="_blank" 
              rel="noopener noreferrer" className="block text-center bg-red-600 text-white px-5 py-3 rounded shadow-md font-bold hover:bg-orange-700 w-full">
              VIEW BROCHURE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;