import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CtaBannerSection() {
  const whatsappHref = buildWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage);

  return (
    <section id="agendar" className="bg-[var(--color-band-cta)] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] px-8 py-12 text-center sm:px-10 sm:py-14 lg:px-12 shadow-[0_16px_48px_rgba(74,78,99,0.2)]">
          <h2 className="mx-auto max-w-[24ch] font-heading text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            {siteConfig.ctaBanner.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 font-light">
            {siteConfig.ctaBanner.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <BookingButton label={siteConfig.ctaBanner.primaryCtaLabel} size="lg" />
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-white/55 text-white hover:border-white hover:bg-white/10 active:bg-white/15",
                })}
              >
                {siteConfig.ctaBanner.secondaryCtaLabel}
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
