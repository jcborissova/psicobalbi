import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="overflow-hidden bg-[var(--color-band-hero)] pb-10 pt-10 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="grid items-center gap-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div>
            <p className="editorial-label">Psicología · Presencial y virtual</p>
            <h1 className="mt-5 max-w-[13ch] font-heading text-[clamp(2.5rem,9vw,3.3rem)] font-medium leading-[1.12] tracking-[-.045em] text-[var(--color-text)] lg:text-[4.3rem]">
              No tienes que poder{" "}
              <span className="italic text-[var(--color-accent-warm)]">
                con todo.
              </span>
            </h1>
            <p className="mt-5 max-w-[45ch] text-base leading-relaxed text-[var(--color-text-secondary)]">
              {siteConfig.hero.supportLine}
            </p>
            <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
              <BookingButton
                label={siteConfig.hero.primaryCtaLabel}
                size="lg"
                className="w-full sm:w-auto"
              />
              <a href="#proceso" className="text-link justify-center">
                Conocer el proceso <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="mt-4 text-xs text-[var(--color-text-muted)]">
              Un primer paso, a tu ritmo.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[28px] bg-[#e6ecdf] px-6 py-7 sm:px-8 lg:rounded-t-[160px] lg:pb-10 lg:pt-16">
            <svg
              viewBox="0 0 360 240"
              aria-hidden="true"
              className="mx-auto hidden w-full max-w-sm lg:block"
            >
              <circle cx="265" cy="64" r="39" fill="#d9b398" />
              <path
                d="M20 195C-5 40 195 5 162 135S45 175 108 97s175 103 220-30"
                fill="none"
                stroke="#7e9680"
                strokeWidth="2"
              />
              <path
                d="M28 211c74-7 63-76 143-72s63 40 161 28"
                fill="none"
                stroke="#294b42"
                strokeWidth="2"
              />
              <path d="M240 238v-53c0-35 48-35 48 0v53" fill="#b5c5ad" />
              <path d="M209 238v-32c0-21 30-21 30 0v32" fill="#cbd6c2" />
            </svg>
            <p className="editorial-label !text-[var(--color-primary)]">
              Un espacio para ti
            </p>
            <p className="mt-3 max-w-[24ch] font-heading text-[1.5rem] leading-snug tracking-tight lg:text-[1.9rem]">
              No necesitas tener todo resuelto para empezar.
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs text-[var(--color-text-secondary)]">
              <span className="h-px w-8 bg-[var(--color-primary)]" />{" "}
              Entenderte, sin culpa ni juicios.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
