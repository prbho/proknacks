// app/contact/page.tsx
"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactHero } from "@/components/contact/ContactHero";
import { MapSection } from "@/components/contact/MapSection";
import { Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info - Takes 1/3 */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-xs font-medium text-amber-700">
                    Reach out anytime
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Let&apos;s connect
                </h2>
                <p className="text-xs text-gray-500">
                  We&apos;re real people who actually reply. Novel concept,
                  right?
                </p>
              </div>
              <ContactInfo />
            </div>
          </div>

          {/* Contact Form - Takes 2/3 */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      <MapSection />
    </main>
  );
}
