"use client";

import { useCounter } from "@/hooks/useCounter";

function StatCard({
  prefix = "",
  suffix = "",
  target,
  label,
  sublabel,
}: {
  prefix?: string;
  suffix?: string;
  target: number;
  label: string;
  sublabel: string;
}) {
  const { count, ref } = useCounter(target, 1600);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display font-bold text-white leading-none mb-2"
        style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
        {prefix}{count.toLocaleString("es-PE")}{suffix}
      </p>
      <p className="text-white text-[16px] font-semibold mb-1">{label}</p>
      <p className="text-white/45 text-[13px] leading-snug max-w-[180px] mx-auto">
        {sublabel}
      </p>
    </div>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Ambient glow — bottom center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom center, rgba(59,79,216,0.14) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-[#F97316] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            El problema
          </p>
          <h2
            className="font-display font-bold text-white leading-[1.04] mb-6"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            ¿Sabes cuánto gastaste
            <br />
            en suscripciones este mes?
          </h2>
          <p className="text-white/50 text-[16px] leading-relaxed max-w-lg">
            Los cobros automáticos son invisibles. Spotify un día, Adobe otro,
            Smart Fit el siguiente. Nadie los suma — hasta que ves el estado de
            cuenta y ya es tarde.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 mb-16">
          <StatCard
            prefix="S/ "
            target={234}
            label="promedio mensual"
            sublabel="gasto en suscripciones de un peruano joven en Lima"
          />
          <StatCard
            suffix="%"
            target={60}
            label="no usa todo lo que paga"
            sublabel="3 de cada 5 personas tiene suscripciones inactivas"
          />
          <StatCard
            suffix=" días"
            target={23}
            label="promedio para detectar"
            sublabel="un cobro automático olvidado tras su primer cargo"
          />
        </div>

        {/* Services grid — visual reference */}
        <div className="border-t border-white/8 pt-12">
          <p className="text-white/30 text-[12px] uppercase tracking-widest mb-5">
            Servicios que se acumulan sin que te des cuenta
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Netflix", "Spotify", "Adobe CC", "Smart Fit", "PedidosYa Plus",
              "Rappi Prime", "Disney+", "Dropbox", "YouTube Premium",
              "Canva Pro", "Notion", "Figma", "Max", "Platzi", "Google One",
            ].map((s) => (
              <span
                key={s}
                className="text-[13px] font-medium text-white/40 border border-white/8 px-3 py-1.5 rounded-lg"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
