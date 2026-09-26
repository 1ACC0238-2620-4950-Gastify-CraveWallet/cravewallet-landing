"use client";

import { useCounter } from "@/hooks/useCounter";

function StatCard({
  prefix = "",
  suffix = "",
  target,
  label,
  sublabel,
  source,
}: {
  prefix?: string;
  suffix?: string;
  target: number;
  label: string;
  sublabel: string;
  source: string;
}) {
  const { count, ref } = useCounter(target, 1600);
  return (
    <div ref={ref} className="text-center">
      <p
        className="font-display font-bold text-white leading-none mb-2"
        style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
      >
        {prefix}
        {count.toLocaleString("es-PE")}
        {suffix}
      </p>
      <p className="text-white text-[15px] font-semibold mb-1">{label}</p>
      <p className="text-white/45 text-[13px] leading-snug max-w-[200px] mx-auto">
        {sublabel}
      </p>
      <p className="text-white/20 text-[11px] mt-2 font-mono">{source}</p>
    </div>
  );
}

/* Services pulled directly from Section 1.1.1 and interview transcripts */
const SERVICES = [
  "Spotify Premium",
  "Netflix",
  "Disney+",
  "Max (HBO)",
  "Crunchyroll",
  "Xbox Game Pass",
  "Apple Music",
  "YouTube Premium",
  "Amazon Prime",
  "ChatGPT Plus",
  "Adobe Creative Cloud",
  "Canva Pro",
  "Figma",
  "Dropbox",
  "Google Drive",
  "iCloud",
  "GitHub Copilot",
  "Notion",
  "LinkedIn Premium",
  "Smart Fit",
  "Británico",
  "Netzun",
  "PedidosYa Plus",
  "Rappi Prime",
  "MongoDB Atlas",
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden"
    >
      {/* Single ambient glow — bottom center */}
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
            ¿Sabes cuánto gastaste en
            <br />
            suscripciones este mes?
          </h2>
          <p className="text-white/50 text-[16px] leading-relaxed max-w-lg">
            Spotify un día, Adobe otro, Smart Fit el siguiente. Los cobros
            automáticos se acumulan y nadie los suma — hasta que ves el estado
            de cuenta y ya es tarde.
          </p>
        </div>

        {/* Stats — all sourced from Cap. 1 & Cap. 2 research */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 mb-20">
          <StatCard
            prefix="S/ "
            target={350}
            label="gasto mensual estimado"
            sublabel="en suscripciones y delivery, por joven limeño"
            source="Cap. I · estimación interna"
          />
          <StatCard
            suffix="%"
            target={77}
            label="no lleva ningún control"
            sublabel="de sus gastos recurrentes digitales"
            source="SBS Perú, 2023"
          />
          <StatCard
            suffix="%"
            target={100}
            label="vivió un cobro olvidado"
            sublabel="en ambos segmentos entrevistados por Gastify"
            source="Entrevistas Cap. II, n = 6"
          />
        </div>

        {/* Real testimonials from interviews — verbatim summaries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            {
              quote:
                "Mantuvo PedidosYa por una promo, la olvidó y fue cobrado 2 meses seguidos. Se enteró por casualidad revisando el banco.",
              person: "Darío, 20 · Surquillo",
              color: "#F97316",
            },
            {
              quote:
                "Smart Fit le cobró 2 meses que no fue al gimnasio. Sin aviso previo. Solo lo vio en el detalle bancario.",
              person: "Eduardo, 19 · Ate",
              color: "#FBBF24",
            },
            {
              quote:
                "LinkedIn Premium le cobró ~$40 por 3 meses después de conseguir trabajo. Lo descubrió en el estado de cuenta mensual.",
              person: "Leonardo, 30 · Lince",
              color: "#38BDF8",
            },
          ].map((item) => (
            <div
              key={item.person}
              className="rounded-xl p-4 border-l-[3px] bg-white/4"
              style={{ borderColor: item.color }}
            >
              <p className="text-white/70 text-[13px] leading-relaxed mb-2">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="text-white/30 text-[11px] font-medium">
                {item.person}
              </p>
            </div>
          ))}
        </div>

        {/* Services tag cloud — sourced from Cap. 1 Seg. 1 & 2 subscription lists */}
        <div className="border-t border-white/8 pt-12">
          <p className="text-white/30 text-[11px] uppercase tracking-widest mb-5">
            Servicios que se acumulan sin que te des cuenta
          </p>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <span
                key={s}
                className="text-[12px] font-medium text-white/35 border border-white/8 px-3 py-1.5 rounded-lg"
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
