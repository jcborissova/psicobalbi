import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[var(--color-band-hero)] py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-[var(--color-accent-warm)]">
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-[25ch] text-balance font-heading text-[2rem] leading-[1.15] tracking-[-0.02em] text-[var(--color-text)] sm:text-[2.8rem] lg:text-[3.5rem]">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            {siteConfig.hero.supportLine}
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <BookingButton label={siteConfig.hero.primaryCtaLabel} size="lg" className="w-full justify-center sm:w-auto" />
            <a href="#proceso" className={buttonStyles({ variant: "ghost", size: "lg", className: "w-full underline underline-offset-4 sm:w-auto" })}>
              {siteConfig.hero.secondaryCtaLabel}
            </a>
          </div>
          <p className="mt-7 max-w-[65ch] border-t border-[var(--color-border-subtle)] pt-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {siteConfig.hero.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
