// components/about/ValuesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Heart, Target, Users, Award, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We pour our heart into every project, ensuring each detail reflects our dedication.",
    color: "from-red-400/20 to-pink-500/20",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Setting the highest standards and consistently delivering beyond expectations.",
    color: "from-amber-400/20 to-orange-500/20",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients to bring their vision to life with perfect synergy.",
    color: "from-blue-400/20 to-cyan-500/20",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "Honest communication, transparent pricing, and ethical business practices.",
    color: "from-emerald-400/20 to-green-500/20",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Consistent quality, on-time delivery, and dependable after-service support.",
    color: "from-violet-400/20 to-purple-500/20",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Embracing new techniques and technologies for better, smarter solutions.",
    color: "from-amber-400/20 to-yellow-500/20",
  },
];

export function ValuesSection() {
  return (
    <section
      id="values"
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-4">
            Our Foundation
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-50 mb-6">
            Core Values That Define Us
          </h2>
          <p className="text-lg text-amber-50/70 leading-relaxed">
            These principles guide every decision we make and every project we
            undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-amber-400/15 hover:border-amber-400/30 transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}
                  >
                    <value.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-50 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-amber-50/70 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 lg:mt-20 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-amber-400/5 to-orange-500/5 border border-amber-400/20"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-50 mb-4">
              More Than Just Contractors
            </h3>
            <p className="text-lg text-amber-50/80 leading-relaxed">
              We&apos;re partners in your home improvement journey. Our values
              ensure we don&apos;t just build spaces—we build relationships,
              trust, and lasting satisfaction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
