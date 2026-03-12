// components/ServicesGrid.tsx
"use client";
import { motion, Variants } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Color palette for cards
const cardColors = [
  "from-amber-50 to-amber-100",
  "from-sky-50 to-sky-100",
  "from-emerald-50 to-emerald-100",
  "from-rose-50 to-rose-100",
  "from-purple-50 to-purple-100",
  "from-orange-50 to-orange-100",
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
            <span className="text-sm font-medium text-amber-700">
              <LucideIcons.Hammer />
            </span>
            <span className="text-sm font-medium text-amber-700">
              Expert solutions
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Whatever your home needs,
            <br />
            <span className="text-amber-500">we&apos;ve got you covered</span>
          </h2>

          <p className="text-base text-gray-600">
            No job too small, no project too big. Just honest work at fair
            prices.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, index) => {
            const Icon = LucideIcons[
              service.icon as keyof typeof LucideIcons
            ] as React.ComponentType<{ className?: string }>;

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                        cardColors[index % cardColors.length]
                      } flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Note about custom work */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
            <span>🔨</span>
            Don&apos;t see what you need? We do custom work too. Just ask.
          </p>
        </div>
      </div>
    </section>
  );
}
