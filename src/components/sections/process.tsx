import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

const titles = [
  "Conversamos",
  "Acordamos cómo empezar",
  "Te acompañamos en el proceso",
];

export function ProcessSection() {
  return (
    <section id="proceso" className="home-section process-welcome">
      <Container>
        <div className="process-layout">
          <div>
            <p className="home-eyebrow">Cómo empezamos</p>
            <h2 className="home-title">
              Un primer paso,
              <br />
              <em>sin prisa.</em>
            </h2>
            <p className="home-description">
              El proceso se construye contigo. Con espacio para preguntar y
              entender qué necesitas.
            </p>
            <a href="/entrevista-inicial" className="text-link mt-4 underline">
              Preparar mi primera consulta <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ol className="process-steps">
            {siteConfig.process.steps.map((step, i) => (
              <li key={step.title}>
                <span className="process-number" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3>{titles[i]}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
