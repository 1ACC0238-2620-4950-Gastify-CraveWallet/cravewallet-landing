"use client";
import { useReveal } from "@/hooks/useReveal";

const plans = [
  {
    name: "Básico",
    price: "Gratis",
    period: "para siempre",
    features: [
      "Hasta 5 suscripciones activas",
      "Alertas 24 horas antes de cada cobro",
      "Estimación en soles de tus cobros en dólares",
      "Registro de gastos de delivery",
      "Presupuesto mensual de delivery",
    ],
    premium: false,
  },
  {
    name: "Premium",
    price: "S/ 9.90",
    period: "por mes",
    features: [
      "Todo lo del plan Básico",
      "Registro ilimitado de suscripciones",
      "Analítica avanzada de tus gastos",
      "Recordatorios prioritarios",
    ],
    premium: true,
  },
];

function Check({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Plans() {
  const ref = useReveal();

  return (
    <section id="planes" className="py-24 md:py-32 bg-[#EEF2F7]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="mb-16">
          <p className="text-[#3B4FD8] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Planes
          </p>
          <h2
            className="font-display font-bold text-[#0F172A] leading-[1.08]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Gratis para siempre.
            <br />
            <span className="text-[#64748B]">Premium cuando lo necesites.</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal ${i ? "delay-1" : ""} rounded-2xl p-8 flex flex-col ${
                p.premium ? "bg-[#0F172A] border-2 border-[#3B4FD8]" : "bg-white border border-[#E2E8F0]"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`font-display font-semibold text-[20px] ${p.premium ? "text-white" : "text-[#0F172A]"}`}>
                  {p.name}
                </h3>
                {p.premium && (
                  <span className="text-[11px] font-semibold uppercase tracking-wide bg-[#3B4FD8] text-white px-2.5 py-1 rounded-full">
                    Próximamente
                  </span>
                )}
              </div>

              <p className={`font-display font-bold text-[44px] leading-none ${p.premium ? "text-white" : "text-[#0F172A]"}`}>
                {p.price}
              </p>
              <p className={`text-[14px] mt-2 mb-8 ${p.premium ? "text-white/50" : "text-[#64748B]"}`}>{p.period}</p>

              <ul className="flex flex-col gap-3 mb-10">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-[15px] ${p.premium ? "text-white/80" : "text-[#0F172A]"}`}>
                    <span className="mt-0.5 shrink-0">
                      <Check color={p.premium ? "#7C8BFF" : "#22C55E"} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {p.premium ? (
                <span
                  aria-disabled="true"
                  className="mt-auto text-center font-semibold text-[15px] px-6 py-3.5 rounded-xl bg-white/10 text-white/50 cursor-not-allowed"
                >
                  Disponible pronto
                </span>
              ) : (
                <a
                  href="#descarga"
                  className="btn mt-auto text-center font-semibold text-[15px] px-6 py-3.5 rounded-xl bg-[#F97316] text-white hover:bg-[#ea6a0f]"
                >
                  Descargar gratis
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-[#64748B] text-[12px] mt-6">
          El precio y los beneficios del plan Premium son una propuesta en validación.
        </p>
      </div>
    </section>
  );
}
