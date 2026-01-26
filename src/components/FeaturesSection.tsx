// components/FeaturesSection.tsx - Focus on company values
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Clock, Award, Heart } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with overlay text */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/detailed.png"
                alt="Close-up of exceptional woodwork and craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-24 left-8 right-8 text-white">
                <div className="text-2xl font-bold mb-2">
                  Superior Craftsmanship
                </div>
                <p className="text-slate-200">
                  Every detail matters. That&aposs our promise.
                </p>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-8 right-8">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "98%", label: "Repeat Clients" },
                  { value: "500+", label: "Projects" },
                  { value: "15", label: "Years" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-lg text-center"
                  >
                    <div className="text-2xl font-bold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-6">
                We Build Homes,
                <br />
                Not Just Houses
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At ProKnacks, we understand that a home is more than walls and a
                roof—it&aposs where memories are made, families grow, and life
                happens.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {[
                {
                  icon: Heart,
                  title: "Home-Centric Approach",
                  description:
                    "We focus on creating spaces that feel like home, not just look good.",
                },
                {
                  icon: Users,
                  title: "Collaborative Partnership",
                  description:
                    "You're part of the process from start to finish.",
                },
                {
                  icon: Clock,
                  title: "Respect for Your Time",
                  description:
                    "We stick to timelines and keep you informed every step.",
                },
                {
                  icon: Award,
                  title: "Uncompromising Quality",
                  description: "We use premium materials and skilled artisans.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">
                      {value.title}
                    </div>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your House into a Home?
          </h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Join thousands of families who&aposve found their perfect home with
            ProKnacks. Your vision, our craftsmanship—let&aposs create something
            extraordinary together.
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105"
          >
            Schedule Your Free Design Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
