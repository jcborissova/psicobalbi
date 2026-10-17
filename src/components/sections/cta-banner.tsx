import { Container } from "@/components/layout/container";
import { BookingButton } from "@/components/booking-button";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
export function CtaBannerSection() {
  const href = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    siteConfig.whatsappMessage,
  );
  return (
    <section id="agendar" className="bg-[#213e35] py-12 text-white sm:py-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#d6e1ce]">
          Tú eliges cómo empezar
        </p>
        <h2 className="mt-3 max-w-[25ch] text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-4xl">
          Un siguiente paso que se sienta bien para ti.
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/30 p-5 sm:p-6">
            <h3 className="text-xl font-semibold">Quiero agendar</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Consulta los horarios de la agenda y elige un espacio disponible.
            </p>
            <BookingButton
              label="Abrir agenda"
              variant="inverse"
              size="lg"
              className="mt-5 w-full sm:w-auto"
            />
          </div>
          <div className="rounded-2xl border border-white/30 p-5 sm:p-6">
            <h3 className="text-xl font-semibold">Primero quiero conversar</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Si tienes dudas o no sabes por dónde empezar, puedes escribirme.
            </p>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({
                  variant: "inverse",
                  size: "lg",
                  className: "mt-5 w-full sm:w-auto",
                })}
              >
                Resolver dudas por WhatsApp ↗
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
