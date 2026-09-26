"use client";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    quote:
      "Tenía 12 suscripciones y solo usaba 7. CraveWallet me marcó las que no tocaba hace meses. En un mes cancelé 3 y ahorré más de S/ 80.",
    name: "Valentina R.",
    role: "24 años · Estudiante, UPC Lima",
    initial: "V",
    color: "#3B4FD8",
    delay: "",
  },
  {
    quote:
      "Me di cuenta que pagaba S/ 340 al mes en apps que había olvidado. Descubrí Netflix, Dropbox y hasta una prueba gratuita que se convirtió en cobro.",
    name: "Diego M.",
    role: "27 años · Diseñador freelance, Miraflores",
    initial: "D",
    color: "#F97316",
    delay: "delay-1",
  },
  {
    quote:
      "La conversión automática a soles es lo que más uso. Adobe Creative Cloud son USD 54.99 y siempre estaba calculando a mano. Ya no.",
    name: "Camila T.",
    role: "23 años · Estudiante, PUCP Lima",
    initial: "C",
    color: "#22C55E",
    delay: "delay-2",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24">
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
            Testimonios
          </p>
          <h2
            className="font-display font-bold text-[#0F172A] leading-[1.08]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Lo que dicen quienes
            <br />
            <span className="text-[#64748B]">ya tomaron el control.</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`testimonial-card reveal ${t.delay} bg-white rounded-2xl p-7 border border-[#E2E8F0] flex flex-col`}
            >
              <Stars />
              <p className="text-[#0F172A] text-[15px] leading-relaxed flex-1 mb-6">
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

        {/* Tone examples — tono de comunicación del Cap. 3 */}
        <div className="mt-16 border-t border-[#E2E8F0] pt-16">
          <p className="text-[#64748B] text-[12px] uppercase tracking-[0.1em] font-medium mb-5">
            Así te habla CraveWallet
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { msg: "Mañana te cobran Spotify — S/ 17.90. ¿Lo dejamos pasar?", color: "#F97316" },
              { msg: "¡Cancelaste Dropbox! USD 9.99 vuelven a tu bolsillo cada mes.", color: "#22C55E" },
              { msg: "Sin conexión. Revisamos el tipo de cambio en cuanto vuelvas.", color: "#38BDF8" },
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
                <p className="text-[#0F172A] text-[14px] leading-relaxed">
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
