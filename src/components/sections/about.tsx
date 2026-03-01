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
    <section id="sobre-mi" className="bg-(--color-band-about) py-14 sm:py-18 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* LEFT (media + profile card) */}
          <div className="order-1">
            <div className="overflow-hidden rounded-2xl border border-(--color-border-subtle) bg-white shadow-[0_12px_30px_rgba(17,24,39,0.08)]">
              {/* Mobile-first aspect ratio instead of fixed heights */}
              <div className="relative aspect-[4/5] sm:aspect-[16/17] lg:aspect-[4/5]">
                <Image
                  src={brandImages.readingPhoto}
                  alt="Psicóloga en consulta con una presencia profesional y cercana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>

            {/* Profile card */}
            <div className="mt-4 rounded-2xl border border-(--color-border-subtle) bg-white p-5 shadow-[0_10px_24px_rgba(17,24,39,0.05)]">
              <p className="text-base font-semibold text-foreground sm:text-lg">
                {siteConfig.about.profile.fullName}
              </p>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="text-sm text-(--color-text-secondary)">{siteConfig.about.profile.role}</p>
                <span className="hidden h-1 w-1 rounded-full bg-(--color-border-subtle) sm:inline-block" />
                <p className="text-xs text-(--color-text-muted)">{siteConfig.about.profile.registration}</p>
              </div>
            </div>

            {/* Key facts: compact grid on mobile */}
            <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-(--color-border-subtle) bg-white p-4 shadow-[0_10px_24px_rgba(17,24,39,0.04)]"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-(--color-text-muted)">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-snug text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT (content) */}
          <div className="order-2 flex flex-col justify-center">
            <SectionHeading
              eyebrow={siteConfig.about.eyebrow}
              title={siteConfig.about.title}
              description={siteConfig.about.intro}
              align="left"
              eyebrowTone="warm"
            />

            <p className="mt-5 text-base leading-relaxed text-(--color-text-secondary) sm:mt-6 sm:text-lg">
              {siteConfig.about.philosophyBody}
            </p>

            {/* Highlights */}
            <ul className="mt-7 space-y-4 sm:mt-8">
              {siteConfig.about.highlights.map((highlight) => (
                <li
                  key={highlight.title}
                  className="rounded-2xl border border-(--color-border-subtle) bg-white p-5 shadow-[0_10px_24px_rgba(17,24,39,0.04)]"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-(--color-accent-warm)" />
                    <div>
                      <p className="text-sm font-semibold text-foreground sm:text-base">
                        {highlight.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-(--color-text-secondary)">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Optional CTA slot (si tienes uno en config) */}
            {/* <div className="mt-8">
              <Button ...>Agendar una cita</Button>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
}