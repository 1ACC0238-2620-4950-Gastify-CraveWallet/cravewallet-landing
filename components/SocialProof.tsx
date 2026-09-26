"use client";
import { useReveal } from "@/hooks/useReveal";

/*
  Testimonials drawn from real interview summaries (Cap. II, §2.2.2).
  Names, ages, districts and stories are verbatim from the interview records.
  User Personas (Camila Torres / Renzo Salazar) used as segment representatives.
*/
const testimonials = [
  {
    quote:
      "Mantenía PedidosYa activa por una promo que ya había vencido. Me cobraron 2 meses seguidos y me enteré por casualidad revisando el banco. Un aviso de 24h lo habría cortado antes del primer descuento.",
    name: "Darío R.",
    role: "20 años · Estudiante, Surquillo",
    initial: "D",
    color: "#F97316",
    delay: "",
    segment: "Segmento 1",
  },
  {
    quote:
      "Smart Fit me cobró 2 meses sin ir al gym, cero notificación. ChatGPT y Amazon los pago en dólares y nunca supe cuánto en soles hasta que bajó la línea de mi tarjeta. Eso tiene que resolverse.",
    name: "Eduardo A.",
    role: "19 años · Estudiante trabajador, Ate",
    initial: "E",
    color: "#3B4FD8",
    delay: "delay-1",
    segment: "Segmento 1",
  },
  {
    quote:
      "LinkedIn Premium me cobró ~$40 tres meses seguidos después de que conseguí el trabajo y olvidé cancelarlo. Solo lo vi en el estado de cuenta. Un aviso 24h antes me habría ahorrado el problema.",
    name: "Leonardo C.",
    role: "30 años · Ing. Industrial, Lince",
    initial: "L",
    color: "#22C55E",
    delay: "delay-2",
    segment: "Segmento 2",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#FBBF24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  const ref = useReveal();

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="mb-14">
          <p className="text-[#3B4FD8] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Investigación de usuarios
          </p>
          <h2
            className="font-display font-bold text-[#0F172A] leading-[1.08]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Historias reales.
            <br />
            <span className="text-[#64748B]">El mismo problema.</span>
          </h2>
          <p className="text-[#64748B] text-[14px] mt-3 max-w-lg">
            Entrevistas realizadas por el equipo de Gastify a jóvenes de Lima
            (septiembre 2026). El 100 % vivió al menos un cobro automático
            olvidado. El 100 % tiene suscripciones en dólares sin saber su
            equivalente en soles.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`testimonial-card reveal ${t.delay} bg-white rounded-2xl p-7 border border-[#E2E8F0] flex flex-col`}
            >
              <Stars />
              {/* Segment badge */}
              <div className="mb-4">
                <span
                  className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                  style={{
                    color: t.color,
                    backgroundColor: t.color + "18",
                  }}
                >
                  {t.segment}
                </span>
              </div>
              <p className="text-[#0F172A] text-[14px] leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px] font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#0F172A] leading-none mb-0.5">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-[#64748B]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-segment findings — from §2.2.3 analysis */}
        <div className="mt-14 bg-white rounded-2xl p-7 border border-[#E2E8F0]">
          <p className="text-[#64748B] text-[12px] uppercase tracking-[0.1em] font-medium mb-5">
            Hallazgos transversales — ambos segmentos (n = 6)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                pct: "100 %",
                text: "no recibe hoy ninguna alerta anticipada de cobro — se enteran siempre revisando el banco.",
                color: "#F97316",
              },
              {
                pct: "100 %",
                text: "tiene al menos una suscripción en dólares sin saber su equivalente en soles hasta el cargo.",
                color: "#3B4FD8",
              },
              {
                pct: "100 %",
                text: "relató un episodio concreto de cobro automático olvidado, detectado entre 1 y 3 meses después.",
                color: "#22C55E",
              },
            ].map((f) => (
              <div key={f.pct} className="flex items-start gap-3">
                <p
                  className="font-display font-bold text-[22px] leading-none shrink-0"
                  style={{ color: f.color }}
                >
                  {f.pct}
                </p>
                <p className="text-[#64748B] text-[13px] leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tone of voice examples — from Cap. 3.1.1.1 */}
        <div className="mt-12 border-t border-[#E2E8F0] pt-12">
          <p className="text-[#64748B] text-[12px] uppercase tracking-[0.1em] font-medium mb-5">
            Así te habla CraveWallet · Tono de comunicación (Cap. III, §3.1.1.1)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                msg: "Mañana te cobran Spotify — S/ 17.90. ¿Lo dejamos pasar?",
                color: "#F97316",
              },
              {
                msg: "¡Cancelaste Dropbox! USD 9.99 vuelven a tu bolsillo cada mes.",
                color: "#22C55E",
              },
              {
                msg: "Sin conexión. Revisamos el tipo de cambio en cuanto vuelvas.",
                color: "#38BDF8",
              },
            ].map((item) => (
              <div
                key={item.msg}
                className="flex items-start gap-3 py-3.5 px-4 rounded-xl border-l-[3px] bg-white"
                style={{ borderColor: item.color }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-[#0F172A] text-[13px] leading-relaxed">
                  &ldquo;{item.msg}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
