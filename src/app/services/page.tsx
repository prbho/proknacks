// app/services/page.tsx
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";

export default function ServicesPage() {
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
          <ServicesHero />

          {/* Services Grid */}
          <ServicesGrid />

          {/* FAQ Section */}
          <ServiceFAQ />
        </div>
      </main>
    </>
  );
}
