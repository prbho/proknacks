// components/ServicesSection.tsx - Clear home improvement focus
"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Hammer,
  Paintbrush,
  Wrench,
  Drill,
  Ruler,
  Home,
  Sparkles,
  HammerIcon,
  SparkleIcon,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Complete Home Remodels",
    description:
      "Transform your entire home with our comprehensive renovation services, from structural changes to final finishes.",
    features: ["Kitchen & Bath", "Room Additions", "Whole-House Renovation"],
    color: "from-amber-50 to-amber-100",
  },
  {
    icon: Paintbrush,
    title: "Interior Design & Finish",
    description:
      "Elevate your living spaces with custom interior design, paint, trim, and premium finishes.",
    features: ["Custom Painting", "Trim & Molding", "Flooring Installation"],
    color: "from-sky-50 to-sky-100",
  },
  {
    icon: Hammer,
    title: "Carpentry & Woodwork",
    description:
      "Expert custom carpentry including built-ins, cabinetry, and architectural woodwork.",
    features: ["Custom Cabinets", "Built-in Shelving", "Architectural Details"],
    color: "from-emerald-50 to-emerald-100",
  },
  {
    icon: Wrench,
    title: "Home Repairs & Maintenance",
    description:
      "Reliable repair services to keep your home in perfect condition year-round.",
    features: ["Fixture Repair", "Drywall Repair", "General Maintenance"],
    color: "from-rose-50 to-rose-100",
  },
  {
    icon: Drill,
    title: "Installation Services",
    description:
      "Professional installation of appliances, fixtures, and home systems.",
    features: ["Appliance Install", "Lighting Fixtures", "Window Treatments"],
    color: "from-violet-50 to-violet-100",
  },
  {
    icon: Ruler,
    title: "Custom Design Solutions",
    description:
      "Bespoke design services tailored to your unique style and functional needs.",
    features: ["Space Planning", "Material Selection", "3D Visualization"],
    color: "from-orange-50 to-orange-100",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 bg-[#faf8f5] overflow-hidden"
    >
      {/* Playful background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - More personality */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-amber-600 shadow-sm border border-amber-200 mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span className=" text-amber-600 text-sm font-semibold">
              What we actually do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-5"
          >
            We Make Your Home Feel Like{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-amber-500">Yours Again</span>
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
                  strokeDasharray="4 4"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            No mystery boxes or surprise costs. Just honest work, clear plans,
            and a team that treats your home like it&apos;s our own.
          </motion.p>
        </div>

        {/* Services Grid - More playful cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
                {/* Colorful top bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.color}`}
                />

                {/* Decorative corner accent */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-amber-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <CardHeader className="pb-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform border-2 border-white shadow-md`}
                  >
                    <service.icon className="w-7 h-7 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features with checkmarks instead of dots */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="text-amber-500 font-bold">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Overview - Made friendly and conversational */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 lg:p-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-white shadow-2xl relative overflow-hidden"
        >
          {/* Fun background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-40 h-40 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 border-2 border-white/20 rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="text-sm uppercase tracking-[0.2em] text-amber-300 mb-3 flex items-center justify-center gap-2">
                <span>
                  <HammerIcon />
                </span>
                <span>Here&apos;s How We Roll</span>
                <span>
                  <SparkleIcon />
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                From &quot;What If?&quot; to &quot;Wow!&quot;
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Five simple steps. No jargon, no runaround — just good
                old-fashioned craftsmanship and clear communication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {/* Connecting line (hidden on mobile) */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-amber-200/20 via-amber-400/50 to-amber-200/20" />

              {[
                {
                  step: "1️⃣",
                  title: "Discovery",
                  desc: "Coffee & conversation about your dreams",
                  color: "bg-amber-200",
                },
                {
                  step: "2️⃣",
                  title: "Design",
                  desc: "Sketching plans & picking the good stuff",
                  color: "bg-amber-300",
                },
                {
                  step: "3️⃣",
                  title: "Build",
                  desc: "Hammer time (the fun kind)",
                  color: "bg-amber-400",
                },
                {
                  step: "4️⃣",
                  title: "Inspect",
                  desc: "Making sure it's just right",
                  color: "bg-amber-500",
                },
                {
                  step: "5️⃣",
                  title: "Reveal",
                  desc: "The big reveal & high-fives",
                  color: "bg-amber-600",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center relative"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${item.color} text-gray-900 flex items-center justify-center text-2xl font-bold shadow-lg relative z-10 transform group-hover:scale-110 transition-transform`}
                  >
                    {idx + 1}
                  </div>
                  <div className="font-semibold text-lg mb-1 text-white">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-300">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Fun footer note */}
            <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
              <p>
                ✨ Bonus: We leave your space cleaner than we found it. Promise.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust builders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 mb-4 flex items-center justify-center gap-2">
            <span>⭐</span> Trusted by homeowners across the United States{" "}
            <span>⭐</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
