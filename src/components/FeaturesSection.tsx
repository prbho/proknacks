// components/FeaturesSection.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { features } from "@/data/siteData";
import Image from "next/image";

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const ICON_VARIANTS: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

interface FeatureCardProps {
  feature: (typeof features)[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={ITEM_VARIANTS}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden  backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 flex flex-col p-6 lg:p-8">
        {/* Decorative background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-orange-500/0 to-amber-400/0 group-hover:from-amber-400/5 group-hover:via-orange-500/3 group-hover:to-amber-400/5 transition-all duration-500" />

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-bl from-amber-400/10 to-transparent transform rotate-45" />
        </div>

        <CardHeader className="relative z-10 p-0 pb-6">
          <div className="flex items-start justify-between">
            <motion.div
              variants={ICON_VARIANTS}
              whileHover="hover"
              className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 group-hover:from-amber-400/30 group-hover:to-orange-500/30 backdrop-blur-sm"
            >
              <Icon className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors" />
            </motion.div>
          </div>

          <CardTitle className="text-xl lg:text-2xl font-bold text-amber-50 group-hover:text-white transition-colors leading-tight">
            {feature.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 p-0 flex-grow">
          <p className="text-amber-50/80 group-hover:text-amber-50/90 leading-relaxed mb-4">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-20 lg:py-32 overflow-hidden bg-black"
      aria-labelledby="features-heading"
    >
      {/* Repeating background for entire section */}
      <div
        className="absolute inset-0 bg-repeat opacity-80"
        style={{
          backgroundImage: "url(/mbg.png)",
          backgroundSize: "500px auto",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-stretch">
          {/* Image Column */}
          <div className="relative h-[500px] lg:h-[600px] xl:h-[700px] w-full">
            <Image
              src="/wood-work.png"
              alt="Master craftsman working on fine woodworking in a well-equipped workshop"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              quality={90}
              className="object-cover rounded-xl lg:rounded-2xl shadow-2xl"
            />

            {/* Decorative overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 via-transparent to-orange-500/10 rounded-xl lg:rounded-2xl" />
          </div>

          {/* Content Column - Spanning 2 columns */}
          <div className="lg:col-span-2">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-left mb-12 lg:mb-20"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-4">
                Why Choose {SITE_CONFIG.name}?
              </span>

              <h2
                id="features-heading"
                className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-6"
              >
                <span className="block text-amber-50 mt-2">
                  Excellence in Every Detail
                </span>
              </h2>

              <p className="text-lg lg:text-xl text-amber-50/80 leading-relaxed max-w-2xl">
                We combine decades of expertise with innovative solutions to
                deliver unparalleled quality and reliability for every project.
              </p>
            </motion.div>

            {/* Features Grid - Now you can add features here */}
            <motion.div
              variants={CONTAINER_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
            >
              {features.slice(0, 4).map((feature, index) => (
                <FeatureCard
                  key={feature.id || feature.title}
                  feature={feature}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.6,
          }}
          viewport={{ once: true }}
          className="text-left mt-20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 lg:p-8 rounded-2xl  backdrop-blur-sm border border-amber-400/20 shadow-xl">
            <div className="lg:max-w-xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-amber-50 mb-2 lg:mb-3">
                Ready to experience the difference?
              </h3>
              <p className="text-amber-50/70 text-base lg:text-lg">
                Discover why clients choose us for their most important
                projects. Get in touch today for a free consultation.
              </p>
            </div>
            <a
              href="/contact"
              className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 whitespace-nowrap text-base lg:text-lg"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
