// components/contact/ContactHero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactHero() {
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
                Get in Touch
              </span>
              <div className="w-1 h-1 rounded-full bg-amber-400/50" />
              <span className="text-sm text-amber-50/70">
                Free Consultation
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="block text-amber-50 mb-2 lg:mb-3">
                Let&apos;s Transform Your Space Together
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-amber-50/80 leading-relaxed max-w-3xl mx-auto">
              Ready to start your home improvement journey? Contact us today for
              a free consultation, personalized quote, and expert advice from
              our professional team.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold hover:from-amber-500 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                <Link href="#contact-form">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/50 transition-all duration-300"
              >
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/50 transition-all duration-300"
              >
                <Link href="/booking">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
