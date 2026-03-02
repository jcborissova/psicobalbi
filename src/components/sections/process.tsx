import Link from "next/link";

import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-[var(--color-band-process)] py-14 sm:py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={siteConfig.process.eyebrow}
          title={siteConfig.process.title}
          description={siteConfig.process.description}
          align="center"
          eyebrowTone="primary"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-9 sm:mt-12">
          <ol className="grid gap-4 lg:grid-cols-3 lg:gap-5">
            {siteConfig.process.steps.map((step, index) => (
              <li
                key={step.title}
                className="group rounded-2xl border border-[var(--color-border-subtle)] bg-white p-5 shadow-[0_4px_12px_rgba(74,78,99,0.06)] transition-all duration-300 hover:border-[var(--color-primary-light)] sm:p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-soft)] text-sm font-semibold text-[var(--color-text)]">
                    {index + 1}
                  </span>
                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    Paso {index + 1}
                  </p>
                </div>

                <h3 className="font-heading text-[1.55rem] leading-tight text-[var(--color-text)] sm:text-[1.75rem]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-9 border-t border-[var(--color-border-subtle)] pt-7 sm:mt-10">
            <div className="grid gap-3 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="/entrevista-inicial"
                className={buttonStyles({ variant: "primary", size: "lg", className: "w-full sm:w-auto" })}
              >
                {siteConfig.process.primaryCtaLabel}
              </Link>

              <BookingButton
                label={siteConfig.process.secondaryCtaLabel}
                variant="outline"
                size="lg"
                className="w-full justify-center sm:w-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
