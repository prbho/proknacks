// components/about/AboutHero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-400/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-orange-500/5 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20">
              <span className="text-sm font-semibold text-amber-400">
                Est. 2010
              </span>
              <div className="w-1 h-1 rounded-full bg-amber-400/50" />
              <span className="text-sm text-amber-50/70">
                14+ Years Excellence
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="block text-amber-50 mb-2 lg:mb-3">
                Building Dreams, Crafting Excellence
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-amber-50/80 leading-relaxed max-w-2xl">
              For over a decade, ProKnacks has been transforming houses into
              homes across the United States. We combine innovative design,
              superior craftsmanship, and unwavering commitment to deliver
              exceptional home improvement solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold hover:from-amber-500 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/50 transition-all duration-300"
              >
                <Link href="#values">Our Values</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/about-img.png"
                alt="ProKnacks team working on a home improvement project"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 via-transparent to-orange-500/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
