import type { Dictionary } from "@/lib/i18n";

export default function DownloadCTA({ dict }: { dict: Dictionary["download"] }) {
  return (
    <section id="download" className="py-[var(--space-8)] md:py-[var(--space-10)] bg-inverse-surface relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(59,79,216,0.13) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)]">
        <div className="max-w-xl">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.12em] mb-[var(--space-5)]">
            {dict.eyebrow}
          </p>

          <h2
            className="font-display font-bold text-white leading-[1.04] mb-[var(--space-5)]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {dict.title}
            <br />
            <span className="text-white/35">{dict.titleMuted}</span>
            <br />
            {dict.titleTail}
          </h2>

          <p className="text-white/50 text-base leading-relaxed mb-[var(--space-8)] max-w-sm">
            {dict.body}
          </p>

          <a
            href="#"
            className="btn inline-flex items-center gap-[var(--space-2)] bg-primary text-on-primary font-semibold px-[var(--space-6)] py-[var(--space-4)] text-[15px] hover:bg-primary-dark"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.37.2.8.2 1.17-.02L21.4 14.1a1.1 1.1 0 0 0 0-1.9L4.35.57C4 .36 3.55.37 3.18.57A1.1 1.1 0 0 0 2.6 1.5v21a1.1 1.1 0 0 0 .58.96z" />
            </svg>
            {dict.cta}
          </a>

          <p className="text-white/25 text-xs mt-[var(--space-4)]">
            {dict.requirement}
          </p>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row gap-[var(--space-5)] mt-[var(--space-8)] pt-[var(--space-8)] border-t border-white/8">
          {dict.trust.map((item) => (
            <div key={item} className="flex items-center gap-[var(--space-2)]">
              <div className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
              <p className="text-white/35 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
