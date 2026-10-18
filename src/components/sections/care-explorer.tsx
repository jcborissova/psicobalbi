"use client";

import { useRef, useState } from "react";
import { CareIcon } from "@/components/ui/care-icon";
import { BookingButton } from "@/components/booking-button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const needs = [
  {
    label: "Ansiedad y emociones",
    hint: "Un espacio para mí",
    index: 0,
  },
  {
    label: "Familia y vínculos",
    hint: "Entendernos mejor",
    index: 1,
  },
  {
    label: "Duelo y pérdidas",
    hint: "Acompañar lo que vivo",
    index: 2,
  },
  {
    label: "Atención accesible",
    hint: "Una opción de bajo costo",
    index: 3,
  },
  {
    label: "Niños y adolescentes",
    hint: "Emociones y habilidades",
    index: 4,
  },
  {
    label: "Decisiones vocacionales",
    hint: "Encontrar dirección",
    index: 5,
  },
];

export function CareExplorer() {
  const [selected, setSelected] = useState<number | null>(null);
  const result = useRef<HTMLHeadingElement>(null);
  const choices = useRef<HTMLHeadingElement>(null);
  const service =
    selected === null ? null : siteConfig.services.items[selected];
  const whatsapp = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    service
      ? `Hola, me gustaría consultar sobre ${service.title.toLowerCase()} (${service.price}). ¿Podrías orientarme sobre disponibilidad y modalidad?`
      : "Hola, me gustaría empezar terapia, pero no sé qué tipo de atención elegir. ¿Podrías orientarme?",
  );

  function choose(index: number) {
    setSelected(index);
    requestAnimationFrame(() => {
      result.current?.focus({ preventScroll: true });
      result.current
        ?.closest("section")
        ?.scrollIntoView({ block: "start", behavior: "instant" });
    });
  }
  function back() {
    setSelected(null);
    requestAnimationFrame(() => {
      choices.current?.focus({ preventScroll: true });
      choices.current
        ?.closest("section")
        ?.scrollIntoView({ block: "start", behavior: "instant" });
    });
  }

  return (
    <section
      id="servicios"
      aria-label="Explorar atención"
      className="care-explorer"
    >
      <div className="flex items-center justify-between gap-3 px-5 pt-6 sm:px-7">
        <span className="text-xs font-medium tracking-wide text-[#526158]">
          Encuentra tu espacio
        </span>
        <span className="text-xs text-[#586960]">
          {service ? "A tu ritmo" : "Sin prisa"}
        </span>
      </div>
      <div className="p-5 pt-4 sm:p-7 sm:pt-5">
        {service ? (
          <div key={service.title}>
            <button
              type="button"
              onClick={back}
              className="mb-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#355d4f]"
            >
              ← Cambiar de opción
            </button>
            <p className="text-xs uppercase tracking-widest text-[#66746b]">
              Un espacio para acompañarte
            </p>
            <h2
              ref={result}
              tabIndex={-1}
              className="focus:outline-none mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
            >
              {service.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#526158]">
              {service.description}
            </p>
            <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-[#eff3ed] p-4">
              <div>
                <p className="text-xs text-[#526158]">Honorarios</p>
                <p className="mt-1 text-2xl font-semibold">{service.price}</p>
              </div>
              <p className="max-w-[17ch] text-right text-xs leading-relaxed text-[#526158]">
                {selected === 3
                  ? "Virtual · 40 minutos"
                  : "Consulta disponibilidad y modalidad"}
              </p>
            </div>
            <div className="mt-6 grid gap-2">
              <BookingButton
                label="Ver disponibilidad y agendar"
                size="lg"
                className="w-full"
              />
              {whatsapp && (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link justify-center underline"
                >
                  Consultar sobre este servicio ↗
                </a>
              )}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#66746b]">
              La agenda se abre en una nueva pestaña. La selección aquí no
              confirma una reserva.
            </p>
          </div>
        ) : (
          <>
            <h2
              ref={choices}
              tabIndex={-1}
              className="focus:outline-none text-xl font-semibold tracking-tight sm:text-2xl"
            >
              ¿Qué necesitas hoy?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#526158]">
              Un lugar para escucharte, comprenderte y acompañarte.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
              {needs.map((need) => (
                <button
                  key={need.index}
                  type="button"
                  onClick={() => choose(need.index)}
                  className="need-choice group text-left"
                  data-tone={need.index % 3}
                >
                  <span className="flex items-center justify-between text-xs text-[#5a7364]">
                    <span className="need-icon">
                      <CareIcon kind={need.index} className="h-6 w-6" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-lg text-[#526158] transition-transform group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </span>
                  <span className="mt-3 block text-sm font-semibold leading-snug">
                    {need.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-[#586960]">
                    {need.hint}
                  </span>
                </button>
              ))}
            </div>
            {whatsapp && (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex min-h-16 items-center justify-between gap-3 rounded-2xl bg-[#f8f5ef] px-4 py-3 text-sm font-medium"
              >
                <span>
                  No sé por dónde empezar
                  <span className="mt-1 block text-xs font-normal">
                    Pedir orientación por WhatsApp
                  </span>
                </span>{" "}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </>
        )}
      </div>
      <div className="px-5 pb-5 text-xs text-[#66746b] sm:px-7">
        Puedes explorar sin compartir datos personales.
      </div>
    </section>
  );
}
