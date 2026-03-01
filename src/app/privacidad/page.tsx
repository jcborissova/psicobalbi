import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Política de privacidad | ${siteConfig.brandName}`,
  description:
    "Información sobre el uso y resguardo de datos de contacto enviados a través del sitio de Psicobalbi.",
};

export default function PrivacyPage() {
  const page = siteConfig.legal.privacy;

  return (
    <main className="py-10 sm:py-14 lg:py-16">
      <Container className="max-w-4xl">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
            Información legal
          </p>
          <h1 className="mt-3 font-heading text-4xl leading-tight text-[var(--color-text)] sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
            {page.intro}
          </p>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">Actualizado: {page.updatedAt}</p>

          <div className="mt-8 space-y-7">
            {page.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="font-heading text-2xl leading-tight text-[var(--color-text)]">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
