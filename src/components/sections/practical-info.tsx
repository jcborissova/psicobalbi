import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { Disclosure } from "@/components/ui/disclosure";

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
              <h4 className="font-semibold text-[var(--color-text)]">
                {location.name}
              </h4>
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
      className="home-section practical-welcome"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="home-eyebrow">Información práctica</p>
            <h2 className="home-title">
              Lo que quieras saber,
              <br />
              <em>con claridad.</em>
            </h2>
            <p className="home-description">
              Horarios, modalidades y honorarios. Puedes consultar los detalles
              aquí, sin compromiso.
            </p>
          </div>
          <div className="space-y-3">
            {panels.map((panel, index) => (
              <Disclosure
                key={panel.title}
                title={panel.title}
                description={panel.summary}
                defaultOpen={index === 0}
              >
                {panel.content}
              </Disclosure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
