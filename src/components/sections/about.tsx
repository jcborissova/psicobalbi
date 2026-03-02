import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { brandImages } from "@/img";

const keyFacts = [
  { label: "Experiencia", value: siteConfig.about.profile.experience },
  { label: "Población", value: siteConfig.about.profile.audience },
  { label: "Modalidad", value: siteConfig.about.profile.modalities },
] as const;

export function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-[var(--color-band-about)] py-14 sm:py-16 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
          <div className="order-1">
            <SectionHeading
              eyebrow={siteConfig.about.eyebrow}
              title={siteConfig.about.title}
              description={siteConfig.about.intro}
              align="left"
              eyebrowTone="warm"
            />

            <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-[var(--color-text-secondary)] sm:mt-6 sm:text-lg">
              {siteConfig.about.philosophyBody}
            </p>

            <div className="mt-6 rounded-2xl border border-[var(--color-border-subtle)] bg-white p-5">
              <p className="text-base font-semibold text-[var(--color-text)] sm:text-lg">
                {siteConfig.about.profile.fullName}
              </p>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="text-sm text-[var(--color-text-secondary)]">{siteConfig.about.profile.role}</p>
                <span className="hidden h-1 w-1 rounded-full bg-[var(--color-border-subtle)] sm:inline-block" />
                <p className="text-xs text-[var(--color-text-muted)]">{siteConfig.about.profile.registration}</p>
              </div>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[var(--color-border-subtle)] bg-white p-4"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-snug text-[var(--color-text)]">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-6 space-y-3 sm:mt-7">
              {siteConfig.about.highlights.map((highlight) => (
                <li
                  key={highlight.title}
                  className="rounded-2xl border border-[var(--color-border-subtle)] bg-white p-4"
                >
                  <p className="text-sm font-semibold text-[var(--color-text)] sm:text-base">
                    {highlight.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {highlight.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-2">
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-white shadow-[0_4px_12px_rgba(17,24,39,0.06)]">
              <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  src={brandImages.readingPhoto}
                  alt="Psicóloga en consulta con una presencia profesional y cercana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
