// components/HeroSection.tsx
"use client";

import { motion, Variants } from "framer-motion";
// import { QuoteForm } from "./QuoteForm";
import Image from "next/image";
import { useState } from "react";

// Animation variants extracted for better maintainability and reusability
const TEXT_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween" as const,
    },
  },
};

const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      type: "tween" as const,
    },
  },
};

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950"
      role="banner"
      aria-label="Company introduction and quote request"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        {/* Loading state */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-orange-500/5 to-gray-900 animate-pulse" />
        )}

        {/* Image with fallback */}
        {!imageError ? (
          <div className="relative w-full h-full">
            <Image
              src="/hero-image.png"
              alt="Master craftsman working on fine woodworking in a sunlit workshop, showcasing precision craftsmanship"
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover transition-opacity duration-700"
              style={{ opacity: imageLoaded ? 1 : 0 }}
              onLoad={() => {
                console.log("Hero image loaded successfully");
                setImageLoaded(true);
              }}
              onError={() => {
                console.error("Failed to load hero image");
                setImageError(true);
                setImageLoaded(true);
              }}
            />
          </div>
        ) : (
          /* Fallback gradient */
          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-500/10 to-gray-900"
            role="presentation"
          />
        )}

        {/* Overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
          role="presentation"
        />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.03)_0%,transparent_50%)]"
          role="presentation"
        />
      </div>

      {/* Grid Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, type: "tween" as const }}
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat mix-blend-lighten"
        role="presentation"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:space-y-8 col-span-2"
          >
            <motion.h1
              variants={TEXT_VARIANTS}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Precision Craftsmanship
              </span>
              <span className="block text-amber-50 mt-2 lg:mt-4">
                Flawless Execution
              </span>
            </motion.h1>

            <motion.p
              variants={TEXT_VARIANTS}
              className="text-lg sm:text-xl md:text-2xl text-amber-50/90 max-w-xl leading-relaxed"
            >
              We are committed to delivering top-notch craftsmanship and
              thoughtful designs that embody quality in every detail.
            </motion.p>

            {/* Optional CTA buttons */}
            <motion.div
              variants={TEXT_VARIANTS}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#services"
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-amber-400/30 text-amber-400 font-bold rounded-lg hover:bg-amber-400/10 hover:border-amber-400/50 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Trust indicators or stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-16"
          >
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 p-6 lg:p-8 rounded-2xl border shadow-xl">
              {[
                {
                  value: "15+",
                  label: "Years Experience",
                  description: "Industry expertise",
                },
                {
                  value: "500+",
                  label: "Projects Completed",
                  description: "Successful deliveries",
                },
                {
                  value: "99%",
                  label: "Client Satisfaction",
                  description: "Happy customers",
                },
                {
                  value: "24/7",
                  label: "Support Available",
                  description: "Always here to help",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-3 lg:p-4"
                >
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-1 lg:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base font-semibold text-amber-50 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs lg:text-sm text-amber-50/60">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote Form */}
          {/* <motion.div
            variants={FORM_ANIMATION}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <QuoteForm className="shadow-2xl" />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
