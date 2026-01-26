"use client";
import { motion, Variants } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-800 mb-6">
            Expert Solutions for Every Space
          </h2>
          <p className="text-lg text-slate-600">
            Tailored services designed to enhance functionality, beauty, and
            durability.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = LucideIcons[
              service.icon as keyof typeof LucideIcons
            ] as React.ComponentType<{ className?: string }>;

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full bg-slate-900 border border-white/10 hover:border-amber-400/30 transition">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-2 items-center">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-amber-400" />
                      </div>

                      <h3 className="text-xl font-semibold text-amber-400 mb-3">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
