// components/CTASection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CTASection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
      aria-labelledby="cta-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-400/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/5 to-transparent blur-3xl rounded-full" />

        {/* Geometric pattern overlay */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 45%, rgba(251, 191, 36, 0.3) 50%, transparent 55%),
              linear-gradient(-45deg, transparent 45%, rgba(251, 191, 36, 0.3) 50%, transparent 55%)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="space-y-8 lg:space-y-10"
          >
            {/* Badge */}
            <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold">
              Get Started
            </span>

            {/* Heading */}
            <h2
              id="cta-heading"
              className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight"
            >
              <span className="block text-amber-50 mb-2 lg:mb-3">
                Ready to Transform Your
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Vision Into Reality?
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-amber-50/80 leading-relaxed">
                Join hundreds of satisfied clients who&apos;ve transformed their
                spaces with {SITE_CONFIG.name}. Your dream project, brought to
                life with our expertise and attention to detail.
              </p>
              <p className="text-base lg:text-lg text-amber-50/60">
                From initial consultation to final installation, we guide you
                through every step with transparency and professionalism.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                className="py-7 text-base font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 hover:from-amber-500 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 group"
              >
                <Link href="/contact">
                  <Calendar className="mr-3 w-5 h-5" />
                  Schedule Consultation
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="py-7 text-base font-medium border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/50 transition-all duration-300"
              >
                <Link href="/services">
                  <MessageSquare className="mr-3 w-5 h-5" />
                  Browse Services
                </Link>
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="pt-8 border-t border-amber-400/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-amber-50/60 mb-4">
                Prefer to reach out directly? We&apos;re here to help:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="group flex items-center p-4 rounded-xl bg-gradient-to-r from-gray-900/40 to-gray-800/30 border border-amber-400/10 hover:border-amber-400/30 hover:bg-gray-800/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400/15 to-orange-500/15 group-hover:from-amber-400/25 group-hover:to-orange-500/25 mr-4">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-amber-50/60">Call us at</div>
                    <div className="text-lg font-semibold text-amber-50 group-hover:text-amber-300 transition-colors">
                      {SITE_CONFIG.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="group flex items-center p-4 rounded-xl bg-gradient-to-r from-gray-900/40 to-gray-800/30 border border-amber-400/10 hover:border-amber-400/30 hover:bg-gray-800/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400/15 to-orange-500/15 group-hover:from-amber-400/25 group-hover:to-orange-500/25 mr-4">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-amber-50/60">Email us at</div>
                    <div className="text-lg font-semibold text-amber-50 group-hover:text-amber-300 transition-colors">
                      {SITE_CONFIG.email}
                    </div>
                  </div>
                </a>
              </div>

              {/* Response time indicator */}
              <div className="mt-6 p-3 rounded-lg bg-gradient-to-r from-amber-400/5 to-orange-500/5 border border-amber-400/10">
                <div className="flex items-center justify-center text-sm text-amber-50/70">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mr-2 animate-pulse" />
                  <span>Typically respond within 24 hours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="relative"
          >
            {/* Geometric container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              {/* Image loading state */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/5 animate-pulse rounded-3xl" />
              )}

              {/* Main image with geometric overlay */}
              <div className="relative aspect-[4/5] lg:aspect-[3/4]">
                <Image
                  src="/images_homes.png"
                  alt="A beautifully crafted modern home interior with expert woodworking and finishing details"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={90}
                  className={cn(
                    "object-cover transition-opacity duration-700",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />

                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 via-transparent to-orange-500/5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
