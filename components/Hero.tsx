import type { Dictionary } from "@/lib/i18n";
import PhoneMockup from "./PhoneMockup";

export default function Hero({ dict, phone }: { dict: Dictionary["hero"]; phone: Dictionary["phone"] }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-inverse-surface flex items-center overflow-hidden"
    >
      {/* Single ambient glow */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(59,79,216,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)] w-full py-[var(--space-8)] md:py-0 md:min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

          {/* Left — copy */}
          <div>
            {/* Eyebrow pill */}
            <div
              className="inline-flex items-center gap-[var(--space-2)] border border-white/10 text-white/55 text-xs font-medium px-[var(--space-3)] py-[var(--space-1)] mb-[var(--space-8)]"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ boxShadow: "0 0 6px rgba(34,197,94,0.8)" }} />
              {dict.badge}
            </div>

            <h1
              className="font-display font-bold text-white leading-[1.04] mb-[var(--space-5)]"
              style={{ fontSize: "clamp(44px, 6.5vw, 76px)" }}
            >
              {dict.title[0]}
              <br />
              {dict.title[1]}
              <br />
              <span className="text-primary">{dict.titleHighlight}</span>
              <br />
              <span className="text-white/40 text-[0.75em]">
                {dict.titleTail}
              </span>
            </h1>

            <p className="text-white/55 text-base leading-relaxed mb-[var(--space-8)] max-w-[420px]">
              {dict.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-[var(--space-3)]">
              <a
                href="#download"
                className="btn inline-flex items-center justify-center gap-[var(--space-2)] bg-primary text-on-primary font-semibold px-[var(--space-5)] py-[14px] text-sm hover:bg-primary-dark"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.37.2.8.2 1.17-.02L21.4 14.1a1.1 1.1 0 0 0 0-1.9L4.35.57C4 .36 3.55.37 3.18.57A1.1 1.1 0 0 0 2.6 1.5v21a1.1 1.1 0 0 0 .58.96z" />
                </svg>
                {dict.ctaPrimary}
              </a>
              <a
                href="#problem"
                className="btn inline-flex items-center justify-center gap-[var(--space-2)] border border-white/15 text-white/65 font-medium px-[var(--space-5)] py-[14px] text-sm hover:border-white/30 hover:text-white/85"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                {dict.ctaSecondary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-start gap-[var(--space-8)] mt-[var(--space-8)] pt-[var(--space-8)] border-t border-white/8">
              {dict.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-[22px] text-white leading-none">
                    {s.value}
                  </p>
                  <p className="text-xs text-white/40 mt-[var(--space-1)] leading-tight max-w-[90px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone */}
          <div className="flex justify-center md:justify-end items-center">
            <PhoneMockup variant="hero" screen="dashboard" dict={phone} />
          </div>
        </div>
      </div>
    </section>
  );
}
