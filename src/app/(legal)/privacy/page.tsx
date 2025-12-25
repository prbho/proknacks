// app/privacy/page.tsx
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ProKnacks - Home Improvement Services",
  description:
    "Read ProKnacks' Privacy Policy to understand how we collect, use, and protect your personal information when you use our home improvement services.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "GDPR compliance",
    "privacy",
    "home services privacy",
    "data security",
    "information protection",
  ],
  openGraph: {
    title: "Privacy Policy | ProKnacks",
    description:
      "Learn how ProKnacks protects your privacy and handles your personal information.",
    type: "website",
    url: "https://proknacks.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://proknacks.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PrivacyPolicyContent />
    </div>
  );
}
