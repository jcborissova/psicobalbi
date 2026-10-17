import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { brandImages } from "@/img";

export function AboutSection() {
  const about = siteConfig.about;
  return (
    <section
      id="sobre-mi"
      className="section-space bg-[var(--color-band-about)]"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Sobre mí"
              title="Una mirada cercana. Un espacio sin juicios."
            />
            <div className="mt-7 flex items-center gap-4">
              <div className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={brandImages.readingPhoto}
                  alt={about.profile.fullName}
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <p className="max-w-[22ch] text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Acompañamiento humano y profesional, a tu ritmo.
              </p>
            </div>
            <dl className="mt-7 grid grid-cols-2 gap-3">
              {[
                ["Población", about.profile.audience],
                ["Modalidad", about.profile.modalities],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/70 p-4">
                  <dt className="text-xs text-[var(--color-text-muted)]">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            <p className="text-base leading-relaxed text-[var(--color-text)]">
              {about.intro}
            </p>
            <p className="mt-5">{about.philosophyBody}</p>
            <details className="group mt-6 border-y border-[var(--color-border-subtle)] py-1">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[var(--color-primary)] [&::-webkit-details-marker]:hidden">
                Mi enfoque y formación{" "}
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="space-y-5 pb-6 pt-2">
                {about.biography?.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                {about.highlights.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold text-[var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </details>
            <a href="#servicios" className="text-link mt-5 underline">
              Encuentra tu espacio de atención <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
