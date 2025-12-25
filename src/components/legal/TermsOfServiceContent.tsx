// components/legal/TermsOfServiceContent.tsx
"use client";

import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TermsOfServiceContent() {
  const effectiveDate = "January 1, 2024";

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #fbbf24 1px, transparent 1px),
            linear-gradient(-45deg, #fbbf24 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 mb-6"
          >
            <FileText className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold text-amber-600">
              Legal Agreement
            </span>
          </motion.div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Effective Date: {effectiveDate}
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Important Notice
              </h2>
              <p className="text-gray-700">
                By accessing or using ProKnacks&apos; website and services, you
                agree to be bound by these Terms of Service. Please read them
                carefully before using our services.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Agreement */}
          <section className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service constitute a legally binding agreement
                  made between you (&quot;Client&quot;) and ProKnacks
                  (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;), concerning your access to and use of our
                  website and home improvement services.
                </p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              2. Services Description
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What We Provide
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                    <span>
                      Professional home improvement and renovation services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                    <span>Free consultation and project assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                    <span>Custom design and planning services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                    <span>Material procurement and project management</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Client Responsibilities */}
          <section className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              3. Client Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Accurate Information",
                  description: "Provide truthful and complete project details",
                },
                {
                  title: "Site Access",
                  description: "Grant reasonable access to project location",
                },
                {
                  title: "Timely Decisions",
                  description:
                    "Make timely decisions regarding project details",
                },
                {
                  title: "Payment Terms",
                  description: "Adhere to agreed payment schedules",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-amber-400/5 to-orange-500/5 border border-amber-400/10"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Payments */}
          <section className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  4. Payment Terms
                </h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-white border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Payment Structure
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                        <span>
                          <strong>Deposit:</strong> 30% upon contract signing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                        <span>
                          <strong>Progress Payments:</strong> 40% upon project
                          milestone completion
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                        <span>
                          <strong>Final Payment:</strong> 30% upon project
                          completion and handover
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-white border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Payment Methods
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Bank Transfer",
                        "Credit Card",
                        "Debit Card",
                        "Cash",
                      ].map((method) => (
                        <span
                          key={method}
                          className="px-3 py-1 text-sm bg-amber-50 text-amber-700 rounded-full border border-amber-200"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cancellation & Refunds */}
          <section className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              5. Cancellation & Refund Policy
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Cancellation Terms
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                      <span>7+ days before start: Full deposit refund</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                      <span>3-6 days before start: 50% deposit refund</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                      <span>Less than 3 days: No refund</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Refund Processing
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                      <span>Refund requests in writing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                      <span>Processing time: 7-14 business days</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                      <span>Refund to original payment method</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Warranties */}
          <section className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  6. Warranties & Guarantees
                </h2>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-amber-400/5 to-orange-500/5 border border-amber-400/10">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Workmanship Warranty
                    </h3>
                    <p className="text-gray-700">
                      All work is guaranteed for 2 years from project completion
                      date.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-amber-400/5 to-orange-500/5 border border-amber-400/10">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Materials Guarantee
                    </h3>
                    <p className="text-gray-700">
                      Materials are covered by manufacturer warranties, which we
                      help facilitate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              7. Limitation of Liability
            </h2>
            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, ProKnacks shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits,
                data, use, goodwill, or other intangible losses, resulting from
                your access to or use of or inability to access or use our
                services.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              8. Governing Law
            </h2>
            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the United State. Any disputes arising from
                these Terms or your use of our services shall be resolved in the
                courts of Indiana, USA.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="p-6 rounded-xl bg-white border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Changes to Terms
            </h3>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will
              provide notice of significant changes by posting the updated Terms
              on our website and updating the &quot;Effective Date.&quot;
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Current Version:</span>
              <span>v3.0 • Effective: {effectiveDate}</span>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-600 max-w-2xl">
              By using our services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600"
              >
                <Link href="/contact">Contact Legal Department</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Link href="/privacy">View Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
