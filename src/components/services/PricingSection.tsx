// components/services/PricingSection.tsx
"use client";

import { motion } from "framer-motion";
import { Check, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for small repairs and maintenance",
    price: "From ₦150,000",
    features: [
      "Minor repairs & fixes",
      "Basic maintenance",
      "2-week warranty",
      "Standard materials",
      "Single technician",
      "No design consultation",
    ],
    popular: false,
    cta: "Get Quote",
    href: "/contact?plan=basic",
  },
  {
    name: "Standard",
    description: "Ideal for medium-scale renovations",
    price: "From ₦500,000",
    features: [
      "Room renovations",
      "Custom designs included",
      "6-month warranty",
      "Premium materials",
      "3-person team",
      "Project management",
      "Free consultation",
      "No structural changes",
    ],
    popular: true,
    cta: "Popular Choice",
    href: "/contact?plan=standard",
  },
  {
    name: "Premium",
    description: "Complete home transformation",
    price: "Custom Quote",
    features: [
      "Full home renovation",
      "Architectural designs",
      "2-year warranty",
      "Luxury materials",
      "5+ person team",
      "Dedicated project manager",
      "Premium consultation",
      "Structural modifications",
      "Post-service support",
      "Priority scheduling",
    ],
    popular: false,
    cta: "Request Quote",
    href: "/contact?plan=premium",
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-50 mb-6">
            Simple, Honest Pricing
          </h2>
          <p className="text-lg text-amber-50/70 leading-relaxed">
            No hidden fees, no surprises. Get exactly what you need with our
            transparent pricing structure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl border transition-all duration-300",
                plan.popular
                  ? "border-amber-400/30 bg-gradient-to-br from-gray-900 to-gray-800 scale-105 shadow-2xl"
                  : "border-amber-400/15 bg-gradient-to-br from-gray-900/60 to-gray-800/40 hover:border-amber-400/30"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 text-xs font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-amber-50 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-amber-50/70 mb-4">{plan.description}</p>
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-6">
                    {plan.price}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.startsWith("No") ? (
                        <X className="w-5 h-5 text-amber-400/50 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Check className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-amber-50/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={cn(
                    "w-full py-6 text-base font-bold transition-all duration-300",
                    plan.popular
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 hover:from-amber-500 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/25"
                      : "border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/50"
                  )}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-amber-400/5 to-orange-500/5 border border-amber-400/20">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <p className="text-sm text-amber-50/70">
              All prices are estimates. Contact us for a personalized quote
              based on your specific requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
