import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function ScheduleSection() {
  return (
    <section id="horarios" className="bg-gradient-to-b from-[var(--color-band-schedule)] via-white to-[var(--color-band-schedule)] py-16 sm:py-20 lg:py-28 relative">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow={siteConfig.schedule.eyebrow}
              title={siteConfig.schedule.title}
              description={siteConfig.schedule.description}
              align="left"
            />
            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {siteConfig.schedule.note}
            </p>
          </div>

          <Card className="border-0 shadow-[0_16px_40px_rgba(139,109,94,0.1)]">
            <CardContent className="p-0">
              <ul className="divide-y divide-[var(--color-border-subtle)]">
                {siteConfig.schedule.days.map((day) => (
                  <li key={day.day} className="flex justify-between items-center p-6 hover:bg-[color-mix(in_oklab,var(--color-accent-warm),white_97%)] transition-colors duration-200">
                    <div>
                      <p className="font-semibold text-[var(--color-text)]">{day.day}</p>
                      {day.note ? (
                        <p className="mt-1.5 text-xs text-[var(--color-text-muted)]">{day.note}</p>
                      ) : null}
                    </div>
                    <p className="text-base font-bold text-[var(--color-accent-warm)]">
                      {day.hours}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
