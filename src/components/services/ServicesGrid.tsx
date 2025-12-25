// components/services/ServicesGrid.tsx
"use client";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/data/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-black/10 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-50 mb-6">
            Expert Solutions for Every Need
          </h2>
          <p className="text-lg text-amber-50/70 leading-relaxed">
            Discover our comprehensive range of professional home improvement
            services designed to transform your space with quality and
            precision.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = LucideIcons[
              service.icon as keyof typeof LucideIcons
            ] as React.ComponentType<{ className?: string }>;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-amber-400/15 hover:border-amber-400/30 transition-all duration-300">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-bl from-amber-400/10 to-transparent transform rotate-45" />
                  </div>

                  <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-amber-400/15 to-orange-500/15 group-hover:from-amber-400/25 group-hover:to-orange-500/25 transition-all duration-300">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl lg:text-xl font-bold text-amber-50 mb-3 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-amber-50/70 flex-grow mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/30 backdrop-blur-sm border border-amber-400/20">
            <div className="text-left">
              <h3 className="text-xl font-bold text-amber-50 mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-amber-50/70">
                We specialize in custom projects tailored to your specific
                requirements.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold hover:from-amber-500 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            >
              <Link href="/contact">
                Request Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
