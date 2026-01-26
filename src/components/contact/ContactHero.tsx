// components/contact/ContactHero.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800  relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Let&apos;s Build Your
              <span className="block mt-2 text-amber-600">
                Dream Home Together
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/95 leading-relaxed">
              Ready to transform your house into the home you&apos;ve always
              imagined? Our team is here to guide you through every step—from
              initial concept to final reveal.
            </p>

            {/* Trust Indicators */}
            <div className="pt-6">
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm text-slate-700">
                  Free Consultation
                </div>
                <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm text-slate-700">
                  No-Obligation Quote
                </div>
                <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm text-slate-700">
                  Licensed & Insured
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="group block p-6 transition-all duration-300 border rounded-lg border-amber-300/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-amber-400 mb-1">
                      Speak with our team
                    </div>
                    <div className="text-xl font-bold text-white mb-2">
                      {SITE_CONFIG.phone}
                    </div>
                    <div className="text-sm text-slate-400">
                      Available Monday-Friday, 8am-6pm EST
                    </div>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group block p-6 border border-amber-300/50 rounded-2xl hover:border-amber-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <Mail className="w-6 h-6 text-amber-50" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-amber-400 mb-1">
                      Send us an email
                    </div>
                    <div className="text-lg font-semibold text-amber-50 mb-1">
                      {SITE_CONFIG.email}
                    </div>
                    <div className="text-sm text-slate-400">
                      Ideal for detailed project inquiries
                    </div>
                  </div>
                </div>
              </a>

              {/* Consultation */}
              <div className="group p-6 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-amber-700 mb-1">
                      Schedule a consultation
                    </div>
                    <div className="text-lg font-semibold text-slate-900 mb-3">
                      Free 45-minute design consultation
                    </div>
                    <div className="text-sm text-slate-700 mb-4">
                      Discuss your vision, get expert advice, and receive a
                      preliminary quote
                    </div>
                    <Button
                      asChild
                      className="w-full bg-amber-500 text-white hover:bg-amber-600"
                    >
                      <Link href="/contact#form">
                        Book Free Consultation
                        <Calendar className="ml-2 w-4 h-4" />
                      </Link>
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
