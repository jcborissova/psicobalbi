import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
export function Footer() {
  return (
    <footer className="bg-[var(--color-band-about)] pb-24 pt-12 sm:pb-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-heading text-3xl tracking-tight">
              {siteConfig.brandName}
            </p>
            <p className="mt-4 max-w-sm whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest">
              Explora
            </h2>
            <nav className="mt-3" aria-label="Navegación del pie">
              {siteConfig.nav
                .filter((item) => item.label !== "Inicio")
                .map((item) => (
                  <Link
                    className="flex min-h-11 items-center text-sm text-[var(--color-text-secondary)] hover:underline"
                    key={item.href}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest">
              Hablemos
            </h2>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="text-link mt-3"
            >
              {siteConfig.phone}
            </a>
            <br />
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-link break-all"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--color-border-subtle)] pt-6 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.footer.copyright}</p>
          <div className="flex flex-wrap gap-5">
            {siteConfig.footer.legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center underline underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-[var(--color-text-muted)]">
          La información de este sitio no reemplaza una consulta profesional
          individual.
        </p>
      </Container>
    </footer>
  );
}
