// components/Footer.tsx
"use client";

import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Hammer,
  Coffee,
  Heart,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  ArrowUp,
  Star,
  HammerIcon,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Our Services": [
      { name: "Home Renovations", href: "/services", icon: Home },
      { name: "Kitchen Remodeling", href: "/services", icon: Hammer },
      { name: "Bathroom Remodels", href: "/services", icon: Hammer },
      { name: "Room Additions", href: "/services", icon: Home },
      { name: "Custom Carpentry", href: "/services", icon: Hammer },
    ],
    "Areas We Serve": [
      { name: "Indiana", href: "#", icon: MapPin },
      { name: "Texas", href: "#", icon: MapPin },
      { name: "Florida", href: "#", icon: MapPin },
      { name: "New York", href: "#", icon: MapPin },
      { name: "All 50 States", href: "#", icon: MapPin },
    ],
    Connect: [
      { name: "About Us", href: "/about", icon: Heart },
      { name: "Free Consult", href: "/contact#form", icon: Coffee },
      { name: "Contact", href: "/contact", icon: Mail },
      { name: "Call Us", href: `tel:${SITE_CONFIG.phone}`, icon: Phone },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Fun background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-amber-500/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border-2 border-amber-500/20 rounded-full" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column - Made warmer */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-2">
                <div className="relative w-9 h-9">
                  <Image
                    src="/logo.png"
                    alt={`${SITE_CONFIG.name} Logo`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold text-white">
                    ProKnacks
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-400/80">
                    <span>Transforming houses into homes</span>
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              We&apos;re just folks who love making homes better. No corporate
              nonsense — just honest work, good people, and spaces you&apos;ll
              actually enjoy living in.
            </p>

            {/* Quick contact - Made smaller */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {SITE_CONFIG.phone}
              </a>
              <span className="text-gray-700">•</span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Email us
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-full">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-xs text-gray-300">
                  4.5 (500+ reviews)
                </span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-full">
                <Heart className="w-3 h-3 text-amber-400" />
                <span className="text-xs text-gray-300">Family owned</span>
              </div>
            </div>
          </div>

          {/* Links Columns - Made icons consistent */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {category}
              </h3>
              <ul className="space-y-1.5">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2 group"
                      >
                        <Icon className="w-3.5 h-3.5 text-gray-500 group-hover:text-amber-400 transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar - Made cleaner */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-xs text-gray-500">
                © {currentYear} {SITE_CONFIG.name}. All rights reserved.
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                Proudly serving homeowners across the US • Licensed & Insured
              </p>
            </div>

            {/* Legal Links - Made smaller */}
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                Privacy
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                Terms
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/accessibility"
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top - Made smaller and friendlier */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 w-10 h-10 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* Floating coffee cup (just for fun) */}
      <div className="absolute bottom-20 left-10 opacity-10 pointer-events-none hidden lg:block">
        <HammerIcon className="w-12 h-12 text-amber-400" />
      </div>
    </footer>
  );
}
