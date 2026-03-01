import type { Metadata } from "next";

import { IntakeFormSection } from "@/components/sections/intake-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Entrevista inicial | ${siteConfig.brandName}`,
  description:
    "Formulario de entrevista inicial de Psicobalbi para orientar la consulta y coordinar modalidad y disponibilidad.",
};

export default function IntakePage() {
  return (
    <main>
      <IntakeFormSection />
    </main>
  );
}
