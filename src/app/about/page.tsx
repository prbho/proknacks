// app/about/page.tsx

import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { ValuesSection } from "@/components/about/ValuesSection";

export const metadata: Metadata = {
  title: "About ProKnacks | Professional Home Improvement Experts Since 2010",
  description:
    "Learn about ProKnacks' commitment to excellence in home improvement. With over a decade of experience, our expert team delivers quality craftsmanship, personalized service, and innovative solutions for every project.",
  keywords: [
    "about proknacks",
    "home improvement company",
    "experienced contractors",
    "quality craftsmanship",
    "home renovation experts",
    "professional contractors",
    "trusted home services",
    "licensed and insured",
    "USA home improvement",
    "property renovation specialists",
  ],
  openGraph: {
    title: "About ProKnacks | Professional Home Improvement Experts",
    description:
      "Learn about ProKnacks' commitment to excellence in home improvement. With over a decade of experience, our expert team delivers quality craftsmanship and personalized service.",
    type: "website",
    url: "https://proknacks.com/about",
    siteName: "ProKnacks",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "ProKnacks Team - Professional Home Improvement Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ProKnacks | Professional Home Improvement Experts",
    description:
      "Learn about ProKnacks' commitment to excellence in home improvement. With over a decade of experience, our expert team delivers quality craftsmanship.",
    images: ["/og-about.jpg"],
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
    canonical: "https://proknacks.com/about",
  },
  verification: {
    // Add your verification codes here
    // google: "verification-code",
    // yandex: "verification-code",
  },
};

export default function AboutPage() {
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
          <AboutHero />

          {/* Our Story */}
          {/* <OurStory /> */}

          {/* Core Values */}
          <ValuesSection />

          {/* Team Section */}
          {/* <TeamSection /> */}

          {/* Stats & Achievements */}
          {/* <StatsSection /> */}
        </div>
      </main>
    </>
  );
}
