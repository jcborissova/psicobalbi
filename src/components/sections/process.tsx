import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
const titles = [
  "Conversamos",
  "Acordamos cómo empezar",
  "Te acompañamos en el proceso",
];
export function ProcessSection() {
  return (
    <section id="proceso" className="bg-[#f4f6ef] py-12 sm:py-16">
      <Container>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="editorial-label">Sin saltos a lo desconocido</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-.04em]">
              ¿Qué pasa después?
            </h2>
          </div>
          <a href="/entrevista-inicial" className="text-link underline">
            Preparar mi primera consulta ↗
          </a>
        </div>
        <ol className="mt-6 grid gap-3 md:grid-cols-3">
          {siteConfig.process.steps.map((step, i) => (
            <li key={step.title} className="rounded-3xl bg-white/80 p-5">
              <details className="group">
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 [&::-webkit-details-marker]:hidden">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf2e8] text-sm font-semibold">
                    {i + 1}
                  </span>
                  <h3 className="flex-1 text-sm font-semibold">{titles[i]}</h3>
                  <span
                    aria-hidden="true"
                    className="text-lg group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#526158]">
                  {step.description}
                </p>
              </details>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
