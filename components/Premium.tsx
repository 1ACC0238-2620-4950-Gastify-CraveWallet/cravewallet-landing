"use client";
import { useReveal } from "@/hooks/useReveal";

const freeTier = [
  "Hasta 5 suscripciones registradas",
  "Alertas 24h antes de cada cobro",
  "Conversión PEN/USD en tiempo real",
  "Historial de los últimos 30 días",
  "Categorías de gasto predefinidas",
];

const premiumTier = [
  "Suscripciones ilimitadas",
  "Análisis de gastos por categoría",
  "Presupuesto mensual personalizable",
  "Exportar datos en Excel / PDF",
  "Detección de suscripciones inactivas",
  "Sin publicidad",
  "Soporte prioritario",
];

function Check({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill={color + "20"} />
      <path d="M8 12l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Premium() {
  const ref = useReveal();

  return (
    <section id="premium" className="py-24 md:py-32 bg-[#EEF2F7]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="mb-14">
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

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {/* Free plan */}
          <div className="reveal feature-card bg-white rounded-2xl p-7 border border-[#E2E8F0]">
            <div className="mb-6">
              <p className="font-display font-semibold text-[20px] text-[#0F172A] mb-1">
                Básico
              </p>
              <p className="text-[#64748B] text-[14px]">Para empezar sin compromisos</p>
            </div>

            <p className="font-display font-bold text-[#0F172A] mb-1"
              style={{ fontSize: "clamp(32px, 4vw, 44px)" }}>
              Gratis
            </p>
            <p className="text-[#64748B] text-[13px] mb-8">Para siempre</p>

            <ul className="flex flex-col gap-3 mb-8">
              {freeTier.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#0F172A]">
                  <Check color="#22C55E" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#descarga"
              className="btn block text-center bg-[#0F172A] text-white font-semibold py-3 rounded-xl text-[14px] hover:bg-[#1e293b]"
            >
              Descargar gratis
            </a>
          </div>

          {/* Premium plan */}
          <div className="reveal delay-1 feature-card bg-[#0F172A] rounded-2xl p-7 border-2 border-[#3B4FD8] relative">
            <div className="absolute top-5 right-5">
              <span className="bg-[#3B4FD8] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                Próximamente
              </span>
            </div>

            <div className="mb-6">
              <p className="font-display font-semibold text-[20px] text-white mb-1">
                Premium
              </p>
              <p className="text-white/50 text-[14px]">Para usuarios que quieren más control</p>
            </div>

            <p className="font-display font-bold text-white mb-1"
              style={{ fontSize: "clamp(32px, 4vw, 44px)" }}>
              S/ 9.99
            </p>
            <p className="text-white/40 text-[13px] mb-8">por mes</p>

            <ul className="flex flex-col gap-3 mb-8">
              {premiumTier.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/80">
                  <Check color="#3B4FD8" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="btn block w-full text-center bg-[#3B4FD8]/30 text-white/50 font-semibold py-3 rounded-xl text-[14px] cursor-not-allowed"
              disabled
            >
              Disponible pronto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
