import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { brandImages } from "@/img";

const keyFacts = [
  { label: "Población", value: siteConfig.about.profile.audience },
  { label: "Modalidad", value: siteConfig.about.profile.modalities },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-[var(--color-band-about)] py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow={siteConfig.about.eyebrow} title={siteConfig.about.title} align="left" eyebrowTone="warm" />
          <div className="mt-6 flex items-start gap-4 sm:gap-6">
            <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-2xl sm:w-24">
              <Image src={brandImages.readingPhoto} alt={siteConfig.about.profile.fullName} fill sizes="(max-width: 640px) 80px, 96px" className="object-cover object-top" />
            </div>
            <p className="max-w-[65ch] text-[15px] leading-relaxed text-[var(--color-text-secondary)] sm:text-base">{siteConfig.about.intro}</p>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-3">
            {keyFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl bg-white p-4">
                <dt className="text-xs font-medium text-[var(--color-text-secondary)]">{fact.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-[var(--color-text)]">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">{siteConfig.about.philosophyTitle}</h3>
              <p>{siteConfig.about.philosophyBody}</p>
              {siteConfig.about.biography?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="space-y-5">
              {siteConfig.about.highlights.map((highlight) => (
                <div key={highlight.title} className="border-l-2 border-[var(--color-accent-warm)] pl-4">
                  <h3 className="text-base font-semibold text-[var(--color-text)]">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
