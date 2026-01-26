// app/services/page.tsx
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen">
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
