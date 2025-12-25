// app/(special)/layout.tsx
import { Footer } from "@/components/Footer";
import { SpecialHeader } from "@/components/SpecialHeader";

export default function SpecialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <SpecialHeader />
      <main id="main-content" className="flex-grow py-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
