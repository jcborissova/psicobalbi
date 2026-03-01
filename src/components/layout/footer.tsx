import Link from "next/link";

import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage);

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16">
          <div className="space-y-5">
            <div>
              <p className="font-heading text-3xl leading-tight text-[var(--color-text)]">
                {siteConfig.brandName}
              </p>
              <p className="mt-2 text-sm tracking-wide text-[var(--color-primary-light)]">
                Psicología clínica · Enfoque profesional
              </p>
            </div>

            <p className="max-w-sm text-base leading-relaxed text-[var(--color-text-secondary)]">
              {siteConfig.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <BookingButton size="md" />
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-[var(--color-border-subtle)] bg-white px-4 text-sm font-medium text-[var(--color-text)] transition-all hover:bg-[var(--color-soft-cool)] hover:border-[var(--color-accent-warm)]"
                >
                  WhatsApp
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
              {siteConfig.footer.quickLinksTitle}
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-text-secondary)]">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-[var(--color-primary)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
              {siteConfig.footer.contactTitle}
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  {siteConfig.email}
                </a>
              </li>
              {whatsappUrl ? (
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--color-primary)]"
                  >
                    WhatsApp
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                {siteConfig.footer.hoursTitle}
              </h3>
              <ul className="mt-6 space-y-2 text-sm text-[var(--color-text-secondary)]">
                {siteConfig.schedule.days.slice(0, 5).map((day) => (
                  <li key={day.day} className="flex justify-between gap-3">
                    <span>{day.day}</span>
                    <span className="font-medium text-[var(--color-brand)]">{day.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                {siteConfig.footer.legalLinksTitle}
              </h3>
              <ul className="mt-6 space-y-2 text-sm text-[var(--color-text-secondary)]">
                {siteConfig.footer.legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-[var(--color-primary)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border-subtle)] pt-8 text-sm text-[var(--color-text-muted)] space-y-2">
          <p>{siteConfig.footer.copyright}</p>
          <p>
            La información publicada en este sitio es orientativa y no reemplaza una consulta profesional individual.
          </p>
        </div>
      </Container>
    </footer>
  );
}
