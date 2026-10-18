import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { CareExplorer } from "@/components/sections/care-explorer";

export function HeroSection() {
  return (
    <section id="inicio" className="journey-hero">
      <Container>
        <div className="grid items-start gap-7 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:py-9">
            <p className="flex items-center gap-2 text-xs font-semibold text-[#446356]">
              <span className="h-2 w-2 rounded-full bg-[#68836b]" /> Atención
              psicológica · Presencial y virtual
            </p>
            <h1 className="mt-4 max-w-[15ch] text-[2.1rem] font-semibold leading-[1.12] tracking-[-.055em] sm:text-5xl lg:mt-6 lg:text-[3.8rem]">
              Tu próximo paso empieza{" "}
              <span className="font-heading italic font-medium text-[#658067]">
                contigo.
              </span>
            </h1>
            <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-[#526158] sm:text-base">
              No necesitas tener todo resuelto. Encuentra un espacio para lo que
              estás viviendo y decide cómo empezar.
            </p>
            <BookingButton
              label="Prefiero ir directo a la agenda ↗"
              variant="ghost"
              size="sm"
              className="mt-3 w-full sm:w-auto lg:mt-6"
            />
            <div className="mt-8 hidden max-w-sm border-t border-[#cdd9ce] pt-5 lg:block">
              <p className="text-xs uppercase tracking-widest text-[#587060]">
                A tu ritmo
              </p>
              <p className="mt-3 text-xl font-medium leading-relaxed tracking-tight">
                Entenderte. Encontrar apoyo.
                <br />
                Dar un primer paso.
              </p>
            </div>
          </div>
          <CareExplorer />
        </div>
      </Container>
    </section>
  );
}
