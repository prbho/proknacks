"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-900/95" />

      {/* Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              Comprehensive Home <br />
              <span className="text-amber-400">Improvement Services</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              From concept to completion, we deliver end-to-end solutions that
              elevate comfort, function, and long-term value.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-amber-500 text-slate-900 hover:bg-amber-600 transition"
            >
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10"
            >
              {[
                "Free Consultation",
                "Licensed & Insured",
                "Quality Guarantee",
                "On-Time Delivery",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center justify-center gap-2 text-sm text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
