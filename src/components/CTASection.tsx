// components/CTASection.tsx - Clear transformation-focused CTA
"use client";

import { Phone, Mail, Calendar, Star } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f59e0b' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div className="relative mx-auto items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 mb-8">
            <Image
              src="/logo.png"
              alt="proknacks"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              priority
              sizes="(max-width: 64px) 64px, 64px"
            />
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6">
            <span className="block text-white">We Transform Your Spaces</span>

            <span className="block mt-2 text-amber-400">
              into Beautiful, Functional Environments
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Schedule your free, no-obligation design consultation. We&apos;ll
            discuss your vision, tour your space (in-person or virtually), and
            provide a detailed proposal.
          </p>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Star, text: "Free Design Consultation" },
              { icon: Star, text: "Detailed Project Estimate" },
              { icon: Star, text: "No Pressure, Just Expertise" },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
              >
                <badge.icon className="w-4 h-4 text-amber-400" />
                <span className="text-white text-sm font-medium">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-600 transition-all duration-300 hover:scale-105 text-lg"
            >
              <Calendar className="mr-3 w-5 h-5" />
              Schedule Free Consultation
            </a>
            <a
              href="tel:1-800-PRO-KNACKS"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300 text-lg"
            >
              <Phone className="mr-3 w-5 h-5" />
              Call Now: (317) 452-3636
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-2">Prefer to email?</div>
              <a
                href="mailto:hello@proknacks.com"
                className="text-xl font-semibold text-white hover:text-amber-300 transition-colors"
              >
                <Mail className="inline-block w-5 h-5 mr-2" />
                hello@proknacks.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-2">Service Areas</div>
              <div className="text-lg font-semibold text-white">
                Serving All 50 States
              </div>
            </div>
          </div>

          {/* Final Statement */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 italic">
              &quot;Your home should be your sanctuary. Let us help you create
              it.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
