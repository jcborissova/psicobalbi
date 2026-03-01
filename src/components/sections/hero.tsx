import Image from "next/image";

import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { brandImages } from "@/img";

export function HeroSection() {
  return (
    <section id="inicio" className="bg-[var(--color-band-hero)] py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-soft-cool)] rounded-full blur-3xl opacity-20 -z-10" />
      
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="inline-block w-fit mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-accent),white_90%)] px-3.5 py-1.5 rounded-full">
                {siteConfig.hero.eyebrow}
              </p>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-[var(--color-text)]">
              {siteConfig.hero.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
              {siteConfig.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <BookingButton label={siteConfig.hero.primaryCtaLabel} size="lg" />

              <a href="#proceso" className={buttonStyles({ variant: "outline", size: "lg" })}>
                {siteConfig.hero.secondaryCtaLabel}
              </a>
            </div>

            <ul className="mt-10 space-y-3">
              {siteConfig.hero.trustMicrocopy.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="relative h-80 overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-soft-cool)] sm:h-96 lg:h-[500px] shadow-[0_8px_32px_rgba(74,78,99,0.08)]">
              <Image
                src={brandImages.heroPhoto}
                alt="Psicóloga en una pose cercana y profesional, sentada en estudio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
