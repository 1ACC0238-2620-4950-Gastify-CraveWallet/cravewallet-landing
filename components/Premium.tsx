"use client";
import { useReveal } from "@/hooks/useReveal";
import type { Dictionary } from "@/lib/i18n";

function Check({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill={`color-mix(in srgb, ${color} 13%, transparent)`} />
      <path d="M8 12l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Premium({ dict }: { dict: Dictionary["premium"] }) {
  const ref = useReveal();

  return (
    <section id="premium" className="py-[var(--space-8)] md:py-[var(--space-10)] bg-surface-variant">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)]">
        <div className="mb-[var(--space-8)]">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.12em] mb-[var(--space-4)]">
            {dict.eyebrow}
          </p>
          <h2
            className="font-display font-bold text-on-surface leading-[1.08]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {dict.title}
            <br />
            <span className="text-on-surface-variant">{dict.titleMuted}</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-5)] max-w-3xl">
          {/* Free plan */}
          <div
            className="reveal feature-card bg-surface border border-surface-variant p-[var(--space-5)]"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div className="mb-[var(--space-5)]">
              <p className="font-display font-semibold text-[20px] text-on-surface mb-[var(--space-1)]">
                {dict.free.name}
              </p>
              <p className="text-on-surface-variant text-sm">{dict.free.tagline}</p>
            </div>

            <p
              className="font-display font-bold text-on-surface mb-[var(--space-1)]"
              style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
            >
              {dict.free.price}
            </p>
            <p className="text-on-surface-variant text-sm mb-[var(--space-8)]">{dict.free.period}</p>

            <ul className="flex flex-col gap-[var(--space-3)] mb-[var(--space-8)]">
              {dict.free.items.map((item) => (
                <li key={item} className="flex items-start gap-[var(--space-2)] text-sm text-on-surface">
                  <Check color="var(--color-success)" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="btn block text-center bg-on-surface text-surface font-semibold py-[var(--space-3)] text-sm hover:opacity-90"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              {dict.free.cta}
            </a>
          </div>

          {/* Premium plan */}
          <div
            className="reveal delay-1 feature-card bg-inverse-surface p-[var(--space-5)] border-2 border-primary relative"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div className="absolute top-[var(--space-5)] right-[var(--space-5)]">
              <span
                className="bg-primary text-on-primary text-xs font-semibold px-[var(--space-2)] py-[var(--space-1)]"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                {dict.pro.badge}
              </span>
            </div>

            <div className="mb-[var(--space-5)]">
              <p className="font-display font-semibold text-[20px] text-white mb-[var(--space-1)]">
                {dict.pro.name}
              </p>
              <p className="text-white/50 text-sm">{dict.pro.tagline}</p>
            </div>

            <p
              className="font-display font-bold text-white mb-[var(--space-1)]"
              style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
            >
              {dict.pro.price}
            </p>
            <p className="text-white/40 text-sm mb-[var(--space-8)]">{dict.pro.period}</p>

            <ul className="flex flex-col gap-[var(--space-3)] mb-[var(--space-8)]">
              {dict.pro.items.map((item) => (
                <li key={item} className="flex items-start gap-[var(--space-2)] text-sm text-white/80">
                  <Check color="var(--color-primary)" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="btn block w-full text-center bg-primary/30 text-white/50 font-semibold py-[var(--space-3)] text-sm cursor-not-allowed"
              style={{ borderRadius: "var(--radius-md)" }}
              disabled
            >
              {dict.pro.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
