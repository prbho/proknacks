// app/contact/page.tsx

import { Metadata } from "next";
import { MapSection } from "@/components/contact/MapSection";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact ProKnacks | Get a Free Consultation & Quote",
  description:
    "Get in touch with ProKnacks for professional home improvement services. Contact us for free consultations, quotes, and expert advice on your renovation projects.",
  keywords: [
    "contact proknacks",
    "home improvement contact",
    "renovation consultation",
    "free quote USA",
    "contact contractors",
    "home services contact",
    "Indiana renovation company",
    "Abuja construction contact",
    "Port Harcourt home improvement",
    "Indianapolis contractors contact",
    "USA contractors contact",
  ],
  openGraph: {
    title: "Contact ProKnacks | Get a Free Consultation & Quote",
    description:
      "Get in touch with ProKnacks for professional home improvement services. Contact us for free consultations and expert advice on your renovation projects.",
    type: "website",
    url: "https://proknacks.com/contact",
    siteName: "ProKnacks",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ProKnacks - Professional Home Improvement Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ProKnacks | Get a Free Consultation & Quote",
    description:
      "Get in touch with ProKnacks for professional home improvement services. Contact us for free consultations and expert advice.",
    images: ["/og-contact.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://proknacks.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Background Pattern */}
        <div
          className="fixed inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #fbbf24 1px, transparent 1px),
              linear-gradient(-45deg, #fbbf24 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10">
          {/* Hero Section */}
          <ContactHero />

          {/* Contact Info & Form Grid */}
          <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Contact Information */}
                <div className="lg:col-span-1">
                  <ContactInfo />
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <MapSection />
        </div>
      </main>
    </>
  );
}
