import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function LocationsSection() {
  return (
    <section id="consultorios" className="bg-[var(--color-band-locations)] py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={siteConfig.locations.eyebrow}
          title={siteConfig.locations.title}
          description={siteConfig.locations.description}
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2">
          {siteConfig.locations.items.map((location) => (
            <Card key={`${location.name}-${location.address}`} className="border border-[var(--color-border)] bg-white">
              <CardContent className="flex h-full flex-col gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand)]">
                    {location.city} · {location.sector}
                  </p>
                  <h3 className="mt-2 font-heading text-lg text-[var(--color-text)]">
                    {location.name}
                  </h3>
                </div>

                <div className="space-y-2 text-sm text-[var(--color-text)]">
                  <p>{location.address}</p>
                  <p>
                    <span className="font-semibold text-[var(--color-brand)]">Modalidad:</span>{" "}
                    {location.consultationMode}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-brand)]">Teléfono:</span>{" "}
                    <a
                      href={`tel:${location.contactPhone.replace(/\s+/g, "")}`}
                      className="text-[var(--color-brand)] hover:underline"
                    >
                      {location.contactPhone}
                    </a>
                  </p>
                </div>

                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    variant: "outline",
                    size: "md",
                    className: "mt-auto w-full justify-center",
                  })}
                >
                  Abrir en mapa
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
