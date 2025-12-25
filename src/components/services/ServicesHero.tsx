// components/services/ServicesHero.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-400/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-orange-500/5 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20">
              <span className="text-sm font-semibold text-amber-400">
                Our Expertise
              </span>
              <div className="w-1 h-1 rounded-full bg-amber-400/50" />
              <span className="text-sm text-amber-50/70">Premium Services</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="block text-amber-50 mb-2 lg:mb-3">
                Comprehensive Home
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Improvement Solutions
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-amber-50/80 leading-relaxed max-w-3xl mx-auto">
              From concept to completion, we provide end-to-end home improvement
              services that transform your living spaces with precision,
              quality, and innovative design.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold hover:from-amber-500 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            >
              {[
                "Free Consultation",
                "Licensed & Insured",
                "Quality Guarantee",
                "On-Time Delivery",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 justify-center md:justify-start"
                >
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium text-amber-50">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
