import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
export function CtaBannerSection() {
  const href = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    siteConfig.whatsappMessage,
  );
  return (
    <section
      id="agendar"
      className="section-space bg-[var(--color-primary)] text-white"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d9c4aa]">
              Cuando estés listo/a
            </p>
            <h2 className="mt-5 max-w-[20ch] font-heading text-[2.1rem] font-medium leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl">
              Empezar también es una forma de cuidarte.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-white/85">
              {siteConfig.ctaBanner.title}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <BookingButton
                label={siteConfig.ctaBanner.primaryCtaLabel}
                size="lg"
                variant="inverse"
                className="w-full sm:w-auto"
              />
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link justify-center underline"
                >
                  {siteConfig.ctaBanner.secondaryCtaLabel} ↗
                </a>
              )}
            </div>
          </div>
          <div className="border-t border-white/25 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1">
            <p className="font-heading text-2xl">
              Estoy aquí para acompañarte.
            </p>
            <p className="mt-4 text-sm text-white/85">Puedes escribirme si:</p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              {siteConfig.ctaBanner.contactReasons?.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <span aria-hidden="true">—</span>
                  {reason}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/85">
              {siteConfig.ctaBanner.connectionBody}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
