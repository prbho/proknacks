// components/ServicesHero.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/modern-living-room-with-fireplace.png')",
        }}
      />

      {/* Dark Overlay - Made warmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/95 via-gray-950/85 to-gray-900/95" />

      {/* Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-72 h-72 bg-amber-400/15 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/15 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Friendly badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mx-auto">
              <span className="text-sm font-medium text-amber-400">🔨</span>
              <span className="text-sm font-medium text-amber-400">
                What we actually do
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              We fix, build, and{" "}
              <span className="text-amber-400 relative">
                transform
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
              whatever your heart desires
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              From fixing that squeaky door to building your dream kitchen —
              we&apos;re the folks who show up on time and do it right.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                className="px-6 py-3 bg-amber-500 text-gray-900 text-base font-medium hover:bg-amber-600 hover:scale-105 transition-all rounded-lg"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Coffee className="w-5 h-5" />
                  Grab a coffee, let&apos;s chat
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-6 py-3 bg-white/10 text-white border-white/20 text-base font-medium hover:bg-white/20 rounded-lg"
              >
                <Link href="#services" className="flex items-center gap-2">
                  See what we offer
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
