import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="section-space bg-[var(--color-band-services)]"
    >
      <Container>
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="Cómo puedo acompañarte"
            title="Cada momento necesita su propio espacio."
          />
          <p className="max-w-[55ch] text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {siteConfig.services.description}
          </p>
        </div>
        <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {siteConfig.services.items.map((service, index) => (
            <article
              key={service.title}
              className="flex flex-col border-t border-[var(--color-border-subtle)] py-6 sm:py-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-[var(--color-accent-warm)]">
                  0{index + 1}
                </span>
                <span className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-sm font-semibold">
                  {service.price}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-[1.45rem] leading-snug tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {service.description}
              </p>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Agendar: ${service.title}`}
                className="text-link mt-3 self-start underline"
              >
                Agendar <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
