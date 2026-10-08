"use client";
import { useReveal } from "@/hooks/useReveal";

// Figures come from the Segment 1 interviews documented in the report (section 2.2.3).
// They describe the interviewed sample (n = 3), not the whole population.
const findings = [
  {
    value: "3 de 3",
    label: "pagan al menos una suscripción en dólares y no saben cuánto les cobran en soles hasta ver el cargo.",
    delay: "",
  },
  {
    value: "3 de 3",
    label: "recuerdan un cobro automático olvidado que descubrieron semanas después.",
    delay: "delay-1",
  },
  {
    value: "2 de 3",
    label: "probaron una app de finanzas y la abandonaron porque registrar todo a mano era tedioso.",
    delay: "delay-2",
  },
];

export default function Problem() {
  const ref = useReveal();

  return (
    <section id="problema" className="py-24 md:py-32 bg-[#0F172A]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-[#F97316] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            El problema
          </p>
          <h2
            className="font-display font-bold text-white leading-[1.08] mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            ¿Sabes cuánto gastaste en suscripciones este mes?
          </h2>
          <p className="text-white/55 text-[16px] leading-relaxed">
            Spotify se cobra en soles, Adobe en dólares, Smart Fit cada mes en una fecha distinta.
            Cuando los cobros llegan por separado, es fácil enterarse tarde de una renovación.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {findings.map((f) => (
            <div
              key={f.label}
              className={`reveal ${f.delay} rounded-2xl p-7 border border-white/10 bg-white/[0.03]`}
            >
              <p className="font-display font-bold text-white text-[44px] leading-none mb-4">
                {f.value}
              </p>
              <p className="text-white/60 text-[15px] leading-relaxed">{f.label}</p>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-[12px] mt-6">
          Fuente: entrevistas del equipo Gastify a estudiantes universitarios de Lima (n = 3), 2026.
        </p>
      </div>
    </section>
  );
}
