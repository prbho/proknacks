// app/cookies/page.tsx
import { CookiePolicyContent } from "@/components/legal/CookiePolicyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | ProKnacks - Home Improvement Services",
  description:
    "Learn about how ProKnacks uses cookies and similar technologies to enhance your experience on our website and home improvement services platform.",
  keywords: [
    "cookie policy",
    "cookies",
    "website cookies",
    "tracking technologies",
    "privacy cookies",
    "GDPR cookies",
    "cookie policy",
    "analytics cookies",
  ],
  openGraph: {
    title: "Cookie Policy | ProKnacks",
    description:
      "Information about how we use cookies and similar technologies on our website.",
    type: "website",
    url: "https://proknacks.com/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://proknacks.com/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CookiePolicyContent />
    </div>
  );
}
