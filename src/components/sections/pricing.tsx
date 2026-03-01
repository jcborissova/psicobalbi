import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function PricingSection() {
  return (
    <section id="valores" className="bg-[var(--color-band-pricing)] py-16 sm:py-20 lg:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[var(--color-accent-warm)] rounded-full blur-3xl opacity-5" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={siteConfig.pricing.eyebrow}
          title={siteConfig.pricing.title}
          description={siteConfig.pricing.description}
          align="center"
          className="relative z-10 mx-auto max-w-3xl"
        />

        <div className="relative z-10 mt-14 grid gap-8 sm:mt-16 lg:grid-cols-3">
          {siteConfig.pricing.items.map((item) => (
            <Card key={item.title} className="group border-0 hover:shadow-[0_20px_48px_rgba(74,78,99,0.15)] transition-all duration-300 flex flex-col">
              <CardContent className="flex h-full flex-col gap-5 p-8">
                {item.badge ? (
                  <div className="inline-flex w-fit">
                    <span className="text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[var(--color-accent-warm)] to-[var(--color-accent-cool)] px-3 py-1.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                ) : null}

                <h3 className="font-heading text-2xl leading-tight text-[var(--color-text)]">
                  {item.title}
                </h3>

                <div className="border-b border-[var(--color-border-subtle)] pb-5">
                  <p className="text-4xl font-light text-[var(--color-accent-warm)]">
                    {item.price}
                  </p>
                </div>

                <p className="flex-1 text-base text-[var(--color-text-secondary)]">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative z-10 mt-12 border-t border-[var(--color-border-subtle)] pt-8 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p className="max-w-2xl text-base text-[var(--color-text)]">{siteConfig.pricing.note}</p>
          <div className="mt-4 sm:mt-0 sm:shrink-0">
            <BookingButton label={siteConfig.pricing.ctaLabel} size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
