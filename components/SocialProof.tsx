"use client";
import { useReveal } from "@/hooks/useReveal";
import type { Dictionary } from "@/lib/i18n";

const testimonials = [
  {
    name: "Darío R.",
    initial: "D",
    color: "var(--color-accent)",
    delay: "",
  },
  {
    name: "Eduardo A.",
    initial: "E",
    color: "var(--color-primary)",
    delay: "delay-1",
  },
  {
    name: "Leonardo C.",
    initial: "L",
    color: "var(--color-success)",
    delay: "delay-2",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-[var(--space-4)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="var(--color-warning)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const FINDING_COLORS = ["var(--color-accent)", "var(--color-primary)", "var(--color-success)"];
const TONE_COLORS = ["var(--color-accent)", "var(--color-success)", "var(--color-info)"];

export default function SocialProof({ dict, tone }: { dict: Dictionary["social"]; tone: Dictionary["tone"] }) {
  const ref = useReveal();

  return (
    <section className="py-[var(--space-8)] md:py-[var(--space-10)] bg-background">
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
          <p className="text-on-surface-variant text-sm mt-[var(--space-3)] max-w-lg">
            {dict.body}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[var(--space-5)]">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card reveal ${t.delay} bg-surface border border-surface-variant p-[var(--space-5)] flex flex-col`}
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <Stars />
              {/* Segment badge */}
              <div className="mb-[var(--space-4)]">
                <span
                  className="text-xs font-medium px-[var(--space-2)] py-[var(--space-1)]"
                  style={{
                    color: t.color,
                    backgroundColor: `color-mix(in srgb, ${t.color} 10%, transparent)`,
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  {dict.testimonials[i].segment}
                </span>
              </div>
              <p className="text-on-surface text-sm leading-relaxed flex-1 mb-[var(--space-5)]">
                &ldquo;{dict.testimonials[i].quote}&rdquo;
              </p>
              <div className="flex items-center gap-[var(--space-3)]">
                <div
                  className="w-9 h-9 flex items-center justify-center text-on-primary text-sm font-bold shrink-0"
                  style={{
                    backgroundColor: t.color,
                    borderRadius: "var(--radius-xl)",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface leading-none mb-0.5">
                    {t.name}
                  </p>
                  <p className="text-xs text-on-surface-variant">{dict.testimonials[i].role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-segment findings */}
        <div
          className="mt-[var(--space-8)] bg-surface border border-surface-variant p-[var(--space-5)]"
          style={{ borderRadius: "var(--radius-lg)" }}
        >
          <p className="text-on-surface-variant text-xs uppercase tracking-[0.1em] font-medium mb-[var(--space-5)]">
            {dict.findingsTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-5)]">
            {dict.findings.map((text, i) => (
              <div key={i} className="flex items-start gap-[var(--space-3)]">
                <p
                  className="font-display font-bold text-[22px] leading-none shrink-0"
                  style={{ color: FINDING_COLORS[i] }}
                >
                  {dict.findingsValue}
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tone of voice */}
        <div className="mt-[var(--space-8)] border-t border-surface-variant pt-[var(--space-8)]">
          <p className="text-on-surface-variant text-xs uppercase tracking-[0.1em] font-medium mb-[var(--space-5)]">
            {dict.toneTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-3)]">
            {tone.map((msg, i) => (
              <div
                key={msg}
                className="flex items-start gap-[var(--space-3)] py-[var(--space-3)] px-[var(--space-4)] bg-surface border-l-[3px]"
                style={{ borderColor: TONE_COLORS[i], borderRadius: "var(--radius-lg)" }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  style={{ backgroundColor: TONE_COLORS[i] }}
                />
                <p className="text-on-surface text-sm leading-relaxed">
                  &ldquo;{msg}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
