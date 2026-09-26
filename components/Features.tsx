"use client";
import { useReveal } from "@/hooks/useReveal";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h4M14 15h4" />
      </svg>
    ),
    title: "Centraliza todo en un lugar",
    description:
      "Agrega Netflix, Spotify, Adobe, Smart Fit y cualquier gasto recurrente. Todo organizado por categoría y fecha de cobro.",
    color: "#3B4FD8",
    delay: "",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: "Alertas 24h antes de cada cobro",
    description:
      "Notificación antes de cada renovación automática. Tiempo suficiente para decidir si cancelar antes de que impacte tu cuenta.",
    color: "#F97316",
    delay: "delay-1",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-3 3" />
      </svg>
    ),
    title: "Detecta lo que no usas",
    description:
      "Marca automáticamente las suscripciones sin actividad en los últimos 30 días. Cancela lo que no aporta, ahorra lo que importa.",
    color: "#22C55E",
    delay: "delay-2",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Conversión PEN/USD en tiempo real",
    description:
      "Cuánto pagas en soles, exactamente, usando el tipo de cambio del Banco de la Nación. Actualizado al minuto.",
    color: "#38BDF8",
    delay: "delay-3",
  },
];

export default function Features() {
  const ref = useReveal();

  return (
    <section id="solution" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="mb-16">
          <p className="text-[#3B4FD8] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Solución
          </p>
          <h2
            className="font-display font-bold text-[#0F172A] leading-[1.08] max-w-lg"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Todo lo que necesitas.
            <br />
            <span className="text-[#64748B]">Nada de lo que no.</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`feature-card reveal ${f.delay} bg-white rounded-2xl p-7 border border-[#E2E8F0]`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: f.color + "18", color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-[18px] text-[#0F172A] mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-[#64748B] text-[15px] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
