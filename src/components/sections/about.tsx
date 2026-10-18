import Image from "next/image";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { brandImages } from "@/img";
import { Disclosure } from "@/components/ui/disclosure";

export function AboutSection() {
  const about = siteConfig.about;
  return (
    <section id="sobre-mi" className="bg-white py-12 sm:py-16">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="editorial-label">La persona detrás del espacio</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em]">
              Conocer a Ashley.
              <br />
              <span className="text-[#658067]">Sentirte en confianza.</span>
            </h2>
            <div className="mt-5 flex items-center gap-4">
              <div className="relative aspect-square w-16 overflow-hidden rounded-2xl">
                <Image
                  src={brandImages.readingPhoto}
                  alt={about.profile.fullName}
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <p className="max-w-[24ch] text-sm text-[var(--color-text-secondary)]">
                Un acompañamiento cercano, respetuoso y sin juicios.
              </p>
            </div>
          </div>
          <div>
            <p className="max-w-[65ch] text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              {about.intro}
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              {[
                ["Atención", about.profile.audience],
                ["Modalidad", about.profile.modalities],
              ].map(([title, value]) => (
                <div key={title} className="rounded-xl bg-[#f1f4ee] p-3.5">
                  <dt className="text-xs text-[#526158]">{title}</dt>
                  <dd className="mt-1 text-sm font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5">
              <Disclosure title="Enfoque, experiencia y formación">
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
        </div>
      </Container>
    </section>
  );
}
