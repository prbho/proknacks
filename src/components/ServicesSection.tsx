// components/ServicesSection.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

const CARD_VARIANTS: Variants = {
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
      ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const ICON_VARIANTS: Variants = {
  hover: {
    rotate: [0, -10, 5, 0],
    scale: [1, 1.15, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={CARD_VARIANTS}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-amber-400/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-400/0 to-orange-500/0 group-hover:from-amber-400/5 group-hover:via-amber-400/3 group-hover:to-orange-500/5 transition-all duration-500" />

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-bl from-amber-400/10 to-transparent transform rotate-45" />
        </div>

        <CardHeader className="relative z-10 pb-4">
          <motion.div
            variants={ICON_VARIANTS}
            whileHover="hover"
            className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-500/20 group-hover:from-amber-400/30 group-hover:to-orange-500/30 backdrop-blur-sm"
          >
            <service.icon className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors" />
          </motion.div>

          <CardTitle className="text-xl lg:text-2xl font-bold text-amber-50 group-hover:text-white transition-colors">
            {service.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 flex-grow">
          <p className="text-amber-50/70 group-hover:text-amber-50/80 leading-relaxed">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-400/3 to-orange-500/1 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-amber-500/2 to-transparent blur-3xl rounded-full" />

        {/* Geometric shapes */}
        <div
          className="absolute top-1/4 -left-20 w-60 h-60 bg-amber-500/3 blur-2xl"
          style={{
            clipPath:
              "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-40 h-40 bg-orange-500/3 blur-2xl"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-4">
            Professional Services
          </span>
          <h2
            id="services-heading"
            className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="block text-amber-50 mt-2">
              Crafted to Perfection
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-amber-50/80 leading-relaxed">
            From intricate repairs to comprehensive renovations, each project
            receives our unwavering attention to detail and commitment to
            excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id || service.title}
              service={service}
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="flex mt-20 flex-col lg:flex-row items-center justify-between gap-6 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-amber-400/20 shadow-xl"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center rounded-2xl w-full">
            <div className="text-left">
              <h3 className="text-xl font-bold text-amber-50 mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-amber-50/70">
                Get a free consultation and quote for your specific needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 ml-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold hover:from-amber-500 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/50 transition-all duration-300"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
