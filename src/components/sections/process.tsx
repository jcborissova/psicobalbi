import Link from "next/link";

import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const stepVisual = {
  badge:
    "bg-[color-mix(in_oklab,var(--color-primary),white_90%)] text-[var(--color-primary)]",
  node: "from-[var(--color-primary-light)] to-[var(--color-primary)]",
  line: "bg-[var(--color-primary-light)]",
  borderHover: "hover:border-[var(--color-primary)]",
} as const;

export function ProcessSection() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-[var(--color-band-process)] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[var(--color-accent-warm)] blur-3xl opacity-[0.03]" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-[var(--color-accent-cool)] blur-3xl opacity-[0.03]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={siteConfig.process.eyebrow}
          title={siteConfig.process.title}
          description={siteConfig.process.description}
          align="center"
          eyebrowTone="primary"
          className="relative z-10 mx-auto max-w-3xl"
        />

        <div className="relative z-10 mt-14 sm:mt-16">
          <div className="pointer-events-none absolute top-6 left-[8%] right-[8%] hidden h-px bg-[color-mix(in_oklab,var(--color-primary),white_70%)] lg:block" />

          <ol className="grid gap-6 lg:grid-cols-3 lg:gap-7">
            {siteConfig.process.steps.map((step, index) => {
              return (
                <li
                  key={step.title}
                  className={cn(
                    "group relative rounded-2xl border border-[var(--color-border-subtle)] bg-white p-6 shadow-[0_8px_24px_rgba(74,78,99,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(74,78,99,0.12)] sm:p-8",
                    stepVisual.borderHover,
                  )}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/70 shadow-[0_8px_20px_rgba(74,78,99,0.16)]">
                      <div className={cn("absolute inset-0 rounded-xl bg-gradient-to-br", stepVisual.node)} />
                      <span className="relative text-sm font-bold text-white">{index + 1}</span>
                    </div>

                    <p
                      className={cn(
                        "inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest",
                        stepVisual.badge,
                      )}
                    >
                      Paso {index + 1}
                    </p>
                  </div>

                  <h3 className="font-heading text-2xl leading-tight text-[var(--color-text)] sm:text-[1.85rem]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
                    {step.description}
                  </p>

                  <div className={cn("mt-6 h-1 w-16 rounded-full", stepVisual.line)} />
                </li>
              );
            })}
          </ol>

          <div className="mt-12 border-t border-[var(--color-border-subtle)] pt-8 sm:mt-14 sm:pt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Link href="/entrevista-inicial" className={buttonStyles({ variant: "primary", size: "lg" })}>
                {siteConfig.process.primaryCtaLabel}
              </Link>

              <BookingButton label={siteConfig.process.secondaryCtaLabel} variant="outline" size="lg" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
