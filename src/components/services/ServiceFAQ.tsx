// components/ServiceFAQ.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Coffee, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does a typical renovation take?",
    answer:
      "Depends on the project! Small jobs like bathroom updates take 2-3 weeks. Kitchens run 4-6 weeks. Whole house renovations can take 3-4 months. We'll give you a real timeline — not just optimistic guesses.",
  },
  {
    question: "Do you help with design?",
    answer:
      "Absolutely. Our designers actually listen to how you live, then create spaces that work for real life. Not just pretty pictures.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're currently serving Indiana, Michigan, Ohio, Kentucky, and Illinois — and we travel for good people. Give us a call and we'll figure it out.",
  },
  {
    question: "Who handles the permits?",
    answer:
      "We do! All of it. Permits, inspections, paperwork — we handle the boring stuff so you don't have to.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "It's free! We'll come by, listen to your ideas, and give you honest advice. No charge, no pressure. Just good conversation and maybe some coffee.",
  },
];

export function ServiceFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-4">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-gray-700">
              Got questions?
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            We&apos;ve got answers
          </h2>

          <p className="text-sm text-gray-600">
            Real talk about how this whole renovation thing works.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-gray-400 transition-transform duration-200",
                    open === i && "rotate-180 text-amber-500"
                  )}
                />
              </button>

              {open === i && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-5 text-sm text-gray-600 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-8 text-center p-5 bg-amber-50 rounded-xl border border-amber-200">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Coffee className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">
              Still curious?
            </span>
          </div>
          <p className="text-xs text-amber-700 mb-3">
            Send us a message. Ask us anything.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-1 text-xs font-medium text-amber-800 hover:text-amber-900 underline underline-offset-2"
          >
            Hit us up →
          </a>
        </div>
      </div>
    </section>
  );
}
