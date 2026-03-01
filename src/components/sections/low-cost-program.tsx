import { Container } from "@/components/layout/container";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function LowCostProgramSection() {
  return (
    <section id="programa-bajo-costo" className="bg-[var(--color-band-low-cost)] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="rounded-3xl bg-gradient-to-br from-white via-[var(--color-soft-cool)] to-white border border-[var(--color-border-subtle)] px-8 py-12 sm:px-10 sm:py-14 lg:px-12 shadow-[0_12px_32px_rgba(107,139,155,0.08)]">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-cool)] bg-[color-mix(in_oklab,var(--color-accent-cool),white_95%)] inline-block px-3.5 py-1.5 rounded-full">
              {siteConfig.lowCostProgram.eyebrow}
            </p>

            <h2 className="mt-6 max-w-[24ch] font-heading text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-[var(--color-text)]">
              {siteConfig.lowCostProgram.title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {siteConfig.lowCostProgram.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="max-w-2xl text-base text-[var(--color-text)]">
                Cupos limitados. {siteConfig.lowCostProgram.criteriaNote}
              </p>

              <a href="/entrevista-inicial" className={buttonStyles({ variant: "secondary", size: "lg" })}>
                {siteConfig.lowCostProgram.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
