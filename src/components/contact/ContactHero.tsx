// components/contact/ContactHero.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Calendar, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Fun background orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Friendly badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Coffee className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">
                Let&apos;s grab a coffee (on us)
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to make your{" "}
              <span className="text-amber-400 relative">
                home dreams
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M1 7C41 3 93 2 156 6C179 8 190 8.5 199 7"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              come true?
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg">
              No pressure. No pushy sales. Just a friendly chat about what
              you&apos;re dreaming of, and how we might make it happen.
            </p>

            {/* Trust Indicators - Made warmer */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs text-amber-300 border border-white/10">
                  ✨ Free consultation
                </div>
                <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs text-amber-300 border border-white/10">
                  ☕ Coffee&apos;s on us
                </div>
                <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs text-amber-300 border border-white/10">
                  ✓ Licensed & insured
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Contact Cards */}
            <div className="space-y-3">
              {/* Phone */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="group block p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-amber-400/80 mb-0.5">
                      Call us, we&apos;re nice
                    </div>
                    <div className="text-base font-semibold text-white mb-1">
                      {SITE_CONFIG.phone}
                    </div>
                    <div className="text-xs text-gray-400">
                      Mon-Fri, 8am-6pm EST
                    </div>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group block p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-amber-400/80 mb-0.5">
                      Shoot us an email
                    </div>
                    <div className="text-base font-semibold text-white mb-1">
                      {SITE_CONFIG.email}
                    </div>
                    <div className="text-xs text-gray-400">
                      We reply within 24h (usually faster)
                    </div>
                  </div>
                </div>
              </a>

              {/* Consultation - Featured */}
              <div className="p-5 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-amber-400 mb-0.5">
                      Free 45-min consult
                    </div>
                    <div className="text-sm font-medium text-white mb-2">
                      Let&apos;s talk about your project over coffee
                    </div>
                    <Button
                      asChild
                      className="w-full bg-amber-500 text-gray-900 text-sm font-medium hover:bg-amber-600 rounded-lg h-9"
                    >
                      <Link href="/contact#form">Grab that coffee ☕</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
