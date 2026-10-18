import { AboutSection } from "@/components/sections/about";
import { CtaBannerSection } from "@/components/sections/cta-banner";
import { HeroSection } from "@/components/sections/hero";
import { PracticalInfoSection } from "@/components/sections/practical-info";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { WhatsAppFloat } from "@/components/whatsapp-float";
export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <PracticalInfoSection />
        <CtaBannerSection />
      </main>
      <WhatsAppFloat />
    </>
  );
}
