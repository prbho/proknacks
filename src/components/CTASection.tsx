// components/CTASection.tsx - Clear transformation-focused CTA
"use client";

import { Phone, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      {/* Playful background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto w-20 h-20 mb-8"
          >
            <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 p-4 shadow-2xl">
              <Image
                src="/logo.png"
                alt="proknacks"
                fill
                className="object-contain p-3"
                priority
              />
            </div>
          </motion.div>

          {/* Friendly heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-amber-300 text-sm border border-white/10">
              <Sparkles className="w-4 h-4" />
              <span>Let&apos;s make it happen</span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to finally{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-amber-400">love</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M1 9C41 4 93 3 156 8C179 10 190 10.5 199 9"
                    stroke="#F59E0B"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              your home again?
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              No pressure. No pushy sales. Just a friendly chat about your
              dreams, a look at your space, and some honest advice.
            </p>
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center my-12"
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-5 bg-amber-400 text-gray-900 font-bold rounded-xl hover:bg-amber-500 transition-all duration-300 hover:scale-105 text-lg shadow-xl shadow-amber-500/20"
            >
              <Calendar className="mr-3 w-5 h-5" />
              Let&apos;s grab that coffee
              <span className="ml-2 group-hover:translate-x-1 transition">
                ☕
              </span>
            </a>
            <a
              href="tel:1-800-PRO-KNACKS"
              className="inline-flex items-center justify-center px-8 py-5 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-lg"
            >
              <Phone className="mr-3 w-5 h-5" />
              Prefer to call? (317) 452-3636
            </a>
          </motion.div>

          {/* Fun footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-gray-400 italic flex items-center justify-center gap-2">
              <span>✨</span>
              <span>P.S. We&apos;re really nice people. Just ask our dog.</span>
              <span>🐕</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
