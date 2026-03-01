import type { ReactNode } from "react";

import { AboutSection } from "@/components/sections/about";
import { CtaBannerSection } from "@/components/sections/cta-banner";
import { HeroSection } from "@/components/sections/hero";
import { PracticalInfoSection } from "@/components/sections/practical-info";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { WhatsAppFloat } from "@/components/whatsapp-float";

function SectionBand({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return <div className={`border-t border-[var(--color-border)] ${className}`}>{children}</div>;
}

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />

        <SectionBand className="bg-[var(--color-band-about)]">
          <AboutSection />
        </SectionBand>

        <SectionBand className="bg-[var(--color-band-services)]">
          <ServicesSection />
        </SectionBand>

        <SectionBand className="bg-[var(--color-band-practical)]">
          <PracticalInfoSection />
        </SectionBand>

        <SectionBand className="bg-[var(--color-band-process)]">
          <ProcessSection />
        </SectionBand>

        <SectionBand className="bg-[var(--color-band-cta)]">
          <CtaBannerSection />
        </SectionBand>
      </main>

      <WhatsAppFloat />
    </>
  );
}
