import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CtaBannerSection() {
  const whatsappHref = buildWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage);

  return (
    <section id="agendar" className="bg-[var(--color-band-cta)] py-14 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-heading text-2xl leading-tight text-white sm:text-3xl">{siteConfig.ctaBanner.connectionTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/90">{siteConfig.ctaBanner.connectionBody}</p>
        </div>
        <div className="rounded-2xl border border-white/25 bg-[var(--color-primary)] px-5 py-10 text-center shadow-[0_8px_18px_rgba(20,26,43,0.25)] sm:px-9 sm:py-12">
          <h2 className="mx-auto max-w-[22ch] font-heading text-[2rem] leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.55rem]">
            {siteConfig.ctaBanner.title}
          </h2>

          <div className="mx-auto mt-6 max-w-md text-left text-sm leading-relaxed text-white">
            <p className="font-semibold">Puedes escribirme si:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              {siteConfig.ctaBanner.contactReasons?.map((reason) => <li key={reason}>{reason}</li>)}
            </ul>
          </div>
          <p className="mx-auto mt-5 max-w-[65ch] text-[15px] leading-7 text-white/90 sm:text-base">
            {siteConfig.ctaBanner.description}
          </p>

          <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <BookingButton
              label={siteConfig.ctaBanner.primaryCtaLabel}
              size="lg"
              variant="secondary"
              className="w-full justify-center sm:w-auto"
            />
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({
                  variant: "outline",
                  size: "lg",
                  className: "w-full border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10 sm:w-auto",
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
