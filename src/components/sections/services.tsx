import { Container } from "@/components/layout/container";

const spaces = [
  {
    title: "Lo que estás sintiendo",
    description:
      "Ansiedad, emociones difíciles o una pérdida. Un espacio para comprender lo que te pasa y encontrar formas de cuidarte.",
    detail: "Acompañamiento individual y duelo",
  },
  {
    title: "Tus vínculos y tu familia",
    description:
      "Escucharnos, entender nuestras diferencias y mejorar la comunicación. Acompañamiento para familias, niños y adolescentes.",
    detail: "Terapia familiar e infanto-juvenil",
  },
  {
    title: "Las decisiones que vienen",
    description:
      "Cuando hay cambios, dudas o nuevos caminos. Podemos explorar tus decisiones académicas y profesionales con más claridad.",
    detail: "Orientación vocacional",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="home-section accompaniment-section">
      <Container>
        <div className="home-section-intro">
          <p className="home-eyebrow">Cómo puedo acompañarte</p>
          <h2 className="home-title">Hay lugar para lo que estás viviendo.</h2>
          <p className="home-description">
            No necesitas elegir una terapia ni tener todas las respuestas antes
            de conversar. Podemos empezar por lo que hoy te preocupa.
          </p>
        </div>
        <div className="accompaniment-grid">
          {spaces.map((space) => (
            <article key={space.title}>
              <h3>{space.title}</h3>
              <p>{space.description}</p>
              <span>{space.detail}</span>
            </article>
          ))}
        </div>
        <p className="accessibility-note">
          <span>También hay un programa de atención accesible.</span>{" "}
          <a href="#informacion-practica" className="text-link underline">
            Conocer las opciones <span aria-hidden="true">↓</span>
          </a>
        </p>
      </Container>
    </section>
  );
}
