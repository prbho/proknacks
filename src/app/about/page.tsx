"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Award,
  Users,
  Shield,
  Target,
  Heart,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Client-First Mindset",
      description: "Your lifestyle, needs, and vision shape every decision.",
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "Premium materials, skilled hands, zero shortcuts.",
    },
    {
      icon: Users,
      title: "True Collaboration",
      description: "We build with you — not just for you.",
    },
    {
      icon: Shield,
      title: "Radical Transparency",
      description: "Clear pricing, honest timelines, consistent updates.",
    },
    {
      icon: Target,
      title: "Precision Execution",
      description: "Details matter — and we obsess over them.",
    },
    {
      icon: Calendar,
      title: "On-Time Delivery",
      description: "Your schedule matters. We respect it.",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Homes Transformed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Craftsmen" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-24 lg:py-32">
        <Image
          src="/modern-living-room-with-fireplace.png"
          alt="ProKnacks craftsmanship"
          fill
          priority
          className="object-cover opacity-20"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <Home className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400">
                About ProKnacks
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              We Don’t Just Renovate,
              <br />
              <span className="text-amber-400">We Redefine Home</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              ProKnacks is a design-build home transformation company committed
              to craftsmanship, integrity, and spaces that elevate everyday
              living.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-amber-500 text-slate-900 hover:bg-amber-600"
            >
              <Link href="/contact">Start Your Transformation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Homes Built for Life,
              <br />
              <span className="text-amber-600">Not Just for Show</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              We believe a home should support the way you live today — and the
              way you’ll live tomorrow. That belief guides every project,
              decision, and detail we deliver.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Thoughtful, family-focused layouts",
                "Durable, future-ready materials",
                "Smart space optimization",
                "Long-term value planning",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/consulting-with-client.png"
                alt="Completed ProKnacks home"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600">
              Principles that guide how we design, build, and serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-900/5 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wide text-amber-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            Ready to Transform Your SPace?
          </h2>
          <p className="text-xl text-slate-600">
            Let’s create a space that reflects your lifestyle, values, and
            future.
          </p>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 text-slate-900 hover:bg-amber-600"
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
