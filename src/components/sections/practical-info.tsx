"use client";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function PracticalInfoSection() {
  return (
    <section id="informacion-practica" className="bg-[var(--color-band-practical)] py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--color-accent-cool)] rounded-full blur-3xl opacity-[0.03]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={siteConfig.practicalInfo.eyebrow}
          title={siteConfig.practicalInfo.title}
          description={siteConfig.practicalInfo.description}
          eyebrowTone="primary"
          className="relative z-10 max-w-2xl"
        />

        {/* Three-Column Grid: Horarios, Valores, Consultorios */}
        <div className="relative z-10 mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Schedule */}
          <div className="group rounded-2xl bg-white border border-[var(--color-border-subtle)] p-8 sm:p-10 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(74,78,99,0.1)] hover:border-[var(--color-primary)]">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                {siteConfig.schedule.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {siteConfig.schedule.title}
              </h3>
            </div>

            <div className="space-y-4">
              {siteConfig.schedule.days.map((day) => (
                <div key={day.day} className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--color-border-subtle)] last:border-b-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)]">{day.day}</p>
                    {day.note ? (
                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">{day.note}</p>
                    ) : null}
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)] whitespace-nowrap text-right">{day.hours}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)]">
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{siteConfig.schedule.note}</p>
            </div>
          </div>

          {/* Column 2: Pricing */}
          <div className="group rounded-2xl bg-white border border-[var(--color-border-subtle)] p-8 sm:p-10 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(74,78,99,0.1)] hover:border-[var(--color-primary)]">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                {siteConfig.pricing.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {siteConfig.pricing.title}
              </h3>
            </div>

            <div className="space-y-6">
              {siteConfig.pricing.items.map((item) => (
                <div key={item.title} className="pb-6 border-b border-[var(--color-border-subtle)] last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[var(--color-text)]">{item.title}</p>
                      {item.badge ? (
                        <p className="mt-1 text-xs font-medium text-[var(--color-text-muted)]">
                          {item.badge}
                        </p>
                      ) : null}
                    </div>
                    <p className="text-sm font-semibold text-[var(--color-accent-warm)] whitespace-nowrap">{item.price}</p>
                  </div>
                  <p className="mt-2 text-xs text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)]">
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4">{siteConfig.pricing.note}</p>
              
              {/* Low Cost Program Card */}
              <div className="rounded-lg bg-[var(--color-soft-warm)] p-4 border border-[var(--color-border-subtle)] hover:bg-white transition-colors duration-300">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  {siteConfig.lowCostProgram.eyebrow}
                </p>
                <p className="mt-2 text-xs text-[var(--color-text)] leading-relaxed">{siteConfig.lowCostProgram.description}</p>
                <p className="mt-2 text-xs text-[var(--color-text-muted)]">{siteConfig.lowCostProgram.criteriaNote}</p>
                <a href="/entrevista-inicial" className={buttonStyles({ variant: "secondary", size: "sm", className: "mt-3 w-full" })}>
                  {siteConfig.lowCostProgram.ctaLabel}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Locations */}
          <div className="group rounded-2xl bg-white border border-[var(--color-border-subtle)] p-8 sm:p-10 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(74,78,99,0.1)] hover:border-[var(--color-primary)]">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                {siteConfig.locations.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {siteConfig.locations.title}
              </h3>
            </div>

            <div className="space-y-6">
              {siteConfig.locations.items.map((location) => (
                <div key={`${location.name}-${location.address}`} className="pb-6 border-b border-[var(--color-border-subtle)] last:border-b-0 last:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                    {location.city} · {location.sector}
                  </p>
                  <h4 className="mt-2 text-sm font-semibold text-[var(--color-text)]">{location.name}</h4>

                  <div className="mt-3 space-y-2">
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">{location.address}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">{location.consultationMode}</p>
                    </div>
                    <div>
                      <a
                        href={`tel:${location.contactPhone.replace(/\s+/g, "")}`}
                        className="text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors duration-200"
                      >
                        {location.contactPhone}
                      </a>
                    </div>
                  </div>

                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({ variant: "outline", size: "sm", className: "w-full mt-4" })}
                  >
                    Abrir en mapa
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
