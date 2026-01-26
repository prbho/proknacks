"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does a typical home renovation take?",
    answer:
      "Timelines vary by scope. Small projects take 2–4 weeks, medium projects 4–8 weeks, and large renovations 8–16+ weeks. We provide a clear schedule before work begins.",
  },
  {
    question: "Do you provide design services?",
    answer:
      "Yes. Our team includes professional designers who collaborate with you to create functional, timeless spaces aligned with your lifestyle.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve multiple U.S. states including Indiana, Michigan, Ohio, Kentucky, and Illinois, with expanding national coverage.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "Absolutely. We manage permits, approvals, and compliance with local building regulations.",
  },
];

export function ServiceFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-16 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-slate-400">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-amber-400 transition-transform",
                    open === i && "rotate-180"
                  )}
                />
              </button>

              {open === i && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-6 pb-6 text-slate-400 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
