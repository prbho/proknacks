// components/Footer.tsx
"use client";

import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Our Services": [
      { name: "Home Renovations", href: "/services" },
      { name: "Kitchen Remodeling", href: "/services" },
      { name: "Bathroom Remodels", href: "/services" },
      { name: "Room Additions", href: "/services" },
      { name: "Custom Carpentry", href: "/services" },
    ],
    "Areas We Serve": [
      { name: "Indiana", href: "#" },
      { name: "Texas", href: "#" },
      { name: "Florida", href: "#" },
      { name: "New York", href: "#" },
      { name: "All States", href: "#" },
    ],
    // Resources: [
    //   { name: "Project Gallery", href: "/gallery" },
    //   { name: "Before & After", href: "/transformations" },
    //   { name: "Free Consultation", href: "/consultation" },
    //   { name: "Financing Options", href: "/financing" },
    //   { name: "Maintenance Tips", href: "/blog/maintenance" },
    // ],
    Company: [
      { name: "About ProKnacks", href: "/about" },
      { name: "Free Consultation", href: "/contact#form" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/logo.png"
                      alt={`${SITE_CONFIG.name} Logo - Transforming houses into homes`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                      priority
                      sizes="(max-width: 40px) 40px, 40px"
                    />
                  </div>
                  <span className="text-2xl font-bold text-white">
                    ProKnacks
                  </span>
                </div>
              </Link>

              <p className="text-slate-300 leading-relaxed max-w-md">
                Transforming houses into homes across America with innovative
                design, superior craftsmanship, and unwavering commitment to
                exceptional home improvement solutions.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-amber-300 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-500">
                © {currentYear} {SITE_CONFIG.name}. All rights reserved.
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Transforming spaces across the United States.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-amber-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-600">•</span>
              <Link
                href="/terms"
                className="text-slate-400 hover:text-amber-300 transition-colors"
              >
                Terms of Service
              </Link>
              {/* <span className="text-slate-600">•</span> */}
              {/* <Link
                href="/accessibility"
                className="text-slate-400 hover:text-amber-300 transition-colors"
              >
                Accessibility
              </Link> */}
              {/* <span className="text-slate-600">•</span>
              <Link
                href="/sitemap"
                className="text-slate-400 hover:text-amber-300 transition-colors"
              >
                Sitemap
              </Link> */}
            </div>

            {/* Certifications */}
            {/* <div className="flex items-center gap-2">
              <div className="text-xs text-slate-500">Member of</div>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">
                  NAHB
                </div>
                <div className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">
                  NARI
                </div>
                <div className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">
                  BBB
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600 transition-colors flex items-center justify-center"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
