// components/TestimonialsSection.tsx - Real home transformation stories
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote, Home, MapPin, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah & Michael Johnson",
    location: "Austin, TX",
    project: "Whole-House Renovation",
    content:
      "ProKnacks transformed our 1950s ranch into our dream family home. Their attention to detail and understanding of our needs was incredible. They truly care about creating spaces that work for real life.",
    image: "/testimonial-1.jpg",
    beforeAfter:
      "Added open concept, custom kitchen, and energy-efficient upgrades",
    highlight: "They got our chaotic family life immediately",
    rating: 5,
  },
  {
    name: "David Chen",
    location: "San Francisco, CA",
    project: "Kitchen & Bath Remodel",
    content:
      "The craftsmanship is exceptional. Our kitchen isn't just beautiful — it's perfectly functional. Every drawer, every cabinet feels premium. ProKnacks delivered beyond our expectations.",
    image: "/testimonial-2.jpg",
    beforeAfter:
      "Complete layout redesign with custom cabinetry and smart home integration",
    highlight: "Finally a kitchen that works as good as it looks",
    rating: 5,
  },
  {
    name: "The Rodriguez Family",
    location: "Miami, FL",
    project: "Multi-Room Addition",
    content:
      "We expanded our home to accommodate our growing family. ProKnacks made the process smooth and stress-free. Their team became like family, and the results are stunning.",
    image: "/testimonial-3.jpg",
    beforeAfter: "Added master suite, home office, and expanded living space",
    highlight: "They handled the chaos of twin toddlers like pros",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Happy families", emoji: "👨‍👩‍👧‍👦" },
  { value: "98%", label: "Would do it again", emoji: "⭐" },
  { value: "15+", label: "Years of stories", emoji: "📖" },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-[#faf8f5] to-white"
    >
      {/* Playful background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dots.svg')] opacity-5" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - More conversational */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-amber-600 shadow-sm border border-amber-200 mb-4">
            <Heart className="w-4 h-4" />
            <span>Real people, real stories</span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-5">
            Don&apos;t just take{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-amber-500">our word</span>
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
            <br />
            for it
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Here&apos;s what happens when you actually listen to people and give
            a damn about their homes. (Spoiler: they tend to like it.)
          </p>
        </motion.div>

        {/* Quick stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                {/* <span>{stat.emoji}</span> */}
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Colorful top bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${
                    index === 0
                      ? "from-amber-400 to-amber-300"
                      : index === 1
                      ? "from-sky-400 to-sky-300"
                      : "from-emerald-400 to-emerald-300"
                  }`}
                />

                <CardContent className="p-6 relative">
                  <Quote className="absolute right-4 top-4 w-12 h-12 text-gray-100" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Highlight quote */}
                  <div className="inline-block bg-amber-50 text-amber-700 text-sm px-3 py-1 rounded-full mb-4">
                    ⚡ {testimonial.highlight}
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Client info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                  {/* Project details - Made it feel like a conversation */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Home className="w-4 h-4 text-amber-500" />
                      <span className="font-medium text-gray-700">
                        What we did:
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 pl-6">
                      {testimonial.beforeAfter}
                    </p>
                  </div>

                  {/* Tiny personal note */}
                  <div className="mt-3 text-xs text-gray-400 italic">
                    — {testimonial.name.split(" ")[0]}&apos;s family approves ✅
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
