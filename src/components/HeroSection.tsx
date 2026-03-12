// components/HeroSection.tsx - Refocused on home transformation
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 ">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
            className="space-y-6"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-3 rounded-full border-2 border-amber-400 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700"
            >
              <span className="text-amber-600">
                ⚡ Design / Build / Renovate
              </span>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="mb-16 space-y-4"
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900"
              >
                <span className="block leading-[1.1]">
                  Quality Work. No{" "}
                  <span className="text-amber-500 relative">
                    Shortcuts
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="8"
                      viewBox="0 0 200 8"
                      fill="none"
                    >
                      <path
                        d="M1 5.5C41 2 93 1 156 5C179 7 190 7.5 199 6"
                        stroke="#F59E0B"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="max-w-xl mt-6 text-xl text-gray-600 leading-relaxed"
              >
                No cookie-cutter renovations here. Just honest craftsmanship,
                thoughtful design, and a team that actually shows up when they
                say they will.
              </motion.p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="/contact"
                className="group px-8 py-4 bg-amber-500 text-white font-bold rounded-xl shadow-lg shadow-amber-500/30 hover:bg-amber-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your Transformation
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Before/After Slider Preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Before Card */}
              <div className="space-y-2 rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-64">
                  <Image
                    src="/before.png"
                    alt="Home before renovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white/90 text-xs font-semibold rounded-full">
                      BEFORE
                    </span>
                  </div>
                </div>
              </div>

              {/* After Card */}
              <div className="space-y-2 rounded-3xl overflow-hidden shadow-xl transform translate-y-8">
                <div className="relative h-64">
                  <Image
                    src="/after.png"
                    alt="Home after ProKnacks renovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                      AFTER
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ✦ ProKnacks
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas - made it friendlier */}
            <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                <span className="text-amber-400">📍</span>
                <span className="font-medium">
                  Proudly serving our neighbors in:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Indiana",
                  "Michigan",
                  "Ohio",
                  "Kentucky",
                  "Illinois",
                  "Chicago Area",
                  "Cincinnati",
                  "Louisville",
                ].map((state) => (
                  <span
                    key={state}
                    className="px-3 py-1.5 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-amber-400 hover:text-amber-600 transition-colors cursor-default"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun stat */}
            <div className="absolute -bottom-4 right-4 bg-white rounded-2xl shadow-lg p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-500">
                  ⭐
                </div>
                <div>
                  <div className="text-xs text-gray-500">Google Rating</div>
                  <div className="font-bold text-gray-900">
                    4.9 ★ (500+ reviews)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
