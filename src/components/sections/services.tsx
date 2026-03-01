import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const featuredServices = siteConfig.services.items.filter((service) => service.featuredOnHome);
const servicesToDisplay = (featuredServices.length > 0 ? featuredServices : siteConfig.services.items).slice(
  0,
  3,
);

export function ServicesSection() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-[var(--color-band-services)] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-36 -left-36 h-72 w-72 rounded-full bg-[var(--color-accent-cool)] blur-3xl opacity-[0.06]" />
        <div className="absolute -right-32 -bottom-36 h-72 w-72 rounded-full bg-[var(--color-primary)] blur-3xl opacity-[0.04]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={siteConfig.services.eyebrow}
          title={siteConfig.services.title}
          description={siteConfig.services.description}
          align="center"
          eyebrowTone="cool"
          className="relative z-10 mx-auto max-w-3xl"
        />

        <p className="relative z-10 mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[var(--color-text-muted)]">
          Modalidad presencial y virtual, con agenda coordinada y objetivos terapéuticos claros desde el inicio.
        </p>

        <div className="relative z-10 mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {servicesToDisplay.map((service, idx) => (
            <Card
              key={service.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-white/96 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-cool)] hover:shadow-[0_18px_40px_rgba(74,78,99,0.12)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-accent-cool)] to-[var(--color-primary-light)]" />

              <CardContent className="relative flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color-mix(in_oklab,var(--color-accent-cool),white_88%)] text-sm font-bold text-[var(--color-accent-cool)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {service.tag ? (
                    <span className="inline-flex rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                      {service.tag}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-6 font-heading text-2xl leading-tight text-[var(--color-text)] sm:text-[1.85rem]">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-[var(--color-border-subtle)] pt-4">
                  <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-cool)]" />
                    Abordaje personalizado
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
