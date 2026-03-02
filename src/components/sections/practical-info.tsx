"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const cardClassName =
  "rounded-2xl border border-[var(--color-border-subtle)] bg-white p-5 shadow-[0_4px_12px_rgba(74,78,99,0.06)] sm:p-6";

export function PracticalInfoSection() {
  return (
    <section id="informacion-practica" className="bg-[var(--color-band-practical)] py-14 sm:py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={siteConfig.practicalInfo.eyebrow}
          title={siteConfig.practicalInfo.title}
          description={siteConfig.practicalInfo.description}
          eyebrowTone="primary"
          className="mx-auto max-w-3xl text-center"
          align="center"
        />

        <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({ variant: "primary", size: "lg", className: "w-full sm:w-auto" })}
          >
            {siteConfig.pricing.ctaLabel}
          </a>

          <Link
            href="/entrevista-inicial"
            className={buttonStyles({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}
          >
            {siteConfig.process.primaryCtaLabel}
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
          <article className={cardClassName}>
            <header className="mb-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                {siteConfig.schedule.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight text-[var(--color-text)]">
                {siteConfig.schedule.title}
              </h3>
            </header>

            <div className="space-y-3">
              {siteConfig.schedule.days.map((day) => (
                <div
                  key={day.day}
                  className="border-b border-[color-mix(in_oklab,var(--color-border-subtle),white_40%)] pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium text-[var(--color-text)]">{day.day}</p>
                    <p className="whitespace-nowrap text-sm text-[var(--color-text-secondary)]">{day.hours}</p>
                  </div>
                  {day.note ? (
                    <p className="mt-0.5 text-xs leading-relaxed text-[var(--color-text-muted)]">{day.note}</p>
                  ) : null}
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[var(--color-text-muted)]">{siteConfig.schedule.note}</p>
          </article>

          <article className={cardClassName}>
            <header className="mb-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                {siteConfig.pricing.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight text-[var(--color-text)]">
                {siteConfig.pricing.title}
              </h3>
            </header>

            <div className="space-y-3">
              {siteConfig.pricing.items.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-[color-mix(in_oklab,var(--color-border-subtle),white_40%)] pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text)]">{item.title}</p>
                      {item.badge ? (
                        <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{item.badge}</p>
                      ) : null}
                    </div>
                    <p className="whitespace-nowrap text-sm font-semibold text-[var(--color-accent-warm)]">{item.price}</p>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-soft-warm)] p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                {siteConfig.lowCostProgram.eyebrow}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-text)]">
                {siteConfig.lowCostProgram.description}
              </p>
              <Link
                href="/entrevista-inicial"
                className={buttonStyles({ variant: "secondary", size: "sm", className: "mt-3 w-full" })}
              >
                {siteConfig.lowCostProgram.ctaLabel}
              </Link>
            </div>
          </article>

          <article className={cardClassName}>
            <header className="mb-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                {siteConfig.locations.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight text-[var(--color-text)]">
                {siteConfig.locations.title}
              </h3>
            </header>

            <div className="space-y-3">
              {siteConfig.locations.items.map((location) => (
                <div
                  key={`${location.name}-${location.address}`}
                  className="border-b border-[color-mix(in_oklab,var(--color-border-subtle),white_40%)] pb-3 last:border-b-0 last:pb-0"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                    {location.city} · {location.sector}
                  </p>
                  <h4 className="mt-1 text-sm font-semibold text-[var(--color-text)]">{location.name}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">{location.address}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{location.consultationMode}</p>

                  <div className="mt-2.5 grid gap-2">
                    <a
                      href={`tel:${location.contactPhone.replace(/\s+/g, "")}`}
                      className="text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                    >
                      {location.contactPhone}
                    </a>

                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyles({ variant: "outline", size: "sm", className: "w-full" })}
                    >
                      Abrir en mapa
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
