// components/legal/PrivacyPolicyContent.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PrivacyPolicyContent() {
  const lastUpdated = "January 1, 2024";

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
            <Shield className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold text-amber-600">
              Privacy & Security
            </span>
          </motion.div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">Last Updated: {lastUpdated}</p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-amber-400/5 to-orange-500/5 border border-amber-400/10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Navigation
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Introduction",
              "Data Collection",
              "Data Use",
              "Data Protection",
              "Your Rights",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="px-4 py-2 text-sm font-medium text-amber-600 hover:text-amber-700 bg-white border border-amber-200 rounded-lg hover:border-amber-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  1. Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At ProKnacks (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;), we are committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website or
                  use our services. Please read this privacy policy carefully.
                  If you do not agree with the terms of this privacy policy,
                  please do not access the site.
                </p>
              </div>
            </div>
          </section>

          {/* Data Collection */}
          <section id="data-collection" className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              2. Information We Collect
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Personal Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Contact Information:</strong> Name, email address,
                      phone number, physical address
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Project Details:</strong> Property information,
                      renovation requirements, budget range
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Communication Data:</strong> Messages, emails, and
                      other correspondence
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Automatically Collected Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Device Information:</strong> IP address, browser
                      type, operating system
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Usage Data:</strong> Pages visited, time spent,
                      click patterns
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Location Data:</strong> General location
                      information (city/region level)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Use */}
          <section id="data-use" className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              3. How We Use Your Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Service Delivery",
                  description:
                    "To provide and manage home improvement services, process quotes, and schedule consultations",
                },
                {
                  title: "Communication",
                  description:
                    "To respond to inquiries, send updates, and provide customer support",
                },
                {
                  title: "Improvement",
                  description:
                    "To enhance our services, website functionality, and user experience",
                },
                {
                  title: "Legal Compliance",
                  description:
                    "To comply with legal obligations and protect our rights and property",
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

          {/* Data Protection */}
          <section id="data-protection" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  4. Data Protection & Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure.
                </p>
                <div className="space-y-3">
                  {[
                    "SSL encryption for data transmission",
                    "Regular security audits and updates",
                    "Access controls and authentication",
                    "Data backup and recovery procedures",
                    "Employee privacy training",
                  ].map((measure, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-gray-700">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section id="your-rights" className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              5. Your Rights & Choices
            </h2>
            <div className="space-y-4">
              {[
                {
                  right: "Access",
                  description: "Request access to your personal information",
                },
                {
                  right: "Correction",
                  description: "Request correction of inaccurate information",
                },
                {
                  right: "Deletion",
                  description: "Request deletion of your personal data",
                },
                {
                  right: "Objection",
                  description: "Object to processing of your personal data",
                },
                {
                  right: "Portability",
                  description:
                    "Request transfer of your data to another service",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.right}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-amber-400 text-amber-600 hover:bg-amber-50"
                    >
                      Exercise Right
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-20">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    6. Contact Us
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you have questions about this Privacy Policy or wish to
                    exercise your rights, please contact us:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-amber-500" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a
                          href="mailto:privacy@proknacks.com"
                          className="text-amber-600 hover:text-amber-700"
                        >
                          privacy@proknacks.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-amber-500" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a
                          href="tel:+13174523636"
                          className="text-amber-600 hover:text-amber-700"
                        >
                          +1 317-452-3636
                        </a>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-amber-400/20">
                      <p className="text-sm text-gray-600">
                        <strong>Data Protection Officer:</strong> For
                        privacy-specific inquiries, please address to our Data
                        Protection Officer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section className="p-6 rounded-xl bg-white border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Policy Updates
            </h3>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last Updated&quot; date.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Current Version:</span>
              <span>v2.1 • Last Updated: {lastUpdated}</span>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-600">
              Need help understanding our privacy practices?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600"
              >
                <Link href="/contact">Contact Privacy Team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
