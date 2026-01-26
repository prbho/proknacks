// components/HeroSection.tsx - Refocused on home transformation
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-stone-800 to-stone-900">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0">
        <Image
          src="/after.png"
          alt="Before and after home transformation by ProKnacks"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
            className="space-y-8"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight"
            >
              <span className="block text-white">Where Vision Meets</span>
              <span className="block mt-2 text-amber-400">
                Exceptional Craftsmanship
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="max-w-xl text-lg text-gray-300 leading-relaxed"
            >
              We don&apos;t just renovate spaces — we craft homes that reflect
              your lifestyle, values, and future.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a className="px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg shadow-lg shadow-amber-500/20 hover:bg-amber-600 hover:scale-105 transition">
                Start Your Transformation
              </a>
              <a className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20 hover:border-white/40 hover:shadow-md transition">
                View Our Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Before/After Slider Preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-amber-400 mb-2">
                  BEFORE
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden border-2 border-amber-400/20">
                  <Image
                    src="/before.png"
                    alt="Home before renovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-amber-400 mb-2">
                  AFTER
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden border-2 border-amber-400">
                  <Image
                    src="/after.png"
                    alt="Home after ProKnacks renovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    ProKnacks
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-8 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl">
              <div className="text-sm text-gray-400 mb-3">
                SERVING HOMEOWNERS AND BUSINESSES IN
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Indiana",
                  "Michigan",
                  "Ohio",
                  "Kentucky",
                  "Illinois",
                  "Chicago",
                  "Cincinnati",
                  "Louisville",
                  "All States",
                ].map((state) => (
                  <span
                    key={state}
                    className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
