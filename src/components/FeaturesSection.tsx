// components/FeaturesSection.tsx - Focus on company values
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Award, Heart, Sparkles, Coffee } from "lucide-react";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Playful background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with overlay text - made more personal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/detailed.png"
                alt="Close-up of exceptional woodwork and craftsmanship"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />

              {/* Warm message overlay */}
              <div className="absolute bottom-24 left-8 right-8 text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Handcrafted with ❤️</span>
                </div>
                <div className="text-3xl font-bold mb-2 leading-tight">
                  We geek out over
                  <br />
                  the little things
                </div>
                <p className="text-gray-200 text-lg">
                  Because that&apos;s where the magic happens.
                </p>
              </div>
            </div>

            {/* Stats overlay - made more friendly */}
            <div className="absolute -bottom-6 left-8 right-8">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "98%", label: "Would refer us to mom" },
                  { value: "500+", label: "Homes made happier" },
                  { value: "15", label: "Years of learning" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center border border-amber-100"
                  >
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                      <span>{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content - more conversational */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700 border border-amber-200 mb-4">
                <Heart className="w-4 h-4" />
                <span className="text-amber-600 text-sm font-semibold">
                  What makes us different
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                We don&apos;t just build spaces —<br />
                <span className="text-amber-500 relative">
                  we create feelings
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="10"
                    viewBox="0 0 200 10"
                    fill="none"
                  >
                    <path
                      d="M1 7C41 3 93 2 156 6C179 8 190 8.5 199 7"
                      stroke="#F59E0B"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Sure, we&apos;re good with hammers and blueprints. But what we
                really do is listen — then turn your &quot;wouldn&apos;t it be
                nice&quot; into &quot;wow, they actually did it.&quot;
              </p>
            </div>

            {/* Values - made more personal and varied */}
            <div className="space-y-5">
              {[
                {
                  icon: Clock,
                  title: "Your time matters",
                  description:
                    "We stick to timelines because we know you've got a life to live.",
                  color: "from-emerald-50 to-emerald-100",
                },
                {
                  icon: Award,
                  title: "Quality you can feel",
                  description:
                    "Premium materials + skilled hands = stuff that lasts.",
                  color: "from-amber-50 to-amber-100",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                >
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center border-2 border-white shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <value.icon className="w-7 h-7 text-gray-700" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <span>{value.title}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Added a personal touch */}
            <div className="pt-4 flex items-center gap-3 text-sm text-gray-500 border-t border-gray-100">
              <Coffee className="w-4 h-4" />
              <span>
                Come by for coffee — we&apos;d love to meet you and talk about
                your dreams.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
