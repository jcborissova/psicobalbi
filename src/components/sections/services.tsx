import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const featuredServices = siteConfig.services.items.filter((service) => service.featuredOnHome);
const servicesToDisplay = (featuredServices.length > 0 ? featuredServices : siteConfig.services.items).slice(
  0,
  4,
);

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-[var(--color-band-services)] py-14 sm:py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={siteConfig.services.eyebrow}
          title={siteConfig.services.title}
          description={siteConfig.services.description}
          align="center"
          eyebrowTone="cool"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:gap-5">
          {servicesToDisplay.map((service, idx) => (
            <Card
              key={service.title}
              className="group flex h-full flex-col overflow-hidden border border-[var(--color-border-subtle)] bg-white transition-all duration-300 hover:border-[var(--color-primary-light)]"
            >
              <CardContent className="flex h-full flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-soft)] text-sm font-semibold text-[var(--color-text-secondary)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {service.tag ? (
                    <span className="inline-flex rounded-full border border-[var(--color-border-subtle)] bg-white px-2.5 py-1 text-[11px] text-[var(--color-text-muted)]">
                      {service.tag}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-5 font-heading text-[1.45rem] leading-tight text-[var(--color-text)] sm:text-[1.6rem]">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-7 text-[var(--color-text-secondary)]">
                  {service.description}
                </p>

                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    variant: "outline",
                    size: "md",
                    className: "mt-5 w-full justify-center",
                  })}
                >
                  {siteConfig.hero.primaryCtaLabel}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
