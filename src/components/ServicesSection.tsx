// components/ServicesSection.tsx - Clear home improvement focus
"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Hammer, Paintbrush, Wrench, Drill, Ruler, Home } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Complete Home Remodels",
    description:
      "Transform your entire home with our comprehensive renovation services, from structural changes to final finishes.",
    features: ["Kitchen & Bath", "Room Additions", "Whole-House Renovation"],
  },
  {
    icon: Paintbrush,
    title: "Interior Design & Finish",
    description:
      "Elevate your living spaces with custom interior design, paint, trim, and premium finishes.",
    features: ["Custom Painting", "Trim & Molding", "Flooring Installation"],
  },
  {
    icon: Hammer,
    title: "Carpentry & Woodwork",
    description:
      "Expert custom carpentry including built-ins, cabinetry, and architectural woodwork.",
    features: ["Custom Cabinets", "Built-in Shelving", "Architectural Details"],
  },
  {
    icon: Wrench,
    title: "Home Repairs & Maintenance",
    description:
      "Reliable repair services to keep your home in perfect condition year-round.",
    features: ["Fixture Repair", "Drywall Repair", "General Maintenance"],
  },
  {
    icon: Drill,
    title: "Installation Services",
    description:
      "Professional installation of appliances, fixtures, and home systems.",
    features: ["Appliance Install", "Lighting Fixtures", "Window Treatments"],
  },
  {
    icon: Ruler,
    title: "Custom Design Solutions",
    description:
      "Bespoke design services tailored to your unique style and functional needs.",
    features: ["Space Planning", "Material Selection", "3D Visualization"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-stone-50">
      <div className="absolute inset-0 bg-[url('/texture-light.png')] opacity-5" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-6">
            Comprehensive Home Improvement Services
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From concept to completion, we handle every aspect of your home
            transformation with the precision and care it deserves.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border border-slate-200 bg-white hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 group-hover:from-amber-100 group-hover:to-amber-200">
                    <service.icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-sm text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Our 5-Step Transformation Process
            </h3>
            <p className="text-slate-300">
              Every project follows our proven methodology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Consultation",
                desc: "Understand your vision",
              },
              { step: "2", title: "Design", desc: "Create detailed plans" },
              {
                step: "3",
                title: "Craftsmanship",
                desc: "Execute with precision",
              },
              { step: "4", title: "Quality Check", desc: "Ensure perfection" },
              { step: "5", title: "Delivery", desc: "Reveal your new home" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                  {item.step}
                </div>
                <div className="font-semibold mb-1">{item.title}</div>
                <div className="text-sm text-slate-300">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
