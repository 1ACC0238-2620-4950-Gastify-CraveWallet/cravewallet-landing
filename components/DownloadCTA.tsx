export default function DownloadCTA() {
  return (
    <section id="descarga" className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Single ambient glow — bottom left, doesn't compete with hero */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(249,115,22,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="max-w-xl">
          <p className="text-[#F97316] text-xs font-semibold uppercase tracking-[0.12em] mb-6">
            Descarga gratis
          </p>

          <h2
            className="font-display font-bold text-white leading-[1.04] mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Empieza hoy.
            <br />
            <span className="text-white/40">Tu bolsillo</span>
            <br />
            te lo agradece.
          </h2>

          <p className="text-white/50 text-[16px] leading-relaxed mb-10 max-w-sm">
            Plan básico gratis para siempre. Sin tarjeta de crédito, sin
            compromisos.
          </p>

          <a
            href="#"
            className="btn inline-flex items-center gap-2.5 bg-[#F97316] text-white font-semibold px-7 py-4 rounded-xl text-[15px] hover:bg-[#ea6a0f]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.37.2.8.2 1.17-.02L21.4 14.1a1.1 1.1 0 0 0 0-1.9L4.35.57C4 .36 3.55.37 3.18.57A1.1 1.1 0 0 0 2.6 1.5v21a1.1 1.1 0 0 0 .58.96z" />
            </svg>
            Descargar en Android
          </a>

          <p className="text-white/25 text-[12px] mt-4">
            Requiere Android 8.0 o superior
          </p>
        </div>

        {/* Trust signals — horizontal, subdued */}
        <div className="flex flex-col sm:flex-row gap-5 mt-16 pt-16 border-t border-white/8">
          {[
            { label: "Sin conectar tu cuenta bancaria" },
            { label: "Plan gratis siempre disponible" },
            { label: "Hecho para el mercado peruano" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <div className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
              <p className="text-white/35 text-[13px]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
