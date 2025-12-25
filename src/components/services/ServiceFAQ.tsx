// components/services/ServiceFAQ.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does a typical home renovation take?",
    answer:
      "Project duration varies based on scope and complexity. Small projects (like kitchen updates) take 2-4 weeks, medium projects 4-8 weeks, and large renovations 8-16+ weeks. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you provide design services?",
    answer:
      "Yes! Our Standard and Premium plans include professional design services. We have in-house designers who work with you to create functional, beautiful spaces that match your vision and lifestyle.",
  },
  {
    question: "What areas do you serve in the US?",
    answer:
      "We primarily serve Indiana, Michigan, Ohio, Kentucky, Illinois, with expanding coverage across major USA cities. Contact us to check availability in your specific location.",
  },
  {
    question: "Are your materials locally sourced or imported?",
    answer:
      "We use a mix of high-quality local materials and imported components where superior quality is needed. We prioritize durability, aesthetics, and value in all our material selections.",
  },
  {
    question: "Do you handle permits and approvals?",
    answer:
      "Yes, we manage all necessary permits and regulatory approvals for your project. Our team is experienced with local building codes and regulations across the United States.",
  },
  {
    question: "What warranty do you offer on your work?",
    answer:
      "We offer comprehensive warranties: 2 weeks for Basic, 6 months for Standard, and 2 years for Premium services. All warranties cover workmanship and materials.",
  },
  {
    question: "Can I stay in my home during renovation?",
    answer:
      "For small to medium projects, usually yes. For major renovations, we may recommend temporary relocation for safety and convenience. We'll discuss this during planning.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We implement strict quality control measures: regular inspections, experienced supervisors, premium materials, and skilled craftsmen. Every project undergoes multiple quality checks.",
  },
];

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-50 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-amber-50/70 leading-relaxed">
            Find answers to common questions about our services, process, and
            policies.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={cn(
                  "w-full text-left p-6 rounded-xl transition-all duration-300",
                  "bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm",
                  "border border-amber-400/15 hover:border-amber-400/30",
                  openIndex === index && "border-amber-400/30"
                )}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400/10 to-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-50">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-amber-400 transition-transform duration-300 flex-shrink-0",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </div>

                <motion.div
                  initial={false}
                  animate={
                    openIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pl-14">
                    <p className="text-amber-50/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-amber-400/5 to-orange-500/5 border border-amber-400/20">
            <div className="text-left">
              <h3 className="text-xl font-bold text-amber-50 mb-2">
                Still have questions?
              </h3>
              <p className="text-amber-50/70">
                Our team is ready to help you with any queries about our
                services.
              </p>
            </div>
            <a
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
