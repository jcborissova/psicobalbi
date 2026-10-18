import Image from "next/image";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { brandImages } from "@/img";
import { Disclosure } from "@/components/ui/disclosure";

export function AboutSection() {
  const about = siteConfig.about;
  return (
    <section id="sobre-mi" className="home-section about-welcome">
      <Container>
        <div className="about-layout">
          <div>
            <p className="home-eyebrow">La persona que te acompaña</p>
            <h2 className="home-title">Hola, soy Ashley.</h2>
            <div className="about-person">
              <div className="about-portrait">
                <Image
                  src={brandImages.readingPhoto}
                  alt="Ashley Fajardo Balbi"
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-base font-semibold">
                  {about.profile.fullName}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {about.profile.role}
                </p>
              </div>
            </div>
          </div>
          <div className="about-story">
            <p>
              Mi trabajo es acompañarte a entender lo que estás viviendo desde
              una mirada más amplia, sin juicios.
            </p>
            <p>
              Trabajo desde la terapia sistémica y la terapia breve centrada en
              soluciones. Tu historia, tus relaciones y tu entorno también
              tienen un lugar en lo que conversamos.
            </p>
            <p className="about-invitation">
              Un proceso cercano y flexible,
              <br />
              <em>adaptado a ti.</em>
            </p>
            <Disclosure title="Más sobre mi enfoque y formación">
              <div className="space-y-4">
                <p>{about.philosophyBody}</p>
                {about.biography?.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                {about.highlights.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </Disclosure>
          </div>
        </div>
      </Container>
    </section>
  );
}
