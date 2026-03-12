"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Shield,
  Target,
  Heart,
  CheckCircle,
  Calendar,
  Coffee,
  Sparkles,
  Hammer,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Clients First, Always",
      description:
        "Your life, your needs, your vision — that's where we start.",
      color: "from-rose-50 to-rose-100",
    },
    {
      icon: Award,
      title: "No Shortcuts, Ever",
      description:
        "Premium materials, skilled hands, and zero cutting corners.",
      color: "from-amber-50 to-amber-100",
    },
    {
      icon: Users,
      title: "We Build Together",
      description: "You're not a spectator — you're part of the team.",
      color: "from-sky-50 to-sky-100",
    },
    {
      icon: Shield,
      title: "Honest & Transparent",
      description: "Clear pricing, real timelines, no surprises.",
      color: "from-emerald-50 to-emerald-100",
    },
    {
      icon: Target,
      title: "Detail Obsessed",
      description: "We lose sleep over the little things so you don't have to.",
      color: "from-purple-50 to-purple-100",
    },
    {
      icon: Calendar,
      title: "We Show Up On Time",
      description: "Your schedule matters. We respect it — period.",
      color: "from-orange-50 to-orange-100",
    },
  ];

  const team = [
    {
      name: "Jeph Otomewo",
      role: "Founder & Lead Craftsman",
      bio: "Started swinging a hammer at 15. Still loves it 25 years later.",
      image: "/team/jeph.jpg",
    },
    {
      name: "Joycelyn Otomewo",
      role: "Design Director",
      bio: "Turns 'I don't know what I want' into 'This is exactly what I dreamed of.'",
      image: "/team/joycelyn.jpg",
    },
    {
      name: "Happy O.",
      role: "Project Manager",
      bio: "Keeps everything on track so you can keep living your life.",
      image: "/team/happy.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO - Larger fonts */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-24 lg:py-32">
        <Image
          src="/modern-living-room-with-fireplace.png"
          alt="ProKnacks craftsmanship"
          fill
          priority
          className="object-cover opacity-10"
        />

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Heart className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">
                Nice people, great work
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              We&apos;re just folks who{" "}
              <span className="text-amber-400 relative">
                love homes
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
              and the people in them
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
              No corporate nonsense. Just honest craftsmanship, clear
              communication, and a genuine love for making homes better — one
              nail at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                className="px-6 py-3 bg-amber-500 text-gray-900 text-base font-medium hover:bg-amber-600 hover:scale-105 transition-all rounded-lg"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Coffee className="w-5 h-5" />
                  Let&apos;s grab a coffee
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-6 py-3 bg-white/10 text-white border-white/20 text-base font-medium hover:bg-white/20 rounded-lg"
              >
                <Link href="/services" className="flex items-center gap-2">
                  <Hammer className="w-5 h-5" />
                  See what we do
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION - Larger fonts */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">
                How we think
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Homes should work for{" "}
              <span className="text-amber-500">real life</span>
            </h2>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Not magazine photoshoots. Not showrooms. Real life — with messy
              kitchens, noisy kids, and Sunday afternoon naps. We build spaces
              that actually fit how you live today and tomorrow.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Thoughtful layouts that make sense",
                "Materials that last through real life",
                "Spaces that grow with your family",
                "Value that stands the test of time",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-base">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/consulting-with-client.png"
                alt="ProKnacks team with client"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/30 backdrop-blur-sm p-3 rounded-lg">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  That moment when the design finally clicks — best feeling
                  ever.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM - Larger fonts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-4">
              <Users className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-gray-700">
                Meet the team
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              The faces behind ProKnacks
            </h2>
            <p className="text-base text-gray-600">
              Real people who actually care about your home. (Yes, really.)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-56 w-56 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-amber-600 text-center mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 text-center italic">
                  &quot;{member.bio}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES - Larger fonts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              What we stand for
            </h2>
            <p className="text-base text-gray-600">
              Six promises we make on every project. No exceptions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - Larger fonts */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mx-auto">
            <Heart className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-700">
              Let&apos;s do this
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Ready to make your home feel like yours again?
          </h2>

          <p className="text-base lg:text-lg text-gray-600 max-w-md mx-auto">
            No pressure. No pushy sales. Just a friendly chat about your dreams
            and how we might make them happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              className="px-6 py-3 bg-amber-500 text-gray-900 text-base font-medium hover:bg-amber-600 hover:scale-105 transition-all rounded-lg"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                Grab a coffee on us
              </Link>
            </Button>
          </div>

          <p className="text-xs text-gray-400 pt-2">
            ✨ Free consult • No obligation • Just good people
          </p>
        </div>
      </section>
    </div>
  );
}
