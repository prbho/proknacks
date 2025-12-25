// app/terms/page.tsx
import { TermsOfServiceContent } from "@/components/legal/TermsOfServiceContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ProKnacks - Home Improvement Services",
  description:
    "Read ProKnacks' Terms of Service to understand the rules and guidelines for using our website and services for home improvement projects.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "service terms",
    "contract terms",
    "legal agreement",
    "terms",
    "home services terms",
  ],
  openGraph: {
    title: "Terms of Service | ProKnacks",
    description:
      "Terms and conditions governing the use of ProKnacks' home improvement services.",
    type: "website",
    url: "https://proknacks.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://proknacks.com/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <TermsOfServiceContent />
    </div>
  );
}
