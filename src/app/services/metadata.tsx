// app/services/metadata.ts (or generateMetadata function)
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Professional Home Improvement & Renovation Solutions",
  description:
    "Explore ProKnacks' comprehensive home improvement services including custom renovations, interior design, construction, and maintenance solutions. Expert craftsmanship guaranteed.",
  keywords: [
    "home improvement services",
    "renovation services",
    "construction services",
    "interior design",
    "home remodeling",
    "kitchen renovation",
    "bathroom remodeling",
    "custom furniture",
    "home maintenance",
    "construction contractors",
    "property renovation",
    "home services",
  ],
  openGraph: {
    title: "Our Services | Professional Home Improvement Solutions",
    description:
      "Explore ProKnacks' comprehensive home improvement services including custom renovations, interior design, construction, and maintenance solutions.",
    type: "website",
    url: "https://proknacks.com/services",
    siteName: "ProKnacks",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "ProKnacks Services - Home Improvement & Renovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Professional Home Improvement Solutions",
    description:
      "Explore ProKnacks' comprehensive home improvement services including custom renovations, interior design, and construction solutions.",
    images: ["/og-services.jpg"],
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
    canonical: "https://proknacks.com/services",
  },
};
