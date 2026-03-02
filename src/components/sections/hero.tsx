import Image from "next/image";

import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { brandImages } from "@/img";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-[var(--color-band-hero)] py-14 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <div className="inline-block w-fit">
              <p className="rounded-full border border-[var(--color-border-subtle)] bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                {siteConfig.hero.eyebrow}
              </p>
            </div>

            <h1 className="mt-5 max-w-[16ch] font-heading text-[2.2rem] leading-[1.08] tracking-[-0.02em] text-[var(--color-text)] sm:text-[2.9rem] lg:text-[3.35rem]">
              {siteConfig.hero.title}
            </h1>

            <p className="mt-5 max-w-[65ch] text-[15px] leading-7 text-[var(--color-text-secondary)] sm:text-base">
              {siteConfig.hero.description}
            </p>

            <ul className="mt-6 grid gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
              {siteConfig.hero.trustMicrocopy.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border-subtle)] bg-white px-3 py-1.5 text-xs text-[var(--color-text-secondary)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-warm)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-3 sm:flex sm:items-center sm:gap-4">
              <BookingButton
                label={siteConfig.hero.primaryCtaLabel}
                size="lg"
                className="w-full justify-center sm:w-auto"
              />

              <a
                href="#proceso"
                className={buttonStyles({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}
              >
                {siteConfig.hero.secondaryCtaLabel}
              </a>
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-soft-cool)] shadow-[0_6px_16px_rgba(74,78,99,0.08)] sm:aspect-[16/12] lg:aspect-[4/5]">
              <Image
                src={brandImages.heroPhoto}
                alt="Psicóloga en una pose cercana y profesional, sentada en estudio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />

              <div className="absolute bottom-3 left-3 rounded-lg border border-white/45 bg-white/92 px-2.5 py-1.5">
                <p className="text-[11px] text-[var(--color-text)]">Atención presencial y virtual</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
