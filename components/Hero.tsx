import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0F172A] flex items-center overflow-hidden"
    >
      {/* Single ambient glow — top right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(59,79,216,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 w-full py-28 md:py-0 md:min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

          {/* Left — copy */}
          <div>
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 border border-white/10 text-white/55 text-xs font-medium px-3.5 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
              Gastify · Disponible para Android
            </div>

            {/* Headline — grounded in 5W+2H problem statement */}
            <h1
              className="font-display font-bold text-white leading-[1.04] mb-6"
              style={{ fontSize: "clamp(44px, 6.5vw, 76px)" }}
            >
              Los cobros
              <br />
              automáticos
              <br />
              <span className="text-[#3B4FD8]">no avisan.</span>
              <br />
              <span className="text-white/40 text-[0.75em]">
                CraveWallet sí.
              </span>
            </h1>

            {/* Body — from Lean UX Problem Statement, Cap. 1 */}
            <p className="text-white/55 text-[17px] leading-relaxed mb-10 max-w-[420px]">
              Centraliza Spotify, Netflix, Smart Fit y todos tus gastos
              recurrentes. Recibe alertas 24 horas antes de cada cobro.
              Convierte USD a soles con el tipo de cambio del Banco de la
              Nación.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#descarga"
                className="btn inline-flex items-center justify-center gap-2 bg-[#F97316] text-white font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-[#ea6a0f]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.18 23.76c.37.2.8.2 1.17-.02L21.4 14.1a1.1 1.1 0 0 0 0-1.9L4.35.57C4 .36 3.55.37 3.18.57A1.1 1.1 0 0 0 2.6 1.5v21a1.1 1.1 0 0 0 .58.96z" />
                </svg>
                Descargar gratis
              </a>
              <a
                href="#problem"
                className="btn inline-flex items-center justify-center gap-2 border border-white/15 text-white/65 font-medium px-6 py-3.5 rounded-xl text-sm hover:border-white/30 hover:text-white/85"
              >
                Ver el problema
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats — sourced from Cap. 1 + Cap. 2 research */}
            <div className="flex items-start gap-8 mt-12 pt-10 border-t border-white/8">
              {[
                {
                  value: "4 – 8",
                  label: "suscripciones activas por usuario",
                  src: "Statista, 2024",
                },
                {
                  value: "S/ → $",
                  label: "conversión en tiempo real",
                  src: "ExchangeRate-API · BN",
                },
                {
                  value: "−24h",
                  label: "alerta antes de cada cobro",
                  src: "Funcionalidad central",
                },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-[22px] text-white leading-none">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-white/40 mt-1 leading-tight max-w-[90px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone */}
          <div className="flex justify-center md:justify-end items-center">
            <PhoneMockup variant="hero" screen="dashboard" />
          </div>
        </div>
      </div>
    </section>
  );
}
