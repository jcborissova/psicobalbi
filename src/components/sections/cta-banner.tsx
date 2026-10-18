import { Container } from "@/components/layout/container";
import { BookingButton } from "@/components/booking-button";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CtaBannerSection() {
  const href = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola Ashley, me gustaría conocer cómo puedes acompañarme. ¿Podemos conversar?",
  );
  return (
    <section id="agendar" className="home-section closing-invitation">
      <Container>
        <div className="closing-layout">
          <div>
            <p className="home-eyebrow">Cuando sea tu momento</p>
            <h2 className="home-title">
              Podemos empezar
              <br />
              <em>con una conversación.</em>
            </h2>
            <p className="home-description">
              Si tienes dudas, puedes escribirme. No necesitas tener claro qué
              decir ni decidirlo todo hoy.
            </p>
          </div>
          <div className="closing-actions">
            <a
              href={href || "/entrevista-inicial"}
              target={href ? "_blank" : undefined}
              rel={href ? "noopener noreferrer" : undefined}
              className={buttonStyles({
                variant: "inverse",
                size: "lg",
                className: "w-full",
              })}
            >
              Escribirle a Ashley <span aria-hidden="true">↗</span>
            </a>
            <BookingButton
              label="Si lo prefieres, puedes agendar ↗"
              variant="inverse"
              className="closing-booking w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
