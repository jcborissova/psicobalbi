import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

export function PracticalInfoSection() {
  const panels = [
    {
      title: "Horarios de atención",
      summary: "Disponibilidad y agenda previa",
      content: (
        <>
          <dl className="space-y-3">
            {siteConfig.schedule.days.map((day) => (
              <div key={day.day} className="flex justify-between gap-4">
                <dt>
                  {day.day}
                  {day.note && <p className="mt-1 text-xs">{day.note}</p>}
                </dt>
                <dd className="shrink-0">{day.hours}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm">{siteConfig.schedule.note}</p>
        </>
      ),
    },
    {
      title: "Honorarios y programa accesible",
      summary: "Precios por servicio",
      content: (
        <>
          <dl className="space-y-3">
            {siteConfig.pricing.items.map((item) => (
              <div key={item.title} className="flex justify-between gap-4">
                <dt>{item.title}</dt>
                <dd className="shrink-0 font-semibold">{item.price}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5">{siteConfig.lowCostProgram.description}</p>
          <a href="/entrevista-inicial" className="text-link mt-3 underline">
            {siteConfig.lowCostProgram.ctaLabel} ↗
          </a>
        </>
      ),
    },
    {
      title: "Ubicaciones y modalidad virtual",
      summary: "Cómo coordinar tu consulta",
      content: (
        <div className="space-y-6">
          {siteConfig.locations.items.map((location) => (
            <div key={location.name}>
              <h3 className="font-semibold text-[var(--color-text)]">
                {location.name}
              </h3>
              <p className="mt-1">{location.address}</p>
              <p>{location.consultationMode}</p>
              <a
                className="text-link underline"
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {location.name === "Atención virtual"
                  ? "Coordinar consulta"
                  : "Ver ubicación"}{" "}
                ↗
              </a>
            </div>
          ))}
        </div>
      ),
    },
  ];
  return (
    <section
      id="informacion-practica"
      className="section-space bg-[var(--color-band-practical)]"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Información práctica"
            title="Antes de tu primera consulta."
            description="Horarios, honorarios y modalidades de atención, en un solo lugar."
          />
          <div>
            {panels.map((panel, index) => (
              <details
                key={panel.title}
                open={index === 0}
                className="group border-b border-[var(--color-border-subtle)] first:border-t"
              >
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
                  <div>
                    <h3 className="text-base font-semibold">{panel.title}</h3>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                      {panel.summary}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-2xl font-light transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {panel.content}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
