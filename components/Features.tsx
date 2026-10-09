"use client";
import { useReveal } from "@/hooks/useReveal";
import type { Dictionary } from "@/lib/i18n";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h4M14 15h4" />
      </svg>
    ),
    color: "var(--color-primary)",
    delay: "",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    color: "var(--color-accent)",
    delay: "delay-1",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-3 3" />
      </svg>
    ),
    color: "var(--color-success)",
    delay: "delay-2",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    color: "var(--color-info)",
    delay: "delay-3",
  },
];

export default function Features({ dict }: { dict: Dictionary["features"] }) {
  const ref = useReveal();

  return (
    <section id="solution" className="py-[var(--space-8)] md:py-[var(--space-10)] bg-surface">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)]">
        <div className="mb-[var(--space-8)]">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.12em] mb-[var(--space-4)]">
            {dict.eyebrow}
          </p>
          <h2
            className="font-display font-bold text-on-surface leading-[1.08] max-w-lg"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {dict.title}
            <br />
            <span className="text-on-surface-variant">{dict.titleMuted}</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-5)]">
          {features.map((f, i) => (
            <div
              key={dict.items[i].title}
              className={`feature-card reveal ${f.delay} bg-surface border border-surface-variant p-[var(--space-5)]`}
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-[var(--space-5)]"
                style={{
                  borderRadius: "var(--radius-md)",
                  backgroundColor: `color-mix(in srgb, ${f.color} 10%, transparent)`,
                  color: f.color,
                }}
              >
                {f.icon}
              </div>
              <h3
                className="font-display font-semibold text-[18px] text-on-surface mb-[var(--space-2)] leading-snug"
              >
                {dict.items[i].title}
              </h3>
              <p className="text-on-surface-variant text-[15px] leading-relaxed">
                {dict.items[i].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
