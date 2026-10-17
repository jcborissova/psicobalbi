import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="section-space bg-[var(--color-band-process)]"
    >
      <Container>
        <div className="grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Cómo empezamos"
              title="El primer paso puede ser sencillo."
              description={siteConfig.process.description}
            />
            <Link
              href="/entrevista-inicial"
              className={buttonStyles({
                size: "lg",
                className: "mt-6 w-full sm:w-auto",
              })}
            >
              {siteConfig.process.primaryCtaLabel}
            </Link>
          </div>
          <ol>
            {siteConfig.process.steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-5 border-b border-[var(--color-border-subtle)] py-6 first:pt-0 last:border-0 last:pb-0"
              >
                <span className="pt-1 font-heading text-2xl text-[var(--color-accent-warm)]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
