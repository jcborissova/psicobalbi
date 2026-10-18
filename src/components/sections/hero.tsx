import { Container } from "@/components/layout/container";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const conversation = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola Ashley, me gustaría conocer cómo puedes acompañarme. ¿Podemos conversar?",
  );

  return (
    <section id="inicio" className="welcome-hero">
      <Container>
        <div className="welcome-layout">
          <div className="welcome-copy">
            <svg
              className="welcome-flourish"
              aria-hidden="true"
              viewBox="0 0 64 28"
              fill="none"
            >
              <path
                d="M2 23C15 23 12 4 25 5C39 6 32 25 25 20C16 12 42 3 61 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="home-eyebrow">Psicobalbi · Psicología cercana</p>
            <h1 className="welcome-title">
              Un espacio para comprenderte <em>sin juicio.</em>
            </h1>
            <p className="welcome-description">
              No tienes que saber por dónde empezar. Aquí podemos hablar de lo
              que estás viviendo y encontrar un primer paso, a tu ritmo.
            </p>
            <div className="welcome-actions">
              <a
                href={conversation || "/entrevista-inicial"}
                target={conversation ? "_blank" : undefined}
                rel={conversation ? "noopener noreferrer" : undefined}
                className={buttonStyles({
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                Podemos conversar <span aria-hidden="true">↗</span>
              </a>
              <a href="#servicios" className="text-link welcome-secondary">
                Conoce cómo puedo acompañarte <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="welcome-note">
              Atención presencial y virtual · Con cita previa
            </p>
          </div>
          <div className="welcome-art" aria-hidden="true">
            <svg viewBox="0 0 420 380" fill="none">
              <path
                d="M77 285C28 217 64 74 157 60C221 50 234 124 249 183C267 255 217 343 148 335C118 332 93 311 77 285Z"
                fill="#dce3d1"
              />
              <path
                d="M213 294C170 258 188 177 247 140C300 106 366 124 378 183C393 253 324 330 269 321C246 317 229 309 213 294Z"
                fill="#ead4c2"
              />
              <path
                d="M54 313C104 308 88 157 149 141C193 129 218 191 188 217C157 244 122 197 151 173C190 141 233 242 281 228C322 216 328 174 299 162C277 153 258 175 270 193C284 214 324 205 368 183"
                stroke="#52684e"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M321 76C323 63 329 55 340 49M319 76C305 67 304 57 306 48M323 78C335 78 344 72 348 65"
                stroke="#a46349"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="108" cy="79" r="5" fill="#a46349" />
            </svg>
            <p>
              Escucha. Cercanía.
              <br />
              <em>Tu propio ritmo.</em>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
